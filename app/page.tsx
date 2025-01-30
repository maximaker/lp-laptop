'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Footerdemo } from "@/components/ui/footer-section"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { motion } from "framer-motion"
import { FeatureTabs } from "@/components/ui/feature-tabs"
import { TestimonialsSection } from "@/components/ui/testimonials-section"
import { Search, Wrench, LineChart, Eye, Target, RotateCw } from "lucide-react"
import { FeatureSteps } from "@/components/ui/feature-steps"
import { VitaminsGrid } from "@/components/ui/vitamins-grid"
import { SuccessStories } from "@/components/ui/success-stories"
import { WellnessGuide } from "@/components/ui/wellness-guide"
import { CollaborationTimeline } from "@/components/ui/collaboration-timeline"
import { HeroSectionDemo } from "@/components/ui/hero-section-demo"

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(255, 255, 255);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 95, 0, 0.05),
            rgba(255, 95, 0, 0.1),
            rgba(255, 95, 0, 0.05),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(255, 255, 255);
          border-radius: 9999px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 95, 0, 0.05),
            rgba(255, 95, 0, 0.1),
            rgba(255, 95, 0, 0.05),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 95, 0, 0.08) 0%,
            rgba(255, 95, 0, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-6 px-8 border-b border-muted">
        <Link href="/" className="text-lg font-semibold">
          Digital Vitamins
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Book a Consultation</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </nav>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSectionDemo />

        {/* Feature Tabs Section */}
        <FeatureTabs />

        {/* Process Section */}
        <CollaborationTimeline />

        {/* Vitamins Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Business Vitamins
                </h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Essential nutrients for your business growth. Each vitamin is carefully formulated to address specific aspects of your business health.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-16">
              <VitaminsGrid />
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <SuccessStories />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Interactive Quiz Section */}
        <section className="py-24 px-6 bg-muted/50">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                What does your product need? Find out in minutes.
              </h2>
              <p className="text-muted-foreground mb-8">
                Take our interactive quiz to identify the right vitamins for your product&apos;s health.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground">
                Take the quiz
                        </Button>
            </div>
          </div>
        </section>

        {/* Blog/Resource Section */}
        <WellnessGuide />

        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-muted/50">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Ready to boost your product&apos;s health?
              </h2>
              <div className="space-x-4">
                <Button size="lg" className="bg-primary text-primary-foreground">
                  Get your diagnosis
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footerdemo />
    </div>
  )
}