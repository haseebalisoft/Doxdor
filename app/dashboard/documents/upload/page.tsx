"use client";

import { DocumentUploader } from "@/components/documents/DocumentUploader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UploadPage() {
    const router = useRouter();

    const handleUploadSuccess = () => {
        // Navigate back to documents list after short delay
        setTimeout(() => {
            router.push("/dashboard/documents");
        }, 1500);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/documents">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Upload Document</h2>
                    <p className="text-muted-foreground">AI will analyze it for risks and deadlines.</p>
                </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
                <DocumentUploader onUploadSuccess={handleUploadSuccess} />
            </div>

            <div className="prose dark:prose-invert max-w-none">
                <h3>Supported Files</h3>
                <ul>
                    <li><strong>Contracts & Leases:</strong> PDF or Scanned Images</li>
                    <li><strong>IDs & Licenses:</strong> JPEG/PNG Photos</li>
                    <li><strong>Bills & Invoices:</strong> PDF Statements</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                    Your documents are encrypted and stored securely. Only you have access.
                </p>
            </div>
        </div>
    );
}
