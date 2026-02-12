"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Zap,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
    Car,
    Home,
    Users,
    HeartPulse,
    Lock,
    Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        title: "Define Your Life Scope",
        description: "Select the areas you want DoxRadar to monitor and protect.",
        icon: Zap,
    },
    {
        title: "Agent Rules",
        description: "Tell DoxRadar how proactive it should be with your alerts.",
        icon: Eye,
    },
    {
        title: "Vault Initialization",
        description: "Secure your private AI environment and local encryption keys.",
        icon: Lock,
    },
];

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
    const [isInitializing, setIsInitializing] = useState(false);
    const router = useRouter();

    const lifeAreas = [
        { id: "home", label: "Property & Lease", icon: Home },
        { id: "car", label: "Vehicle & Insurance", icon: Car },
        { id: "family", label: "Family Documents", icon: Users },
        { id: "health", label: "Medical & Health", icon: HeartPulse },
    ];

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleFinalize();
        }
    };

    const handleFinalize = () => {
        setIsInitializing(true);
        // Simulate local encryption setup
        setTimeout(() => {
            router.push("/dashboard");
        }, 3000);
    };

    const toggleArea = (id: string) => {
        setSelectedAreas(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
            <div className="max-w-xl w-full">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg mb-6">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="flex gap-2 mb-4">
                        {steps.map((_, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "h-1.5 w-12 rounded-full transition-all duration-500",
                                    i <= currentStep ? "bg-primary" : "bg-slate-200"
                                )}
                            />
                        ))}
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">{steps[currentStep].title}</h1>
                    <p className="text-slate-500 mt-2">{steps[currentStep].description}</p>
                </div>

                <Card className="border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden border-0">
                    <CardContent className="p-8">
                        {currentStep === 0 && (
                            <div className="grid grid-cols-2 gap-4">
                                {lifeAreas.map((area) => {
                                    const Icon = area.icon;
                                    const isSelected = selectedAreas.includes(area.id);
                                    return (
                                        <button
                                            key={area.id}
                                            onClick={() => toggleArea(area.id)}
                                            className={cn(
                                                "p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 text-center group",
                                                isSelected
                                                    ? "border-primary bg-primary/5 text-primary"
                                                    : "border-slate-100 bg-white text-slate-600 hover:border-slate-200"
                                            )}
                                        >
                                            <Icon className={cn("w-8 h-8", isSelected ? "text-primary" : "text-slate-400 group-hover:text-slate-600")} />
                                            <span className="font-semibold text-sm">{area.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <h3 className="font-semibold text-sm mb-4">Alert Thresholds</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-600">Document Expiry Warning</span>
                                            <span className="text-xs font-bold bg-white px-2 py-1 rounded border">30 Days</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-600">Money Leak Detection</span>
                                            <span className="text-xs font-bold bg-white px-2 py-1 rounded border">Notify immediately</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 text-blue-700">
                                    <Zap className="w-5 h-5 shrink-0" />
                                    <p className="text-xs leading-relaxed font-medium">
                                        DoxRadar will automatically scan for these conditions every 6 hours and update your Radar Status.
                                    </p>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="flex flex-col items-center text-center py-4">
                                {isInitializing ? (
                                    <div className="flex flex-col items-center gap-6">
                                        <div className="relative">
                                            <div className="w-20 h-20 rounded-full border-4 border-primary/20 animate-spin border-t-primary" />
                                            <Lock className="w-8 h-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Generating Private Keys</p>
                                            <p className="text-sm text-slate-500 mt-1">Configuring AES-256 local-first vault...</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-6 flex flex-col items-center">
                                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                            <ShieldCheck className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-lg leading-tight">Your data, your keys.</h3>
                                            <p className="text-sm text-slate-500 max-w-[280px]">
                                                DoxRadar creates a unique encrypted instance for your life. Even we can't see your documents.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="mt-10">
                            {!isInitializing && (
                                <Button
                                    className="w-full h-14 rounded-2xl text-lg shadow-lg"
                                    onClick={nextStep}
                                    disabled={currentStep === 0 && selectedAreas.length === 0}
                                >
                                    {currentStep === steps.length - 1 ? "Initialize Radar" : "Continue"}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <p className="text-center mt-8 text-xs text-slate-400 font-medium uppercase tracking-widest">
                    SECURE SETUP &nbsp; • &nbsp; AI INITIALIZATION
                </p>
            </div>
        </div>
    );
}
