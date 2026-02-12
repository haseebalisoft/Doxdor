import { DeadlineCard } from "@/components/deadlines/DeadlineCard";
import { Button } from "@/components/ui/button";
import { Plus, Filter, CalendarCheck } from "lucide-react";

// Mock Data
const deadlines = [
    { id: "1", title: "Car Insurance Renewal", dueDate: "2026-02-15", priority: "high" as const, source: "Car Insurance Contract", completed: false, daysRemaining: 5 },
    { id: "2", title: "Gym Membership Cancel", dueDate: "2026-03-01", priority: "medium" as const, source: "Smart Fit Agreement", completed: false, daysRemaining: 18 },
    { id: "3", title: "Tax Filing", dueDate: "2026-04-15", priority: "high" as const, source: "IRS", completed: false, daysRemaining: 63 },
    { id: "4", title: "Utility Bill Payment", dueDate: "2026-02-28", priority: "low" as const, source: "Monthly Bill", completed: false, daysRemaining: 18 },
    { id: "5", title: "Rent Payment", dueDate: "2026-02-05", priority: "high" as const, source: "Lease Agreement", completed: true, daysRemaining: -5 },
];

export default function DeadlinesPage() {
    const activeDeadlines = deadlines.filter(d => !d.completed);
    const completedDeadlines = deadlines.filter(d => d.completed);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Deadlines</h2>
                    <p className="text-muted-foreground">Stay ahead of renewals, payments, and expirations.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Manual Deadline
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {activeDeadlines.map((deadline) => (
                    <DeadlineCard key={deadline.id} deadline={deadline} />
                ))}
            </div>

            {completedDeadlines.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4 text-muted-foreground flex items-center">
                        <CalendarCheck className="mr-2 h-5 w-5" /> Completed
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 opacity-75">
                        {completedDeadlines.map((deadline) => (
                            <DeadlineCard key={deadline.id} deadline={deadline} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
