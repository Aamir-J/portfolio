import Link from "next/link"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aamir Jawadwala. Built with Next.js & shadcn/ui.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="mailto:jawadwala.aamir@gmail.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/Aamir-J"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <FaGithub className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aamir-jawadwala/"
            target="_blank"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}