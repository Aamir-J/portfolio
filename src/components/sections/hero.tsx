import Link from "next/link"
import { ArrowRight, Download, MapPin, Circle } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative py-24 sm:py-32">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="space-y-8">
        <FadeIn>
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-foreground">{">"}</span> aamir.jawadwala / engineer
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Building data systems where engineering meets{" "}
            <span className="text-accent-brand">applied AI.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Data Engineer with three years of experience building production pipelines on PySpark,
            Airflow, dbt, and Snowflake. Bringing the same rigor to analytics engineering and applied
            AI systems.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              Boston, MA
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Circle className="h-2 w-2 fill-accent-brand text-accent-brand" />
              Open to full-time roles
            </span>
            <span>MS Information Systems · Northeastern 2026</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}