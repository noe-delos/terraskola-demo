// components/layout/Header.tsx
import {
  BookOpen,
  Users,
  BrainCircuit,
  LogIn,
  User2,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/logout/actions";

export async function Header() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

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
          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 flex items-center gap-2"
                >
                  <User2 className="h-4 w-4" />
                  <span className="hidden sm:inline">{user.email}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-48 p-2">
                <form action={logout}>
                  <Button
                    type="submit"
                    variant="ghost"
                    className="w-full flex items-center gap-2 text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <LogOut className="h-4 w-4" /> Déconnexion
                  </Button>
                </form>
              </PopoverContent>
            </Popover>
          ) : (
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 text-[#1C352A] hover:bg-gray-100"
              >
                <LogIn className="h-4 w-4 mr-1" /> Connexion
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
