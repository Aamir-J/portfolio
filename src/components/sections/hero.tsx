import Link from "next/link"
import { ArrowRight, Download, MapPin, Circle, GraduationCap, School } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative py-24 sm:py-32">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.2] dark:opacity-[0.08]"
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
          <h1 className="max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            Building data systems where engineering meets{" "}
            <span className="text-gradient-brand">applied AI.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="max-w-2xl text-[15px] leading-relaxed text-foreground/80">
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
            <Button asChild variant="outline" size="lg" className="border-foreground/20 bg-background/60 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-background/80 hover:shadow-md dark:border-border dark:bg-transparent dark:shadow-none dark:hover:bg-card/50">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <MapPin className="h-3 w-3" />
              Boston, MA
            </span>
            <span className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/60 opacity-75" />
                <Circle className="relative h-2 w-2 fill-green-500 text-green-500" />
              </span>
              Open to full-time roles
            </span>
            <span className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <GraduationCap className="h-3 w-3" />
              Master of Science in Information Systems
            </span>
            <span className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
              <School className="h-3 w-3" />
              Northeastern University · 2026
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}