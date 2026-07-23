"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Tech Solutions MX",
    role: "Desarrolladora Frontend (Practicas)",
    dates: "Ene 2025 - Jun 2025",
    project: "Plataforma de Gestion Interna",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    description:
      "Desarrollo de interfaces de usuario para una plataforma de gestion empresarial. Implemente componentes reutilizables, optimice el rendimiento y colabore con el equipo de backend para integrar APIs REST.",
  },
  {
    company: "StartUp Digital",
    role: "Desarrolladora Full Stack (Practicas)",
    dates: "Jul 2024 - Dic 2024",
    project: "App Movil de Delivery",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    description:
      "Participe en el desarrollo de una aplicacion movil de entrega a domicilio. Disemine la arquitectura de la base de datos, desarrolle endpoints de la API y cree pantallas de la aplicacion movil.",
  },
  {
    company: "Universidad - Proyecto Vinculado",
    role: "Lider de Equipo de Desarrollo",
    dates: "Ene 2024 - Jun 2024",
    project: "Sistema de Control Escolar",
    technologies: ["Java", "Spring Boot", "MySQL", "Angular"],
    description:
      "Lidere un equipo de 5 personas en el desarrollo de un sistema de control escolar para una escuela local. Gestione el proyecto usando Scrum y fui responsable de la arquitectura del backend.",
  },
]

export function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experiencia" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Experiencia Profesional
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <article
              key={exp.company}
              className={`p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${
                isVisible ? `animate-fade-up animate-delay-${(index + 1) * 100}` : ""
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
                  <p className="text-sm font-medium text-primary">
                    {exp.role}
                  </p>
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
