"use client";

import { Sidebar } from "./Sidebar"
import {
    TrendingUp,
    Clock,
    Target,
    MoreHorizontal,
    ArrowUpRight,
    Plus,
    FileText,
} from "lucide-react";


import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
            await api.post("/logout");
            // Optionally, clear any user state in your frontend
            // e.g., setUser(null) if using context
            navigate("/"); // redirect to homepage or login page
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Sidebar />

            {/* Main Content Area */}
            <main className="md:ml-64 min-h-screen p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                        <p className="text-slate-500">
                            Welcome back, Jordan! Here's your progress.
                        </p>
                   
                   </div>
                   
                    </div>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5">
                        <Plus size={16} />
                        Create New Quiz
                    </button>

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5"
                    >
                        <Plus size={16} />
                        Logout
                    </button>


                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StatCard
                            title="Total Quizzes"
                            value="24"
                            trend="+12%"
                            icon={Target}
                            color="violet"
                        />
                        <StatCard
                            title="Average Score"
                            value="86%"
                            trend="+4.5%"
                            icon={TrendingUp}
                            color="emerald"
                        />
                        <StatCard
                            title="Study Time"
                            value="12h 40m"
                            trend="This Week"
                            icon={Clock}
                            color="blue"
                        />
                    </div>

                    {/* Analytics & Activity Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Chart Area (2/3 width) */}
                        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-slate-900">Weekly Activity</h3>
                                <select className="bg-slate-50 border-none text-sm text-slate-500 rounded-lg p-2 outline-none">
                                    <option>Last 7 Days</option>
                                    <option>Last 30 Days</option>
                                </select>
                            </div>

                            {/* CSS-Only Bar Chart Visualization */}
                            <div className="h-64 flex items-end justify-between gap-2 md:gap-4 mt-8">
                                {/* Bars */}
                                {[65, 45, 75, 55, 85, 95, 70].map((height, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center gap-2 w-full group cursor-pointer"
                                    >
                                        {/* Tooltip on hover */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute mb-4 -translate-y-[100%] bg-slate-800 text-white text-xs py-1 px-2 rounded">
                                            {height}%
                                        </div>
                                        {/* The Bar */}
                                        <div
                                            className="w-full max-w-[40px] bg-slate-100 rounded-t-xl relative overflow-hidden group-hover:bg-violet-50 transition-colors"
                                            style={{ height: "200px" }}
                                        >
                                            <div
                                                className="absolute bottom-0 w-full bg-slate-900 rounded-t-xl group-hover:bg-violet-600 transition-all duration-500 ease-out"
                                                style={{ height: `${height}%` }}
                                            />
                                        </div>
                                        <span className="text-xs text-slate-400 font-medium">
                                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Quizzes List (1/3 width) */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-slate-900">Recent Quizzes</h3>
                                <button className="text-violet-600 text-sm font-semibold hover:underline">
                                    See All
                                </button>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        name: "Biology Mid-Term",
                                        score: "92%",
                                        date: "2 hrs ago",
                                        tag: "Science",
                                    },
                                    {
                                        name: "European History",
                                        score: "78%",
                                        date: "5 hrs ago",
                                        tag: "History",
                                    },
                                    {
                                        name: "React Components",
                                        score: "88%",
                                        date: "1 day ago",
                                        tag: "Tech",
                                    },
                                    {
                                        name: "Organic Chem",
                                        score: "In Progress",
                                        date: "2 days ago",
                                        tag: "Science",
                                    },
                                ].map((quiz, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                                            <FileText size={18} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-slate-900 truncate">
                                                {quiz.name}
                                            </h4>
                                            <p className="text-xs text-slate-500">
                                                {quiz.date} • {quiz.tag}
                                            </p>
                                        </div>
                                        <div
                                            className={`text-sm font-bold ${quiz.score === "In Progress"
                                                    ? "text-amber-500"
                                                    : "text-emerald-600"
                                                }`}
                                        >
                                            {quiz.score}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pro Card (Filler) */}
                            <div className="mt-auto pt-6">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white relative overflow-hidden">
                                    {/* Decorative circles */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                                    <h4 className="font-bold relative z-10">Unlock Unlimited</h4>
                                    <p className="text-xs text-violet-100 mt-1 mb-3 relative z-10 opacity-90">
                                        Get AI-generated summaries and unlimited quiz uploads.
                                    </p>
                                    <button className="w-full py-2 bg-white text-violet-700 text-xs font-bold rounded-lg relative z-10 hover:bg-violet-50 transition-colors">
                                        Upgrade to Pro
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    );
}

// Helper Component for Stats
function StatCard({ title, value, trend, icon: Icon, color }: any) {
    const colorStyles = {
        violet: "bg-violet-50 text-violet-600",
        emerald: "bg-emerald-50 text-emerald-600",
        blue: "bg-blue-50 text-blue-600",
    };

    return (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div
                    className={`w-12 h-12 rounded-2xl ${colorStyles[color as keyof typeof colorStyles]
                        } flex items-center justify-center`}
                >
                    <Icon size={24} />
                </div>
                <button className="text-slate-300 hover:text-slate-500">
                    <MoreHorizontal size={20} />
                </button>
            </div>
            <div>
                <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
                <div className="flex items-end gap-2">
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                        {value}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full mb-1 flex items-center">
                        <ArrowUpRight size={12} className="mr-0.5" />
                        {trend}
                    </span>
                </div>
            </div>
        </div>
    );
}
