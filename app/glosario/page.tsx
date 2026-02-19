"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Book, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const terminos = [
  { term: "Arabesca", definition: "Posición en la que la gimnasta se para sobre una pierna mientras la otra pierna se extiende detrás del cuerpo a un ángulo específico." },
  { term: "Chassé", definition: "Un paso de danza en el que un pie 'persigue' al otro hacia adelante, atrás o hacia un lado." },
  { term: "Desplante (Lunge)", definition: "Posición de pie con una pierna adelantada y flexionada, y la otra pierna atrás extendida." },
  { term: "Flic-Flac", definition: "También conocido como back handspring. Elemento acrobático hacia atrás con apoyo de manos." },
  { term: "Kip", definition: "Elemento fundamental en barras asimétricas para pasar de una suspensión a una posición de apoyo." },
  { term: "Passé", definition: "Posición de danza donde el pie de la pierna libre toca el lado de la rodilla de la pierna de apoyo." },
  { term: "Plié", definition: "Flexión de las rodillas manteniendo el cuerpo erguido." },
  { term: "Redondilla (Round-off)", definition: "Elemento acrobático similar a una inversión lateral que termina con ambos pies juntos y mirando hacia la dirección de inicio." },
  { term: "Relevé", definition: "Elevación sobre las puntas de los pies (metatarsos)." },
  { term: "Salto Leap", definition: "Salto que despega de un pie y aterriza en el otro pie, generalmente buscando una posición de split en el aire." },
  { term: "Talacha", definition: "Término coloquial para el ante-salto o hurdle que precede a elementos como la redondilla o inversión lateral." },
  { term: "Vela (Candlestick)", definition: "Posición en la que la gimnasta se apoya sobre los hombros con las piernas extendidas verticalmente hacia arriba." }
];

export default function GlosarioPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const terminosFiltrados = terminos.filter(t => 
    t.term.toLowerCase().includes(search.toLowerCase()) || 
    t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => router.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Book className="w-5 h-5 text-blue-600" />
                Glosario de Términos
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Buscar término o definición..." 
              className="pl-10 h-12 text-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4">
          {terminosFiltrados.length > 0 ? (
            terminosFiltrados.map((t, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-700">{t.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t.definition}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 italic">No se encontraron términos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
