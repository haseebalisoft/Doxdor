import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    ShieldCheck,
    Clock,
    FileText,
    CheckCircle2,
    Lock,
    Brain,
    Zap,
    Users
} from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
            {/* Navbar */}
            <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-semibold text-lg tracking-tight text-primary">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-sm">
                            <Zap className="w-4 h-4 fill-current" />
                        </div>
                        DoxRadar
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            Features
                        </Link>
                        <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            Pricing
                        </Link>
                        <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            Log in
                        </Link>
                        <Link href="/register">
                            <Button size="sm" className="font-medium px-5 rounded-full shadow-sm hover:shadow-md transition-all">
                                Get Started
                            </Button>
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="flex-1 pt-32 pb-16">
                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-24 md:mb-32">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-secondary text-sm font-medium text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            AI Life Manager v2.0
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-8 leading-[1.1]">
                            Manage your life logic, <br className="hidden md:block" />
                            <span className="text-muted-foreground">not just your files.</span>
                        </h1>

                        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
                            The intelligent agent that proactively audits your finances,
                            tracks expiration dates, and protects your family from bureaucracy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                            <Link href="/register" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Link href="#how-it-works" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-border bg-transparent hover:bg-secondary/50">
                                    How it Works
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-green-600" /> Bank-grade Encryption
                            </div>
                            <div className="flex items-center gap-2">
                                <Brain className="w-4 h-4 text-blue-600" /> Private AI Processing
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="container mx-auto px-6 py-24 border-t border-border/40">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4"> Intelligent Protection</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Most apps just store data. DoxRadar understands it and acts on your behalf.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                <FileText className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Document Intelligence</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Upload contracts, medical records, or insurance policies. We extract terms, renewals, and hidden clauses instantly.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                                <Clock className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Proactive Deadlines</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We don't just remind you. We tell you <i>what</i> to do. "Passport expiring in 6 months—start renewal now to avoid fees."
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Monthly Life Audit</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Receive a calm, executive summary of your life's logistics every month. Risks prevented, money saved, actions needed.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="container mx-auto px-6 py-24 bg-secondary/30 rounded-3xl my-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-muted-foreground">Invest in your peace of mind.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Individual Plan */}
                        <div className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg transition-all">
                            <h3 className="text-lg font-medium text-muted-foreground mb-4">Individual</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold">$12</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                    <span>AI Document Analysis (50/mo)</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                    <span>Proactive Deadline Alerts</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                    <span>Monthly Life Audit Report</span>
                                </li>
                            </ul>
                            <Button className="w-full rounded-xl" variant="outline">Start Free Trial</Button>
                        </div>

                        {/* Master Plan */}
                        <div className="relative p-8 rounded-3xl bg-primary text-primary-foreground shadow-xl ring-4 ring-primary/5">
                            <div className="absolute top-0 right-0 px-4 py-1 bg-green-500/20 text-green-300 text-xs font-bold uppercase tracking-wider rounded-bl-xl rounded-tr-2xl">
                                Best Value
                            </div>
                            <h3 className="text-lg font-medium text-primary-foreground/80 mb-4">Family Master</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold">$29</span>
                                <span className="text-primary-foreground/80">/month</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                    <span>Unlimited Documents & Analysis</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                    <span>Family Member Accounts (up to 5)</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                    <span>Priority Legal Risk Detection</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                    <span>Concierge Support</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl font-semibold">
                                Get Master Access
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Trust Signals Footer */}
                <section className="container mx-auto px-6 py-12 text-center">
                    <div className="inline-flex flex-col items-center gap-4 p-8 bg-secondary/20 rounded-2xl border border-secondary">
                        <Lock className="w-8 h-8 text-muted-foreground" />
                        <h4 className="font-semibold">Your Data is Yours</h4>
                        <p className="text-sm text-muted-foreground max-w-md">
                            We use local-first encryption. Your documents are never trained on by public models.
                            You hold the keys to your life's data.
                        </p>
                    </div>
                </section>
            </main>

            <footer className="border-t border-border/40 bg-secondary/10 py-12">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 font-semibold">
                        <div className="w-6 h-6 bg-muted-foreground/20 rounded flex items-center justify-center text-muted-foreground">
                            <Zap className="w-3 h-3 fill-current" />
                        </div>
                        <span className="text-muted-foreground">DoxRadar</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        © 2026 DoxRadar Inc. Built for peace of mind.
                    </div>
                </div>
            </footer>
        </div>
    );
}
