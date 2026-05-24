"use client"

import * as React from "react"
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react"
import { toast } from "sonner"

const EMAIL = "jawadwala.aamir@gmail.com"

export function EmailCard() {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      toast.success("Email copied to clipboard")
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("Couldn't copy — please copy manually")
    }
  }

  return (
    <a
      href={`mailto:${EMAIL}`}
      className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-border/60 bg-card/40 p-5 transition-all hover:border-accent-brand/40 hover:bg-card/60 hover:shadow-[0_0_40px_-12px_hsl(var(--accent-brand)/0.3)] sm:p-6"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-brand/10 text-accent-brand transition-colors group-hover:bg-accent-brand/20">
          <Mail className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Email
          </p>
          <p className="truncate font-mono text-sm text-foreground sm:text-base">
            {EMAIL}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          onClick={handleCopy}
          aria-label="Copy email"
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-all hover:border-border hover:text-foreground"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-accent-brand" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
    </a>
  )
}