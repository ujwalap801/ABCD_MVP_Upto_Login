"use client";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ChevronRight, LogIn } from "lucide-react";

// IMPORTANT: Import the component you created in the previous step.
// Ensure the file path matches where you saved it (e.g., "./signup-modal").
import SignUpModal from "./pages/SignupModel";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false); // New state for Modal

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled || isOpen
            ? "bg-white/80 backdrop-blur-xl border-slate-200/60 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* --- Logo --- */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group select-none"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative flex items-center justify-center">
                <div className="w-9 h-9 bg-gradient-to-tr from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-violet-500/20 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 z-10">
                  <Sparkles
                    size={18}
                    fill="currentColor"
                    className="text-white"
                  />
                </div>
                {/* Subtle glow behind logo */}
                <div className="absolute inset-0 bg-violet-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              <span className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-0.5">
                ABCD
                <span className="font-medium text-slate-400">Exam</span>
              </span>
            </Link>

            {/* --- Desktop Menu --- */}
            <div className="hidden md:flex items-center gap-1">
              {["Features", "Mission", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all relative group"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* --- Desktop Actions --- */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/signin"
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Log in
              </Link>

              <button
                onClick={() => setShowSignUp(true)} // Opens Modal
                className="group relative px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Sign Up
                  <ChevronRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </span>
                {/* Button sheen effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
              </button>
            </div>

            {/* --- Mobile Menu Button --- */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Mobile Menu Background Pattern */}
          <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

          <div className="relative px-6 py-8 space-y-6 flex flex-col items-center">
            <div className="flex flex-col w-full gap-2">
              {["Features", "Mission", "Pricing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="w-full text-center py-3 text-lg font-medium text-slate-600 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>

            <hr className="w-full border-slate-100" />

            <div className="w-full space-y-4">
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 w-full py-3 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <LogIn size={18} />
                Log in
              </Link>

              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowSignUp(true); // Opens Modal from Mobile
                }}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-base shadow-lg shadow-slate-900/20 active:scale-95 transition-all"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Sign Up Modal Integration --- */}
      <SignUpModal open={showSignUp} onClose={() => setShowSignUp(false)} />
    </>
  );
}
