"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Gavel,
    ArrowRight,
    MessageSquare,
    PhoneIncoming,
    Clock,
    CheckCircle2,
    AlertCircle,
    UserCircle,
    Building2,
    ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const activeDisputes = [
    {
        id: "dsp-001",
        title: "Duplicate Charge: Spotify Premium",
        company: "Spotify Inc.",
        amount: "$12.00",
        status: "Negotiating",
        lastActivity: "AI Agent called support at 10:14 AM",
        type: "Billing Error",
        priority: "Medium"
    },
    {
        id: "dsp-002",
        title: "Medical Billing Error",
        company: "St. Jude Hospital",
        amount: "$1,420.00",
        status: "Evidence Review",
        lastActivity: "Drafting dispute letter based on insurance policy",
        type: "Overcharge",
        priority: "High"
    },
    {
        id: "dsp-003",
        title: "Unrecognized Bank Fee",
        company: "Chase Bank",
        amount: "$35.00",
        status: "Waiting for Response",
        lastActivity: "Formal request for fee reversal sent yesterday",
        type: "Fee Dispute",
        priority: "Low"
    }
];

export default function DisputeTrackerPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">Dispute Tracker</h1>
                    <p className="text-muted-foreground mt-1 flex items-center gap-2">
                        <Gavel className="w-4 h-4" />
                        Your AI Agent is currently managing {activeDisputes.length} active disputes.
                    </p>
                </div>
                <Button className="gap-2 shadow-md">
                    <AlertCircle className="w-4 h-4" /> Report New Issue
                </Button>
            </div>

            {/* Live Agent Activity Feed (The "Action" Signal) */}
            <Card className="border-primary/20 bg-primary/5 shadow-none overflow-hidden">
                <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                                <PhoneIncoming className="w-5 h-5 animate-bounce" />
                            </div>
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-primary uppercase tracking-widest leading-none mb-1">Live Agent Action</p>
                            <p className="text-sm font-medium text-slate-700">AI is currently on a 4-minute call with <b>Verizon</b> regarding "Hidden Surcharge".</p>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" className="bg-white/50 backdrop-blur-sm border-primary/20 text-primary font-bold">Monitor Voice Log</Button>
                </CardContent>
            </Card>

            <div className="grid gap-6">
                {activeDisputes.map((dispute) => (
                    <Card key={dispute.id} className="border-border/60 hover:border-primary/20 transition-all overflow-hidden bg-card">
                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
                                <Building2 className="w-6 h-6 text-slate-500" />
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-bold text-primary">{dispute.title}</h3>
                                        <Badge variant="outline" className={cn(
                                            "text-[10px] font-bold uppercase",
                                            dispute.priority === "High" ? "border-red-200 bg-red-50 text-red-700" : "border-slate-200"
                                        )}>
                                            {dispute.priority} Priority
                                        </Badge>
                                    </div>
                                    <div className="text-2xl font-black tracking-tight text-slate-900">{dispute.amount}</div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-y border-border/40">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Entity</p>
                                        <p className="text-sm font-semibold">{dispute.company}</p>
                                    </div>
                                    <div className="space-y-1 text-center md:text-left">
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Type</p>
                                        <p className="text-sm font-semibold">{dispute.type}</p>
                                    </div>
                                    <div className="space-y-1 text-right md:text-left">
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Current Status</p>
                                        <div className="flex items-center gap-2 justify-end md:justify-start">
                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                            <p className="text-sm font-bold text-primary">{dispute.status}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
                                    <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 w-full md:w-auto">
                                        <MessageSquare className="w-4 h-4 text-primary" />
                                        <span className="font-medium italic">"{dispute.lastActivity}"</span>
                                    </div>
                                    <div className="flex gap-2 w-full md:w-auto">
                                        <Button variant="outline" className="flex-1 md:flex-none">Upload Evidence</Button>
                                        <Button className="flex-1 md:flex-none">Full Case View</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Resolved Feed */}
            <div className="pt-8 opacity-60 hover:opacity-100 transition-opacity">
                <h3 className="text-lg font-bold text-slate-400 mb-6 flex items-center gap-2 uppercase tracking-widest text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Autonomous Wins (Resolved)
                </h3>
                <div className="space-y-3">
                    <div className="p-4 rounded-xl border border-dashed border-border bg-card flex justify-between items-center text-sm">
                        <div className="flex items-center gap-4">
                            <ShieldCheck className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-slate-700">Internet Surcharge Reversal (Xfinity)</span>
                        </div>
                        <span className="font-bold text-green-600">+$24.50</span>
                    </div>
                    <div className="p-4 rounded-xl border border-dashed border-border bg-card flex justify-between items-center text-sm">
                        <div className="flex items-center gap-4">
                            <ShieldCheck className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-slate-700">Gym Membership Late Fee Waiver</span>
                        </div>
                        <span className="font-bold text-green-600">+$15.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
