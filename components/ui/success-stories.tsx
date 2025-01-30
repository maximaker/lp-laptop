import { SuccessStory } from "@/components/ui/success-story";

const successStories = [
  {
    industry: "SaaS Platform",
    title: "From MVP to Market Leader",
    description: "How we helped a struggling MVP transform into a thriving product with engaged users and growing revenue.",
    challenge: "Low retention post-MVP launch with high user churn",
    prescription: "UX audit, feature prioritization, and user journey optimization",
    outcome: "Retention increased by 35% in 3 months",
    metrics: [
      {
        label: "User Retention",
        value: "+35%",
        description: "Increase in 30-day retention rate"
      },
      {
        label: "Feature Adoption",
        value: "2.5x",
        description: "Increase in core feature usage"
      },
      {
        label: "User Satisfaction",
        value: "92%",
        description: "Positive user feedback score"
      },
      {
        label: "Development Speed",
        value: "40%",
        description: "Faster feature delivery"
      }
    ]
  },
  {
    industry: "Enterprise Software",
    title: "Scaling Design Systems",
    description: "Helping an enterprise software company streamline their design and development process through systematic approaches.",
    challenge: "Inconsistent UI and slow development cycles",
    prescription: "Design system audit, component library implementation",
    outcome: "Development speed increased by 40%",
    metrics: [
      {
        label: "Development Time",
        value: "-40%",
        description: "Reduction in development time"
      },
      {
        label: "Code Reuse",
        value: "85%",
        description: "Component reusability rate"
      },
      {
        label: "Design Consistency",
        value: "98%",
        description: "UI consistency score"
      },
      {
        label: "Time to Market",
        value: "2x",
        description: "Faster feature releases"
      }
    ]
  },
  {
    industry: "Mobile App",
    title: "Engagement Transformation",
    description: "Revitalizing a mobile app's user engagement through strategic UX improvements and feature optimization.",
    challenge: "Declining user engagement and retention",
    prescription: "User research, UX optimization, feature enhancement",
    outcome: "2x increase in daily active users",
    metrics: [
      {
        label: "Daily Active Users",
        value: "2x",
        description: "Increase in daily usage"
      },
      {
        label: "Session Duration",
        value: "+45%",
        description: "Longer user sessions"
      },
      {
        label: "User Reviews",
        value: "4.8",
        description: "App store rating"
      },
      {
        label: "Feature Usage",
        value: "3x",
        description: "Increase in key actions"
      }
    ]
  }
];

export function SuccessStories() {
  return (
    <section className="py-12 md:py-24 lg:py-32 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Patient Success Stories
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              See how we&apos;ve helped products thrive through strategic diagnosis and targeted solutions.
            </p>
          </div>
        </div>
        <div className="space-y-8 mt-16">
          {successStories.map((story, index) => (
            <SuccessStory key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
} 