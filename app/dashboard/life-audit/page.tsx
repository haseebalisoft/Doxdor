"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Download,
    Share2,
    TrendingUp,
    ShieldCheck,
    Wallet,
    Scale,
    ArrowUpRight,
    ArrowDownRight,
    CheckCircle2,
    Calendar,
    FileText,
    Zap,
    ChevronRight,
    Star
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function LifeAuditPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header / Executive Summary */}
            <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-48 bg-primary/20 rounded-full blur-[100px] -mr-24 -mt-24 animate-pulse"></div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Badge className="bg-primary/20 hover:bg-primary/20 text-primary border-primary/30 px-3 py-1 text-xs font-bold uppercase tracking-widest">February 2026 Audit</Badge>
                            <div className="flex items-center gap-1 text-amber-400">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-sm font-bold">Elite Performance</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            Your agent saved you <br />
                            <span className="text-primary font-black">$462.40 this month.</span>
                        </h1>
                        <p className="text-slate-400 max-w-lg text-lg">
                            The radar detected 4 money leaks, prevented 2 contract traps, and successfully resolved a medical billing dispute autonomously.
                        </p>
                    </div>

                    <div className="w-full md:w-auto flex flex-col gap-3">
                        <Button className="h-14 px-8 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 font-bold gap-2 text-base shadow-xl group">
                            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            Download PDF Master Report
                        </Button>
                        <Button variant="outline" className="h-14 px-8 rounded-2xl border-white/20 text-white hover:bg-white/5 font-bold gap-2 text-base">
                            <Share2 className="w-5 h-5" />
                            Share with Family
                        </Button>
                    </div>
                </div>

                {/* Score Grid Overlay */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10 uppercase tracking-tighter">
                    <div>
                        <p className="text-slate-500 text-[10px] font-bold">Total Savings</p>
                        <p className="text-2xl font-black">$462.40</p>
                    </div>
                    <div>
                        <p className="text-slate-500 text-[10px] font-bold">Risks Neutralized</p>
                        <p className="text-2xl font-black">12</p>
                    </div>
                    <div>
                        <p className="text-slate-500 text-[10px] font-bold">Hours Reclaimed</p>
                        <p className="text-2xl font-black">14.5 hrs</p>
                    </div>
                    <div>
                        <p className="text-slate-500 text-[10px] font-bold">Bureaucracy Health</p>
                        <p className="text-2xl font-black text-green-400">Optimal</p>
                    </div>
                </div>
            </div>

            {/* Deep Dive Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Money Leaks Detail */}
                <Card className="lg:col-span-2 border-border/60 shadow-lg shadow-primary/5 rounded-3xl overflow-hidden">
                    <CardHeader className="bg-slate-50 p-8 border-b border-border/50">
                        <div className="flex justify-between items-center">
                            <div className="space-y-1">
                                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                    <Wallet className="w-6 h-6 text-green-600" /> Financial Defense
                                </CardTitle>
                                <CardDescription>How the agent protected your wallet this month.</CardDescription>
                            </div>
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">+$312.00 from optimization</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y border-border/40">
                            {[
                                { title: "Hulu Ad-Lite Optimization", description: "Agent switched plan due to under-usage detected in TV logic.", saved: "$8.00/mo", icon: CheckCircle2, type: "Plan Resize" },
                                { title: "Adobe Cloud 7-Day Trial", description: "Autonomous cancellation executed before $54.00 billing cycle.", saved: "$54.00", icon: Zap, type: "Auto-Cancel" },
                                { title: "Xfinity Surcharge Dispute", description: "Agent successfully negotiated removal of 'Speed Fee' via Voice AI.", saved: "$240.00/yr", icon: Scale, type: "Negotiation" },
                                { title: "Gym Membership Late Fee", description: "Automatic waiver request approved based on 'Loyalty Rule'.", saved: "$10.00", icon: CheckCircle2, type: "Waiver" },
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 md:p-8 flex justify-between items-center hover:bg-slate-50/50 transition-colors">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary group">
                                            <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1.5">{item.type}</p>
                                            <p className="text-lg font-bold text-primary">{item.title}</p>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Impact</p>
                                        <p className="text-xl font-black text-green-600">+{item.saved}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-8 bg-slate-50/50 border-t border-border/50 flex justify-center">
                            <Button variant="link" className="text-primary font-bold gap-2">
                                View all 14 optimizations <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Right Column: Radar & System Health */}
                <div className="space-y-8">

                    {/* Bureaucracy Coverage */}
                    <Card className="border-border/60 shadow-lg rounded-3xl overflow-hidden">
                        <CardHeader className="p-8">
                            <CardTitle className="text-lg font-bold flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-blue-600" /> System Coverage
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-8 pb-8 space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm font-bold">
                                    <span className="text-slate-600">Document Intelligence</span>
                                    <span className="text-primary">98%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full rounded-full" style={{ width: '98%' }}></div>
                                </div>
                                <p className="text-[10px] text-muted-foreground italic">143 docs analyzed this month.</p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm font-bold">
                                    <span className="text-slate-600">Financial Vigilance</span>
                                    <span className="text-primary">85%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-green-500 h-full rounded-full" style={{ width: '85%' }}></div>
                                </div>
                                <p className="text-[10px] text-muted-foreground italic">Waiting for Amazon billing link.</p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm font-bold">
                                    <span className="text-slate-600">State & Gov Compliance</span>
                                    <span className="text-primary">100%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-blue-600 h-full rounded-full" style={{ width: '100%' }}></div>
                                </div>
                                <p className="text-[10px] text-muted-foreground italic">Driver license renewal radar is active.</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Pending Action Highlight */}
                    <Card className="border-amber-200 bg-amber-50 shadow-xl rounded-3xl relative overflow-hidden group border-2">
                        <div className="absolute top-0 right-0 p-12 bg-amber-100 rounded-full blur-2xl -mr-8 -mt-8 opacity-50"></div>
                        <CardHeader className="p-8 pb-4 relative z-10">
                            <CardTitle className="text-lg font-bold flex items-center gap-2 text-amber-900">
                                <ArrowUpRight className="w-5 h-5 text-amber-600 animate-bounce" /> Attention Required
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 pt-0 relative z-10 space-y-4">
                            <p className="text-sm font-medium text-amber-800 leading-relaxed">
                                Passport renewal window has opened. Your current passport expires in 7 months. Agent recommends starting renewal today to avoid expedited fees.
                            </p>
                            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold h-12 rounded-2xl shadow-lg shadow-amber-600/20">
                                Start Renewal Assistant
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Agent Performance Rating */}
                    <div className="p-8 rounded-[2rem] border border-border/40 bg-card text-center space-y-2">
                        <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Agent Happiness</p>
                        <div className="flex justify-center gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <p className="text-sm font-bold pt-2">"Excellent coverage. No blind spots found."</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
