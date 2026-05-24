import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <section id="contact" className="py-16">
            <p className="font-mono text-sm text-muted-foreground">[ contact section placeholder ]</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}