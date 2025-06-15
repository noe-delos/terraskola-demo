// components/layout/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Icon } from "@iconify/react";
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { logout } from "@/app/logout/actions";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, []);

  const navItems = [
    { href: "/courses", label: "Cours", icon: "twemoji:blue-book" },
    {
      href: "/students",
      label: "Élèves",
      icon: "noto:woman-student-medium-light-skin-tone",
    },
    { href: "/analyze", label: "Analyser", icon: "fluent-emoji:magic-wand" },
  ];

  const getInitials = (email: string) => {
    return email.split("@")[0].substring(0, 2).toUpperCase();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1C352A] border-b border-[#1C352A]/20"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://terraskola.fr/wp-content/uploads/2025/02/logo-terraskola-dark.svg"
              alt="Terraskola"
              width={160}
              height={40}
              className="brightness-0 invert"
            />
          </Link>
        </motion.div>

        <div className="flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-[#FFEEDE] hover:text-white transition-colors enriqueta-medium"
                >
                  <Icon icon={item.icon} className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            {user ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-10 w-10 rounded-full p-0 hover:bg-[#FFEEDE]/10"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-foreground text-background text-sm enriqueta-semibold">
                        {getInitials(user.email || "")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-56 p-3">
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Connecté en tant que:
                      </p>
                      <p className="text-sm font-medium enriqueta-medium">
                        {user.email}
                      </p>
                    </div>
                    <form action={logout}>
                      <Button
                        type="submit"
                        variant="ghost"
                        className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Déconnexion
                      </Button>
                    </form>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-[#FFEEDE] hover:bg-[#FFEEDE]/10 hover:text-white enriqueta-medium"
                >
                  <Icon icon="mdi-light:login" className="h-4 w-4 mr-2" />
                  Connexion
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
