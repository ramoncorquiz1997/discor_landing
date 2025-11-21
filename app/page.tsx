import React from "react";
import ThemeToggle from "@/components/theme-toggle";
import { FadeIn, Stagger, Item } from "@/components/motion";
import Image from "next/image";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

// ---- GRUPO DISCOR — Landing (Light/Dark + Motion)

const NavLink = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
  >
    {children}
  </a>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-start">
    <span className="text-3xl md:text-4xl font-semibold text-[var(--foreground)]">{value}</span>
    <span className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400">{label}</span>
  </div>
);

const SectionTitle = ({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="max-w-3xl mx-auto text-center space-y-3">
    {kicker && (
      <p className="uppercase tracking-widest text-[10px] md:text-xs text-indigo-500/90 dark:text-indigo-300/90">
        {kicker}
      </p>
    )}
    <h2 className="text-2xl md:text-4xl font-semibold text-[var(--foreground)]">{title}</h2>
    {subtitle && <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
  </div>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 md:p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_0_1px_rgba(79,70,229,0.25)] transition-all">
    {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 rounded-full bg-indigo-100/70 text-indigo-700 border border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200 dark:border-indigo-400/30 text-[10px] md:text-xs tracking-wide">
    {children}
  </span>
);

export default function DiscorGrupo() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/85 dark:bg-black/40 border-b border-zinc-200 dark:border-zinc-800 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] dark:shadow-none">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 md:size-10 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-bold tracking-tight">
              D
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-sm md:text-base text-[var(--foreground)]">
                GRUPO DISCOR
              </div>
              <div className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400">
                Soluciones integrales para la industria
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#hub">Hub</NavLink>
            <NavLink href="#services">Divisiones</NavLink>
            <NavLink href="#metricas">Alcance</NavLink>
            <NavLink href="#clients">Filiales & aliados</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-400 transition"
            >
              Contactar al grupo
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero / Hub */}
      <section id="hub" className="relative overflow-hidden">
        {/* Banda diagonal azul de fondo */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-24 h-80 w-80 md:h-[420px] md:w-[420px] bg-gradient-to-br from-indigo-500/20 via-indigo-400/10 to-transparent rounded-3xl blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="space-y-7 relative z-10">
            <FadeIn>
              <Pill>Grupo empresarial • Ensenada, B.C. • Soluciones integrales</Pill>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[var(--foreground)]">
                Un grupo, cinco divisiones,{" "}
                <span className="text-indigo-600 dark:text-indigo-400">una misma columna vertebral</span>.
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-xl">
                GRUPO DISCOR es el nexo de innovación y servicio en Ensenada, B.C. Unimos{" "}
                <strong>maquinaria, minerales, logística, alimentos y software</strong> para construir soluciones
                completas, desde la operación en campo hasta la toma de decisión.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="px-5 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-400 transition"
                >
                  Ver divisiones del grupo
                </a>
                <a
                  href="#about"
                  className="px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-800/70 text-sm"
                >
                  Conocer el hub de valor
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex gap-8 pt-4 flex-wrap">
                <Stat value="5+" label="Divisiones interconectadas" />
                <Stat value="150+" label="Equipos de maquinaria" />
                <Stat value="7,000 m²" label="Patio de maniobras en Ensenada" />
              </div>
            </FadeIn>
          </div>

          {/* Hero Visual distinto al de Development */}
          <FadeIn delay={0.12}>
            <div className="relative z-10">
              <Card>
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">Hub operativo</p>
                      <p className="text-lg font-semibold text-[var(--foreground)]">
                        Ensenada, Baja California
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-200 border border-indigo-100 dark:border-indigo-500/30">
                      Patio 7,000 m²
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 flex flex-col gap-1">
                      <span className="text-[10px] uppercase text-zinc-500">Operación</span>
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        Arrendadora & Pétreos
                      </span>
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">
                        Maquinaria pesada, agregados y minerales clave.
                      </span>
                    </div>
                    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 flex flex-col gap-1">
                      <span className="text-[10px] uppercase text-zinc-500">Cadena logística</span>
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        Mina ⟶ Puerto
                      </span>
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">
                        Freight transatlántico y transpacífico.
                      </span>
                    </div>
                    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 flex flex-col gap-1 col-span-2">
                      <span className="text-[10px] uppercase text-zinc-500">Orquestación digital</span>
                      <span className="text-sm font-medium text-[var(--foreground)]">
                        Desarrollo Software DISCOR
                      </span>
                      <span className="text-xs text-zinc-600 dark:text-zinc-400">
                        Simuladores con IA, bases de datos y plataformas web para visualizar la operación completa.
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services / Divisiones */}
      <section
        id="services"
        className="py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/60 dark:bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <SectionTitle
            kicker="Divisiones"
            title="Portafolio de filiales"
            subtitle="Cinco unidades especializadas que se conectan para ofrecer soluciones de punta a punta."
          />
          <Stagger>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 md:gap-8 items-start">
              {/* Grid principal */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    t: "Arrendadora DISCOR",
                    d: "Renta de maquinaria pesada de alto rendimiento para minería y construcción. Flota con monitoreo GPS y soporte técnico en sitio.",
                    email: "arrendadora@discor.com.mx",
                  },
                  {
                    t: "Distribuidora DISCOR",
                    d: "Mariscos B.C., cortes de carne premium y refacciones originales Terex®. Portafolio de alimentos y refacciones estratégicas.",
                    email: "distribuidora@discor.com.mx",
                  },
                  {
                    t: "Pétreos y Minerales DISCOR",
                    d: "Arena, gravas, basaltos y minerales (cobre, hierro) con servicio logístico integrado “mina a puerto”.",
                    email: "petreosyminerales@discor.com.mx",
                  },
                  {
                    t: "Logística DISCOR",
                    d: "Freight Forwarder transatlántico y transpacífico. Patio de maniobras de 7,000 m² en Ensenada para almacenaje y consolidación.",
                    email: "logistica@discor.com.mx",
                  },
                ].map((c) => (
                  <Item key={c.t}>
                    <Card>
                      <div className="flex flex-col gap-3 h-full">
                        <div className="text-xs font-medium text-indigo-600 dark:text-indigo-300 uppercase tracking-wide">
                          División
                        </div>
                        <h3 className="text-lg font-medium text-[var(--foreground)]">{c.t}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 flex-1">{c.d}</p>
                        <a
                          href={`mailto:${c.email}`}
                          className="text-xs text-indigo-700 dark:text-indigo-300 hover:underline"
                        >
                          Escribir a {c.email} →
                        </a>
                      </div>
                    </Card>
                  </Item>
                ))}
              </div>

              {/* Columna destacada para software */}
              <Item>
                <Card>
                  <div className="flex flex-col gap-3 h-full">
                    <div className="text-xs font-medium text-indigo-600 dark:text-indigo-300 uppercase tracking-wide">
                      Unidad tecnológica
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">
                      Desarrollo Software DISCOR
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Bases de datos a medida, mantenimiento web, apps móviles y simuladores industriales con IA.
                      La pieza que conecta la operación física con la información estratégica.
                    </p>
                    <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                      <li>• Simuladores de capacitación con IA.</li>
                      <li>• Integración con sistemas de logística y arrendadora.</li>
                      <li>• Paneles para visualizar toda la cadena de valor.</li>
                    </ul>
                    <a
                      href="mailto:desarrollosoftware@discor.com.mx"
                      className="mt-2 text-xs text-indigo-700 dark:text-indigo-300 hover:underline"
                    >
                      desarrollosoftware@discor.com.mx →
                    </a>
                  </div>
                </Card>
              </Item>
            </div>
          </Stagger>
        </div>
      </section>

      {/* About / Valores */}
      <section id="about" className="py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <div className="space-y-4">
              <SectionTitle kicker="Hub del grupo" title="Misión, visión y valores" />
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
                GRUPO DISCOR integra cinco filiales especializadas que comparten la misma base:{" "}
                <strong>innovación, servicio integral y comunicación</strong>. Nuestra misión es anticipar las
                necesidades del mercado con tecnología de punta, logística confiable y productos de alta calidad.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
                Desde el patio de maniobras en Ensenada hasta los simuladores industriales con IA, buscamos que
                cada eslabón de la cadena de valor esté respaldado por procesos claros, métricas y una relación
                cercana con el cliente.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid gap-4">
              <Card>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <div className="text-base font-semibold text-[var(--foreground)]">Innovación</div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Simuladores con IA, monitoreo GPS, aplicaciones a la medida y una visión de datos para toda la
                      operación.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">🤝</div>
                  <div>
                    <div className="text-base font-semibold text-[var(--foreground)]">Servicio integral</div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Desde la maquinaria y los minerales hasta la logística internacional y el software que orquesta
                      todo.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">🗣️</div>
                  <div>
                    <div className="text-base font-semibold text-[var(--foreground)]">Comunicación</div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Transparencia y proactividad en cada operación: el cliente sabe qué está pasando y cuándo.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Métricas / Alcance */}
      <section
        id="metricas"
        className="py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/80 dark:bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <SectionTitle
            kicker="Alcance"
            title="Escala operativa del grupo"
            subtitle="Indicadores clave que resumen el tamaño y la profundidad operativa de GRUPO DISCOR."
          />

          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Card>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-extrabold text-indigo-600">5+</div>
                <div className="text-xs uppercase font-semibold text-zinc-500">
                  Divisiones interconectadas
                </div>
              </div>
            </Card>
            <Card>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-extrabold text-indigo-600">150+</div>
                <div className="text-xs uppercase font-semibold text-zinc-500">
                  Equipos de maquinaria
                </div>
              </div>
            </Card>
            <Card>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-extrabold text-indigo-600">7,000 m²</div>
                <div className="text-xs uppercase font-semibold text-zinc-500">
                  Patio de maniobras Ensenada
                </div>
              </div>
            </Card>
            <Card>
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-extrabold text-indigo-600">98%</div>
                <div className="text-xs uppercase font-semibold text-zinc-500">
                  Satisfacción de clientes
                </div>
              </div>
            </Card>
          </div>

          {/* Cómo se conecta el grupo + casos */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
            <Card>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-[var(--foreground)]">
                  Cómo se conecta el grupo
                </h3>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                  La ventaja del grupo no está solo en cada división por separado, sino en cómo se ensamblan:
                  arrendadora alimenta proyectos de obra, pétreos y minerales suministran materia prima, logística
                  mueve la carga y software hace visible todo el sistema.
                </p>
                <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1 mt-2">
                  <li>• Proyectos donde la maquinaria y los minerales se coordinan desde un mismo patio.</li>
                  <li>• Operaciones “mina a puerto” con seguimiento logístico continuo.</li>
                  <li>• Herramientas digitales para simular escenarios y capacitar personal.</li>
                </ul>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-[var(--foreground)]">
                Casos y productos representativos
              </h3>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                Algunos proyectos internos y colaboraciones se pueden mostrar como tarjetas de caso. Puedes seguir
                usando el arreglo <code>projects</code> para destacar simuladores, integraciones logísticas, sistemas de
                trazabilidad o soluciones de software del grupo.
              </p>
              <Stagger>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {projects.slice(0, 2).map((p) => (
                    <Item key={p.slug}>
                      <ProjectCard
                        title={p.title}
                        stack={p.stack}
                        summary={p.summary}
                        href={p.href}
                        thumb={p.thumb}
                      />
                    </Item>
                  ))}
                </div>
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section
        id="clients"
        className="py-20 border-t border-zinc-200 dark:border-zinc-900 bg-[var(--background)]"
      >
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <SectionTitle
            kicker="Confianza"
            title="Filiales y aliados"
            subtitle="Algunas marcas propias del grupo y aliados con los que hemos colaborado."
          />

          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 mt-6">
            {[
              { name: "Arrendadora DISCOR", src: "/logos/arrendadora_discor.jpg", href: "#" },
              { name: "Distribuidora DISCOR", src: "/logos/distribuidora_discor.jpg", href: "#" },
              { name: "Clipsazo", src: "/logos/clipsazo_logo.jpg", href: "https://clipsazo.com" },
            ].map((c) => (
              <a
                key={c.name}
                href={c.href}
                target={c.href === "#" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center w-40 sm:w-48 md:w-56 h-24 md:h-28 group"
              >
                <Image
                  src={c.src}
                  alt={c.name}
                  width={240}
                  height={120}
                  className="
                    object-contain w-full h-full
                    opacity-80 grayscale contrast-[0.9] brightness-90
                    group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100
                    transition-all duration-300 ease-out
                    dark:opacity-90 dark:brightness-110
                  "
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-10">
          <SectionTitle
            kicker="Contacto"
            title="Conéctate con la división correcta"
            subtitle="Para consultas específicas sobre maquinaria, logística, minerales, alimentos o desarrollo de software."
          />
          <FadeIn>
            {/* Bloque de correos por división */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-zinc-500 uppercase">General</div>
                  <div className="text-sm md:text-base text-[var(--foreground)] font-medium">
                    contacto@discor.com.mx
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Correo central para canalizar tu solicitud con la división adecuada.
                  </p>
                </div>
              </Card>
              {[
                { label: "Arrendadora DISCOR", email: "arrendadora@discor.com.mx" },
                { label: "Distribuidora DISCOR", email: "distribuidora@discor.com.mx" },
                { label: "Pétreos y Minerales DISCOR", email: "petreosyminerales@discor.com.mx" },
                { label: "Logística DISCOR", email: "logistica@discor.com.mx" },
                { label: "Desarrollo Software DISCOR", email: "desarrollosoftware@discor.com.mx" },
              ].map((c) => (
                <Card key={c.email}>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-zinc-500 uppercase">División</div>
                    <div className="text-sm md:text-base text-[var(--foreground)] font-medium">
                      {c.label}
                    </div>
                    <a
                      href={`mailto:${c.email}`}
                      className="text-xs md:text-sm text-indigo-700 dark:text-indigo-300 hover:underline"
                    >
                      {c.email}
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            {/* Formulario simple para contacto general */}
            <form className="mt-10 grid md:grid-cols-2 gap-4">
              <input
                placeholder="Nombre"
                className="w-full rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-indigo-500/60 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100"
              />
              <input
                placeholder="Correo"
                type="email"
                className="w-full rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-indigo-500/60 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100"
              />
              <input
                placeholder="División de interés (opcional)"
                className="w-full rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-indigo-500/60 md:col-span-2 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100"
              />
              <textarea
                placeholder="Cuéntanos brevemente tu necesidad (maquinaria, logística, minerales, alimentos, software, etc.)"
                rows={5}
                className="w-full rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-indigo-500/60 md:col-span-2 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100"
              />
              <div className="md:col-span-2 flex items-center justify-between">
                <div className="text-xs text-zinc-600 dark:text-zinc-500">
                  Al enviar aceptas ser contactado por GRUPO DISCOR o la división correspondiente.
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-400 transition"
                >
                  Enviar
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 dark:text-zinc-400 text-sm">
          <div>© {new Date().getFullYear()} GRUPO DISCOR. Todos los derechos reservados.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-black dark:hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white">
              GitHub
            </a>
            <a href="mailto:contacto@discor.com.mx" className="hover:text-black dark:hover:text-white">
              contacto@discor.com.mx
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
