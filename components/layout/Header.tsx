// components/layout/Header.tsx
import { BookOpen, Users, BrainCircuit } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const navItems = [
    { href: "/courses", label: "Cours", icon: BookOpen },
    { href: "/students", label: "Élèves", icon: Users },
    { href: "/analyze", label: "Analyser", icon: BrainCircuit },
  ];

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://terraskola.fr/wp-content/uploads/2025/02/logo-terraskola-dark.svg"
            alt="Terraskola"
            width={160}
            height={40}
          />
        </Link>
        <nav className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#1C352A] transition-colors"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
