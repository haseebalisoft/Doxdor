"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Calendar,
    Clock,
    AlertTriangle,
    CheckCircle2,
    ShieldAlert,
    ScanLine,
    Plus,
    FileText,
    History,
    ArrowRight,
    MapPin,
    Building2,
    CalendarCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const activeDeadlines = [
    {
        id: "dl-001",
        title: "Car Registration Audit",
        entity: "DMV / State Revenue",
        due: "Mar 12, 2026",
        daysRemaining: 27,
        priority: "High",
        status: "Action Required",
        type: "State Compliance",
        action: "Renew Online"
    },
    {
        id: "dl-002",
        title: "Passport Expiry Window",
        entity: "U.S. Dept of State",
        due: "Oct 20, 2026",
        daysRemaining: 180,
        priority: "Medium",
        status: "Monitoring",
        type: "Federal ID",
        action: "Prep Documents"
    },
    {
        id: "dl-003",
        title: "Home Insurance Rescan",
        entity: "State Farm / Market",
        due: "Apr 05, 2026",
        daysRemaining: 51,
        priority: "Low",
        status: "Scanning Market",
        type: "Contract Renewal",
        action: "Review Matches"
    }
];

export default function DeadlinesPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">Active Radar Deadlines</h1>
                    <p className="text-muted-foreground mt-1 flex items-center gap-2">
                        <ScanLine className="w-4 h-4 text-primary" />
                        Agent is tracking 12 critical dates across State, Federal, and Private sectors.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                        <History className="w-4 h-4" /> Past Events
                    </Button>
                    <Button className="gap-2 shadow-md">
                        <Plus className="w-4 h-4" /> Add Manual Deadline
                    </Button>
                </div>
            </div>

            {/* Tactical Priority View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Urgent Section */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-500" /> Approaching Thresholds
                    </h2>

                    <div className="grid gap-4">
                        {activeDeadlines.map((item) => (
                            <Card key={item.id} className={cn(
                                "group border-border/60 hover:shadow-xl transition-all overflow-hidden",
                                item.priority === "High" ? "border-l-4 border-l-red-500" : "border-l-4 border-l-blue-500"
                            )}>
                                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                    <div className="space-y-4 flex-1">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest border-slate-200">
                                                        {item.type}
                                                    </Badge>
                                                    {item.priority === "High" && (
                                                        <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                                                    )}
                                                </div>
                                                <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors uppercase tracking-tight">{item.title}</h3>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Due Date</p>
                                                <p className="text-lg font-black text-slate-900">{item.due}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-border/40">
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Issuing Entity</p>
                                                <div className="flex items-center gap-2">
                                                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                                                    <p className="text-sm font-semibold">{item.entity}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Radar Status</p>
                                                <div className="flex items-center gap-2">
                                                    <span className={cn(
                                                        "w-1.5 h-1.5 rounded-full",
                                                        item.status === "Action Required" ? "bg-amber-500" : "bg-blue-500"
                                                    )}></span>
                                                    <p className="text-sm font-semibold">{item.status}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Time Left</p>
                                                <p className={cn(
                                                    "text-sm font-black",
                                                    item.daysRemaining < 30 ? "text-red-500" : "text-blue-500"
                                                )}>{item.daysRemaining} Days</p>
                                            </div>
                                            <div className="flex items-center justify-end">
                                                <Button className="w-full md:w-auto gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold uppercase text-[10px] tracking-widest h-10 px-6 rounded-xl">
                                                    {item.action} <ArrowRight className="w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Sidebar: Compliance & Health */}
                <div className="space-y-8">
                    <Card className="border-border/60 shadow-lg rounded-[2rem] overflow-hidden">
                        <CardHeader className="bg-slate-50 border-b border-border/50 p-8">
                            <CardTitle className="text-lg font-bold flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-blue-600" /> Compliance Vitality
                            </CardTitle>
                            <CardDescription>Agent's legal & gov-level monitoring status.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-green-50 rounded-xl text-green-600">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">Vehicle Registry (DL & Plate)</p>
                                    <p className="text-xs text-muted-foreground">Up to date. Resident since 2021.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-amber-50 rounded-xl text-amber-600">
                                    <AlertTriangle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">Passport / IDs</p>
                                    <p className="text-xs text-muted-foreground">Attention: Renewal window approaching.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                                    <CalendarCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">Property Tax Tracker</p>
                                    <p className="text-xs text-muted-foreground">Next installment due in 4 months.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-950 text-white rounded-[2rem] border-0 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent group-hover:opacity-100 transition-opacity"></div>
                        <CardContent className="p-8 relative z-10 space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">Relocation Protocol</h3>
                            <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                Moving soon? The agent can auto-update your address across all state and private institutions in one click.
                            </p>
                            <Button className="w-full bg-white text-slate-950 font-bold hover:bg-slate-100 h-12 rounded-xl text-xs uppercase tracking-widest">
                                Initialize Relocation
                            </Button>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
