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
    Bell,
    Scale,
    Gavel,
    Home,
    AlertCircle
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header / Agent Status */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">Radar Status: Active</h1>
                    <p className="text-muted-foreground mt-1 flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                        Agent is monitoring 14 assets. All systems stable.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Link href="/dashboard/documents/upload">
                        <Button variant="outline" className="gap-2">
                            <FileText className="w-4 h-4" /> Log Document
                        </Button>
                    </Link>
                    <Link href="/dashboard/life-audit">
                        <Button className="gap-2 shadow-sm font-semibold">
                            <Activity className="w-4 h-4" /> Run Monthly Audit
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Tactical Heatmap / Life Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-border/60 shadow-sm hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Bureaucracy Health</CardTitle>
                        <ShieldCheck className="w-4 h-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-primary">94%</div>
                        <p className="text-xs text-muted-foreground mt-1 italic">
                            All critical IDs (Passport, DLC) are valid.
                        </p>
                        <div className="w-full bg-secondary h-1.5 rounded-full mt-3 overflow-hidden">
                            <div className="bg-primary h-full rounded-full" style={{ width: '94%' }}></div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/60 shadow-sm hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Financial Guard</CardTitle>
                        <TrendingUp className="w-4 h-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-primary">+$420</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Potential annual savings identified.
                        </p>
                        <div className="w-full bg-secondary h-1.5 rounded-full mt-3 overflow-hidden">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border/60 shadow-sm hover:shadow-md transition-all">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Disputes</CardTitle>
                        <Gavel className="w-4 h-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-primary">1</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Agent is contesting a duplicate charge.
                        </p>
                        <div className="w-full bg-secondary h-1.5 rounded-full mt-3 overflow-hidden">
                            <div className="bg-amber-500 h-full rounded-full" style={{ width: '30%' }}></div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Split View: Handled vs Needs Attention */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Agent Proactive Alerts (Needs Attention) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight text-primary flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500" />
                        Radar Alerts (Needs You)
                    </h3>
                    <div className="space-y-3">
                        <Card className="border-l-4 border-l-amber-500 shadow-sm overflow-hidden bg-amber-50/10">
                            <div className="p-4 flex items-start gap-4">
                                <div className="p-2 bg-amber-50 rounded-lg text-amber-600 shrink-0">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div className="space-y-1 w-full">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-semibold text-primary">Car Insurance Renewal</h4>
                                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-widest">7 Days Left</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Current Rate: $1,200/yr. Agent found a match for <span className="text-green-600 font-bold">$1,050</span>.</p>
                                    <div className="flex gap-2 mt-3">
                                        <Button size="sm" className="h-8 text-xs bg-primary hover:bg-primary/90">Switch & Save $150</Button>
                                        <Button size="sm" variant="ghost" className="h-8 text-xs">Keep Current</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="border-l-4 border-l-blue-500 shadow-sm overflow-hidden">
                            <div className="p-4 flex items-start gap-4">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                    <Home className="w-5 h-5" />
                                </div>
                                <div className="space-y-1 w-full">
                                    <h4 className="font-semibold text-primary">Utility Bill Hike Detected</h4>
                                    <p className="text-sm text-muted-foreground">Electricity bill is 22% higher than last Feb. Possible leak or error.</p>
                                    <Button size="sm" variant="secondary" className="h-8 text-xs mt-3">Request Meter Audit</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Autonomous Activity (Peace of Mind) */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight text-primary flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-600" />
                        Agent Activity Log (Handled)
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                            <div className="p-2 bg-green-50 rounded-full text-green-700 shrink-0">
                                <Gavel className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary uppercase text-[10px] tracking-widest text-muted-foreground">Dispute Result</p>
                                <p className="text-[13px] font-semibold">Spotify Duplicate Charge Refunded</p>
                                <p className="text-xs text-green-600">Saved $12.00. Case closed successfully.</p>
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">Today</span>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm opacity-80">
                            <div className="p-2 bg-green-50 rounded-full text-green-700 shrink-0">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary uppercase text-[10px] tracking-widest text-muted-foreground">Auto-Optimization</p>
                                <p className="text-[13px] font-semibold">Adobe Trial Cancelled</p>
                                <p className="text-xs text-muted-foreground">Prevented $54.00 charge. Confirmation #99210.</p>
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">Yesterday</span>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm opacity-80">
                            <div className="p-2 bg-blue-50 rounded-full text-blue-700 shrink-0">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-primary uppercase text-[10px] tracking-widest text-muted-foreground">Compliance</p>
                                <p className="text-[13px] font-semibold">Tax Folder 2024 Finalized</p>
                                <p className="text-xs text-muted-foreground">Categorized 42 receipts for your CPA.</p>
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">2 Days Ago</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tactical Shortcuts */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 border-t border-border/60">
                <Link href="/dashboard/documents" className="block group">
                    <div className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all flex flex-col gap-3">
                        <FileText className="w-5 h-5 text-blue-500" />
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Vault</p>
                            <p className="text-sm font-semibold group-hover:text-primary transition-colors">14 Docs Secured</p>
                        </div>
                    </div>
                </Link>

                <Link href="/dashboard/subscriptions" className="block group">
                    <div className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all flex flex-col gap-3">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Money</p>
                            <p className="text-sm font-semibold group-hover:text-primary transition-colors">$420 Optimized</p>
                        </div>
                    </div>
                </Link>

                <Link href="/dashboard/deadlines" className="block group">
                    <div className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all flex flex-col gap-3">
                        <Calendar className="w-5 h-5 text-amber-500" />
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Radar</p>
                            <p className="text-sm font-semibold group-hover:text-primary transition-colors">2 Urgent Events</p>
                        </div>
                    </div>
                </Link>

                <div className="p-4 rounded-2xl bg-secondary/20 border border-dashed border-border/50 flex flex-col gap-3 grayscale opacity-60 cursor-not-allowed">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Family</p>
                        <p className="text-sm font-semibold">Master Access Only</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
