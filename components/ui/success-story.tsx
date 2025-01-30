import { Check, TrendingUp, Zap, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SuccessStoryProps {
  challenge: string;
  prescription: string;
  outcome: string;
  industry: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

function SuccessStory({
  challenge,
  prescription,
  outcome,
  industry,
  title,
  description,
  metrics,
}: SuccessStoryProps) {
  return (
    <div className="w-full py-12 lg:py-20">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">{industry}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-4xl tracking-tighter max-w-xl text-left font-regular">
                  {title}
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  {description}
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <TrendingUp className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Challenge</p>
                  <p className="text-muted-foreground text-sm">
                    {challenge}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Zap className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Prescription</p>
                  <p className="text-muted-foreground text-sm">
                    {prescription}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Users className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Outcome</p>
                  <p className="text-muted-foreground text-sm">
                    {outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-muted rounded-lg p-6 flex flex-col gap-2">
                <p className="text-3xl font-bold text-primary">{metric.value}</p>
                <p className="font-medium">{metric.label}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { SuccessStory }; 