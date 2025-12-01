"use client";

import type React from "react";
import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent -z-10" />

      {/* Animated Orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/20 blur-3xl opacity-50 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl opacity-50 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-slide-in-up">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of students who are already acing their exams with
            AI-powered preparation. Start free today!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/95 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
              >
                Get Started
              </button>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <p className="mt-4 text-white/90 flex items-center justify-center gap-2 animate-slide-in-up">
                ✓ Success! Check your email to get started.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-200 flex items-center justify-center gap-2 animate-slide-in-up">
                ⚠ Please enter a valid email address.
              </p>
            )}
            {status === "idle" && (
              <p className="mt-4 text-sm text-white/70 flex items-center justify-center gap-2">
                🔒 No credit card required • 100 free credits
              </p>
            )}
          </form>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {[
              { icon: "✓", text: "Free Trial" },
              { icon: "🔒", text: "Secure" },
              { icon: "⏸", text: "Cancel Anytime" },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90 font-semibold"
                style={{
                  animation: `slideInUp 0.6s ease-out`,
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <span className="text-lg">{badge.icon}</span>
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
