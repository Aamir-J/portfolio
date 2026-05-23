import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <section id="hero" className="min-h-[60vh] py-16">
            <p className="font-mono text-sm text-muted-foreground">[ hero section placeholder ]</p>
          </section>
          <section id="about" className="py-16">
            <p className="font-mono text-sm text-muted-foreground">[ about section placeholder ]</p>
          </section>
          <section id="projects" className="py-16">
            <p className="font-mono text-sm text-muted-foreground">[ projects section placeholder ]</p>
          </section>
          <section id="experience" className="py-16">
            <p className="font-mono text-sm text-muted-foreground">[ experience section placeholder ]</p>
          </section>
          <section id="skills" className="py-16">
            <p className="font-mono text-sm text-muted-foreground">[ skills section placeholder ]</p>
          </section>
          <section id="contact" className="py-16">
            <p className="font-mono text-sm text-muted-foreground">[ contact section placeholder ]</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}