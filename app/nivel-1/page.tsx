"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  Trophy,
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  Zap,
  Activity,
  BarChart3,
  Users,
  Info,
  Scale,
} from "lucide-react";
import Link from "next/link";
import { PenalizacionesGenerales } from "@/components/penalizaciones-generales";

function Nivel1Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("salto");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["salto", "barras", "viga", "suelo"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

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
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">Inicio</Link>
              </Button>
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
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
        {/* Navegación entre niveles */}
        <div className="mb-8 flex justify-between items-center">
          <Button variant="outline" disabled>
            Completado
            <CheckCircle className="w-4 h-4 ml-2" />
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
            El Nivel 1 establece los fundamentos básicos de la gimnasia
            artística, introduciendo elementos esenciales y técnicas correctas
            en todos los aparatos.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="salto" className="flex items-center gap-2">
              <img src="/vault.png" alt="Salto" className="w-8 h-8" />
              <span className="hidden md:inline">Salto</span>
            </TabsTrigger>
            <TabsTrigger value="barras" className="flex items-center gap-2">
              <img src="/ubars.png" alt="Salto" className="w-8 h-8" />
              <span className="hidden md:inline">Barras Asimétricas</span>
            </TabsTrigger>
            <TabsTrigger value="viga" className="flex items-center gap-2">
              <img src="/beam.png" alt="Salto" className="w-8 h-8" />
              <span className="hidden md:inline">Viga de Equilibrio</span>
            </TabsTrigger>
            <TabsTrigger value="suelo" className="flex items-center gap-2">
              <img src="/floor.png" alt="Salto" className="w-8 h-8" />
              <span className="hidden md:inline">Suelo</span>
            </TabsTrigger>
          </TabsList>

          {/* SALTO */}
          <TabsContent value="salto" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Salto - Salto Extendido
                </CardTitle>
                <CardDescription>
                  El Nivel 1 introduce el salto extendido, un elemento
                  fundamental que desarrolla la técnica básica de salto y
                  prepara para elementos más complejos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elemento Principal:
                    </h4>
                    <p className="text-blue-800">
                      <strong>SALTO EXTENDIDO</strong> sobre pila de colchones
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Carrera controlada hacia la pila de colchones</li>
                      <li>• Salto con piernas extendidas y juntas</li>
                      <li>• Brazos extendidos hacia adelante</li>
                      <li>• Aterrizaje controlado en la pila</li>
                      <li>• Postura recta durante todo el movimiento</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <p className="text-yellow-800">
                      <strong>Importante:</strong> Consultar Reglas y Políticas
                      de USA Gymnastics para especificaciones de equipamiento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Técnica Detallada */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Técnica Completa del Salto Extendido
                </CardTitle>
                <Badge variant="outline">10.0 puntos total</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Carrera y Preparación:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Carrera controlada hacia la pila de colchones</li>
                      <li>• Mantener postura recta durante la carrera</li>
                      <li>• Brazos balanceándose naturalmente</li>
                      <li>• Mirada enfocada hacia el objetivo</li>
                      <li>• Velocidad apropiada para el nivel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ejecución del Salto:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Impulso con ambas piernas simultáneamente</li>
                      <li>• Piernas extendidas y juntas durante el vuelo</li>
                      <li>• Brazos extendidos hacia adelante</li>
                      <li>• Cuerpo recto y apretado</li>
                      <li>• Cabeza neutra, mirada al frente</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Fase de Vuelo:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Mantener posición extendida</li>
                      <li>• Piernas juntas y rectas</li>
                      <li>• Brazos extendidos hacia adelante</li>
                      <li>• Cuerpo apretado y controlado</li>
                      <li>• Preparación para el aterrizaje</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Aterrizaje:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Aterrizaje suave en la pila de colchones</li>
                      <li>• Mantener postura recta</li>
                      <li>• Brazos pueden bajar naturalmente</li>
                      <li>• Control del movimiento</li>
                      <li>• Finalización con postura de pie</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Carrera
                    controlada, salto con piernas extendidas y juntas, brazos
                    extendidos hacia adelante, y aterrizaje controlado.
                  </p>
                </div>
              </CardContent>
            </Card>

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
                    • La gimnasta puede realizar <strong>dos saltos</strong>; la
                    mejor puntuación cuenta
                  </li>
                  <li>
                    • Se permiten <strong>tres intentos</strong> para completar
                    uno o dos saltos exitosos
                  </li>
                  <li>
                    • <strong>Una carrera vacía</strong> dentro de tres intentos
                    sin penalización
                  </li>
                  <li>
                    • Carrera vacía adicional es <strong>salto NULO</strong>
                  </li>
                  <li>
                    • Carrera vacía = caída en corrida, detención, salirse de
                    pista, contacto con pila sin recargarse en parte superior
                  </li>
                  <li>
                    • <strong>No se permite un cuarto intento</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Penalizaciones Detalladas */}
            <Card>
              <CardHeader>
                <CardTitle>Tabla de Penalizaciones Detallada</CardTitle>
                <CardDescription>
                  Sistema completo de deducciones para el salto extendido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {/* Faltas Mayores */}
                  <AccordionItem value="faltas-mayores">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Faltas Mayores
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-red-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-red-700">
                            Salto NULO (0.00 puntos):
                          </h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• Carrera vacía #2 o #3</li>
                            <li>• Ayuda del entrenador</li>
                            <li>• Salto incorrecto (ej. salto a cuclillas)</li>
                            <li>• No alcanzar la pila de colchones</li>
                            <li>• Aterrizaje fuera de la pila</li>
                          </ul>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-yellow-700">
                            Penalizaciones Mayores:
                          </h5>
                          <ul className="space-y-1 text-yellow-600">
                            <li>• 2.00 - Ayuda del entrenador</li>
                            <li>• 0.30 - Dinamismo insuficiente</li>
                            <li>• 0.50 - Salto sin señal del Juez Principal</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Faltas Menores */}
                  <AccordionItem value="faltas-menores">
                    <AccordionTrigger className="text-sm">
                      Faltas Menores
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.10 - No mantener posición neutra de cabeza
                          </li>
                          <li>• 0.10 - Forma incorrecta de pies</li>
                          <li>• 0.20 - Piernas separadas</li>
                          <li>• 0.30 - Piernas dobladas</li>
                          <li>• 0.30 - No mantener posición extendida</li>
                          <li>• 0.50 - Posición carpada excesiva</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Aterrizaje */}
                  <AccordionItem value="aterrizaje">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones de Aterrizaje
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>• 0.10 - Aterrizaje con pies separados</li>
                          <li>• 0.10 - Brinco pequeño o ajuste de pies</li>
                          <li>• 0.10 a 0.40 - Pasos (cada uno, máximo 0.40)</li>
                          <li>• 0.20 a 0.40 - Salto o paso largo</li>
                          <li>• 0.10 - Balanceo de brazos para equilibrio</li>
                          <li>• 0.20 - Postura incorrecta en aterrizaje</li>
                          <li>• 0.30 - Sentadilla en aterrizaje</li>
                          <li>• 0.30 - Ligero toque con manos</li>
                          <li>• 0.50 - Ayuda en aterrizaje</li>
                          <li>• 0.50 - Apoyo con manos</li>
                          <li>• 0.50 - Caída sobre colchón</li>
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
                  Barras Asimétricas - Nivel 1
                </CardTitle>
                <CardDescription>
                  El Nivel 1 en Barras Asimétricas introduce elementos
                  fundamentales que desarrollan la técnica básica de trabajo en
                  barras y preparan para elementos más complejos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Entrada de subida de estómago (0.60 puntos)</li>
                      <li>• Impulso (0.40 puntos)</li>
                      <li>• Vuelta atrás (0.40 puntos)</li>
                      <li>• Impulso a colocar piernas separadas</li>
                      <li>
                        • Salida de plantillas con piernas separadas (0.60
                        puntos)
                      </li>
                      <li>• Salida de sub balanceo (0.60 puntos)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Control en la entrada y salida de elementos</li>
                      <li>• Posición correcta del cuerpo en cada fase</li>
                      <li>• Continuidad en los movimientos</li>
                      <li>• Amplitud y extensión apropiadas</li>
                      <li>• Contacto adecuado con la barra</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <p className="text-yellow-800">
                      <strong>Importante:</strong> Consultar Reglas y Políticas
                      de USA Gymnastics para especificaciones de equipamiento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Técnica Detallada */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Técnica Completa de Barras Asimétricas
                </CardTitle>
                <Badge variant="outline">10.0 puntos total</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Entrada y Preparación:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Subida de estómago controlada</li>
                      <li>• Levantamiento simultáneo de ambas piernas</li>
                      <li>• Posición frontal extendida correcta</li>
                      <li>• Control en el impulso inicial</li>
                      <li>• Alineación corporal apropiada</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Vuelta atrás con posición recta</li>
                      <li>• Contacto adecuado con la barra</li>
                      <li>• Continuidad en los movimientos</li>
                      <li>• Control en colocación de piernas</li>
                      <li>• Salidas con amplitud correcta</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Control Corporal:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Posición neutra de la cabeza</li>
                      <li>• Cuerpo recto y ahuecado</li>
                      <li>• Extensión completa en vuelos</li>
                      <li>• Amplitud apropiada en salidas</li>
                      <li>• Distancia correcta en elementos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Técnica de Salida:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Control en plantillas con piernas separadas</li>
                      <li>• Sub balanceo con técnica correcta</li>
                      <li>• Extensión completa del cuerpo</li>
                      <li>• Amplitud y distancia apropiadas</li>
                      <li>• Finalización controlada</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Control en
                    entrada y salida, posición correcta del cuerpo, continuidad
                    en movimientos, amplitud y extensión apropiadas, y contacto
                    adecuado con la barra.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Penalizaciones Detalladas */}
            <Card>
              <CardHeader>
                <CardTitle>Tabla de Penalizaciones Detallada</CardTitle>
                <CardDescription>
                  Sistema completo de deducciones para Barras Asimétricas Nivel
                  1
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {/* Entrada de subida de estómago */}
                  <AccordionItem value="entrada-subida">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Entrada de subida de estómago (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Entrada controlada con subida de estómago
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Paso, brinco o salto adicional antes de la subida
                              de estómago (cada vez)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No levantar ambas piernas al mismo tiempo
                              (despegue de un pie)
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Apoyo complementario (barbilla sobre la barra
                              antes del levantamiento de piernas)
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No terminar en apoyo frontal extendido (hasta
                              0.10)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Impulso */}
                  <AccordionItem value="impulso">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Impulso (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Impulso controlado con alineación correcta
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Alineación incorrecta del cuerpo (no mostrar línea
                              recta desde hombros hasta pies con pecho ahuecado)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>Falta de control al regresar a la barra</span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Vuelta atrás */}
                  <AccordionItem value="vuelta-atras">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Vuelta atrás (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Vuelta atrás con posición recta y ahuecada
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mantener una posición neutra de la cabeza
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mantener posición recta y ahuecada del cuerpo
                              en todo momento
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mantener el contacto de la cadera o la parte
                              superior de los muslos con la barra
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>Falta de continuidad del círculo</span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Impulso a colocar piernas separadas */}
                  <AccordionItem value="impulso-piernas-separadas">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Impulso a colocar piernas separadas
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Control en la colocación de piernas separadas
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Colocar los pies dentro de las manos</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Colocación alternada de los pies</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Falta de control en la colocación de piernas
                              separadas (hasta 0.20)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salida de plantillas con piernas separadas */}
                  <AccordionItem value="salida-plantillas">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salida de plantillas con piernas separadas (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Salida controlada con piernas separadas
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mantener una posición neutra de la cabeza
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Extensión insuficiente del cuerpo en el vuelo
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Amplitud insuficiente del vuelo</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>Distancia insuficiente</span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salida de sub balanceo */}
                  <AccordionItem value="salida-sub-balanceo">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salida de sub balanceo (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Salida controlada desde sub balanceo
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mantener posición recta y ahuecada del cuerpo
                              en todo momento
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              La cadera hace contacto con la barra (sin
                              deducción si los muslos tocan la barra)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mantener una posición neutra de la cabeza
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Extensión insuficiente del cuerpo en el vuelo
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Amplitud insuficiente del vuelo</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>Distancia insuficiente</span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* VIGA DE EQUILIBRIO */}
          <TabsContent value="viga" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Viga de Equilibrio - Nivel 1
                </CardTitle>
                <CardDescription>
                  El Nivel 1 introduce los fundamentos básicos de la viga de
                  equilibrio, estableciendo las bases técnicas y de equilibrio
                  necesarias para el desarrollo progresivo en niveles
                  superiores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Entrada de salto al apoyo frontal (0.20 puntos)</li>
                      <li>• Patada de aguja (0.40 puntos)</li>
                      <li>• Bloqueo de equilibrio en relevé (0.20 puntos)</li>
                      <li>• Equilibrio en passé al frente (0.20 puntos)</li>
                      <li>• Salto extendido (0.40 puntos)</li>
                      <li>• Arabesca (30°) (0.40 puntos)</li>
                      <li>• Balanceos de piernas al frente (0.20 puntos)</li>
                      <li>
                        • Salida de inversión lateral a 3/4 (22.5°) de parada de
                        manos (0.60 puntos)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Fundamentos básicos de equilibrio</li>
                      <li>• Elementos de inversión controlados</li>
                      <li>• Técnicas básicas de salto</li>
                      <li>• Posiciones fundamentales de danza</li>
                      <li>• Control corporal básico</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <p className="text-yellow-800">
                      <strong>Importante:</strong> Consultar Reglas y Políticas
                      de USA Gymnastics para especificaciones de equipamiento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Técnica Detallada */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Técnica Completa de Viga de Equilibrio
                </CardTitle>
                <Badge variant="outline">10.0 puntos total</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Entrada y Elementos Básicos:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Entrada de salto al apoyo frontal</li>
                      <li>• Patada de aguja controlada</li>
                      <li>• Bloqueo de equilibrio en relevé</li>
                      <li>• Equilibrio en passé al frente</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Salto extendido con técnica correcta</li>
                      <li>• Arabesca con ángulo de 30°</li>
                      <li>• Balanceos de piernas al frente</li>
                      <li>• Salida de inversión lateral</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Control Corporal:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Posición neutra de la cabeza</li>
                      <li>• Cuerpo recto y alineado</li>
                      <li>• Brazos en posición correcta</li>
                      <li>• Equilibrio básico mantenido</li>
                      <li>• Control en elementos de inversión</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Técnica de Salida:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Inversión lateral controlada</li>
                      <li>• Parada de manos a 3/4 (22.5°)</li>
                      <li>• Contacto de manos mantenido</li>
                      <li>• Finalización segura</li>
                      <li>• Control en descenso</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Entrada
                    controlada, patada de aguja con altura correcta, equilibrio
                    en relevé, salto extendido con aterrizaje simultáneo, y
                    salida de inversión lateral precisa.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Penalizaciones Detalladas */}
            <Card>
              <CardHeader>
                <CardTitle>Tabla de Penalizaciones Detallada</CardTitle>
                <CardDescription>
                  Sistema completo de deducciones para Viga de Equilibrio Nivel
                  1
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {/* Entrada de salto al apoyo frontal */}
                  <AccordionItem value="entrada-salto">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Entrada de salto al apoyo frontal (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Entrada de salto al apoyo frontal
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No extender el cuerpo en el apoyo frontal
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de continuidad en el ¼ (90°) de giro a
                              sentada con piernas separadas
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Patada de aguja */}
                  <AccordionItem value="patada-aguja">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Patada de aguja (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Patada de aguja con altura correcta
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de continuidad desde sentada hasta parada
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No patear a mínimo la altura de la horizontal
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Bloqueo de equilibrio en relevé */}
                  <AccordionItem value="bloqueo-equilibrio">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Bloqueo de equilibrio en relevé (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Bloqueo de equilibrio en relevé
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mantener el equilibrio por dos segundos
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Equilibrio en passé al frente */}
                  <AccordionItem value="equilibrio-passe">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Equilibrio en passé al frente (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Equilibrio en passé al frente
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Piernas en posición incorrecta (no en passé al
                              frente)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salto extendido */}
                  <AccordionItem value="salto-extendido">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salto extendido (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Salto extendido con aterrizaje correcto
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No aterrizar con los dos pies al mismo tiempo
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>No aterrizar con los pies cerrados</span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Arabesca (30°) */}
                  <AccordionItem value="arabesca">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Arabesca (30°) (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Arabesca con ángulo de 30°
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No levantar la pierna libre a mínimo 30° por
                              arriba de la viga
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>No marcar la posición</span>
                            <Badge variant="secondary">0.05</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Balanceos de piernas al frente */}
                  <AccordionItem value="balanceos-piernas">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Balanceos de piernas al frente (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Balanceos de piernas al frente
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                            <span>Ver Faltas y Penalizaciones generales</span>
                            <Badge variant="outline">General</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salida de inversión lateral */}
                  <AccordionItem value="salida-inversion">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salida de inversión lateral a 3/4 (22.5°) de parada de
                        manos (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Salida de inversión lateral a 3/4 de parada de manos
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Colocación incorrecta de las manos (simultánea)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>No mantener el contacto de las manos</span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SUELO */}
          <TabsContent value="suelo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Suelo - Nivel 1
                </CardTitle>
                <CardDescription>
                  El Nivel 1 en Suelo introduce los elementos fundamentales de gimnasia artística en el suelo, desarrollando la técnica básica y la coordinación necesarias para niveles superiores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Inversión lateral (0.60 puntos)</li>
                      <li>• Rodada atrás agrupada (0.60 puntos)</li>
                      <li>• Vela (0.20 puntos)</li>
                      <li>• Equilibrio en passé al frente (0.40 puntos)</li>
                      <li>• Chassé al frente (0.20 puntos)</li>
                      <li>• Salto extendido (0.40 puntos)</li>
                      <li>• Rodada al frente agrupada (0.40 puntos)</li>
                      <li>• ¾ de parada de manos (0.40 puntos)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Elementos de inversión controlados</li>
                      <li>• Rodadas con técnica correcta</li>
                      <li>• Equilibrios básicos mantenidos</li>
                      <li>• Saltos con aterrizaje preciso</li>
                      <li>• Elementos de danza básicos</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <p className="text-yellow-800">
                      <strong>Importante:</strong> Consultar Reglas y Políticas
                      de USA Gymnastics para especificaciones de equipamiento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Técnica Detallada */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Técnica Completa de Suelo
                </CardTitle>
                <Badge variant="outline">10.0 puntos total</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Elementos de Inversión:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Inversión lateral con control</li>
                      <li>• Colocación simultánea de manos</li>
                      <li>• Paso por la vertical</li>
                      <li>• ¾ de parada de manos estable</li>
                      <li>• Alineación correcta de la cabeza</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Elementos de Rodada:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Rodada atrás con posición agrupada</li>
                      <li>• Rodada al frente manteniendo agrupación</li>
                      <li>• Control sin usar las manos</li>
                      <li>• Continuidad en el movimiento</li>
                      <li>• Finalización controlada</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Equilibrios y Danza:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Vela con control completo</li>
                      <li>• Equilibrio en passé al frente</li>
                      <li>• Chassé con plié correcto</li>
                      <li>• Posiciones de piernas precisas</li>
                      <li>• Cierre adecuado de piernas en el aire</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Saltos:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Salto extendido con piernas juntas</li>
                      <li>• Aterrizaje simultáneo de ambos pies</li>
                      <li>• Pies cerrados en aterrizaje</li>
                      <li>• Control corporal durante el vuelo</li>
                      <li>• Postura correcta en el aire</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Colocación
                    correcta de manos, mantenimiento de posiciones agrupadas,
                    control en inversiones, aterrizajes precisos, y técnica
                    correcta en elementos de danza.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Penalizaciones Detalladas */}
            <Card>
              <CardHeader>
                <CardTitle>Tabla de Penalizaciones Detallada</CardTitle>
                <CardDescription>
                  Sistema completo de deducciones para Suelo Nivel 1
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {/* Inversión lateral */}
                  <AccordionItem value="inversion-lateral">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Inversión lateral (0.60 puntos) - Símbolo de inversión
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Inversión lateral con paso por la vertical
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Colocación incorrecta de las manos (simultánea)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No pasar por la vertical (hasta 0.30)
                            </span>
                            <Badge variant="secondary">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mantener la alineación de la cabeza
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Rodada atrás agrupada */}
                  <AccordionItem value="rodada-atras">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Rodada atrás agrupada (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Rodada atrás manteniendo posición agrupada
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Colocar las manos en el suelo durante la fase de cuclillas antes de rodar hacia atrás
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mantener la posición agrupada cuando los glúteos tocan el suelo (hasta 0.20)
                            </span>
                            <Badge variant="secondary">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Vela */}
                  <AccordionItem value="vela">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Vela (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Vela con control completo del cuerpo
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Empujar el suelo con las manos para llegar a las cuclillas
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Equilibrio en passé al frente */}
                  <AccordionItem value="equilibrio-passe-suelo">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Equilibrio en passé al frente (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Equilibrio en passé al frente
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Piernas en la posición incorrecta (no en passé al frente)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Chassé al frente */}
                  <AccordionItem value="chasse-frente">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Chassé al frente (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Chassé al frente con plié correcto
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No pasar por plié al principio y al final del chassé al frente (cada vez)
                            </span>
                            <Badge variant="secondary">0.05</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No cerrar las piernas en el aire (hasta 0.10)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salto extendido */}
                  <AccordionItem value="salto-extendido-suelo">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salto extendido (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Salto extendido con técnica correcta
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mantener las piernas juntas en el aire durante el salto extendido
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No aterrizar con los dos pies al mismo tiempo
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No aterrizar con los pies cerrados (hasta 0.10)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Rodada al frente agrupada */}
                  <AccordionItem value="rodada-frente">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Rodada al frente agrupada (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Rodada al frente manteniendo posición agrupada
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mantener la posición agrupada durante la rodada al frente (hasta 0.20)
                            </span>
                            <Badge variant="secondary">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Empujar el suelo con las manos para llegar a las cuclillas
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* ¾ de parada de manos */}
                  <AccordionItem value="tres-cuartos-parada">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        ¾ de parada de manos (0.40 puntos) - Símbolo de inversión
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            ¾ de parada de manos con control
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                            <span>
                              Ver Faltas y Penalizaciones generales
                            </span>
                            <Badge variant="outline">General</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Botón flotante para penalizaciones generales */}
        <div className="fixed bottom-6 right-6 z-50">
          <PenalizacionesGenerales />
        </div>
      </main>
    </div>
  );
}

export default function Nivel1Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Nivel1Content />
    </Suspense>
  );
}
