"use client";

import { useState, useRef } from "react";
import { Upload, X, FileText, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface DocumentUploaderProps {
    onUploadSuccess?: (document: any) => void;
}

export function DocumentUploader({ onUploadSuccess }: DocumentUploaderProps) {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndSetFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            validateAndSetFile(e.target.files[0]);
        }
    };

    const validateAndSetFile = (file: File) => {
        const validTypes = ["application/pdf", "image/jpeg", "image/png", "text/plain"];
        if (!validTypes.includes(file.type)) {
            toast.error("Invalid file type. Please upload a PDF, Image, or Text file.");
            return;
        }
        if (file.size > 10 * 1024 * 1024) {
            toast.error("File is too large. Max size is 10MB.");
            return;
        }
        setFile(file);
    };

    const clearFile = () => {
        setFile(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3001/api";
            // Note: We're adding a dummy auth header since real auth isn't implemented yet
            const response = await fetch(`${apiUrl}/documents/upload`, {
                method: "POST",
                body: formData,
                headers: {
                    // "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Upload failed");
            }

            const document = await response.json();

            toast.success("Document uploaded! AI analysis started.");
            if (onUploadSuccess) {
                onUploadSuccess(document);
            }
            clearFile();
        } catch (error: any) {
            console.error("Upload error:", error);
            toast.error(error.message || "Upload failed. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div
                className={cn(
                    "relative border-2 border-dashed rounded-xl p-8 transition-all text-center space-y-4",
                    dragActive
                        ? "border-primary bg-primary/5"
                        : "border-muted-foreground/20 hover:border-primary/50 hover:bg-muted/5",
                    file && "border-green-500/50 bg-green-500/5"
                )}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png,.txt"
                    onChange={handleChange}
                />

                {!file ? (
                    <>
                        <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <Upload className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-lg font-medium">Click to upload or drag and drop</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                PDF, PNG, JPG or TXT (MAX. 10MB)
                            </p>
                        </div>
                        <Button variant="outline" onClick={() => inputRef.current?.click()}>
                            Select File
                        </Button>
                    </>
                ) : (
                    <div className="flex items-center justify-between bg-background border border-border p-4 rounded-lg">
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-blue-500/10 rounded">
                                <FileText className="w-8 h-8 text-blue-500" />
                            </div>
                            <div className="text-left">
                                <p className="font-medium truncate max-w-[200px]">{file.name}</p>
                                <p className="text-xs text-muted-foreground">
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={clearFile}
                            disabled={uploading}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                )}
            </div>

            {file && (
                <div className="mt-4 flex justify-end">
                    <Button onClick={handleUpload} disabled={uploading}>
                        {uploading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Analyzing...
                            </>
                        ) : (
                            <>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Process Document
                            </>
                        )}
                    </Button>
                </div>
            )}
        </div>
    );
}
