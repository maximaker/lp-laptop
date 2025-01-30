"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Brain, Target, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface FeatureTabsProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const FeatureTabs = ({
  badge = "Why choose us",
  heading = "Why leading ventures trust Digital Vitamins",
  description = "We bring expertise, clarity, and proven results to every digital product we work with.",
  tabs = [
    {
      value: "expertise",
      icon: <Brain className="h-auto w-4 shrink-0 stroke-muted-foreground group-data-[state=active]:stroke-primary" />,
      label: "Expert Care",
      content: {
        badge: "20+ Years Experience",
        title: "Deep expertise in digital product design & strategy",
        description:
          "Our team brings decades of combined experience in product design, development, and optimization. We've helped build, scale, and optimize products across industries—from fintech to IoT.",
        buttonText: "See Our Process",
        imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60",
        imageAlt: "Team collaboration",
      },
    },
    {
      value: "results",
      icon: <Target className="h-auto w-4 shrink-0 stroke-muted-foreground group-data-[state=active]:stroke-primary" />,
      label: "Proven Results",
      content: {
        badge: "Success Stories",
        title: "Track record of transformative results",
        description:
          "Our past clients don't just work with us—they come back. We're known for delivering measurable results and building long-term relationships based on trust and success.",
        buttonText: "View Case Studies",
        imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
        imageAlt: "Growth chart",
      },
    },
    {
      value: "commitment",
      icon: <Clock className="h-auto w-4 shrink-0 stroke-muted-foreground group-data-[state=active]:stroke-primary" />,
      label: "Long-term Support",
      content: {
        badge: "Continuous Care",
        title: "We're with you for the long haul",
        description:
          "A great strategy isn't enough—it needs proper execution and follow-through. We stay with you to ensure smooth implementation, measure results, and refine as needed.",
        buttonText: "Our Commitment",
        imageSrc: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=60",
        imageAlt: "Team meeting",
      },
    },
  ],
}: FeatureTabsProps) => {
  return (
    <section className="py-24">
      <div>
        <div className="container flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="bg-background">{badge}</Badge>
          <h2 className="max-w-2xl text-3xl font-bold md:text-4xl text-foreground">
            {heading}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div>
          <Tabs defaultValue={tabs[0].value} className="mt-8">
            <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="group flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
                >
                  {tab.icon} {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="container mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
                >
                  <div className="flex flex-col gap-5">
                    <Badge variant="outline" className="w-fit bg-background">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-3xl font-semibold lg:text-5xl text-foreground">
                      {tab.content.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {tab.content.description}
                    </p>
                    <Button className="mt-2.5 w-fit gap-2" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  </div>
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="rounded-xl w-full h-[400px] object-cover"
                  />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { FeatureTabs }; 