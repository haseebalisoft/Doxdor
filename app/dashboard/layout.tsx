"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    FileText,
    Calendar,
    CreditCard,
    ShieldCheck,
    Settings,
    LogOut,
    Menu,
    Gavel,
    Home,
    Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const sidebarLinks = [
    { href: "/dashboard", label: "Radar Status", icon: LayoutDashboard },
    { href: "/dashboard/documents", label: "Document Vault", icon: FileText },
    { href: "/dashboard/subscriptions", label: "Money Leaks", icon: CreditCard },
    { href: "/dashboard/deadlines", label: "Active Deadlines", icon: Calendar },
    { href: "/dashboard/disputes", label: "Dispute Tracker", icon: Gavel },
    { href: "/dashboard/utilities", label: "Home & Utilities", icon: Home },
    { href: "/dashboard/protocols", label: "Life Protocols", icon: Zap },
    { href: "/dashboard/life-audit", label: "Monthly Life Audit", icon: ShieldCheck },
    { href: "/dashboard/rules", label: "Agent Rules", icon: Settings },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row font-sans selection:bg-primary/10">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card">
                <span className="font-bold text-lg text-primary">DoxRadar</span>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu className="w-6 h-6" />
                </Button>
            </div>

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:h-screen flex flex-col shadow-sm",
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-16 flex items-center px-6 border-b border-border">
                    <span className="font-bold text-xl tracking-tight flex items-center gap-2 text-primary uppercase text-[12px] tracking-widest">
                        <div className="w-6 h-6 bg-primary rounded flex items-center justify-center shadow-sm">
                            <span className="text-primary-foreground text-[10px] font-bold">DR</span>
                        </div>
                        DoxRadar
                    </span>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {sidebarLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                )}
                            >
                                <Icon className={cn("w-4 h-4", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Security Heartbeat */}
                <div className="px-4 py-3 mx-4 mb-4 rounded-xl bg-secondary/30 border border-border/50">
                    <div className="flex items-center gap-2 mb-1.5 text-[10px] font-bold text-green-600 uppercase tracking-tight">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Vault Secured
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-tight">
                        AES-256 Encrypted. <br />
                        AI processing confined to your private instance.
                    </p>
                </div>

                <div className="p-4 border-t border-border space-y-1">
                    <Link
                        href="/dashboard/settings"
                        className={cn(
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground",
                            pathname === "/dashboard/settings" ? "bg-secondary text-foreground font-semibold" : "text-muted-foreground"
                        )}
                    >
                        <Settings className="w-4 h-4" />
                        Account Settings
                    </Link>
                    <button
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                        onClick={() => console.log("Logout")}
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-background/50 p-4 md:p-8">
                <div className="max-w-7xl mx-auto space-y-8 pb-12">
                    {children}
                </div>
            </main>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    );
}
