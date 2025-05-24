// app/page.tsx
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Gérer les cours",
      description:
        "Uploadez vos supports de cours pour servir de référence à l'analyse.",
      icon: BookOpen,
      href: "/courses",
      color: "bg-blue-100",
    },
    {
      title: "Gérer les élèves",
      description:
        "Ajoutez des élèves et leurs copies pour préparer l'analyse.",
      icon: Users,
      href: "/students",
      color: "bg-green-100",
    },
    {
      title: "Analyser les copies",
      description:
        "Classez automatiquement les élèves selon leur niveau de compréhension.",
      icon: BrainCircuit,
      href: "/analyze",
      color: "bg-amber-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#1C352A]">
            Classement IA de Copies
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Analysez et classez automatiquement les copies de vos élèves en
            mathématiques en fonction de leur niveau de compréhension par
            rapport aux cours fournis.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${feature.color}`}
              >
                <feature.icon className="h-6 w-6 text-[#1C352A]" />
              </div>
              <h2 className="mb-2 text-xl font-semibold">{feature.title}</h2>
              <p className="mb-4 text-gray-600">{feature.description}</p>
              <Link href={feature.href}>
                <Button className="bg-[#1C352A] hover:bg-[#152920]">
                  Commencer
                </Button>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
