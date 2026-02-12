"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/Switch";
import {
    Settings,
    ShieldAlert,
    Bell,
    Wallet,
    Save,
    Zap,
    Scale,
    Trash2,
    Plus
} from "lucide-react";
import { useState } from "react";

export default function RulesPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">Agent Rules</h1>
                    <p className="text-muted-foreground mt-1">
                        Configure how your DoxRadar AI agent should manage your administrative life.
                    </p>
                </div>
                <Button className="gap-2 shadow-md">
                    <Save className="w-4 h-4" /> Save Configuration
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Proactivity Rules */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-border/60 shadow-sm overflow-hidden">
                        <CardHeader className="bg-slate-50 border-b border-border/50">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-amber-500" />
                                Protective Monitoring
                            </CardTitle>
                            <CardDescription>Rules for risk detection and preventive alerts.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y">
                                <div className="p-6 flex items-center justify-between gap-4">
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-semibold">Contract Risk Analysis</p>
                                        <p className="text-xs text-muted-foreground">Automatically scan every uploaded document for unfavorable clauses.</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="p-6 flex items-center justify-between gap-4">
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-semibold">Early Expiry Radar</p>
                                        <p className="text-xs text-muted-foreground">Warn me 60 days before any ID or critical contract expires.</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="p-6 flex items-center justify-between gap-4">
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-semibold">Government Portal Sync (Mock)</p>
                                        <p className="text-xs text-muted-foreground">Try to detect fines or traffic violations early.</p>
                                    </div>
                                    <Switch />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/60 shadow-sm overflow-hidden">
                        <CardHeader className="bg-slate-50 border-b border-border/50">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Wallet className="w-5 h-5 text-green-600" />
                                Financial Optimization
                            </CardTitle>
                            <CardDescription>Rules to prevent money leaks and overspending.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y">
                                <div className="p-6 flex items-center justify-between gap-4">
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-semibold">Zombie Subscription Detection</p>
                                        <p className="text-xs text-muted-foreground">Flag services that haven't been used for 3 consecutive months.</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="p-6 flex items-center justify-between gap-4">
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-semibold">Price Hike Patrol</p>
                                        <p className="text-xs text-muted-foreground">Alert if a recurring bill increases by more than 10%.</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="p-6 flex items-center justify-between gap-4">
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-semibold">Competitor Price Match</p>
                                        <p className="text-xs text-muted-foreground">Search for lower rates when insurance or utility bills are due.</p>
                                    </div>
                                    <Switch />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Active Rules List */}
                <div className="space-y-6">
                    <Card className="border-border/60 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Active Logic Hooks</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 space-y-2">
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-bold text-primary px-1.5 py-0.5 bg-primary/10 rounded">AUTO_CANCEL</span>
                                    <button className="text-muted-foreground hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></button>
                                </div>
                                <p className="text-sm font-medium">If 'Smart Fit' unused {">"} 6 weeks, notify cancel.</p>
                            </div>

                            <div className="p-3 rounded-lg bg-orange-50 border border-orange-100 space-y-2">
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-bold text-orange-600 px-1.5 py-0.5 bg-orange-100 rounded">RENEWAL_BLOCK</span>
                                    <button className="text-muted-foreground hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></button>
                                </div>
                                <p className="text-sm font-medium">Prevent auto-renewal on 'Adobe' without manual approval.</p>
                            </div>

                            <Button variant="outline" className="w-full border-dashed gap-2 group hover:border-primary hover:text-primary transition-all">
                                <Plus className="w-4 h-4 group-hover:scale-125 transition-transform" /> Add Custom Rule
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-900 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 bg-white/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                        <CardContent className="p-6 relative z-10 space-y-4">
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
                                <span className="font-bold tracking-tight">Agent Performance</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-slate-400">
                                    <span>Rules Processing</span>
                                    <span>Active</span>
                                </div>
                                <div className="w-full bg-slate-800 h-1.5 rounded-full">
                                    <div className="bg-amber-400 h-full rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-400 leading-relaxed italic">
                                "The agent is currently monitoring 12 active document types and 4 financial channels based on your set rules."
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
