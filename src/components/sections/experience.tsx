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
      "Owned the modeling layer of client-facing analytics products delivered to 75+ external lending partners. Modeled data end-to-end in dbt on Snowflake across staging, intermediate, and mart layers, delivered through tiered, purchase-gated analytics packages that drove measurable lender policy changes. Modeled lender policy history as slowly changing dimensions via dbt snapshots for point-in-time analysis, and refactored heavy SQL into pre-aggregated views that cut dashboard load times by 35%.",
    stack: ["dbt", "Snowflake", "SQL", "ThoughtSpot", "Jinja"],
  },
  {
    company: "Northeastern University",
    role: "Data Assistant",
    period: "Mar 2024 — May 2025",
    location: "Boston, MA",
    description:
      "Built a serverless AWS pipeline powering commencement reporting for 55,000+ students across 40+ ceremonies. Automated weekly vendor API ingestion into S3 using Lambda, Step Functions, and EventBridge, transformed raw JSON into optimized Parquet with Glue, and queried it through Athena for a Tableau reporting layer on a weekly refresh. Applied NLP in NLTK to classify open-ended survey responses, surfacing themes not visible in structured fields.",
    stack: ["AWS", "Lambda", "Glue", "Athena", "Tableau", "Python", "NLTK", "SQL"],
  },
  {
    company: "Tata Consultancy Services",
    role: "Data Engineer",
    period: "Aug 2022 — Dec 2023",
    location: "Mumbai, IN",
    description:
      "Worked on the team building the Reserve Bank of India's centralized regulatory data platform. Developed Talend pipelines that ingested data from 25+ partner banks into Hadoop/Hive, with downstream standardization, validation, and metadata generation. Built and optimized PySpark workflows for dimension-update jobs across MySQL and Hive, reducing processing time by more than 50%, and wrote routines to validate regulatory data between the XBRL and SDMX reporting standards.",
    stack: ["Talend", "PySpark", "Hadoop", "Hive", "HDFS", "MySQL", "Shell", "Python"],
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
          <Separator className="flex-1 bg-foreground/35" />
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
                      className="font-mono text-[10px] font-normal transition-all hover:-translate-y-0.5 hover:border-accent-brand/40 hover:text-foreground"
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