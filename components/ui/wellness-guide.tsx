import { Search, BookOpen, LineChart, Lightbulb, Users, Brain, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface GuideCardProps {
  category: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  imageUrl?: string;
}

function GuideCard({ category, title, description, icon, className, imageUrl }: GuideCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl bg-background transition-all hover:shadow-lg",
      "border border-border",
      className
    )}>
      {imageUrl && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={imageUrl}
            alt="Background"
            fill
            className="h-full w-full object-cover grayscale opacity-10 transition-all group-hover:opacity-15"
          />
        </div>
      )}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div>
          <Badge variant="outline" className="mb-4">
            {category}
          </Badge>
          <div className="mb-4">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <Button variant="ghost" className="mt-4 w-fit p-0 text-primary">
          Read more →
        </Button>
      </div>
    </div>
  );
}

const guides = [
  {
    category: "Fundamentals",
    title: "Product Health Essentials",
    description: "A comprehensive guide to understanding and measuring your product's vital signs.",
    icon: <Search className="h-8 w-8 text-primary" />,
    className: "md:col-span-2 md:row-span-2",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  {
    category: "Research",
    title: "User Research Techniques",
    description: "Learn effective methods for understanding your users.",
    icon: <Users className="h-8 w-8 text-primary" />,
    className: "md:col-span-1",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
  },
  {
    category: "Strategy",
    title: "Growth Metrics",
    description: "Key metrics to track for sustainable product growth.",
    icon: <LineChart className="h-8 w-8 text-primary" />,
    className: "md:col-span-1",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    category: "Design",
    title: "UX Design Principles",
    description: "Create intuitive and engaging user experiences.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    className: "md:col-span-2",
    imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80"
  },
  {
    category: "Innovation",
    title: "Product Innovation",
    description: "Frameworks for continuous product evolution.",
    icon: <Brain className="h-8 w-8 text-primary" />,
    className: "md:col-span-2",
    imageUrl: "https://images.unsplash.com/photo-1456428746267-a1756408f782?auto=format&fit=crop&q=80"
  },
  {
    category: "Market",
    title: "Market Fit Guide",
    description: "Strategies for achieving and maintaining product-market fit.",
    icon: <Target className="h-8 w-8 text-primary" />,
    className: "md:col-span-2",
    imageUrl: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80"
  }
];

export function WellnessGuide() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Product Wellness Library
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Curated guides and resources to help your product reach its full potential.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {guides.map((guide, i) => (
            <GuideCard
              key={i}
              {...guide}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 
