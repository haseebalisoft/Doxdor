"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
    AlertTriangle,
    Calendar,
    FileText,
    Download,
    Share2,
    Trash2,
    Info,
    CheckCircle2,
    ArrowLeft,
    Loader2
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DocumentDetailPage({ params }: { params: { id: string } }) {
    const [document, setDocument] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3001/api";
                const response = await fetch(`${apiUrl}/documents/${params.id}`);
                if (!response.ok) throw new Error("Document not found");
                const data = await response.json();
                setDocument(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDocument();
    }, [params.id]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-24 h-[60vh]">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">Analyzing document details...</p>
            </div>
        );
    }

    if (error || !document) {
        return (
            <div className="flex flex-col items-center justify-center py-24">
                <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold">Document Not Found</h3>
                <p className="text-muted-foreground mb-6">The document you are looking for does not exist or has been deleted.</p>
                <Link href="/dashboard/documents">
                    <Button>Return to Documents</Button>
                </Link>
            </div>
        );
    }

    const risks = Array.isArray(document.summaryJson?.detected_risks)
        ? document.summaryJson.detected_risks
        : [];

    const keyTerms = document.summaryJson?.key_information || [];

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">

            {/* Breadcrumb / Back Navigation */}
            <div>
                <Link href="/dashboard/documents" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Documents
                </Link>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-foreground">{document.fileName}</h1>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <Badge variant="outline" className="text-xs font-normal capitalize">
                                    {document.documentType || "Analyzing..."}
                                </Badge>
                                <span>•</span>
                                <span>Uploaded on {new Date(document.createdAt).toLocaleDateString()}</span>
                                <span>•</span>
                                <span>{(document.fileSize / 1024 / 1024).toFixed(1)} MB</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open(document.fileUrl, '_blank')}>
                            <Download className="w-4 h-4" /> View Original
                        </Button>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Analysis & Risks */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Executive Summary */}
                    <Card className="border-border/60 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                <Info className="w-5 h-5 text-blue-500" /> AI Executive Summary
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                {document.aiSummary || "The AI is currently processing this document. Please wait a few seconds and refresh."}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Risk Analysis Section */}
                    {risks.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-amber-500" /> Risk Analysis
                            </h3>
                            {risks.map((risk: any, index: number) => (
                                <Card key={index} className={cn(
                                    "border-l-4 shadow-sm overflow-hidden",
                                    risk.severity === "high" || risk.severity === "critical" ? "border-l-red-500 bg-red-50/10" : "border-l-amber-500 bg-amber-50/10"
                                )}>
                                    <h4 className={cn("font-semibold text-base mb-2 px-5 pt-5",
                                        risk.severity === "high" ? "text-red-700 dark:text-red-400" : "text-amber-700 dark:text-amber-400"
                                    )}>
                                        {risk.title}
                                    </h4>
                                    <CardContent className="p-5 pt-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <Badge variant={risk.severity === "high" ? "destructive" : "secondary"} className="uppercase text-[10px] tracking-wide">
                                                {risk.severity || "info"} Risk
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-foreground/80 mb-3">
                                            {risk.description}
                                        </p>
                                        {risk.clause && (
                                            <div className="bg-muted/50 p-3 rounded text-xs font-mono text-muted-foreground border border-border/50">
                                                "{risk.clause}"
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}

                    {/* Extracted Key Terms */}
                    {keyTerms.length > 0 && (
                        <Card className="border-border/60 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Extracted Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                                    {keyTerms.map((term: any, index: number) => (
                                        <div key={index} className="sm:col-span-1 border-b border-border/40 pb-2">
                                            <dt className="text-sm font-medium text-muted-foreground">{term.label || "Key Point"}</dt>
                                            <dd className="mt-1 text-sm text-foreground font-semibold">{term.value}</dd>
                                        </div>
                                    ))}
                                    {document.expiryDate && (
                                        <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-muted-foreground">Expires</dt>
                                            <dd className="mt-1 text-sm font-semibold text-amber-600 flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" /> {new Date(document.expiryDate).toLocaleDateString()}
                                            </dd>
                                        </div>
                                    )}
                                </dl>
                            </CardContent>
                        </Card>
                    )}

                </div>

                {/* Right Column: Actions & Meta */}
                <div className="space-y-6">

                    {/* Status Card */}
                    <Card className="bg-secondary/20 border-border/60 shadow-sm">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center",
                                    document.analyzed ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                                )}>
                                    {document.analyzed ? <CheckCircle2 className="w-5 h-5" /> : <Loader2 className="w-5 h-5 animate-spin" />}
                                </div>
                                <div>
                                    <div className="font-semibold">{document.analyzed ? "Analysis Complete" : "AI Analyzing..."}</div>
                                    <div className="text-xs text-muted-foreground">Processed by DoxRadar AI</div>
                                </div>
                            </div>
                            {document.confidenceScore && (
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Confidence Score</span>
                                        <span className="font-medium">{Math.round(document.confidenceScore * 100)}%</span>
                                    </div>
                                    <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-green-500 h-full rounded-full" style={{ width: `${document.confidenceScore * 100}%` }}></div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Suggested Actions */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider pl-1">Suggested Actions</h4>
                        {document.expiryDate && (
                            <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-900">
                                <Calendar className="w-4 h-4 mr-3 text-amber-600" />
                                <div className="flex-1">
                                    <div className="font-semibold text-sm">Set Reminder</div>
                                    <div className="text-xs opacity-80">Alert before {new Date(document.expiryDate).toLocaleDateString()}</div>
                                </div>
                            </Button>
                        )}
                        <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4">
                            <Share2 className="w-4 h-4 mr-3 text-muted-foreground" />
                            <div className="flex-1">
                                <div className="font-semibold text-sm">Secure Share</div>
                                <div className="text-xs text-muted-foreground">Generate encrypted access link</div>
                            </div>
                        </Button>
                    </div>

                    {/* Meta Info */}
                    <Card className="border-border/60 shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Technical Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Mime Type</span>
                                <span className="font-medium">{document.mimeType}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">File Size</span>
                                <span className="font-medium">{(document.fileSize / 1024).toFixed(0)} KB</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Internal ID</span>
                                <span className="font-mono text-[10px]">{document.id}</span>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}
