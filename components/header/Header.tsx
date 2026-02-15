import Link from "next/link";
import Avatar from "./Avatar";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Avatar alt="Foto de perfil" src="/perfil.png" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight group-hover:text-indigo-500 transition-colors">
                Anderson Santana
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                Consultor de Software & IA Corporativa
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium hover:text-indigo-500 transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/sobre"
                className="text-sm font-medium hover:text-indigo-500 transition-colors relative group"
              >
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/posts"
                className="text-sm font-medium hover:text-indigo-500 transition-colors relative group"
              >
                Posts
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
