"use client";

import { useEffect, useState, useRef } from "react";
import { Target, Rocket, CheckCircle2, Globe2 } from "lucide-react";

export default function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Increased slightly so it triggers when more visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about us"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden"
    >
      {/* Background Grid Pattern (Same as Hero for consistency) */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Soft Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Built for the <span className="text-violet-600">curious</span>,
            <br />
            designed for results.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We believe that technology shouldn't replace studying—it should
            remove the friction from it.
          </p>
        </div>

        {/* The Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div
            className={`group bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-1 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Target className="text-violet-600 w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              To make elite exam preparation accessible, efficient, and deeply
              personalized for every learner. We are removing the busywork of
              creating flashcards and quizzes so you can focus on mastering the
              material.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Save 100+ hours of prep time</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Accessible on any device</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className={`group bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-1 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="text-blue-600 w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              A future where every student has an always-available AI tutor that
              understands their specific context, learning style, and academic
              goals. Education should adapt to the student, not the other way
              around.
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {["Adaptive Learning", "Global Access", "AI Tutoring"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
