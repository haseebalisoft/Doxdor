import { SubscriptionCard } from "@/components/subscriptions/SubscriptionCard";
import { Button } from "@/components/ui/button";
import { Plus, Filter, TrendingDown, DollarSign, ListFilter } from "lucide-react";

// Mock Data
const subscriptions = [
    { id: "1", name: "Netflix", provider: "Netflix Inc.", amount: 19.99, currency: "USD", frequency: "monthly", nextBilling: "2026-02-15", flagged: false },
    { id: "2", name: "Gym Membership", provider: "Smart Fit", amount: 49.99, currency: "USD", frequency: "monthly", nextBilling: "2026-03-01", flagged: true },
    { id: "3", name: "Premium Coffee", provider: "Bean Box", amount: 35.00, currency: "USD", frequency: "monthly", nextBilling: "2026-02-20", flagged: false },
    { id: "4", name: "Annual VPN", provider: "NordVPN", amount: 120.00, currency: "USD", frequency: "yearly", nextBilling: "2026-06-12", flagged: false },
];

export default function SubscriptionsPage() {
    const totalMonthly = subscriptions
        .filter(s => s.frequency === "monthly")
        .reduce((sum, s) => sum + s.amount, 0);

    const totalYearly = subscriptions
        .filter(s => s.frequency === "yearly")
        .reduce((sum, s) => sum + s.amount, 0);

    const estimatedTotal = totalMonthly + (totalYearly / 12);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">Subscriptions</h1>
                    <p className="text-muted-foreground mt-1">
                        Monitoring {subscriptions.length} active services.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                        <ListFilter className="w-4 h-4" /> Filter
                    </Button>
                    <Button size="sm" className="gap-2 shadow-sm">
                        <Plus className="w-4 h-4" /> Add Service
                    </Button>
                </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <DollarSign className="w-24 h-24 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Monthly Spend</p>
                    <div className="text-4xl font-bold text-primary">${Math.round(estimatedTotal)}<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                    <p className="text-xs text-muted-foreground mt-2">Projection based on current active plans.</p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <TrendingDown className="w-24 h-24 text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Potential Savings</p>
                    <div className="text-4xl font-bold text-green-600">$54<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                    <p className="text-xs text-muted-foreground mt-2">1 unused subscription identified.</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <TrendingDown className="w-24 h-24 text-white" />
                    </div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">Yearly Projection</p>
                    <div className="text-4xl font-bold text-white">${(estimatedTotal * 12).toFixed(0)}</div>
                    <p className="text-xs text-slate-400 mt-2">Total annual burn rate.</p>
                </div>
            </div>

            {/* Subscription Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {subscriptions.map((sub: any) => (
                    <SubscriptionCard key={sub.id} subscription={sub} />
                ))}
            </div>
        </div>
    );
}
