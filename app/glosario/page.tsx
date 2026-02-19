"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Book, Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, Suspense } from "react";

interface Termino {
  term: string;
  definition: string;
  subterms?: { label: string; text: string }[];
}

const terminos: Termino[] = [
  { 
    term: "Acción de palanca", 
    definition: "Desde un desplante o un apoyo básico con piernas extendidas, la pierna libre se levanta hacia atrás con los brazos estirados por encima de la cabeza, creando una línea recta desde las puntas de los dedos hasta los pies. La articulación de la cadera actúa como un eje sobre el cual pivotan los brazos y las piernas como una unidad." 
  },
  { 
    term: "Agrupada", 
    definition: "Una posición de piernas en la que las rodillas se flexionan un mínimo de 90° hacia el pecho." 
  },
  { 
    term: "Arabesca", 
    definition: "Posición básica parada sobre un pie. La pierna libre se gira hacia afuera y se mantiene atrás a un ángulo mínimo de 30° con respecto a la pierna de apoyo." 
  },
  { 
    term: "Carpada", 
    definition: "Designa la posición en la que la cadera se flexiona 90°; con las piernas extendidas." 
  },
  { 
    term: "Chassé", 
    definition: "Paso y empuje con un pie, cerrando el pie libre en el aire detrás o al lado del pie de despegue. Aterrizar en el pie opuesto, demi-plié." 
  },
  { 
    term: "Entrada de tipo escalador", 
    definition: "Posición de entrada a los elementos en diagonales con la parte superior del cuerpo redondeada (forma de 'C' en lugar de línea recta). Ambas piernas flexionadas con brazos extendidos cubriendo orejas." 
  },
  {
    term: "Posiciones de Pies",
    definition: "USA Gymnastics utiliza cinco posiciones básicas de pies basadas en la técnica clásica:",
    subterms: [
      { label: "1ra posición", text: "Talones se tocan, dedos apuntan hacia afuera." },
      { label: "2da posición", text: "Pies separados a la altura de hombros, dedos hacia afuera." },
      { label: "3ra posición", text: "Un pie frente al otro, talón delantero toca la parte media del pie trasero." },
      { label: "4ta posición", text: "Pies uno frente al otro a ~30cm, talón delantero frente al dedo gordo trasero." },
      { label: "5ta posición", text: "Talón delantero tocando el dedo gordo del pie trasero." }
    ]
  },
  {
    term: "Técnicas de Talacha",
    definition: "El ante-salto (hurdle) puede realizarse mediante cuatro técnicas oficiales:",
    subterms: [
      { label: "Técnica #1", text: "Salto sobre pie izquierdo, rodilla derecha agrupada a 90°. Paso con derecha." },
      { label: "Técnica #2", text: "Salto sobre pie izquierdo, balanceo de pierna derecha extendida al frente. Paso con derecha." },
      { label: "Técnica #3", text: "Empuje con ambos pies, cerrarlos en el aire. Aterrizaje con izquierda, paso con derecha." },
      { label: "Técnica #4 (Forma C)", text: "Salto sobre pie izquierdo, ambas rodillas agrupadas a 90° con torso redondeado (C)." }
    ]
  },
  { 
    term: "Vela", 
    definition: "Una posición de equilibrio arriba sobre los hombros, con el ángulo de la cadera abierto y el cuerpo extendido." 
  },
  { 
    term: "Sentada en 'V'", 
    definition: "Sentarse en posición carpada con el tronco erguido y ligeramente inclinado hacia atrás. Piernas extendidas hacia arriba y manos de apoyo tras la cadera." 
  },
  { 
    term: "Relevé", 
    definition: "(Levantarse) moviendo/presionando hasta el metatarso." 
  },
  { 
    term: "Plié / Demi-plié", 
    definition: "Flexión de las rodillas. Demi-plié es una ligera flexión utilizada para preparación de saltos y aterrizajes." 
  }
];

function GlosarioContent() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const terminosFiltrados = terminos.filter(t => 
    t.term.toLowerCase().includes(search.toLowerCase()) || 
    t.definition.toLowerCase().includes(search.toLowerCase()) ||
    t.subterms?.some(st => st.label.toLowerCase().includes(search.toLowerCase()) || st.text.toLowerCase().includes(search.toLowerCase()))
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
              <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
                Inicio
              </Button>
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Book className="w-5 h-5 text-blue-600" />
                Glosario Técnico Oficial
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
              placeholder="Buscar término o técnica (ej: Talacha, Pies, Palanca...)" 
              className="pl-10 h-12 text-lg bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-6">
          {terminosFiltrados.length > 0 ? (
            terminosFiltrados.map((t, i) => (
              <Card key={i} className="overflow-hidden border-l-4 border-l-blue-600">
                <CardHeader className="bg-white pb-3">
                  <CardTitle className="text-blue-800 text-xl">{t.term}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{t.definition}</p>
                  
                  {t.subterms && (
                    <div className="mt-4 grid gap-2">
                      {t.subterms.map((st, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                          <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200 shrink-0 mt-0.5">
                            {st.label}
                          </Badge>
                          <p className="text-sm text-gray-600">{st.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 italic">No se encontraron resultados para su búsqueda.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default function GlosarioPage() {
  return (
    <Suspense fallback={<div>Cargando glosario...</div>}>
      <GlosarioContent />
    </Suspense>
  );
}
