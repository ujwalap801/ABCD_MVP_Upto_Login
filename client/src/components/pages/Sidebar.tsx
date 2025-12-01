"use client";
 
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  UploadCloud,
  GraduationCap,
  Settings,
  LogOut,
  Sparkles,
  MoreVertical,
} from "lucide-react";
 
export function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
 
  const navItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
    { icon: GraduationCap, label: "My Tests", path: "/dashboard/tests" },
    { icon: FileText, label: "Saved Quizzes", path: "/dashboard/quizzes" },
  ];
 
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-slate-50/50 border-r border-slate-200 backdrop-blur-xl z-40">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6 border-b border-slate-200/50">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-violet-500/20">
            <Sparkles size={16} fill="currentColor" />
          </div>
          <span className="text-lg font-bold text-slate-900 tracking-tight">
            ABCD<span className="text-slate-400 font-medium">Exam</span>
          </span>
        </Link>
      </div>
 
      {/* Navigation */}
      <div className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
        {/* Main Menu */}
        <div>
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Menu
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-white text-violet-600 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
                }`}
              >
                <item.icon
                  size={18}
                  strokeWidth={isActive(item.path) ? 2.5 : 2}
                />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
 
        {/* Actions */}
        <div>
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Actions
          </p>
          <nav className="space-y-1">
            <Link
              to="/dashboard/upload"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 transition-all group"
            >
              <div className="p-1.5 bg-violet-100 text-violet-600 rounded-lg group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <UploadCloud size={16} />
              </div>
              Upload New File
            </Link>
          </nav>
        </div>
      </div>
 
      {/* User Footer */}
      <div className="p-4 border-t border-slate-200/50">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm cursor-pointer hover:border-violet-200 transition-colors">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-xs">
            JL
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">
              Jordan Lee
            </p>
            <p className="text-xs text-slate-400 truncate">Free Plan</p>
          </div>
          <Settings size={16} className="text-slate-400" />
        </div>
      </div>
    </aside>
  );
}
 