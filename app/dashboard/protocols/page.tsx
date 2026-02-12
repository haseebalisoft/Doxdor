"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Zap,
    Truck,
    Briefcase,
    Heart,
    Baby,
    Plane,
    Home,
    AlertTriangle,
    ArrowRight,
    ShieldAlert
} from "lucide-react";
import { cn } from "@/lib/utils";

const protocols = [
    {
        id: "moving",
        title: "Moving House Plan",
        description: "Agent auto-updates address at DMV, Banks, USPS and transfers utilities.",
        icon: Truck,
        color: "text-blue-600",
        bg: "bg-blue-50",
        status: "Available"
    },
    {
        id: "job-loss",
        title: "Emergency Mode: Job Loss",
        description: "Agent auto-cancels non-essential subcriptions & renegotiates debt interest.",
        icon: Briefcase,
        color: "text-red-600",
        bg: "bg-red-50",
        status: "Critical"
    },
    {
        id: "death",
        title: "Death Protocol (Family)",
        description: "Automation for account closures, insurance claims, and legal checklist.",
        icon: Heart,
        color: "text-slate-600",
        bg: "bg-slate-50",
        status: "Essential"
    },
    {
        id: "new-child",
        title: "New Child Registration",
        description: "Add to insurance, apply for birth certificates, and tax adjustment logic.",
        icon: Baby,
        color: "text-pink-600",
        bg: "bg-pink-50",
        status: "Available"
    },
    {
        id: "large-purchase",
        title: "Large Purchase Audit",
        description: "AI reads house/car contracts, explains traps, and simulates financing.",
        icon: Home,
        color: "text-green-600",
        bg: "bg-green-50",
        status: "Ready"
    },
    {
        id: "travel",
        title: "Travel Protection",
        description: "Visa checks, roaming alerts, and international roaming optimization.",
        icon: Plane,
        color: "text-purple-600",
        bg: "bg-purple-50",
        status: "Ready"
    }
];

export default function ProtocolsPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-primary">Life Event Protocols</h1>
                <p className="text-muted-foreground mt-1">
                    Activate specialized AI automation for high-impact life transitions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {protocols.map((protocol) => {
                    const Icon = protocol.icon;
                    return (
                        <Card key={protocol.id} className="group hover:shadow-lg transition-all border-border/60 overflow-hidden">
                            <CardHeader className={cn("p-6", protocol.bg)}>
                                <div className="flex justify-between items-start">
                                    <div className={cn("p-3 rounded-2xl bg-white shadow-sm", protocol.color)}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/50 rounded-full">
                                        {protocol.status}
                                    </span>
                                </div>
                                <CardTitle className="mt-4 text-xl">{protocol.title}</CardTitle>
                                <CardDescription className="text-slate-600 font-medium">
                                    {protocol.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6">
                                <Button className="w-full gap-2 group-hover:bg-primary transition-colors">
                                    Initialize Protocol <ArrowRight className="w-4 h-4" />
                                </Button>
                                <p className="text-[10px] text-center mt-4 text-muted-foreground uppercase font-bold tracking-tighter">
                                    <ShieldAlert className="w-3 h-3 inline mr-1" /> Agent will ask for confirmation before any state-level change.
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Emergency Logic Hook */}
            <Card className="bg-slate-900 text-white border-0 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <CardContent className="p-10 relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="p-4 bg-white/10 rounded-3xl border border-white/20">
                        <Zap className="w-12 h-12 text-primary fill-primary" />
                    </div>
                    <div className="flex-1 space-y-2 text-center md:text-left">
                        <h2 className="text-2xl font-bold tracking-tight">Custom Life Trigger</h2>
                        <p className="text-slate-400 max-w-lg">
                            Can't find a protocol for your situation? Describe your event to the AI Agent, and it will build a custom automation path for your bureaucracy.
                        </p>
                    </div>
                    <Button size="lg" variant="secondary" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 h-14 rounded-2xl shadow-xl">
                        Design Custom Protocol
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
