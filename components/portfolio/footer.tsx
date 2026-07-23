"use client"

import { Mail, Github, Linkedin } from "lucide-react"

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:tu.correo@email.com",
    text: "tu.correo@email.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/tu-perfil",
    text: "linkedin.com/in/tu-perfil",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/tu-usuario",
    text: "github.com/tu-usuario",
  },
]

export function Footer() {
  return (
    <footer id="contacto" className="py-16 px-6 bg-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-foreground/60 mb-2">
            Contacto
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-balance">
            {"Trabajemos juntos"}
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/60 max-w-md mx-auto leading-relaxed">
            {"Estoy abierta a nuevas oportunidades, colaboraciones y proyectos interesantes. No dudes en contactarme."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors duration-200"
              aria-label={link.label}
            >
              <link.icon className="h-4 w-4" />
              <span className="text-sm">{link.text}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            {"\u00A9 2026 Tu Nombre Completo. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
