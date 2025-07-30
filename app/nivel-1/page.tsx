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

        <Tabs defaultValue="salto" className="space-y-6">
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
                  Viga de Equilibrio - En Desarrollo
                </CardTitle>
                <CardDescription>
                  El contenido para Viga de Equilibrio del Nivel 1 estará
                  disponible próximamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800">
                    <strong>Próximamente:</strong> Información detallada sobre
                    los elementos requeridos, técnicas y penalizaciones para
                    Viga de Equilibrio en Nivel 1.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SUELO */}
          <TabsContent value="suelo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Suelo - En Desarrollo
                </CardTitle>
                <CardDescription>
                  El contenido para Suelo del Nivel 1 estará disponible
                  próximamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800">
                    <strong>Próximamente:</strong> Información detallada sobre
                    los elementos requeridos, técnicas y penalizaciones para
                    Suelo en Nivel 1.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Botón flotante para penalizaciones generales */}
        <div className="fixed bottom-6 right-6 z-50">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Scale className="w-5 h-5 mr-2" />
                Penalizaciones Generales
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Scale className="w-6 h-6" />
                  Penalizaciones Generales - USAG
                </DialogTitle>
                <DialogDescription>
                  Sistema completo de deducciones aplicable a todos los aparatos
                  y niveles
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Ámbito de aplicación */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Ámbito de Aplicación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      {[
                        "Barras Asimétricas",
                        "Viga de Equilibrio",
                        "Suelo",
                      ].map((aparato) => (
                        <Badge key={aparato} variant="outline">
                          {aparato}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Principios Generales */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Principios Generales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Todos los elementos y enlaces deben realizarse con máxima amplitud y mejor ejecución en orden escrito.",
                        "Cualquier desviación técnica o ejecución correcta se penaliza según esta tabla.",
                        "Penalizaciones específicas de cada aparato se aplican además de estas generales.",
                        "Errores que causen caída deducen ejecución y amplitud, pero no deducir errores de equilibrio que causen caída.",
                        "Deducciones totales por ejecución y amplitud en un elemento principal no exceden el valor del elemento + 0.50.",
                        "Deducciones por caídas, balanceos adicionales o falta de continuidad por caída son adicionales.",
                        "Si más de la mitad de elementos principales se hacen con ayuda del entrenador, nota se basa en elementos sin ayuda menos deducciones por ejecución y amplitud, incluyendo elementos ayudados.",
                        "Rutinas pueden invertirse en su totalidad, excepto elementos indicados individualmente.",
                        "Determinar diestra o zurda según dominancia de salto leap split y split frontal; adaptar instrucciones de derecha/izquierda en consecuencia.",
                      ].map((principio, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5 text-xs">
                            {index + 1}
                          </Badge>
                          <span>{principio}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Cambios al Texto Prescrito */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cambios al Texto Prescrito</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="cambios-texto">
                        <AccordionTrigger className="text-sm">
                          Penalizaciones por Modificaciones
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm">
                            <div className="grid gap-2">
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Cambiar, invertir, añadir u omitir una parte
                                  pequeña
                                </span>
                                <Badge variant="secondary">0.10</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Cambiar, invertir u omitir serie de enlaces
                                </span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Invertir orden de dos elementos en serie de
                                  danza enlazada en viga o suelo
                                </span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                <span>Cambiar un elemento principal</span>
                                <Badge variant="destructive">
                                  Valor del elemento
                                </Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                <span>
                                  Sustituir u omitir un elemento principal
                                </span>
                                <Badge variant="destructive">
                                  Doble del valor
                                </Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                <span>
                                  Invertir elemento principal si no permitido
                                </span>
                                <Badge variant="destructive">
                                  Mitad del valor
                                </Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Elemento principal incompleto</span>
                                <Badge variant="secondary">
                                  Hasta valor del elemento
                                </Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Añadir un elemento adicional</span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                                <span>
                                  Repetición de elemento perdido sin
                                  penalización
                                </span>
                                <Badge variant="outline">Sin deducción</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Elemento principal con giro adicional
                                </span>
                                <Badge variant="secondary">
                                  Hasta valor del elemento
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                {/* Deducciones Específicas de Ejecución */}
                <Card>
                  <CardHeader>
                    <CardTitle>Deducciones Específicas de Ejecución</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="deducciones-ejecucion">
                        <AccordionTrigger className="text-sm">
                          Deducciones Generales por Ejecución
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm">
                            <div className="bg-blue-50 p-3 rounded">
                              <h4 className="font-semibold mb-2">Máximas:</h4>
                              <ul className="space-y-1">
                                <li>
                                  • Ejecución y amplitud en un elemento: 0.50
                                </li>
                                <li>• Caída: 0.50</li>
                              </ul>
                            </div>
                            <div className="grid gap-2">
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Dar pasos adicionales</span>
                                <Badge variant="secondary">0.05</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Pies flexionados o relajados</span>
                                <Badge variant="secondary">0.05</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Separación de piernas o rodillas</span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Alineación cuerpo/postura incorrecta en
                                  elementos principales
                                </span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Brazos flexionados en apoyo</span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Piernas flexionadas en apoyo</span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Errores de equilibrio (pequeños, medianos,
                                  grandes)
                                </span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                <span>Caída en o desde aparato</span>
                                <Badge variant="destructive">0.50</Badge>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                {/* Deducciones Específicas por Aparato */}
                <Card>
                  <CardHeader>
                    <CardTitle>Deducciones Específicas por Aparato</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="barras-asimetricas">
                        <AccordionTrigger className="text-sm">
                          Barras Asimétricas
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm">
                            <div className="grid gap-2">
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Dudas en salto o kip superior</span>
                                <Badge variant="secondary">0.10</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Ajustes en colocación de manos o pies
                                </span>
                                <Badge variant="secondary">0.10</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Agarre alternativo o recuperar sin apoyo
                                  adicional
                                </span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Balanceo/impulso intermedio adicional (máx.
                                  0.50)
                                </span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Tomar aparato para evitar caída</span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                              <h5 className="font-semibold mb-2">
                                Rozar/Tocar/Golpear:
                              </h5>
                              <ul className="space-y-1">
                                <li>• Rozar o tocar: 0.10</li>
                                <li>• Golpear aparato: 0.20</li>
                                <li>• Golpear colchón: 0.30</li>
                                <li>• Apoyar peso total en colchón: 0.50</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="viga-suelo">
                        <AccordionTrigger className="text-sm">
                          Viga de Equilibrio y Suelo
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm">
                            <div className="grid gap-2">
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>No marcar passé relevé</span>
                                <Badge variant="secondary">0.05</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  No realizar giros 180°/360° en pie relevé alto
                                </span>
                                <Badge variant="secondary">0.10</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  No mantener brazos cubriendo orejas en
                                  elementos acrobáticos lentos
                                </span>
                                <Badge variant="secondary">0.05</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  No aterrizar pies cerrados en saltos/jump
                                </span>
                                <Badge variant="secondary">0.10</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  No aterrizar dos pies al mismo tiempo en
                                  saltos/jump
                                </span>
                                <Badge variant="secondary">0.10</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Alineación incorrecta de piernas en arabesca
                                  cuando indicado
                                </span>
                                <Badge variant="secondary">0.10</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  No contraer o arquear cuando indicado
                                </span>
                                <Badge variant="secondary">0.10</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  No patear o balancear pierna horizontal o más
                                  arriba
                                </span>
                                <Badge variant="secondary">0.10</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Separación desigual de piernas en saltos
                                  leap/jump
                                </span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Apoyar pierna en superficie lateral de viga
                                </span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Split insuficiente en elementos sin vuelo o
                                  danza
                                </span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Patada adicional a parada de manos</span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Movimientos adicionales para
                                  equilibrio/control
                                </span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Tomar viga para evitar caída</span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Uso de apoyo complementario</span>
                                <Badge variant="secondary">0.30</Badge>
                              </div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                              <h5 className="font-semibold mb-2">
                                Ejemplos de uso de apoyo complementario:
                              </h5>
                              <ul className="space-y-1">
                                <li>
                                  • Pie(s) permanece(n) en colchón o botador
                                  durante entrada
                                </li>
                                <li>
                                  • Pie(s) contacto con colchón en sentado con
                                  piernas separadas
                                </li>
                                <li>
                                  • Pie(s) usan soporte o base de viga para
                                  apoyarse
                                </li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                {/* Deducciones por Ayuda */}
                <Card>
                  <CardHeader>
                    <CardTitle>Deducciones por Ayuda</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="bg-red-50 p-3 rounded">
                        <h4 className="font-semibold mb-2">
                          Valor máximo: Valor del elemento + 0.50
                        </h4>
                        <p>El entrenador ayuda o toca durante el elemento</p>
                      </div>
                      <div className="grid gap-2">
                        <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                          <span>Deducción por ayuda</span>
                          <Badge variant="destructive">0.50</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                          <span>Deducción por ayuda en aterrizaje</span>
                          <Badge variant="destructive">0.50</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                          <span>Deducción por caída después de ayuda</span>
                          <Badge variant="destructive">0.50</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                          <span>Deducción por captura en caída</span>
                          <Badge variant="destructive">0.50</Badge>
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-2 rounded text-xs">
                        <strong>Nota:</strong> Se deduce solo una caída aunque
                        la gimnasta sea atrapada.
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Deducciones del Juez Principal */}
                <Card>
                  <CardHeader>
                    <CardTitle>Deducciones del Juez Principal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="advertencias">
                        <AccordionTrigger className="text-sm">
                          Advertencias (0.10 puntos)
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm">
                            <ul className="space-y-1">
                              <li>
                                • Exceder tiempo en viga (evaluación continúa
                                tras advertencia)
                              </li>
                              <li>
                                • Cualquier parte del cuerpo toca fuera de marca
                                límite de suelo
                              </li>
                              <li>
                                • No presentarse ante Juez Principal antes y
                                después de la rutina
                              </li>
                              <li>
                                • Entrenador parado junto a viga durante toda la
                                rutina tras advertencia
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="otras-deducciones">
                        <AccordionTrigger className="text-sm">
                          Otras Deducciones
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm">
                            <div className="grid gap-2">
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Indicaciones verbales o técnicas por
                                  entrenador o compañeras
                                </span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Vestimenta incorrecta</span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Inicio de rutina fuera de tiempo</span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>No respetar tiempo de calentamiento</span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>Conducta antideportiva de gimnasta</span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                                <span>
                                  Uso excesivo de magnesia o cinta incorrecta
                                </span>
                                <Badge variant="secondary">0.20</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                <span>
                                  Uso de colchones, botadores o bloques no
                                  autorizados
                                </span>
                                <Badge variant="destructive">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                <span>
                                  No retirar botador, colchón o bloque después
                                  de la entrada
                                </span>
                                <Badge variant="destructive">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                <span>
                                  Uso incorrecto de especificaciones del aparato
                                </span>
                                <Badge variant="destructive">0.30</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                <span>
                                  Comenzar rutina antes de la señal del Juez
                                  Principal
                                </span>
                                <Badge variant="destructive">0.50</Badge>
                              </div>
                              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                <span>
                                  Rutina de suelo realizada sin música
                                </span>
                                <Badge variant="destructive">1.00</Badge>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
}
