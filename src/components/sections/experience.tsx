import { Briefcase } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/fade-in"

type Role = {
  company: string
  role: string
  period: string
  location: string
  description: string
  stack: string[]
}

const roles: Role[] = [
  {
    company: "Lendio",
    role: "Analytics Engineer Intern",
    period: "Jun 2025 — Dec 2025",
    location: "Lehi, UT · Remote",
    description:
      "Responsible for the modeling layer of client-facing analytics products delivered to Lendio's external lending partners. Designed and shipped the Decisioning Outcomes Report, a dbt product that surfaced loan policy gaps and led several lenders to revise their underwriting rules. Refactored mart queries into pre-aggregated views to improve dashboard performance, and modeled lender policy history as slowly changing dimensions to support point-in-time analysis.",
    stack: ["dbt", "Snowflake", "SQL", "ThoughtSpot", "Jinja"],
  },
  {
    company: "Northeastern University",
    role: "Data Assistant",
    period: "Mar 2024 — May 2025",
    location: "Boston, MA",
    description:
      "Supported the planning and execution of 40+ commencement ceremonies across two graduation cycles, covering 35,000+ students. Built Python ETL pipelines that consolidated student, ceremony, and logistics data into a unified Tableau reporting layer for weekly review. Applied NLP techniques in NLTK to classify open-ended survey responses, surfacing themes in student feedback that were not visible in structured fields.",
    stack: ["Python", "Tableau", "NLTK", "ETL", "SQL"],
  },
  {
    company: "Tata Consultancy Services",
    role: "Data Engineer",
    period: "Aug 2022 — Dec 2023",
    location: "Mumbai, IN",
    description:
      "Worked on the team building the Reserve Bank of India's centralized data platform. Developed Talend pipelines that ingested data from 25+ partner banks into Hive, with downstream standardization, validation, and metadata generation. Built and optimized PySpark workflows for dimension-update jobs across MySQL and Hive, reducing nightly processing time by more than 50%. Gained foundational experience in large-scale data reliability and operational rigor.",
    stack: ["Talend", "PySpark", "Hive", "HDFS", "MySQL", "Shell", "Python"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      {/* Section label */}
      <FadeIn>
        <div className="mb-12 flex items-center gap-3">
          <Briefcase className="h-4 w-4 text-accent-brand" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent-brand">
            Experience
          </span>
          <Separator className="flex-1" />
        </div>
      </FadeIn>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line - drawn with a gradient that fades at the bottom */}
        <div
          aria-hidden
          className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-accent-brand/40 via-border to-transparent"
        />

        <div className="space-y-12">
          {roles.map((role, idx) => (
            <FadeIn key={role.company} delay={idx * 0.1}>
              <div className="relative pl-10">
                {/* Node on the line */}
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-brand/30 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-brand" />
                </span>

                {/* Header row */}
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                      {role.role}
                      <span className="text-muted-foreground"> · </span>
                      <span className="text-accent-brand">{role.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground">
                      {role.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {role.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {role.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono text-[10px] font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}