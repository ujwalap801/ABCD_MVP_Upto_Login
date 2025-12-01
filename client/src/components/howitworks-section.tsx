"use client";

import { Upload, Wand2, BookOpen } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Upload",
    description: "Share your study notes, PDFs, or any learning material",
    icon: Upload,
    color: "from-primary to-accent",
  },
  {
    number: "02",
    title: "Generate",
    description:
      "Our AI analyzes content and creates personalized quizzes instantly",
    icon: Wand2,
    color: "from-accent to-secondary",
  },
  {
    number: "03",
    title: "Learn",
    description: "Study with adaptive questions and get instant feedback",
    icon: BookOpen,
    color: "from-secondary to-primary",
  },
];

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps(Array.from({ length: steps.length }, (_, i) => i));
          }
        });
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
      id="how-it-works"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/3"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Three Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            Upload. Generate. Learn. Your study flow becomes 10× faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div
                    className={`relative z-10 inline-flex items-center justify-center mb-6`}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg shadow-primary/20`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
