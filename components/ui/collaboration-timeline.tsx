"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search, Zap, LineChart, Target, RotateCw, Gauge, ArrowUpRight } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const collaborationSteps = [
  {
    title: "Discovery",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-8">
          We begin with a thorough analysis of your product&apos;s current state, understanding your goals, challenges, and market position.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <Search className="h-6 w-6 text-primary mb-2" />
            <h4 className="font-medium mb-1">Health Check</h4>
            <p className="text-xs text-muted-foreground">Comprehensive product analysis and diagnostics</p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <Target className="h-6 w-6 text-primary mb-2" />
            <h4 className="font-medium mb-1">Goal Setting</h4>
            <p className="text-xs text-muted-foreground">Define clear objectives and success metrics</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Strategy",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-8">
          Based on our findings, we develop a tailored strategy that addresses your specific needs and aligns with your business objectives.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1507992781348-310259076fe0?auto=format&fit=crop&q=80"
            alt="Strategy planning"
            width={600}
            height={300}
            className="rounded-lg object-cover h-44 w-full"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Execution",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-8">
          We implement the prescribed solutions with precision, ensuring every change contributes to your product&apos;s growth.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <Zap className="h-6 w-6 text-primary mb-2" />
            <h4 className="font-medium mb-1">Implementation</h4>
            <p className="text-xs text-muted-foreground">Swift and efficient execution of solutions</p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <LineChart className="h-6 w-6 text-primary mb-2" />
            <h4 className="font-medium mb-1">Monitoring</h4>
            <p className="text-xs text-muted-foreground">Continuous tracking of progress and results</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Growth",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base font-normal mb-8">
          We provide ongoing support and optimization to ensure your product continues to evolve and thrive in the long term.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <RotateCw className="h-6 w-6 text-primary mb-2" />
            <h4 className="font-medium mb-1">Maintenance</h4>
            <p className="text-xs text-muted-foreground">Regular updates and improvements</p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <Gauge className="h-6 w-6 text-primary mb-2" />
            <h4 className="font-medium mb-1">Performance</h4>
            <p className="text-xs text-muted-foreground">Continuous optimization and tuning</p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <ArrowUpRight className="h-6 w-6 text-primary mb-2" />
            <h4 className="font-medium mb-1">Growth</h4>
            <p className="text-xs text-muted-foreground">Scaling strategies and support</p>
          </div>
        </div>
      </div>
    ),
  },
];

export function CollaborationTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-background font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 text-foreground">
          How We Work Together
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-[900px]">
          Our collaborative process is designed to understand your needs, develop effective solutions, and deliver measurable results.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {collaborationSteps.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-muted border border-border" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
} 