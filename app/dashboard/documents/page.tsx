"use client";

import { useEffect, useState } from "react";
import { DocumentCard } from "@/components/documents/DocumentCard";
import { Button } from "@/components/ui/button";
import { Plus, Filter, FileText, Loader2 } from "lucide-react";
import Link from "next/link";

export default function DocumentsPage() {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3001/api";
                const response = await fetch(`${apiUrl}/documents`);
                if (response.ok) {
                    const data = await response.json();
                    setDocuments(data);
                }
            } catch (error) {
                console.error("Failed to fetch documents:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, []);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Documents</h2>
                    <p className="text-muted-foreground">Manage your analyzed files and contracts.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                    <Link href="/dashboard/documents/upload">
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Upload New
                        </Button>
                    </Link>
                </div>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-24">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                    <p className="text-muted-foreground">Loading documents...</p>
                </div>
            ) : documents.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg bg-muted/20">
                    <div className="p-4 bg-muted rounded-full mb-4">
                        <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium">No documents yet</h3>
                    <p className="text-muted-foreground mb-4">Upload a contract or bill to get started.</p>
                    <Link href="/dashboard/documents/upload">
                        <Button>Upload First Document</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {documents.map((doc: any) => (
                        <DocumentCard key={doc.id} document={{
                            id: doc.id,
                            name: doc.fileName,
                            type: doc.documentType || "Unknown",
                            uploadDate: doc.createdAt,
                            expiryDate: doc.expiryDate,
                            status: doc.analyzed ? "analyzed" : "pending",
                            riskLevel: doc.riskLevel || "low",
                            size: `${(doc.fileSize / 1024 / 1024).toFixed(1)} MB`
                        }} />
                    ))}
                </div>
            )}
        </div>
    );
}
