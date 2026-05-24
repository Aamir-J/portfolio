import { Wrench } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/fade-in"

type SkillGroup = {
  category: string
  items: string[]
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "SQL", "Scala", "Shell Scripting", "HiveQL", "Java", "R"],
  },
  {
    category: "Databases",
    items: [
      "Snowflake",
      "MySQL",
      "Hive",
      "MSSQL",
      "SQLite3",
      "HDFS",
      "HBase",
      "Oracle",
      "PostgreSQL",
    ],
  },
  {
    category: "Tools",
    items: [
      "dbt",
      "Apache Airflow",
      "Azure Data Factory",
      "Databricks",
      "AWS S3",
      "AWS EC2",
      "Tableau",
      "Power BI",
      "ThoughtSpot",
      "Talend",
      "Git",
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      "PySpark",
      "pandas",
      "NumPy",
      "scikit-learn",
      "FastAPI",
      "Flask",
      "Streamlit",
      "LangGraph",
      "SQLAlchemy",
      "seaborn",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      {/* Section label */}
      <FadeIn>
        <div className="mb-12 flex items-center gap-3">
          <Wrench className="h-4 w-4 text-accent-brand" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent-brand">
            Skills
          </span>
          <Separator className="flex-1" />
        </div>
      </FadeIn>

      {/* Skills table */}
      <div className="overflow-hidden rounded-xl border border-border/60 bg-card/30">
        {skillGroups.map((group, idx) => (
          <FadeIn key={group.category} delay={idx * 0.08}>
            <div
              className={`grid grid-cols-1 gap-3 px-6 py-5 sm:grid-cols-[200px_1fr] sm:gap-8 sm:px-8 sm:py-6 ${
                idx !== skillGroups.length - 1 ? "border-b border-border/60" : ""
              }`}
            >
              {/* Category label */}
              <div className="flex items-start">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-brand">
                  {group.category}
                </span>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                {group.items.map((item, itemIdx) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="text-sm text-foreground/90">{item}</span>
                    {itemIdx !== group.items.length - 1 && (
                      <span className="text-xs text-muted-foreground/40">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}