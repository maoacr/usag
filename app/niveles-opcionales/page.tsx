"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Info, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function NivelesOpcionalesPage() {
  const router = useRouter();

  const niveles = [
    {
      numero: 6,
      desc: "Primer nivel opcional. Las gimnastas crean sus propias rutinas basadas en requisitos específicos.",
      requisitos: ["Salto de manos en viga", "Kip en barra superior", "Salto mortal en suelo"]
    },
    {
      numero: 7,
      desc: "Aumenta la dificultad en barras y viga. Se requiere mayor limpieza y técnica.",
      requisitos: ["Vuelo en barras", "Serie acrobática en viga", "Combinación de mortales en suelo"]
    },
    {
      numero: 8,
      desc: "Nivel intermedio-avanzado. Se introducen elementos de mayor valor y combinaciones complejas.",
      requisitos: ["Pirueta completa en suelo", "Salto de gran amplitud", "Salida con mortal en barras"]
    },
    {
      numero: 9,
      desc: "Nivel avanzado. Preparación para el nivel de élite. Gran exigencia en composición.",
      requisitos: ["Mortales con múltiples giros", "Sueltas en barras", "Elementos de nivel C y D"]
    },
    {
      numero: 10,
      desc: "El nivel más alto del programa de desarrollo. Muchas gimnastas buscan becas universitarias.",
      requisitos: ["Máxima dificultad", "Elementos de nivel E", "Composición de nivel profesional"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => router.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                Niveles Opcionales (6-10)
              </h1>
            </div>
            <Badge className="bg-purple-600">Nivel Pro</Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Programa de Desarrollo Opcional</h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            A diferencia de los niveles obligatorios (1-5), los niveles opcionales permiten a las gimnastas y entrenadores diseñar rutinas personalizadas que resaltan sus fortalezas individuales, siempre cumpliendo con ciertos requisitos de composición.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {niveles.map((n) => (
            <Card key={n.numero} className="hover:border-blue-400 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-bold">Nivel {n.numero}</CardTitle>
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <CardDescription>{n.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-500" />
                  Ejemplos de Requisitos:
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {n.requisitos.map((req, idx) => (
                    <li key={idx}>• {req}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Info className="w-5 h-5" />
              Diferencia Fundamental
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-800">
            <p>
              En los niveles opcionales, el <strong>Valor de Partida</strong> no siempre es 10.0. Se calcula sumando el valor de los elementos realizados (A, B, C, etc.) más los requisitos de composición. Las deducciones se restan de este valor de partida.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
