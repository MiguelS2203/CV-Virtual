"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Plus } from "lucide-react"

const projects = [
  {
    title: "Dashboard de Analitica Web",
    semester: "7mo Semestre",
    image: "/images/project-1.jpg",
    tags: ["React", "Chart.js", "Tailwind"],
    description:
      "Panel de control interactivo para visualizacion de datos y metricas en tiempo real.",
  },
  {
    title: "App de Gestion de Tareas",
    semester: "6to Semestre",
    image: "/images/project-2.jpg",
    tags: ["React Native", "Firebase"],
    description:
      "Aplicacion movil para gestion de tareas con autenticacion y sincronizacion en la nube.",
  },
  {
    title: "E-Commerce Responsivo",
    semester: "5to Semestre",
    image: "/images/project-3.jpg",
    tags: ["Next.js", "Stripe", "MongoDB"],
    description:
      "Tienda en linea con carrito de compras, pasarela de pago y panel de administracion.",
  },
  {
    title: "API REST de Microservicios",
    semester: "8vo Semestre",
    image: "/images/project-4.jpg",
    tags: ["Node.js", "Docker", "PostgreSQL"],
    description:
      "Arquitectura de microservicios con autenticacion JWT, documentacion con Swagger y CI/CD.",
  },
]

export function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="proyectos" className="py-24 px-6 bg-card border-y border-border">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
            Mi Trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Proyectos Academicos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group rounded-xl overflow-hidden bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md ${
                isVisible ? `animate-fade-up animate-delay-${(index + 1) * 100}` : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary font-medium mt-1">
                      {project.semester}
                    </p>
                  </div>
                  <button
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    aria-label={`Ver mas sobre ${project.title}`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
