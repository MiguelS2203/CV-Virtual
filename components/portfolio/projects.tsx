"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Plus } from "lucide-react"

const projects = [
  {
    title: "Sistema de gestión de una empresa Camaronera",
    semester: "7mo Semestre",
    image: "/images/project-1.jpg",
    tags: ["TypeScript", "HTML", "CSS"],
    description:
      "Panel de control interactivo para visualizacion de datos y metricas.",
    link: "https://github.com/MiguelS2203/shrimptech",
  },
  {
    title: "App de Gestion de Tareas",
    semester: "6to Semestre",
    image: "/images/project-2.jpg",
    tags: ["HTML", "CSS"],
    description:
      "Sitio web informativo sobre el mundo automotriz.",
    link: "https://github.com/MiguelS2203/Proyecto",
  },
]

export function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="proyectos" className="py-24 px-6 bg-card border-y border-border">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
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
            <Link
              key={project.title}
              href={project.link}
              target="_blank"
              className="block"
            >
              <article
                className={`group rounded-xl overflow-hidden bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md cursor-pointer ${isVisible
                    ? `animate-fade-up animate-delay-${(index + 1) * 100}`
                    : ""
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
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
                    >
                      <Plus className="h-4 w-4" />
                    </div>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}