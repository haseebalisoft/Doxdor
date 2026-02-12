"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    UserPlus,
    CreditCard,
    MoreHorizontal,
    Shield,
    Trash2,
    Settings as SettingsIcon,
    Check
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock Data
const users = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", role: "Master Admin", status: "Active", initial: "AJ" },
    { id: 2, name: "Maria Johnson", email: "maria@example.com", role: "Family Member", status: "Active", initial: "MJ" },
    { id: 3, name: "Kids Account", email: "kids@example.com", role: "Restricted", status: "Active", initial: "KA" },
];

export default function MasterAccountPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Family Master Account</h1>
                <p className="text-muted-foreground mt-1">Manage your household members and billing simply.</p>
            </div>

            {/* Billing Overview - Clean & Simple */}
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                <CardHeader className="relative z-10 flex flex-row items-center justify-between pb-2">
                    <div>
                        <CardTitle className="text-lg font-medium text-slate-100">Current Plan</CardTitle>
                        <div className="text-3xl font-bold mt-2">Family Master</div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-300 hover:bg-green-500/30 border-0 px-3 py-1">Active</Badge>
                </CardHeader>

                <CardContent className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 justify-between items-end">
                        <div className="space-y-1">
                            <p className="text-slate-300 text-sm flex items-center gap-2">
                                <CreditCard className="w-4 h-4" /> Visa ending in 4242
                            </p>
                            <p className="text-slate-400 text-sm">Next payment: $29.00 on March 1, 2026</p>
                        </div>
                        <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0">
                            Update Payment Method
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* User Management */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Authorized Users
                    </h2>
                    <Button className="gap-2 shadow-sm">
                        <UserPlus className="w-4 h-4" /> Add Family Member
                    </Button>
                </div>

                <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
                    {users.map((user, index) => (
                        <div
                            key={user.id}
                            className={`p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors ${index !== users.length - 1 ? "border-b border-border/50" : ""
                                }`}
                        >
                            <Avatar className="h-10 w-10 border border-border">
                                <AvatarFallback className="bg-secondary text-secondary-foreground font-medium">
                                    {user.initial}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <p className="font-medium text-foreground truncate">{user.name}</p>
                                    {user.role === "Master Admin" && (
                                        <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-primary/20 text-primary bg-primary/5">
                                            Owner
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                            </div>

                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-medium">{user.role}</p>
                                <p className="text-xs text-muted-foreground flex items-center justify-end gap-1">
                                    <Check className="w-3 h-3 text-green-500" /> {user.status}
                                </p>
                            </div>

                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>
                    ))}

                    {/* Add User Placeholder Row */}
                    <button className="w-full p-4 flex items-center gap-4 text-muted-foreground hover:text-primary hover:bg-muted/30 transition-all text-left group">
                        <div className="h-10 w-10 rounded-full border border-dashed border-border bg-transparent flex items-center justify-center group-hover:border-primary transition-colors">
                            <UserPlus className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                        </div>
                        <span className="text-sm font-medium">Invite another member...</span>
                    </button>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="pt-8 mt-8 border-t border-border">
                <h3 className="text-sm font-medium text-destructive mb-4">Danger Zone</h3>
                <div className="flex items-center justify-between p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
                    <div>
                        <p className="font-medium text-foreground">Delete Account</p>
                        <p className="text-sm text-muted-foreground">Permanently delete your account and all data.</p>
                    </div>
                    <Button variant="destructive" size="sm">Delete Account</Button>
                </div>
            </div>

        </div>
    );
}
