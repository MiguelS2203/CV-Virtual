"use client"

import Image from "next/image"
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left animate-fade-up">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Portafolio Personal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Tu Nombre Completo
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {"Ingenieria en Software \u2014 8vo Semestre"}
          </p>
          <p className="mt-3 text-base text-muted-foreground max-w-lg leading-relaxed">
            Apasionada por el desarrollo de software, la tecnologia y la creacion de soluciones innovadoras.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity duration-200"
            >
              <ArrowDown className="h-4 w-4" />
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-accent transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              Contacto
            </a>
          </div>

          <div className="mt-6 flex items-center gap-5 md:justify-start justify-center">
            <a
              href="mailto:tu.correo@email.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">tu.correo@email.com</span>
            </a>
            <a
              href="https://linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>

        {/* Right photo */}
        <div className="flex-shrink-0 animate-fade-up animate-delay-200">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-accent shadow-lg">
            <Image
              src="/images/profile.jpg"
              alt="Foto de perfil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
