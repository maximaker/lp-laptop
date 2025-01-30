import { Eye, Target, LineChart, Wrench, RotateCw, Brain, Gauge } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const vitamins = [
  {
    Icon: Eye,
    name: "Vitamin A: Awareness",
    description: "Gain deep insights into your business's current state and market position.",
    href: "#awareness",
    cta: "Learn more",
    background: null,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Target,
    name: "Vitamin C: Clarity",
    description: "Define clear objectives and strategies for your business growth.",
    href: "#clarity",
    cta: "Learn more",
    background: null,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: LineChart,
    name: "Vitamin D: Direction",
    description: "Chart your course with data-driven decision making and strategic planning.",
    href: "#direction",
    cta: "Learn more",
    background: null,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Wrench,
    name: "Vitamin E: Execution",
    description: "Transform strategies into actionable plans and measurable results.",
    href: "#execution",
    cta: "Learn more",
    background: null,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: RotateCw,
    name: "Vitamin K: Continuity",
    description: "Ensure sustainable growth through continuous improvement and adaptation.",
    href: "#continuity",
    cta: "Learn more",
    background: null,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Brain,
    name: "Vitamin P: Progress",
    description: "Optimize features, test solutions, and implement engagement strategies for sustained growth.",
    href: "#progress",
    cta: "Learn more",
    background: null,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5",
  },
  {
    Icon: Gauge,
    name: "Vitamin M: Momentum",
    description: "Maintain velocity and accelerate growth through data-driven optimization and rapid iteration.",
    href: "#momentum",
    cta: "Learn more",
    background: null,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-5",
  },
];

export function VitaminsGrid() {
  return (
    <BentoGrid className="lg:grid-rows-4">
      {vitamins.map((vitamin) => (
        <BentoCard key={vitamin.name} {...vitamin} />
      ))}
    </BentoGrid>
  );
} 
