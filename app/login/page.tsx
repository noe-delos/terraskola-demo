/* eslint-disable react/no-unescaped-entities */

import { login } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { LogIn } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Logo and badge always visible at the top */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src="https://terraskola.fr/wp-content/uploads/2025/02/logo-terraskola-dark.svg"
          alt="Terraskola Logo"
          width={180}
          height={48}
          priority
        />
        <span className="mt-2 inline-block rounded-full bg-[#1C352A] px-4 py-1 text-xs font-semibold text-white tracking-widest shadow-sm">
          démonstrateur KS
        </span>
      </div>
      <div className="flex w-full max-w-4xl shadow-lg rounded-xl overflow-hidden bg-white">
        {/* Left visual panel */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-[#1C352A] p-10 relative">
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Bienvenue sur Terraskola
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xs">
              Plateforme d'analyse intelligente des copies d'élèves en
              mathématiques. Connectez-vous pour accéder à vos cours, élèves et
              analyses IA.
            </p>
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#27ae60] via-[#1C352A] to-[#f4d35e] opacity-80 blur-2xl absolute -bottom-10 left-10" />
            <div className="w-24 h-24 rounded-full bg-[#f4d35e] opacity-60 blur-2xl absolute top-20 right-10" />
          </div>
        </div>
        {/* Right login form */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-white">
          <Card className="w-full max-w-md p-8 border-none shadow-none">
            <h1 className="mb-6 text-2xl font-bold text-center text-gray-900">
              Connexion
            </h1>
            <form action={login} className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  autoComplete="email"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#1C352A] hover:bg-[#152920]"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Se connecter
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
