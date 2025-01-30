"use client"

import * as React from "react"
import { HeroSection } from "./hero-section"
import { Icons } from "./icons"

export function HeroSectionDemo() {
  return (
    <HeroSection
      badge={{
        text: "Introducing our new components",
        action: {
          text: "Learn more",
          href: "/docs",
        },
      }}
      title="Build faster with beautiful components"
      description="Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components."
      actions={[
        {
          text: "Get Started",
          href: "/docs/getting-started",
          variant: "default",
        },
        {
          text: "GitHub",
          href: "https://github.com/your-repo",
          variant: "glow",
          icon: <Icons.gitHub className="h-5 w-5" />,
        },
      ]}
      image={{
        light: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2064&ixlib=rb-4.0.3",
        dark: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2064&ixlib=rb-4.0.3",
        alt: "UI Components Preview",
      }}
    />
  )
} 
 