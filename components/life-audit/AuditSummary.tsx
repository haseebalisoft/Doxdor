import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, TrendingUp, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuditSummaryProps {
    month: string;
    savings: number;
    risks: number;
    deadlines: number;
    score: number;
}

export function AuditSummary({ month, savings, risks, deadlines, score }: AuditSummaryProps) {
    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-green-500";
        if (score >= 70) return "text-yellow-500";
        return "text-red-500";
    };

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Estimated Savings</CardTitle>
                    <DollarSign className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-green-500">${savings}</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
            </Card>

            <Card className={cn(risks > 0 ? "bg-gradient-to-br from-red-500/10 to-transparent border-red-500/20" : "")}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Risks Detected</CardTitle>
                    <AlertTriangle className={cn("h-4 w-4", risks > 0 ? "text-red-500" : "text-muted-foreground")} />
                </CardHeader>
                <CardContent>
                    <div className={cn("text-2xl font-bold", risks > 0 ? "text-red-500" : "")}>{risks}</div>
                    <p className="text-xs text-muted-foreground">High priority issues</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Administrative Score</CardTitle>
                    <TrendingUp className={cn("h-4 w-4", getScoreColor(score))} />
                </CardHeader>
                <CardContent>
                    <div className={cn("text-2xl font-bold", getScoreColor(score))}>{score}/100</div>
                    <p className="text-xs text-muted-foreground">Based on document health</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Action Items</CardTitle>
                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{risks + deadlines}</div>
                    <p className="text-xs text-muted-foreground">Tasks to review</p>
                </CardContent>
            </Card>
        </div>
    );
}
