"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { GraduationCap, Building2, Code2 } from "lucide-react"

const stats = [
  {
    icon: GraduationCap,
    value: "8",
    label: "Semestres Cursados",
    description: "De formacion en Ingenieria en Software",
  },
  {
    icon: Building2,
    value: "0",
    label: "Empresas / Practicas",
    description: "Experiencia en entornos profesionales reales",
  },
  {
    icon: Code2,
    value: "12+",
    label: "Tecnologias",
    description: "Lenguajes, frameworks y herramientas dominadas",
  },
]

export function Stats() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 px-6 bg-card border-y border-border">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-8 rounded-xl bg-background border border-border ${isVisible ? `animate-fade-up animate-delay-${(index + 1) * 100}` : ""
                }`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}