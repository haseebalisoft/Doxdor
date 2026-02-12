import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, Calendar, AlertTriangle, MoreHorizontal, Zap } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";

interface Subscription {
    id: string;
    name: string;
    provider: string;
    amount: number;
    currency: string;
    frequency: "monthly" | "yearly";
    nextBilling: string;
    flagged?: boolean;
}

interface SubscriptionCardProps {
    subscription: Subscription;
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
    return (
        <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-border/60 hover:border-primary/20 bg-card">

            <CardHeader className="flex flex-row items-center justify-between pb-2 pt-5 px-5 space-y-0">
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                    subscription.name.includes("Netflix") ? "bg-red-50 text-red-600" :
                        subscription.name.includes("Gym") ? "bg-orange-50 text-orange-600" :
                            subscription.name.includes("Coffee") ? "bg-amber-50 text-amber-600" :
                                "bg-blue-50 text-blue-600"
                )}>
                    {subscription.flagged ? <AlertTriangle className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                </div>
                <div className="text-right">
                    <div className="text-xl font-bold text-foreground">
                        ${subscription.amount}
                    </div>
                    <p className="text-xs text-muted-foreground capitalize">/{subscription.frequency}</p>
                </div>
            </CardHeader>

            <CardContent className="px-5 pb-4">
                <h3 className="font-semibold text-base text-foreground truncate pr-2">
                    {subscription.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{subscription.provider}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Next: {formatDate(subscription.nextBilling)}</span>
                    </div>
                    {subscription.flagged ? (
                        <Badge variant="destructive" className="h-5 px-1.5 text-[10px]">Review</Badge>
                    ) : (
                        <Badge variant="secondary" className="h-5 px-1.5 text-[10px] bg-green-50 text-green-700 hover:bg-green-100">Active</Badge>
                    )}
                </div>
            </CardContent>

            {subscription.flagged && (
                <CardFooter className="px-5 pb-5 pt-0">
                    <Button variant="destructive" size="sm" className="w-full text-xs h-8 shadow-sm">
                        Details & Cancel
                    </Button>
                </CardFooter>
            )}
        </Card>
    );
}
