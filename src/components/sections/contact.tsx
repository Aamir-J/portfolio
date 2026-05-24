import Link from "next/link"
import { Send, MapPin, Circle } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FileText } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/fade-in"
import { EmailCard } from "@/components/email-card"
import { ContactForm } from "@/components/contact-form"

const externalLinks = [
  {
    label: "GitHub",
    value: "/Aamir-J",
    href: "https://github.com/Aamir-J",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "/in/aamir-jawadwala",
    href: "https://www.linkedin.com/in/aamir-jawadwala/",
    icon: FaLinkedin,
  },
  {
    label: "Resume",
    value: "/resume.pdf",
    href: "/resume.pdf",
    icon: FileText,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24">
      {/* Section label */}
      <FadeIn>
        <div className="mb-12 flex items-center gap-3">
          <Send className="h-4 w-4 text-accent-brand" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent-brand">
            Contact
          </span>
          <Separator className="flex-1" />
        </div>
      </FadeIn>

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: intro + email card + secondary links */}
        <FadeIn className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Let&apos;s <span className="text-accent-brand">talk.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Open to Data Engineering, Analytics Engineering, and AI Engineering roles.
              The fastest way to reach me is email.
            </p>
          </div>

          <EmailCard />

          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Find me elsewhere
            </p>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-md px-3 py-2 transition-colors hover:bg-card/40"
                  >
                    <span className="flex items-center gap-3">
                      <link.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent-brand" />
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {link.label}
                      </span>
                    </span>
                    <span className="font-mono text-xs text-foreground/80 transition-colors group-hover:text-foreground">
                      {link.value}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Status bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/40 pt-6 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Circle className="h-2 w-2 fill-green-500 text-green-500" />
              Available now
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              Boston, MA
            </span>
          </div>
        </FadeIn>

        {/* Right: contact form */}
        <FadeIn delay={0.1} className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Or send a message
          </p>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  )
}