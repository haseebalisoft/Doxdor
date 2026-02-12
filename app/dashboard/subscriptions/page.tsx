"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    CreditCard,
    AlertTriangle,
    TrendingUp,
    Trash2,
    Zap,
    Clock,
    ArrowUpRight,
    ArrowDownRight,
    Search,
    Filter,
    ArrowRight,
    CheckCircle2,
    ShieldAlert
} from "lucide-react";
import { cn } from "@/lib/utils";

const leaks = [
    {
        id: "sub-001",
        name: "Netflix Premium",
        amount: "$19.99/mo",
        usage: "High (24 hrs/mo)",
        status: "Safe",
        nextBill: "Feb 22, 2026",
        icon: CreditCard,
        risk: "None"
    },
    {
        id: "sub-002",
        name: "Aura Home Security",
        amount: "$24.50/mo",
        usage: "Critical Infrastructure",
        status: "Safe",
        nextBill: "Mar 01, 2026",
        icon: CreditCard,
        risk: "None"
    },
    {
        id: "sub-003",
        name: "Adobe Creative Cloud",
        amount: "$54.99/mo",
        usage: "Zero Usage (4 weeks)",
        status: "Candidate for Cancellation",
        nextBill: "Feb 18, 2026",
        icon: AlertTriangle,
        risk: "High",
        action: "Agent to Cancel"
    },
    {
        id: "sub-004",
        name: "Smart Fit trial",
        amount: "$0.00",
        usage: "Trial Window",
        status: "Expires in 2 days",
        nextBill: "Feb 15, 2026",
        icon: Zap,
        risk: "Urgent",
        action: "Auto-Cancel Trial"
    }
];

export default function SubscriptionsPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header / Spend Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 bg-slate-950 text-white border-0 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between min-h-[300px] shadow-2xl">
                    <div className="absolute top-0 right-0 p-32 bg-primary/20 rounded-full blur-[80px] -mr-16 -mt-16"></div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
                        <div className="space-y-4">
                            <Badge className="bg-white/10 hover:bg-white/10 text-white border-white/20 px-3 py-1 font-bold tracking-widest uppercase text-[10px]">Financial Health</Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
                                $242.10 <br />
                                <span className="text-xl md:text-2xl text-slate-400 font-bold uppercase tracking-widest">Monthly Leakage</span>
                            </h2>
                        </div>
                        <div className="space-y-2 text-right">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Savings Potential</p>
                            <p className="text-3xl font-black text-green-400">+$654.50/yr</p>
                            <Button size="sm" variant="outline" className="h-10 px-6 rounded-xl border-white/20 text-white hover:bg-white/5 font-bold gap-2 text-xs uppercase tracking-widest mt-2">
                                <Search className="w-3.5 h-3.5" /> Force Deep Audit
                            </Button>
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-3 gap-4 pt-10 border-t border-white/10 mt-10">
                        <div>
                            <p className="text-slate-500 font-bold text-[10px] tracking-widest uppercase">Active Subs</p>
                            <p className="text-xl font-black">14</p>
                        </div>
                        <div>
                            <p className="text-slate-500 font-bold text-[10px] tracking-widest uppercase">Price Hikes</p>
                            <p className="text-xl font-black text-amber-400">1 Detected</p>
                        </div>
                        <div>
                            <p className="text-slate-500 font-bold text-[10px] tracking-widest uppercase">Auto-Shield</p>
                            <p className="text-xl font-black text-green-400">Active</p>
                        </div>
                    </div>
                </Card>

                {/* Agent Proactive Action Card */}
                <Card className="border-border/60 shadow-lg rounded-[2.5rem] p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 bg-primary/5 rounded-full blur-2xl -mr-6 -mt-6"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between gap-6">
                        <div className="space-y-4">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Zap className="w-7 h-7 fill-primary" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-black text-primary tracking-tight">Active Trial Radar</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                    Agent will automatically close the <b>Adobe</b> trial 24 hours before you are billed. <b>$54.99</b> will be protected.
                                </p>
                            </div>
                        </div>
                        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl text-xs uppercase tracking-widest shadow-xl">
                            Configure Trial Guard
                        </Button>
                    </div>
                </Card>
            </div>

            {/* Subscriptions List */}
            <div className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-amber-500" />
                        Detected Recurring Services
                    </h3>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2 rounded-xl text-xs font-bold"><Filter className="w-3.5 h-3.5" /> Filter</Button>
                        <Button variant="outline" size="sm" className="gap-2 rounded-xl text-xs font-bold"><ArrowUpRight className="w-3.5 h-3.5" /> Export Logs</Button>
                    </div>
                </div>

                <div className="grid gap-4">
                    {leaks.map((item) => (
                        <Card key={item.id} className={cn(
                            "group border-border/60 hover:shadow-xl transition-all overflow-hidden",
                            item.risk === "Urgent" ? "bg-amber-50/30 border-amber-200" : "bg-card"
                        )}>
                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className={cn(
                                    "w-14 h-14 rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-inner",
                                    item.risk === "Urgent" ? "bg-amber-100 text-amber-600" : "bg-slate-100 text-slate-500"
                                )}>
                                    <item.icon className="w-6 h-6" />
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-xl font-black text-primary uppercase tracking-tight">{item.name}</h4>
                                                {item.risk === "High" && (
                                                    <Badge className="bg-red-100 text-red-700 hover:bg-red-100 border-red-200 text-[9px] uppercase font-black">Risk: Unused</Badge>
                                                )}
                                                {item.risk === "Urgent" && (
                                                    <Badge className="bg-amber-500 text-white hover:bg-amber-500 border-0 text-[9px] uppercase font-black animate-pulse">Action Required</Badge>
                                                )}
                                            </div>
                                            <p className="text-sm font-semibold text-slate-500">Usage: <span className={cn(item.usage.includes("Zero") ? "text-red-600 font-bold" : "text-slate-800")}>{item.usage}</span></p>
                                        </div>
                                        <div className="text-right flex items-center gap-6">
                                            <div>
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Monthly Cost</p>
                                                <p className="text-2xl font-black text-primary">{item.amount}</p>
                                            </div>
                                            {item.action ? (
                                                <Button size="sm" className={cn(
                                                    "h-10 px-6 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg",
                                                    item.risk === "Urgent" ? "bg-amber-600 hover:bg-amber-700 shadow-amber-600/20" : "bg-primary hover:bg-primary/90"
                                                )}>
                                                    {item.action} <ArrowRight className="w-3.5 h-3.5 ml-2" />
                                                </Button>
                                            ) : (
                                                <Button variant="outline" size="icon" className="h-10 w-10 rounded-xl group-hover:bg-slate-50 transition-colors">
                                                    <Trash2 className="w-4 h-4 text-slate-400 group-hover:text-red-500" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-6 pt-4 border-t border-border/40 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3 h-3" /> Next Bill: {item.nextBill}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ShieldAlert className="w-3 h-3" /> Status: {item.status}
                                        </div>
                                        <div className="flex items-center gap-2 text-green-600">
                                            <CheckCircle2 className="w-3 h-3" /> Secure Pay Active
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
