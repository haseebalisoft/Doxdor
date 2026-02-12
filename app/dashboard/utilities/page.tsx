"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Home,
    Droplets,
    Zap,
    Flame,
    AlertTriangle,
    Calendar,
    Wrench,
    ShieldCheck,
    ArrowUpRight,
    ArrowDownRight,
    Activity,
    Thermometer
} from "lucide-react";
import { cn } from "@/lib/utils";

const utilities = [
    { id: "elec", name: "Electricity", usage: "420 kWh", cost: "$124.50", trend: "up", status: "Warning: High Usage", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
    { id: "water", name: "Water & Sewage", usage: "4,200 Gal", cost: "$68.20", trend: "down", status: "Optimal", icon: Droplets, color: "text-blue-500", bg: "bg-blue-50" },
    { id: "gas", name: "Natural Gas", usage: "12 Therms", cost: "$34.00", trend: "stable", status: "Normal", icon: Flame, color: "text-orange-500", bg: "bg-orange-50" },
];

const maintenanceTasks = [
    { id: 1, task: "HVAC Filter Change", due: "In 12 days", status: "Scheduled", priority: "Medium" },
    { id: 2, task: "Gutter Cleaning", due: "Overdue", status: "Immediate Action", priority: "High" },
    { id: 3, task: "Insurance Renegotiation", due: "March 2026", status: "Radar Active", priority: "Low" },
];

export default function UtilitiesPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">Home & Utilities</h1>
                    <p className="text-muted-foreground mt-1 flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Monitoring your household consumption and maintenance infrastructure.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                        <Wrench className="w-4 h-4" /> Log Repair
                    </Button>
                    <Button className="gap-2 shadow-md">
                        <Activity className="w-4 h-4" /> Analyze Efficiency
                    </Button>
                </div>
            </div>

            {/* Efficiency Warning Card */}
            <Card className="border-amber-200 bg-amber-50/20 shadow-none overflow-hidden">
                <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-16 h-16 rounded-3xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 border border-amber-200 shadow-inner">
                        <AlertTriangle className="w-8 h-8" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <h3 className="text-lg font-bold text-amber-800">Abnormal Consumption Detected</h3>
                        <p className="text-sm text-amber-700 leading-relaxed font-medium">
                            The agent detected a <b>22% spike</b> in water usage compared to last Tuesday. This could indicate a <b>pipe leak</b> or a meter error. Agent has drafted a request for a municipal audit.
                        </p>
                    </div>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/20">Submit Ticket to City</Button>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Consumption Cards */}
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <Thermometer className="w-4 h-4" /> Monthly Consumption
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {utilities.map((util) => {
                            const Icon = util.icon;
                            return (
                                <Card key={util.id} className="border-border/60 hover:shadow-md transition-all">
                                    <div className="p-6 space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div className={cn("p-3 rounded-2xl", util.bg, util.color)}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            {util.trend === "up" ? (
                                                <ArrowUpRight className="w-4 h-4 text-red-500" />
                                            ) : util.trend === "down" ? (
                                                <ArrowDownRight className="w-4 h-4 text-green-500" />
                                            ) : null}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{util.name}</p>
                                            <p className="text-xl font-bold text-primary mt-1">{util.cost}</p>
                                            <p className="text-xs text-muted-foreground">{util.usage} total</p>
                                        </div>
                                        <div className={cn(
                                            "text-[10px] font-bold px-2 py-1 rounded-full text-center tracking-tighter",
                                            util.status.includes("Warning") ? "bg-amber-100 text-amber-600" : "bg-green-100 text-green-600"
                                        )}>
                                            {util.status}
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Infrastructure Tracking */}
                    <Card className="border-border/60">
                        <CardHeader className="bg-slate-50 border-b border-border/50">
                            <CardTitle className="text-lg">Maintenance Pipeline</CardTitle>
                            <CardDescription>Agent-tracked tasks to prevent property depreciation & fees.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y overflow-hidden rounded-b-xl">
                                {maintenanceTasks.map((task) => (
                                    <div key={task.id} className="p-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className={cn(
                                                "w-10 h-10 rounded-xl flex items-center justify-center",
                                                task.priority === "High" ? "bg-red-50 text-red-600" : "bg-slate-50 text-slate-400"
                                            )}>
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-primary">{task.task}</p>
                                                <p className="text-xs text-muted-foreground">{task.due}</p>
                                            </div>
                                        </div>
                                        <Badge className={cn(
                                            "text-[10px] font-bold uppercase",
                                            task.priority === "High" ? "bg-red-100 text-red-700 hover:bg-red-100" : "bg-secondary text-secondary-foreground"
                                        )}>
                                            {task.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Home Insurance Radar */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Insurance Oversight
                    </h3>
                    <Card className="bg-primary text-primary-foreground shadow-2xl overflow-hidden relative border-0">
                        <div className="absolute top-0 right-0 p-24 bg-white/10 rounded-full blur-3xl -mr-12 -mt-12"></div>
                        <CardContent className="p-8 relative z-10 space-y-6">
                            <div className="flex flex-col gap-1">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/60">Active Policy</p>
                                <h4 className="text-xl font-bold">State Farm Premier</h4>
                                <p className="text-sm font-medium text-primary-foreground/80">Renewal: Mar 12, 2026</p>
                            </div>

                            <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    <span className="text-xs font-bold uppercase tracking-tighter">Optimization Hook</span>
                                </div>
                                <p className="text-xs leading-relaxed text-slate-100 italic">
                                    "Your policy auto-signed for $124/mo. Agent will trigger a market re-scan 45 days before next renewal."
                                </p>
                            </div>

                            <Button className="w-full bg-white text-primary hover:bg-slate-100 font-bold h-12 rounded-xl text-xs uppercase tracking-widest">
                                Full Insurance Audit
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="border-border/60">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm flex items-center gap-2">
                                <Activity className="w-4 h-4 text-blue-500" />
                                Efficiency Score
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-3xl font-bold tracking-tight">88<span className="text-lg text-muted-foreground/50">/100</span></div>
                            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-full w-[88%] rounded-full"></div>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">
                                You are in the top 12% of efficiency in your neighborhood. AI suggests HVAC filter optimization for +4 score.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
