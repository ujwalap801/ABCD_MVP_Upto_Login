"use client";

import { Brain, BarChart3, Zap, Coins, CheckCircle2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const features = [
  {
    icon: Brain,
    title: "AI Quiz Generation",
    description:
      "Advanced NLP models understand context and relevance to create meaningful questions from your materials instantly.",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Track your progress with detailed insights and adaptive learning recommendations tailored specifically to your weak points.",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Zap,
    title: "Multiple Question Formats",
    description:
      "Multiple choice, short answer, essay, matching — all generated automatically to simulate real exam conditions.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Coins,
    title: "Flexible Credits",
    description:
      "Pay only for what you use. No hidden subscriptions. Generate as many quizzes as you want with our flexible system.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-xs font-semibold text-violet-700 tracking-wide uppercase">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Powerful features for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              smarter learning.
            </span>
          </h2>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to transform your raw notes into active recall
            sessions. Stop re-reading and start testing.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-violet-100 transition-colors duration-500 pointer-events-none" />

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* Icon Box */}
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <Icon className="text-white" size={28} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed group-hover:text-slate-600">
                      {feature.description}
                    </p>

                    {/* Learn More Link (Optional decorative element) */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
