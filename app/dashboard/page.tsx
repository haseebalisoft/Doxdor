import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    FileText,
    Calendar,
    AlertTriangle,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    TrendingUp,
    Activity,
    Bell
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header / Greetings */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">Life Status Overview</h1>
                    <p className="text-muted-foreground mt-1">
                        Your administrative health is <span className="text-green-600 font-medium">Excellent</span>. No critical risks found.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Link href="/dashboard/documents/upload">
                        <Button variant="outline" className="gap-2">
                            <FileText className="w-4 h-4" /> Log Document
                        </Button>
                    </Link>
                    <Link href="/dashboard/life-audit">
                        <Button className="gap-2 shadow-sm">
                            <Activity className="w-4 h-4" /> Run Health Check
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Life Health Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Financial Health */}
                <Card className="border-border/60 shadow-sm hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Financial Security</CardTitle>
                        <TrendingUp className="w-4 h-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-primary">94%</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Subscriptions optimized. No late fees predicted.
                        </p>
                        <div className="w-full bg-secondary h-1.5 rounded-full mt-3 overflow-hidden">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: '94%' }}></div>
                        </div>
                    </CardContent>
                </Card>

                {/* Document Readiness */}
                <Card className="border-border/60 shadow-sm hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Document Readiness</CardTitle>
                        <FileText className="w-4 h-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-primary">85%</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Passport expires in 8 months. Prepare renewal soon.
                        </p>
                        <div className="w-full bg-secondary h-1.5 rounded-full mt-3 overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                    </CardContent>
                </Card>

                {/* Bureaucracy Shield */}
                <Card className="border-border/60 shadow-sm hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Bureaucracy Shield</CardTitle>
                        <ShieldCheck className="w-4 h-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-primary">100%</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            All legal obligations met. No pending fines.
                        </p>
                        <div className="w-full bg-secondary h-1.5 rounded-full mt-3 overflow-hidden">
                            <div className="bg-purple-500 h-full rounded-full" style={{ width: '100%' }}></div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Split View: Handled vs Needs Attention */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Needs Attention (Priority) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight text-primary flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        Requires Attention
                    </h3>
                    <Card className="border-l-4 border-l-amber-500 shadow-sm overflow-hidden">
                        <div className="p-4 flex items-start gap-4">
                            <div className="p-2 bg-amber-50 rounded-lg text-amber-600 shrink-0">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div className="space-y-1 w-full">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-semibold text-primary">Car Insurance Renewal</h4>
                                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Urgent</span>
                                </div>
                                <p className="text-sm text-muted-foreground">Expires in 7 days. Auto-renewal is ON at $1,200/yr.</p>
                                <div className="flex gap-2 mt-3">
                                    <Button size="sm" variant="default" className="h-8 text-xs bg-amber-600 hover:bg-amber-700 text-white border-0">Shop Cheaper Rates</Button>
                                    <Button size="sm" variant="ghost" className="h-8 text-xs">Dismiss</Button>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="border-l-4 border-l-blue-500 shadow-sm overflow-hidden">
                        <div className="p-4 flex items-start gap-4">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div className="space-y-1 w-full">
                                <h4 className="font-semibold text-primary">Upload 2024 Tax Return</h4>
                                <p className="text-sm text-muted-foreground">Required for your mortgage pre-approval status.</p>
                                <Button size="sm" variant="secondary" className="h-8 text-xs mt-3">Upload PDF</Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* What We Handled (Peace of Mind) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight text-primary flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Handled for You
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                            <div className="p-2 bg-green-50 rounded-full text-green-700 shrink-0">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary">Gym Membership Cancelled</p>
                                <p className="text-xs text-muted-foreground">Saved $45/month. Confirmation #88291.</p>
                            </div>
                            <span className="text-xs text-muted-foreground">Today</span>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                            <div className="p-2 bg-green-50 rounded-full text-green-700 shrink-0">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary">Lease Auto-Signed</p>
                                <p className="text-xs text-muted-foreground">Renewal for 12 months approved as per your rules.</p>
                            </div>
                            <span className="text-xs text-muted-foreground">Yesterday</span>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                            <div className="p-2 bg-green-50 rounded-full text-green-700 shrink-0">
                                <Bell className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary">Electricity Bill Paid</p>
                                <p className="text-xs text-muted-foreground">Auto-pay executed ($124.50).</p>
                            </div>
                            <span className="text-xs text-muted-foreground">2 days ago</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Quick Access */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border/60">
                <Link href="/dashboard/documents" className="block h-full">
                    <Card className="h-full hover:shadow-md transition-all cursor-pointer border-border/60 hover:border-primary/20 group">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base group-hover:text-primary transition-colors">
                                <FileText className="w-5 h-5 text-blue-500" /> Document Vault
                            </CardTitle>
                            <CardDescription>
                                14 Active Documents. 2 Expiring soon.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href="/dashboard/subscriptions" className="block h-full">
                    <Card className="h-full hover:shadow-md transition-all cursor-pointer border-border/60 hover:border-primary/20 group">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base group-hover:text-primary transition-colors">
                                <TrendingUp className="w-5 h-5 text-green-500" /> Subscriptions
                            </CardTitle>
                            <CardDescription>
                                $420/mo total. 1 Risk Detected.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <div className="block h-full pointer-events-none opacity-50">
                    <Card className="h-full border-border/60 border-dashed bg-secondary/10">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base text-muted-foreground">
                                <Bell className="w-5 h-5" /> Family Alerts
                            </CardTitle>
                            <CardDescription>
                                Coming soon in Master Plan.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    );
}
