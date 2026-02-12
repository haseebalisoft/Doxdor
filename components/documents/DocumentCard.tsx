import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, AlertTriangle, Eye, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Mock generic formatDate if not available, or assume it imports correctly.
// Ideally I should check lib/utils but for design I can just use a local helper or keep import.
import { formatDate } from "@/lib/utils";

interface Document {
    id: string;
    name: string;
    type: string;
    uploadDate: string;
    expiryDate?: string;
    status: "analyzed" | "pending" | "failed";
    riskLevel: "low" | "medium" | "high" | "critical";
    size: string;
}

interface DocumentCardProps {
    document: Document;
}

export function DocumentCard({ document }: DocumentCardProps) {
    // Premium Risk Colors
    const getRiskStyles = (level: string) => {
        switch (level) {
            case "critical": return "bg-red-50 text-red-700 border-red-200";
            case "high": return "bg-orange-50 text-orange-700 border-orange-200";
            case "medium": return "bg-amber-50 text-amber-700 border-amber-200";
            default: return "bg-slate-50 text-slate-600 border-slate-200";
        }
    };

    return (
        <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-border/60 hover:border-primary/20 bg-card">

            {/* Top Status Bar */}
            <div className={`absolute top-0 left-0 w-1 h-full ${document.riskLevel === 'critical' ? 'bg-red-500' :
                    document.riskLevel === 'high' ? 'bg-orange-500' : 'bg-transparent'
                }`} />

            <CardHeader className="pb-3 pt-5 px-5">
                <div className="flex justify-between items-start mb-2">
                    <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                        document.type === "Contract" ? "bg-blue-50 text-blue-600" :
                            document.type === "ID" ? "bg-purple-50 text-purple-600" :
                                "bg-slate-50 text-slate-600"
                    )}>
                        <FileText className="w-5 h-5" />
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 text-muted-foreground">
                        <MoreHorizontal className="w-4 h-4" />
                    </Button>
                </div>

                <h3 className="font-semibold text-lg text-foreground leading-tight truncate pr-2" title={document.name}>
                    {document.name}
                </h3>
                <p className="text-sm text-muted-foreground">{document.type} • {document.size}</p>
            </CardHeader>

            <CardContent className="px-5 pb-4 space-y-3">
                {/* Risk Badge */}
                {document.riskLevel && document.riskLevel !== "low" && (
                    <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border", getRiskStyles(document.riskLevel))}>
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {document.riskLevel === 'critical' ? 'Critical Risk Detected' :
                            document.riskLevel === 'high' ? 'High Risk Factor' : 'Medium Risk'}
                    </div>
                )}

                {/* Dates */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>Expires: <span className={cn(
                        "font-medium",
                        new Date(document.expiryDate || "").getTime() < new Date().getTime() + 30 * 24 * 60 * 60 * 1000 ? "text-amber-600" : "text-foreground"
                    )}>
                        {document.expiryDate ? formatDate(document.expiryDate) : "N/A"}
                    </span></span>
                </div>
            </CardContent>

            <CardFooter className="px-5 pb-5 pt-0">
                <Link href={`/dashboard/documents/${document.id}`} className="w-full">
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium shadow-none border border-border/50">
                        <Eye className="w-4 h-4 mr-2" /> View Analysis
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
