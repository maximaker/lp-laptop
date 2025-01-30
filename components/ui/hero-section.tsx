"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Mockup, MockupFrame } from "./mockup"
import { Glow } from "./glow"

interface HeroSectionProps {
  badge?: {
    text: string
    action?: {
      text: string
      href: string
    }
  }
  title: string
  description: string
  actions?: Array<{
    text: string
    href: string
    variant?: "default" | "glow"
    icon?: React.ReactNode
  }>
  image?: {
    light: string
    dark: string
    alt: string
  }
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-24">
      <Glow variant="center" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            {badge && (
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                  {badge.text}
                  {badge.action && (
                    <>
                      <div className="mx-2 h-4 w-px bg-muted-foreground/20" />
                      <Link
                        href={badge.action.href}
                        className="font-medium text-primary hover:underline"
                      >
                        {badge.action.text}
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {title}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {description}
              </p>
            </div>
            {actions && actions.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {actions.map((action, i) => (
                  <Button
                    key={i}
                    asChild
                    variant={action.variant === "glow" ? "outline" : "default"}
                    className={cn(
                      "relative",
                      action.variant === "glow" &&
                        "border-brand/50 bg-brand/5 text-brand hover:bg-brand/10"
                    )}
                  >
                    <Link href={action.href}>
                      {action.icon}
                      {action.text}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
          {image && (
            <div className="flex items-center justify-center">
              <Mockup type="mobile" className="w-full max-w-[400px]">
                <MockupFrame>
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                    <Image
                      src={image.light}
                      alt={image.alt}
                      className="object-cover dark:hidden"
                      fill
                      priority
                    />
                    <Image
                      src={image.dark}
                      alt={image.alt}
                      className="hidden object-cover dark:block"
                      fill
                      priority
                    />
                  </div>
                </MockupFrame>
              </Mockup>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 
 