import Link from "next/link"
import { FolderGit2, ArrowUpRight, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { FadeIn } from "@/components/fade-in"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SpotlightCard } from "@/components/spotlight-card"

type Project = {
  number: string
  name: string
  tagline: string
  description: string
  stack: string[]
  metric: string
  links: {
    github?: string
    demo?: string
  }
}

const projects: Project[] = [
  {
    number: "01",
    name: "NeighbourWise AI",
    tagline: "Multi-Agent RAG · Geospatial Intelligence",
    description:
      "Greater Boston neighborhood livability platform built on a multi-agent AI pipeline. Six specialized agents score neighborhoods across nine domains, surfaced through a Streamlit UI backed by a REST API.",
    stack: [
      "LangGraph",
      "Snowflake",
      "Cortex",
      "Airflow",
      "dbt",
      "AWS S3",
      "FastAPI",
      "Streamlit",
    ],
    metric: "6+ agents · 9 livability domains · 15+ REST endpoints",
    links: {
      github: "https://github.com/NeighbourWise-AI/neighbourwise.ai_version1",
    },
  },
  {
    number: "02",
    name: "CardioPredict",
    tagline: "Clinical Decision Support · LLM Agents",
    description:
      "AI-powered cardiac risk detection system combining gradient-boosted ML with two Claude agents for natural-language SQL and context-aware decision support. SHAP explanations rendered in a clinician-facing Streamlit dashboard.",
    stack: [
      "Python",
      "XGBoost",
      "scikit-learn",
      "SHAP",
      "Claude API",
      "Streamlit",
    ],
    metric: "96.5% recall · 32 engineered features · 1,303 patients",
    links: {
      github: "https://github.com/Aamir-J/cardiopredict",
      demo: "https://cardiopredict-mj.streamlit.app/",
    },
  },
  {
    number: "03",
    name: "Motor Vehicle Collisions",
    tagline: "Data Engineering · Multi-Source Integration",
    description:
      "End-to-end analytics platform integrating collision datasets from New York, Chicago, Austin, and Montgomery County. Schemas standardized across heterogeneous sources, profiled on Databricks, and loaded into Snowflake through Talend and Azure Data Factory for unified trend analysis.",
    stack: [
      "PySpark",
      "Databricks",
      "Talend",
      "Azure Data Factory",
      "Snowflake",
      "Tableau",
      "Power BI",
    ],
    metric: "3M+ records · 4 cities standardized · field-level quality analysis",
    links: {
      github: "https://github.com/Aamir-J/Motor-Vehicle-Collisions",
    },
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      {/* Section label */}
      <FadeIn>
        <div className="mb-12 flex items-center gap-3">
          <FolderGit2 className="h-4 w-4 text-accent-brand" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent-brand">
            Projects
          </span>
          <Separator className="flex-1" />
          <span className="font-mono text-xs text-muted-foreground">
            {projects.length} featured
          </span>
        </div>
      </FadeIn>

      {/* Project cards */}
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <FadeIn key={project.number} delay={idx * 0.1}>
          <SpotlightCard
            spotlightColor="hsl(238 79% 70% / 0.10)"
            className="group rounded-xl border border-border/60 bg-card/40 p-6 shadow-[0_0_0_1px_hsl(var(--border)/0.4)] transition-all duration-300 hover:border-accent-brand/40 hover:shadow-[0_0_40px_-12px_hsl(var(--accent-brand)/0.3)] sm:p-8"
          >
            <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto]">
              {/* Left: content */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent-brand">
                      {project.number}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-foreground sm:text-2xl">
                      {project.name}
                    </h3>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>

                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono text-[10px] font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metric */}
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-accent-brand">→</span> {project.metric}
                </p>
              </div>

              {/* Right: links */}
              <div className="flex flex-row items-start gap-2 md:flex-col md:gap-2">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/40 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-border hover:text-foreground"
                  >
                    <FaGithub className="h-3 w-3" />
                    Repo
                  </Link>
                )}
                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/40 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-border hover:text-foreground"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Demo
                  </Link>
                )}
              </div>
            </div>

            {/* Hover arrow - now animates in from corner */}
            <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 text-muted-foreground/40 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground group-hover:opacity-100 sm:right-8 sm:top-8" />
          </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}