"use client";

import {
  ArrowRight,
  Sparkles,
  FileText,
  BrainCircuit,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#fafafa] text-slate-900 pt-20 pb-16">
      {/* --- Background Elements --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Soft Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      {/* --- Main Content --- */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* Badge */}

        {/* Headline */}
        <h1
          className={`mt-4 max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Turn your notes into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">
            interactive quizzes.
          </span>
        </h1>

        {/* Subhead */}
        <p
          className={`max-w-2xl text-lg md:text-xl text-slate-500 mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Stop passively reading. Upload your PDFs or notes, and our AI
          instantly generates practice exams to help you master the material 10x
          faster.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-0.5 transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Start Studying Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
            <PlayCircle className="w-5 h-5 text-slate-400" />
            View Demo
          </button>
        </div>

        {/* --- Visual Demo Section (Floating Cards) --- */}
        <div
          className={`relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] perspective-1000 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Back Card (PDF Source) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[350px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 opacity-60 scale-90 -translate-y-12 rotate-[-4deg] z-0">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
              <FileText className="text-slate-400" size={20} />
              <div className="h-2 w-32 bg-slate-200 rounded-full" />
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-slate-100 rounded-full" />
              <div className="h-2 w-[90%] bg-slate-100 rounded-full" />
              <div className="h-2 w-[95%] bg-slate-100 rounded-full" />
              <div className="h-2 w-[80%] bg-slate-100 rounded-full" />
            </div>
          </div>

          {/* Middle Card (AI Processing) */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[350px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 opacity-80 scale-95 -translate-y-6 rotate-[2deg] z-10 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center animate-pulse">
              <BrainCircuit className="text-violet-500 w-8 h-8" />
            </div>
            <p className="text-sm font-medium text-slate-500">
              Analyze & Extract Concepts...
            </p>
          </div>

          {/* Front Card (The Quiz) */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50 p-8 z-20 hover:-translate-y-2 transition-transform duration-300">
            {/* Fake Quiz Interface */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2 py-1 rounded-md">
                QUESTION 1 of 10
              </span>
              <span className="text-xs text-slate-400">Time: 00:45</span>
            </div>

            <h3 className="text-lg md:text-xl font-medium text-slate-800 mb-6">
              What is the primary function of the mitochondria in a cell?
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-slate-200 hover:border-violet-500 hover:bg-violet-50/50 cursor-pointer transition-all group flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-violet-500" />
                <span className="text-slate-600 text-sm">
                  Protein synthesis
                </span>
              </div>
              <div className="p-4 rounded-xl border border-violet-500 bg-violet-50 cursor-pointer transition-all flex items-center gap-3 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-white" />
                </div>
                <span className="text-slate-800 font-medium text-sm">
                  Energy production (ATP)
                </span>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 hover:border-violet-500 hover:bg-violet-50/50 cursor-pointer transition-all group flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-violet-500" />
                <span className="text-slate-600 text-sm">Genetic storage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Footer */}
        <div className="mt-12 md:mt-0 flex flex-col items-center gap-4 transition-all duration-700 delay-700 opacity-80">
          <p className="text-sm text-slate-400 font-medium">
            TRUSTED BY STUDENTS FROM ALL OVER THE WORLD
          </p>
        </div>
      </div>
    </section>
  );
}
