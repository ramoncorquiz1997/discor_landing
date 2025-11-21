import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "GRUPO DISCOR — Soluciones integrales para la industria",
  description:
    "GRUPO DISCOR integra arrendadora de maquinaria, logística, pétreos y minerales, distribución de alimentos y desarrollo de software para ofrecer soluciones integrales desde Ensenada, Baja California.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}