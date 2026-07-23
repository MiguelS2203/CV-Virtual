"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Shrimptech",
    dates: "Junio 2025 - Febrero",
    project: "Sistema de gestión de una empresa Camaronera",
    technologies: ["TypeScript", "HTML", "CSS"],
    description:
      "Participe en el desarrollo de interfaces de usuario para una el módulo de ventas. Implemente componentes reutilizables, optimice el rendimiento, añadi tablas, total de compras y colabore con el equipo de backend para integrar APIs REST.",
  },
  {
    company: "Mundo sobre Ruedas",
    dates: "Abril 2025 - Mayo 2025",
    project: "Sitio web informativo sobre autos",
    technologies: ["HTML", "CSS"],
    description:
      "Participe en la creación de un sitio web informativo sobre el mundo automotriz, implementando una estructura en HTML5, diseño responsivo con CSS y una interfaz intuitiva para presentar contenido sobre historia, tipos de autos e innovación tecnológica.",
  },
]

export function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experiencia" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Experiencia Educativa
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <article
              key={exp.company}
              className={`p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${isVisible ? `animate-fade-up animate-delay-${(index + 1) * 100}` : ""
                }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {"Proyecto: "}{exp.project}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.dates}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}