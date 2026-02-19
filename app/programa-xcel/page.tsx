"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, CheckCircle2, Info } from "lucide-react";

export default function ProgramaXcelPage() {
  const router = useRouter();

  const divisiones = [
    { nombre: "Bronze", nivel: "Equivalente a Niveles 1-2", color: "bg-orange-100 text-orange-800" },
    { nombre: "Silver", nivel: "Equivalente a Niveles 3-4", color: "bg-gray-100 text-gray-800" },
    { nombre: "Gold", nivel: "Equivalente a Nivel 5", color: "bg-yellow-100 text-yellow-800" },
    { nombre: "Platinum", nivel: "Equivalente a Nivel 6-7", color: "bg-blue-100 text-blue-800" },
    { nombre: "Diamond", nivel: "Equivalente a Nivel 8-9", color: "bg-blue-900 text-white" },
    { nombre: "Sapphire", nivel: "Equivalente a Nivel 10", color: "bg-purple-900 text-white" }
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
                <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                Programa Xcel - USAG
              </h1>
            </div>
            <Badge variant="outline">Programa Alternativo</Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué es el Programa Xcel?</h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            Xcel es un programa de USA Gymnastics diseñado para ofrecer una experiencia competitiva de alta calidad a gimnastas con diferentes niveles de habilidad y compromiso de tiempo. Es conocido por su flexibilidad en las rutinas y requisitos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Beneficios de Xcel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2 italic">"Xcel permite a las gimnastas progresar a su propio ritmo."</li>
                <li>• <strong>Flexibilidad:</strong> Rutinas personalizadas desde el primer nivel.</li>
                <li>• <strong>Menos Tiempo:</strong> Ideal para gimnastas que practican menos horas a la semana.</li>
                <li>• <strong>Inclusividad:</strong> Abierto a una amplia gama de edades y habilidades.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Divisiones Xcel
              </CardTitle>
              <CardDescription>Comparativa con el Programa de Desarrollo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {divisiones.map((d, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 border-b last:border-0">
                    <Badge className={d.color}>{d.nombre}</Badge>
                    <span className="text-sm text-gray-500">{d.nivel}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-bold text-yellow-900 mb-2">Filosofía Xcel</h3>
          <p className="text-yellow-800">
            El objetivo de Xcel es proporcionar una atmósfera competitiva positiva donde las gimnastas puedan tener éxito y permanecer involucradas en el deporte por más tiempo, celebrando sus logros individuales sin la rigidez de los niveles obligatorios.
          </p>
        </div>
      </main>
    </div>
  );
}
