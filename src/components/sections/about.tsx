import { Terminal } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { Separator } from "@/components/ui/separator"

const focusItems = [
  {
    label: "Building",
    text: "Multi-agent AI systems with LangGraph, RAG pipelines, and production-grade guardrails.",
  },
  {
    label: "Working with",
    text: "dbt on Snowflake — semantic layers, slowly changing dimensions, performance-tuned mart models.",
  },
  {
    label: "Exploring",
    text: "Evaluation frameworks for LLM applications and tool-use agents in regulated domains.",
  },
  {
    label: "Open to",
    text: "Data Engineering, Analytics Engineering, and AI Engineering roles at companies shipping real products.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24">
      {/* Section label */}
      <FadeIn>
        <div className="mb-12 flex items-center gap-3">
          <Terminal className="h-4 w-4 text-accent-brand" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent-brand">
            About
          </span>
          <Separator className="flex-1" />
        </div>
      </FadeIn>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Bio block */}
        <FadeIn delay={0.1} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Data Engineer with range across{" "}
            <span className="text-accent-brand">the modern stack.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I started in data engineering at Tata Consultancy Services, building Talend and PySpark
              pipelines that ingested data from 25+ partner banks into the Reserve Bank of India&apos;s
              centralized infrastructure. That foundation in scale and reliability shaped how I think
              about every system I build today.
            </p>
            <p>
              Since then I&apos;ve worked across the modern data stack — dbt and Snowflake at Lendio,
              where I shipped client-facing analytics products that drove measurable changes in lender
              policy decisions — and increasingly into applied AI, designing multi-agent LangGraph
              systems and RAG pipelines for production use.
            </p>
            <p>
              My core identity is Data Engineering — the discipline of building reliable, scalable
              pipelines and well-modeled data systems. From that foundation I&apos;ve extended into
              analytics engineering and, more recently, applied AI: the layer where well-modeled data
              becomes the foundation for systems that actually reason about it.
            </p>
          </div>
        </FadeIn>

        {/* Current focus block */}
        <FadeIn delay={0.2} className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Current focus
            </span>
          </div>

          <ul className="space-y-5">
            {focusItems.map((item) => (
              <li key={item.label} className="flex flex-col gap-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-sm leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}