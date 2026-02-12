import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, AlertCircle, Clock, CheckCircle2, MoreHorizontal } from "lucide-react";
import { formatDate, cn } from "@/lib/utils";

export interface Deadline {
    id: string;
    title: string;
    source: string;
    dueDate: string;
    priority: "low" | "medium" | "high";
    completed: boolean;
    daysRemaining: number;
}

export function DeadlineCard({ deadline }: { deadline: Deadline }) {
    const isOverdue = deadline.daysRemaining < 0 && !deadline.completed;
    const isUrgent = deadline.daysRemaining <= 3 && !deadline.completed && !isOverdue;

    return (
        <Card className={cn(
            "group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-border/60 hover:border-primary/20 bg-card",
            deadline.completed && "opacity-60 grayscale bg-muted/20"
        )}>
            {/* Top Status Strip */}
            <div className={cn(
                "absolute top-0 left-0 w-full h-1",
                deadline.completed ? "bg-slate-300" :
                    deadline.priority === "high" ? "bg-red-500" :
                        deadline.priority === "medium" ? "bg-orange-500" : "bg-blue-500"
            )} />

            <CardHeader className="flex flex-row items-start justify-between pb-2 pt-5 px-5 space-y-0">
                <div className="space-y-1">
                    <CardTitle className="text-base font-semibold leading-tight pr-2">
                        {deadline.title}
                    </CardTitle>
                    <CardDescription className="flex items-center text-xs">
                        From: {deadline.source}
                    </CardDescription>
                </div>
                {deadline.completed ? (
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Done
                    </Badge>
                ) : (
                    <Badge variant={isUrgent || isOverdue ? "destructive" : "outline"} className={cn(
                        "h-6 px-2",
                        !isUrgent && !isOverdue && "text-muted-foreground bg-secondary/50"
                    )}>
                        {isOverdue ? "Overdue" : isUrgent ? "Urgent" : `${deadline.daysRemaining} days`}
                    </Badge>
                )}
            </CardHeader>

            <CardContent className="px-5 pb-2">
                <div className={cn(
                    "flex items-center gap-2 p-2 rounded-lg text-sm bg-secondary/30",
                    isUrgent ? "text-red-600 bg-red-50" : "text-muted-foreground"
                )}>
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Due {formatDate(deadline.dueDate)}</span>
                </div>
            </CardContent>

            <CardFooter className="px-5 pb-5 pt-2 flex justify-between gap-2">
                {!deadline.completed ? (
                    <>
                        <Button size="sm" variant="default" className="w-full h-8 text-xs shadow-none">
                            Mark Complete
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 px-0">
                            <MoreHorizontal className="w-4 h-4" />
                        </Button>
                    </>
                ) : (
                    <div className="text-xs text-muted-foreground w-full text-center py-1">
                        Completed on {new Date().toLocaleDateString()}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
