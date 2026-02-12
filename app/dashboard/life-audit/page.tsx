import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    AlertTriangle,
    ArrowRight,
    Download,
    CheckCircle2,
    TrendingUp,
    FileText,
    Calendar,
    Printer
} from "lucide-react";

export default function LifeAuditPage() {
    const reportDate = "February 10, 2026";

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700 pb-12">

            {/* Action Bar */}
            <div className="flex justify-between items-center print:hidden">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-primary">Monthly Audit</h1>
                    <p className="text-muted-foreground">Executive summary of your life's logistics.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                        <Printer className="w-4 h-4" /> Print
                    </Button>
                    <Button className="gap-2 bg-primary text-primary-foreground shadow-sm hover:shadow">
                        <Download className="w-4 h-4" /> Download PDF
                    </Button>
                </div>
            </div>

            {/* The Report "Paper" */}
            <div className="bg-white text-slate-900 shadow-xl rounded-xl border border-slate-200 overflow-hidden print:shadow-none print:border-0">
                {/* Scale for branding strip */}
                <div className="h-2 w-full bg-slate-900"></div>

                <div className="p-8 md:p-16 space-y-12">

                    {/* Report Header */}
                    <div className="flex justify-between items-start border-b border-slate-100 pb-8">
                        <div>
                            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2">confidential report</div>
                            <h2 className="text-4xl font-serif tracking-tight text-slate-900">Life Audit: February 2026</h2>
                            <p className="text-slate-500 mt-2">Prepared for <span className="font-semibold text-slate-900">Alex Johnson</span></p>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-slate-900">Score: 82/100</div>
                            <div className="text-sm text-green-600 font-medium">+4pts from last month</div>
                        </div>
                    </div>

                    {/* Executive Summary */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Executive Summary</h3>
                        <p className="text-lg leading-relaxed text-slate-700">
                            Your administrative health is stable. We have identified <span className="font-semibold text-amber-700">2 critical risks</span> that require immediate attention related to insurance coverage.
                            Financially, you are on track, with <span className="font-semibold text-green-700">$66/month</span> in potential savings identified through unwanted subscription removal.
                        </p>
                    </section>

                    {/* Key Metrics Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-2 text-slate-500">
                                <TrendingUp className="w-5 h-5" />
                                <span className="text-sm font-semibold uppercase">Money Saved</span>
                            </div>
                            <div className="text-4xl font-bold text-slate-900">$792<span className="text-lg text-slate-400 font-normal">/yr</span></div>
                            <p className="text-sm text-slate-600 mt-2">Via 2 cancelled subscriptions.</p>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-2 text-slate-500">
                                <AlertTriangle className="w-5 h-5" />
                                <span className="text-sm font-semibold uppercase">Risks Prevented</span>
                            </div>
                            <div className="text-4xl font-bold text-slate-900">2</div>
                            <p className="text-sm text-slate-600 mt-2">Legal clauses flagged.</p>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="flex items-center gap-3 mb-2 text-slate-500">
                                <Calendar className="w-5 h-5" />
                                <span className="text-sm font-semibold uppercase">Pending Actions</span>
                            </div>
                            <div className="text-4xl font-bold text-slate-900">3</div>
                            <p className="text-sm text-slate-600 mt-2">Deadlines in next 30 days.</p>
                        </div>
                    </section>

                    {/* Critical Issues Table */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            Priority Action Items
                        </h3>

                        <div className="border rounded-lg overflow-hidden">
                            <table className="w-full text-left mx-auto">
                                <thead className="bg-slate-50 border-b">
                                    <tr>
                                        <th className="p-4 font-semibold text-sm text-slate-500">Issue</th>
                                        <th className="p-4 font-semibold text-sm text-slate-500">Impact</th>
                                        <th className="p-4 font-semibold text-sm text-slate-500">Recommendation</th>
                                        <th className="p-4 font-semibold text-sm text-slate-500 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr className="bg-amber-50/30">
                                        <td className="p-4">
                                            <div className="font-semibold text-slate-900">Car Insurance Expiry</div>
                                            <div className="text-xs text-slate-500">Due in 5 days</div>
                                        </td>
                                        <td className="p-4 text-sm text-slate-700">Policy Lapse Risk</td>
                                        <td className="p-4 text-sm text-slate-700">Renew immediately or switch providers.</td>
                                        <td className="p-4 text-right">
                                            <Button size="sm" variant="outline" className="h-8">Resolve</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">
                                            <div className="font-semibold text-slate-900">Smart Fit Auto-Renewal</div>
                                            <div className="text-xs text-slate-500">Gym Contract</div>
                                        </td>
                                        <td className="p-4 text-sm text-slate-700">Financial ($300/yr)</td>
                                        <td className="p-4 text-sm text-slate-700">Cancel 30 days prior (Action required now).</td>
                                        <td className="p-4 text-right">
                                            <Button size="sm" variant="outline" className="h-8">Draft Letter</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Financial Insights */}
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                            Financial Optimization
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-start border-b border-slate-100 pb-4">
                                <div>
                                    <div className="font-semibold text-slate-900">Unused Subscription: Adobe Creative Cloud</div>
                                    <div className="text-sm text-slate-600">Not used in 3 months. Cost: $54.00/month.</div>
                                </div>
                                <Button size="sm" variant="ghost" className="text-red-600 h-8">Cancel Subscription</Button>
                            </li>
                            <li className="flex justify-between items-start border-b border-slate-100 pb-4">
                                <div>
                                    <div className="font-semibold text-slate-900">Duplicate Charge: Spotify</div>
                                    <div className="text-sm text-slate-600">Charged twice on Feb 2nd. Potential refund: $12.00.</div>
                                </div>
                                <Button size="sm" variant="ghost" className="text-blue-600 h-8">Dispute Charge</Button>
                            </li>
                        </ul>
                    </section>

                    {/* Footer */}
                    <div className="pt-12 mt-12 border-t border-slate-100 text-center text-slate-400 text-sm">
                        <p>Generated by DoxRadar AI Agent on {reportDate}.</p>
                        <p className="mt-1">Encrypted. Private. Confidential.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
