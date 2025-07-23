"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  Trophy,
  BookOpen,
  Target,
  AlertCircle,
  CheckCircle,
  Zap,
  Activity,
  BarChart3,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Nivel1Page() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => router.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Nivel 1 - USAG
              </h1>
            </div>
            <Badge variant="secondary">Gimnasia Artística</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navegación entre niveles - MOVER AL INICIO */}
        <div className="mb-8 flex justify-between items-center">
          <Button variant="outline" disabled>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Nivel Anterior
          </Button>
          <div className="hidden md:block text-center">
            <p className="text-sm text-gray-600">Progresión de Niveles USAG</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="default">Nivel 1</Badge>
              <Badge variant="outline">Nivel 2</Badge>
              <Badge variant="outline">Nivel 3</Badge>
              <Badge variant="outline">Nivel 4</Badge>
              <Badge variant="outline">Nivel 5</Badge>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href="/nivel-2">
              Nivel 2
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nivel 1 - Reglamento Completo
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            El Nivel 1 es la introducción a la gimnasia artística competitiva,
            enfocándose en fundamentos básicos, postura correcta y desarrollo de
            habilidades elementales en todos los aparatos.
          </p>
        </div>

        <Tabs defaultValue="salto" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="salto" className="flex items-center gap-2">
              <img src="/vault.png" alt="Salto" className="w-8 h-8" />
              <span className="hidden md:inline">Salto</span>
            </TabsTrigger>
            <TabsTrigger value="barras" className="flex items-center gap-2">
              <img src="/ubars.png" alt="Suelo" className="w-8 h-8" />
              <span className="hidden md:inline">Barras Asimétricas</span>
            </TabsTrigger>
            <TabsTrigger value="viga" className="flex items-center gap-2">
              <img src="/beam.png" alt="Suelo" className="w-8 h-8" />
              <span className="hidden md:inline">Viga de Equilibrio</span>
            </TabsTrigger>
            <TabsTrigger value="suelo" className="flex items-center gap-2">
              <img src="/floor.png" alt="Suelo" className="w-8 h-8" />
              <span className="hidden md:inline">Suelo</span>
            </TabsTrigger>
          </TabsList>

          {/* SALTO */}
          <TabsContent value="salto" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Salto - Descripción General
                </CardTitle>
                <CardDescription>
                  El aparato de salto en Nivel 1 incluye dos elementos
                  principales que desarrollan la base para saltos más avanzados.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elementos Requeridos:
                    </h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>
                        • <strong>Salto Extendido</strong> hacia una superficie
                        elevada de colchones (mínimo 40 cm/16")
                      </li>
                      <li>
                        • <strong>Parada de Manos</strong> a descenso a la
                        posición de extensión acostada en la espalda
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <p className="text-yellow-800">
                      <strong>Importante:</strong> Consultar las reglas y
                      políticas de USA Gymnastics para equipamiento apropiado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Salto Extendido */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Salto Extendido (5.0 puntos)
                  </CardTitle>
                  <Badge variant="outline">Elemento Principal</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Requisitos Técnicos:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • Distancia de carrera: ~6 metros (20 pies) o 7-9 pasos
                      </li>
                      <li>
                        • Cuerpo apretado, cadera hacia abajo, abdominales
                        apretados
                      </li>
                      <li>• Mantener posición recta y ahuecada en el salto</li>
                      <li>• Aterrizar en demi-plié</li>
                      <li>
                        • Brazos levantados en el salto, posición libre en
                        aterrizaje
                      </li>
                    </ul>
                  </div>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="penalizaciones-salto">
                      <AccordionTrigger className="text-sm">
                        <span className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Ver Penalizaciones
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 text-sm">
                          <div>
                            <h5 className="font-medium text-red-700">
                              Faltas Mayores:
                            </h5>
                            <ul className="space-y-1 text-red-600">
                              <li>
                                • 5.00 - Salto NULO (carrera vacía #2 o #3)
                              </li>
                              <li>• 2.00 - Ayuda durante salto extendido</li>
                              <li>
                                • 0.50 - Caída sobre manos, rodillas, cadera
                                tras aterrizaje
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-yellow-700">
                              Faltas Menores:
                            </h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>
                                • Hasta 0.50 - Falta de altura en salto
                                extendido
                              </li>
                              <li>
                                • Hasta 0.30 - Piernas dobladas o separadas
                              </li>
                              <li>• Hasta 0.30 - No mantener cabeza neutra</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Parada de Manos */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Parada de Manos a Descenso (5.0 puntos)
                  </CardTitle>
                  <Badge variant="outline">Elemento Principal</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Secuencia Técnica:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • Paso atrás sobre botador o permanecer en colchón
                      </li>
                      <li>• Entrada tipo plancha o escalador</li>
                      <li>• Manos separadas al ancho de hombros</li>
                      <li>
                        • Parada de manos con piernas juntas, cuerpo recto
                      </li>
                      <li>
                        • Descenso controlado a extensión acostada en espalda
                      </li>
                    </ul>
                  </div>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="penalizaciones-parada">
                      <AccordionTrigger className="text-sm">
                        <span className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Ver Penalizaciones
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 text-sm">
                          <div>
                            <h5 className="font-medium text-red-700">
                              Faltas Mayores:
                            </h5>
                            <ul className="space-y-1 text-red-600">
                              <li>
                                • 5.00 - Elemento incorrecto (ej: rodada
                                adelante)
                              </li>
                              <li>
                                • 2.00 - Ayuda del entrenador tras apoyo de
                                manos
                              </li>
                              <li>
                                • Hasta 1.00 - No aterrizar en extensión de
                                espalda
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-yellow-700">
                              Faltas Menores:
                            </h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>
                                • 0.50 - Patada adicional a parada de manos
                              </li>
                              <li>• Hasta 0.50 - Brazos doblados</li>
                              <li>
                                • Hasta 0.30 - Piernas dobladas o separadas
                              </li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Especificaciones de Ejecución */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Especificaciones de Ejecución
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800">
                <ul className="space-y-2">
                  <li>
                    • Se puede realizar cada salto (ambos elementos){" "}
                    <strong>dos veces</strong>
                  </li>
                  <li>
                    • Cada fase vale <strong>5.0 puntos</strong> y se suma
                  </li>
                  <li>
                    • Se contará la <strong>nota total más alta</strong> de los
                    dos saltos
                  </li>
                  <li>
                    • Se permiten <strong>tres intentos</strong> para completar
                    uno o dos saltos exitosamente
                  </li>
                  <li>
                    • Una carrera vacía (primera) <strong>no penaliza</strong>
                  </li>
                  <li>
                    • Carreras vacías adicionales se consideran salto{" "}
                    <strong>NULO</strong>
                  </li>
                  <li>
                    • <strong>No hay cuarto intento</strong> permitido
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Elementos de Desarrollo */}
            <Card>
              <CardHeader>
                <CardTitle>Elementos de Desarrollo y Progresión</CardTitle>
                <CardDescription>
                  Ejercicios preparatorios para dominar los elementos del salto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="forma-carrera">
                    <AccordionTrigger>
                      Forma y Técnica de Carrera
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm">
                        Correr con inclinación ligera hacia adelante, codos
                        doblados 90°, rodilla delantera a 90° horizontal,
                        talones al glúteo.{" "}
                        <strong>Énfasis en forma, no velocidad.</strong>
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="parada-piso">
                    <AccordionTrigger>
                      Saltos a Parada de Manos en Piso
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>Secuencia de desarrollo:</p>
                        <ul className="space-y-1 ml-4">
                          <li>
                            • Iniciar en cuclillas con pie derecho adelante
                          </li>
                          <li>• Balancear brazos hacia adelante y arriba</li>
                          <li>• Colocar manos separadas al ancho de hombros</li>
                          <li>• Patear pierna trasera hacia atrás y arriba</li>
                          <li>• Rodar hacia adelante desde parada de manos</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cuclillas-colchones">
                    <AccordionTrigger>
                      Cuclillas en Pila de Colchones
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1">
                          <li>
                            • Carrera corta de 3-5 pasos, talacha a botador
                          </li>
                          <li>
                            • Estirarse hacia adelante a pila de colchones a
                            altura de cintura
                          </li>
                          <li>
                            • Agrupar piernas para aterrizar en cuclillas, pies
                            entre manos
                          </li>
                          <li>• Brazos rectos, piernas y rodillas juntas</li>
                          <li>
                            • Estirar piernas para volver a posición recta de
                            pie
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* BARRAS ASIMÉTRICAS */}
          <TabsContent value="barras" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Barras Asimétricas - Descripción General
                </CardTitle>
                <CardDescription>
                  En Nivel 1, se puede usar una sola barra que cumpla con
                  especificaciones de barra inferior. La rutina desarrolla
                  fuerza básica y coordinación.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="text-blue-800">
                    <strong>Posición Inicial:</strong> Parada con pies juntos
                    mirando a barra inferior. Se permite botador o colchón de
                    asistencia pero debe retirarse pronto.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Entrada: Subida de estómago */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      1. Entrada: Subida de Estómago
                    </CardTitle>
                    <Badge variant="secondary">0.6 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Sujetar barra con toma dorsal, manos al ancho de
                          hombros
                        </li>
                        <li>• Levantar piernas sobre barra doblando brazos</li>
                        <li>
                          • Pasar cadera sobre barra para apoyo frontal
                          extendido
                        </li>
                        <li>• Mantener piernas extendidas y cabeza neutra</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded">
                        Levantar ambas piernas juntas y terminar con brazos
                        extendidos
                      </p>
                      <div className="mt-2">
                        <h5 className="text-xs font-medium text-red-700">
                          Deducciones principales:
                        </h5>
                        <ul className="text-xs text-red-600">
                          <li>
                            • 0.30 - No levantar ambas piernas simultáneamente
                          </li>
                          <li>
                            • 0.30 - Apoyo complementario (barbilla sobre barra)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impulso */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">2. Impulso</CardTitle>
                    <Badge variant="secondary">0.4 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Balancear piernas adelante y atrás</li>
                        <li>• Hombros ligeramente delante de barra</li>
                        <li>• Empujar barra, extender hombros</li>
                        <li>• Levantar cuerpo con piernas juntas</li>
                        <li>• Mantener cuerpo recto, ahuecado</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded">
                        Cuerpo recto y ahuecado, brazos y piernas extendidos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vuelta atrás */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">3. Vuelta Atrás</CardTitle>
                    <Badge variant="secondary">0.4 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Inclinar hombros hacia atrás antes que cadera
                          contacte barra
                        </li>
                        <li>
                          • Realizar círculo atrás con cuerpo recto y ahuecado
                        </li>
                        <li>• Brazos y piernas extendidos</li>
                        <li>• Mover manos hacia parte superior de barra</li>
                        <li>• Cabeza neutra en todo momento</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded">
                        Cuerpo recto y ahuecado, brazos y piernas extendidos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impulso a colocar piernas separadas */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      4. Impulso a Colocar Piernas Separadas, Salida de
                      Plantillas
                    </CardTitle>
                    <Badge variant="secondary">0.6 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Balancear piernas adelante y atrás</li>
                        <li>• En punto más alto separar piernas</li>
                        <li>
                          • Colocar metatarso de pies sobre barra cerca de manos
                        </li>
                        <li>• Presionar barra contra pies</li>
                        <li>
                          • Soltar manos y realizar salida con piernas separadas
                        </li>
                        <li>• Aterrizar en demi-plié con control</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Puntos Críticos:</h4>
                      <ul className="text-xs text-red-600">
                        <li>• 0.20 - Pies dentro de las manos</li>
                        <li>• 0.20 - Colocación alternada de pies</li>
                        <li>• Hasta 0.20 - Falta control en colocación</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salida de sub balanceo */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      5. Salida de Sub Balanceo
                    </CardTitle>
                    <Badge variant="secondary">0.6 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Presionar barra abajo, cabeza neutra</li>
                        <li>• Inclinar hombros atrás</li>
                        <li>• Realizar círculo con cadera alejada</li>
                        <li>• Al elevar cadera abrir ángulo de hombros</li>
                        <li>• Empujar barra hacia atrás</li>
                        <li>• Soltar manos para salida de sub balanceo</li>
                        <li>• Aterrizar en demi-plié controlado</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded">
                        Cuerpo recto, ahuecado; brazos y piernas extendidos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Elementos de Desarrollo */}
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-900">
                  Elementos de Desarrollo
                </CardTitle>
              </CardHeader>
              <CardContent className="text-purple-800">
                <ul className="space-y-2">
                  <li>
                    • <strong>Muñequeos:</strong> Desde apoyo frontal para pasar
                    a posición frontal apoyada en barra
                  </li>
                  <li>
                    • <strong>Balanceos de kip:</strong> Con cuerpo carpado,
                    piernas juntas o separadas
                  </li>
                  <li>
                    • <strong>Impulsos:</strong> Con cuerpo recto, ahuecado,
                    glúteos apretados, brazos y piernas extendidos, cabeza
                    neutra
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* VIGA DE EQUILIBRIO */}
          <TabsContent value="viga" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Viga de Equilibrio - Descripción General
                </CardTitle>
                <CardDescription>
                  La rutina de viga en Nivel 1 tiene un límite de tiempo de 35
                  segundos y enfatiza el equilibrio, postura y movimientos
                  básicos de danza.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Notas Importantes:
                    </h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>
                        • Figuras guían el aprendizaje, texto con mayor
                        flexibilidad
                      </li>
                      <li>
                        • Brazos pueden ser curvados (corona) o extendidos
                      </li>
                      <li>
                        • Rutina puede invertirse según gimnasta diestra o zurda
                      </li>
                      <li>
                        • Posición inicial puede usar botador o superficie
                        elevada
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Posición Inicial:
                    </h4>
                    <p className="text-green-800 text-sm">
                      Parada mirando la viga, con espacio para entrada acomodado
                      para sentada agrupada cercana al extremo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Entrada */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      1. Entrada de Salto al Apoyo Frontal
                    </CardTitle>
                    <Badge variant="secondary">0.2 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Colocar ambas manos a altura de hombros en viga
                        </li>
                        <li>
                          • Saltar a apoyo frontal con brazos y cuerpo
                          extendidos
                        </li>
                        <li>
                          • Levantar pierna derecha sobre viga con giro 90° a la
                          izquierda
                        </li>
                        <li>
                          • Terminar sentada con piernas separadas mirando largo
                          de viga
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura y brazos extendidos en
                        apoyo frontal
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sentada en V */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      2. Sentada en V, Cuclillas, Apoyo Carpado, Patada Aguja,
                      Bloqueo Relevé
                    </CardTitle>
                    <Badge variant="secondary">0.4 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Secuencia Completa:
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Levantar y flexionar ambas piernas para cuclillas en
                          viga
                        </li>
                        <li>• Extender pierna derecha pasando a sentada V</li>
                        <li>• Pasos para cuclillas, empujar viga con brazos</li>
                        <li>• Extender piernas, apoyo carpado</li>
                        <li>
                          • Patear pierna izquierda atrás y arriba mínimo
                          horizontal (patada aguja)
                        </li>
                        <li>• Volver a cuclillas, brazos arriba</li>
                        <li>
                          •{" "}
                          <strong>
                            Bloqueo equilibrio relevé por 2 segundos
                          </strong>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Deducción importante:</strong> Hasta 0.20 por no
                        mantener bloqueo relevé 2 segundos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Equilibrio en passé */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      3. Equilibrio en Passé al Frente
                    </CardTitle>
                    <Badge variant="secondary">0.2 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Paso adelante sobre pierna derecha extendida</li>
                        <li>• Pie ligeramente hacia afuera (no relevé)</li>
                        <li>
                          • Flexionar rodilla izquierda con pie en punta tocando
                          rodilla derecha
                        </li>
                        <li>• Manos en cadera, marcar posición</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura, piernas, pierna de
                        apoyo extendida
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salto Extendido */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      4. Salto Extendido
                    </CardTitle>
                    <Badge variant="secondary">0.4 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Cerrar pie izquierdo detrás derecho, demi-plié con
                          talones abajo
                        </li>
                        <li>
                          • Empujar viga, extender piernas y cuerpo, piernas
                          juntas
                        </li>
                        <li>• Aterrizar pies simultáneos en demi-plié</li>
                        <li>• Brazos en corona durante salto y aterrizaje</li>
                        <li>• Terminar con bloqueo equilibrio en relevé</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura, pies en punta, altura
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arabesca */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">5. Arabesca (30°)</CardTitle>
                    <Badge variant="secondary">0.4 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Bajar talón pie derecho</li>
                        <li>
                          • Pierna izquierda extendida y apuntada sobre viga
                        </li>
                        <li>
                          • Torso erguido, pierna izquierda girada hacia afuera
                        </li>
                        <li>
                          • <strong>Levantar mínimo 30°</strong>
                        </li>
                        <li>• Cadera izquierda puede descuadrar</li>
                        <li>• Marcar posición (no obligatorio mantener)</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Deducción:</strong> Hasta 0.20 por no levantar
                        pierna libre mínimo 30°
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Balanceos de piernas */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      6. Balanceos de Piernas Adelante
                    </CardTitle>
                    <Badge variant="secondary">0.2 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Paso adelante con pierna izquierda extendida</li>
                        <li>
                          • Balancear pierna derecha a horizontal o más arriba
                        </li>
                        <li>• Repetir con pierna izquierda</li>
                        <li>• Todas las piernas extendidas, cadera cuadrada</li>
                        <li>• Pasos en relevé</li>
                        <li>• Cerrar en bloqueo relevé</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura, piernas extendidas
                        durante balanceos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salida */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      7. Salida de Inversión Lateral a 3/4 Parada de Manos
                    </CardTitle>
                    <Badge variant="secondary">0.6 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Secuencia Completa:
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Paso atrás para pose desplante izquierdo</li>
                        <li>
                          • Paso atrás pierna izquierda, desplante derecho
                        </li>
                        <li>• Extender pierna derecha arriba sobre viga</li>
                        <li>
                          • Paso adelante y rodilla izquierda flexionada
                          (arrodillado)
                        </li>
                        <li>
                          • Levantar pierna izquierda atrás mientras cuerpo gira
                          90° a izquierda
                        </li>
                        <li>• Colocar manos separadas al ancho de hombros</li>
                        <li>• Parada de manos lateral con piernas juntas</li>
                        <li>• Aterrizar con demi-plié en colchón</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura final controlada
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SUELO */}
          <TabsContent value="suelo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Suelo - Descripción General
                </CardTitle>
                <CardDescription>
                  La rutina de suelo en Nivel 1 combina elementos de tumbling
                  básico con movimientos de danza, enfatizando la forma correcta
                  y la expresión artística.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Notas Importantes:
                    </h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>
                        • Figuras son guía, texto tiene cierta flexibilidad
                      </li>
                      <li>• Solo elementos principales en mayúsculas</li>
                      <li>
                        • Brazos en arriba pueden ser curvados o extendidos
                      </li>
                      <li>
                        • Rutina puede invertirse totalmente salvo elementos con
                        asterisco (*)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Posición Inicial:
                    </h4>
                    <p className="text-green-800 text-sm">
                      Iniciar en esquina o borde de pódium, posición recta de
                      pie con brazos atrás en diagonal hacia abajo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Pose, Vuelta de carro */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      1. Pose, Vuelta de Carro*
                    </CardTitle>
                    <Badge variant="secondary">0.6 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Demi-plié piernas, contraer abdominales</li>
                        <li>• Torso inclinado levemente adelante</li>
                        <li>
                          • Brazos hacia adelante y arriba, flexionados en medio
                        </li>
                        <li>
                          • Extender torso y piernas, brazos abren a lados
                        </li>
                        <li>• Transferir peso a pie derecho para desplante</li>
                        <li>
                          • Levantar pierna izquierda atrás y arriba por encima
                          de cabeza
                        </li>
                        <li>
                          • Giro 90° a izquierda, colocar manos a ancho de
                          hombros
                        </li>
                        <li>• Realizar inversión lateral</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Alineación cuerpo y cabeza,
                        ángulo hombros abierto, cuerpo pasa por vertical
                      </p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Nota:</strong> Elemento marcado con asterisco
                        (*) - no se puede invertir
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rodada atrás agrupada */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      2. Rodada Atrás Agrupada, Parada
                    </CardTitle>
                    <Badge variant="secondary">0.6 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Doblar rodillas para cuclillas con pies en suelo
                        </li>
                        <li>• Rolar atrás con barbilla contra pecho</li>
                        <li>• Manos cerca de hombros con palmas abajo</li>
                        <li>• Al rodar empujar piso y extender brazos</li>
                        <li>
                          • <strong>Evitar peso en cabeza y cuello</strong>
                        </li>
                        <li>• Mantener agrupación durante rodada</li>
                        <li>
                          • Terminar en cuclillas, inmediatamente estirar
                          piernas
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Forma agrupada, redondeada en
                        toda la rodada
                      </p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Deducción:</strong> 0.30 por colocar manos en
                        suelo durante cuclillas antes de rodar
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rodada a vela */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      3. Rodada a Vela, Parada
                    </CardTitle>
                    <Badge variant="secondary">0.2 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Doblar rodillas para cuclillas, pies en suelo</li>
                        <li>
                          • Rolar atrás para extender cuerpo a posición vela
                        </li>
                        <li>• Sobre hombros, pies apuntando al techo</li>
                        <li>
                          • Brazos pueden bajar hasta suelo o permanecer arriba
                        </li>
                        <li>• Salir rodando con o sin manos</li>
                        <li>
                          • Juntar rodillas al pecho para pasar a cuclillas
                        </li>
                        <li>• Estirar piernas para terminar recta de pie</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Forma agrupada y pararse sin
                        empujar con manos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Equilibrio en passé */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      4. Equilibrio en Passé al Frente, Bloqueo Relevé, ½ Giro
                      Pivote
                    </CardTitle>
                    <Badge variant="secondary">0.4 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Paso adelante sobre pierna derecha</li>
                        <li>
                          • Pie derecho ligeramente girado afuera (no relevé)
                        </li>
                        <li>
                          • Flexionar rodilla izquierda, pie en punta tocando
                          rodilla derecha
                        </li>
                        <li>• Manos en cadera, marcar posición</li>
                        <li>• Continuar con bloqueo de equilibrio en relevé</li>
                        <li>• Realizar ½ giro pivote</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura, pierna de base
                        extendida
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Nota sobre continuación */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Rutina Continúa...
                </CardTitle>
              </CardHeader>
              <CardContent className="text-yellow-800">
                <p>
                  La rutina de suelo continúa con elementos adicionales de danza
                  y tumbling. La información completa incluye más elementos que
                  desarrollan coordinación, expresión artística y habilidades
                  básicas de gimnasia.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
