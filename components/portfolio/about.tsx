"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CheckCircle2 } from "lucide-react"

const qualities = [
  "Responsable y comprometido",
  "Dinamico y proactivo",
  "Trabajo en equipo",
  "Resolucion de problemas",
  "Aprendizaje continuo",
  "Comunicación efectiva",
]

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            Conoceme
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Sobre Mi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div className="space-y-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Soy estudiante de octavo semestre de Ingenieria en Software con una fuerte pasion por el desarrollo
              de aplicaciones web y moviles. Durante mi formacion academica he adquirido experiencia en diversas
              tecnologias y metodologias de desarrollo agil.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Me motiva crear soluciones tecnologicas que tengan un impacto positivo en las personas.
              Busco constantemente aprender nuevas herramientas y mejorar mis habilidades tecnicas
              para enfrentar los retos del mundo digital.
            </p>
          </div>

          {/* Qualities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {qualities.map((quality) => (
              <div
                key={quality}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border"
              >
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}