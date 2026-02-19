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
  ArrowLeft,
  Trophy,
  BookOpen,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Nivel3Content() {
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
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Nivel 3 - USAG
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
          <Button variant="outline" asChild>
            <Link href="/nivel-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nivel 2
            </Link>
          </Button>
          <div className="hidden md:block text-center">
            <p className="text-sm text-gray-600">Progresión de Niveles USAG</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">Nivel 1</Badge>
              <Badge variant="outline">Nivel 2</Badge>
              <Badge variant="default">Nivel 3</Badge>
              <Badge variant="outline">Nivel 4</Badge>
              <Badge variant="outline">Nivel 5</Badge>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href="/nivel-4">
              Nivel 4
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nivel 3 - Reglamento Completo
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            El Nivel 3 marca un salto significativo en complejidad técnica,
            introduciendo el resorte en salto, el kip en barras asimétricas, y
            rutinas más largas que requieren mayor resistencia y precisión
            técnica.
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
                  Salto - Resorte (Handspring)
                </CardTitle>
                <CardDescription>
                  El Nivel 3 introduce el resorte, un elemento dinámico que
                  requiere dos fases de vuelo y mayor coordinación técnica que
                  los saltos anteriores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elemento Principal:
                    </h4>
                    <p className="text-blue-800">
                      <strong>RESORTE</strong> sobre una superficie elevada de
                      colchones (mínimo 81 cm/32")
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Número de pasos de carrera opcional</li>
                      <li>• Dos fases de vuelo distintas</li>
                      <li>• Rotación continua hasta aterrizaje</li>
                      <li>• Bloqueo rápido y fuerte en apoyo de manos</li>
                      <li>• Cuerpo abandona pila cerca de la vertical</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Técnica Detallada del Resorte */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Técnica Completa del Resorte
                </CardTitle>
                <Badge variant="outline">10.0 puntos total</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Primera Fase de Vuelo:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • Carrera uniforme y fuerte, acelerando hasta talacha
                      </li>
                      <li>
                        • Brazos se mueven hacia adelante para completar
                        extensión de hombros
                      </li>
                      <li>• Cabeza neutra, mirada en manos</li>
                      <li>• Mantener posición del cuerpo recta</li>
                      <li>• Piernas juntas y cadera extendida</li>
                      <li>
                        • Rotación a posición invertida dirigiendo
                        piernas/talones hacia atrás y arriba
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fase de Apoyo:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • Al tocar suelo con manos, extender hombros rápido y
                        con fuerza
                      </li>
                      <li>• Generar bloqueo con brazos rectos</li>
                      <li>• Contacto con pila de colchones</li>
                      <li>• Cuerpo abandona la pila cerca de la vertical</li>
                      <li>
                        • Posición parada de manos vertical con brazos
                        extendidos
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Segunda Fase de Vuelo:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Mantener cuerpo recto y apretado</li>
                      <li>• Cadera extendida durante vuelo</li>
                      <li>• Cabeza neutra en todo momento</li>
                      <li>• Rotación continúa hasta aterrizaje</li>
                      <li>• Brazos a nivel hombros al despegar y bloquear</li>
                      <li>• Después brazos arriba durante segunda fase</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Aterrizaje:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Aterrizaje en demi-plié</li>
                      <li>• Posición brazos en aterrizaje opcional</li>
                      <li>• Estirar piernas para terminar en pie recto</li>
                      <li>• Brazos deben moverse hacia arriba</li>
                      <li>
                        • Cuerpo se mantiene recto desde apoyo hasta aterrizaje
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Carrera
                    acelerada, extensión completa de hombros, posición vertical
                    en apoyo, y cuerpo recto con piernas juntas desde apoyo
                    hasta aterrizaje.
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
                    • La gimnasta puede realizar <strong>dos saltos</strong>, la
                    mejor puntuación cuenta
                  </li>
                  <li>
                    • <strong>Tres intentos</strong> permitidos para completar
                    exitosamente uno o dos saltos
                  </li>
                  <li>
                    • <strong>Carrera vacía</strong> permitida una vez sin
                    penalización, adicional será salto NULO
                  </li>
                  <li>
                    • Carrera vacía = caída durante corrida, detención, salirse
                    de pista o contacto botador/pila sin recargarse
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
                  Sistema completo de deducciones para el resorte sobre
                  superficie elevada de colchones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {/* Faltas Generales y Saltos Nulos */}
                  <AccordionItem value="faltas-generales-resorte">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Faltas Generales y Saltos Nulos
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-sm">
                        <div>
                          <h5 className="font-medium text-green-700 mb-2">
                            Sin Deducción:
                          </h5>
                          <ul className="space-y-1 text-green-600">
                            <li>
                              • Carrera vacía #1: acercamiento de carrera sin
                              llegar a recargarse o apoyarse sobre la pila de
                              colchones
                            </li>
                            <li>
                              • Entrenador parado entre el botador y la pila de
                              colchones o recargado o con el peso sobre la pila
                              de colchones
                            </li>
                            <li>• Distancia insuficiente</li>
                            <li>• Altura insuficiente</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 mb-2">
                            Salto NULO (0.00 puntos):
                          </h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• Carrera vacía #2 o carrera vacía #3</li>
                            <li>
                              • Uso de botador alternativo (tipo trampolín o
                              botador junior)
                            </li>
                            <li>
                              • Realizar un salto incorrecto (salto a cuclillas,
                              etc.)
                            </li>
                            <li>
                              • Nunca alcanza la vertical y regresa al
                              botador/piso o aterriza entre botador y manos
                            </li>
                            <li>
                              • Correr sobre el botador y subir en la pila de
                              colchones o rebotar recargándose con parte no
                              permitida
                            </li>
                            <li>
                              • Sin contacto de las manos en la pila de
                              colchones
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-yellow-700 mb-2">
                            Penalizaciones Generales:
                          </h5>
                          <ul className="space-y-1 text-yellow-600">
                            <li>
                              • 2.00 - Ayuda del entrenador (en cualquier fase:
                              primera fase, apoyo, segunda fase de vuelo)
                            </li>
                            <li>
                              • 0.30 - Dinamismo insuficiente
                              (velocidad/potencia)
                            </li>
                            <li>• 0.30 - Desviación de una dirección recta</li>
                            <li>
                              • 0.50 - Realizar el salto sin la señal del Juez
                              Principal (deducción promedio del siguiente salto
                              completado)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Penalizaciones Generales de Ejecución */}
                  <AccordionItem value="fase-general">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones Generales de Ejecución
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.10 - No mantener posición neutra de cabeza
                          </li>
                          <li>
                            • 0.10 - Forma incorrecta de pies (flexionados,
                            relajados)
                          </li>
                          <li>• 0.20 - Piernas separadas</li>
                          <li>• 0.30 - Piernas dobladas</li>
                          <li>
                            • 0.30 - Cuerpo arqueado (no mantener postura
                            extendida)
                          </li>
                          <li>
                            • 0.50 - Cuerpo carpado (no mantener postura
                            extendida)
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Penalizaciones Primera Fase de Vuelo */}
                  <AccordionItem value="primera-fase-vuelo">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones de la Primera Fase de Vuelo
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.10 - Colocación separada o alternada de manos
                          </li>
                          <li>• 0.20 - Rechace alternado de manos</li>
                          <li>
                            • 0.20 - Alineación incorrecta de hombros (ángulo
                            menor a 180°)
                          </li>
                          <li>• 0.50 - Brazos doblados en el apoyo</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Penalizaciones Fase de Apoyo */}
                  <AccordionItem value="fase-apoyo">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones de la Fase de Apoyo
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 2.00 - Cabeza hace contacto con la pila de
                            colchones en el apoyo (incluye deducción por flexión
                            excesiva de brazos)
                          </li>
                          <li>
                            • 0.10 a 0.30 - Colocación adicional de manos (pasos
                            o brincos con las manos, máximo 0.30)
                          </li>
                          <li>• 0.50 - Mucho tiempo en el apoyo</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Contacto de Manos Más Allá de la Vertical */}
                  <AccordionItem value="contacto-manos-vertical">
                    <AccordionTrigger className="text-sm">
                      Contacto de Manos Más Allá de la Vertical
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.05 a 0.50 - Contacto de las manos de 1° a 45°
                            más allá de la vertical
                          </li>
                          <li>
                            • 0.55 a 1.00 - Contacto de las manos de 46° a 89°
                            más allá de la vertical
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Zona de Aterrizaje de Manos */}
                  <AccordionItem value="zona-aterrizaje-manos">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones en la Zona de Aterrizaje de Manos
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.50 - Ambas manos aterrizan más allá de la línea
                            de cinta
                          </li>
                          <li>
                            • 0.20 - Colocación separada de manos (una dentro de
                            la zona, otra sobre la línea)
                          </li>
                          <li>
                            • 0.10 a 0.30 - Colocación adicional de manos
                            (pasos/brincos con las manos)
                          </li>
                          <li>
                            • 3.00 - No hacer contacto en el colchón con ambas
                            manos (ejecutar mortal o tocar colchón solo con una
                            mano)
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Fase de Aterrizaje */}
                  <AccordionItem value="fase-aterrizaje">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones de la Fase de Aterrizaje
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 1.00 - La gimnasta aterriza sobre los pies y se
                            baja del colchón
                          </li>
                          <li>
                            • 0.50 - La gimnasta aterriza sentada, con un ángulo
                            de cadera de 90° y se baja del colchón
                          </li>
                          <li>
                            • 0.50 - La gimnasta aterriza sobre la espalda
                            arqueada y con las piernas dobladas y se baja del
                            colchón
                          </li>
                        </ul>
                        <div className="mt-2">
                          <h5 className="font-medium text-green-700 mb-1">
                            Sin Deducción:
                          </h5>
                          <ul className="space-y-1 text-green-600">
                            <li>
                              • La gimnasta comete algún error de ejecución de
                              los anteriores, pero después se recuesta en
                              posición de extensión acostada (evaluación
                              finaliza cuando se llega a esta posición)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Elementos de Desarrollo */}
            <Card>
              <CardHeader>
                <CardTitle>Elementos de Desarrollo y Progresión</CardTitle>
                <CardDescription>
                  Ejercicios preparatorios para dominar el resorte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="resorte-superficie">
                    <AccordionTrigger>
                      Resorte desde Superficie Elevada
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Progresión básica:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>
                            • Desde soporte al final de colchón plegable apilado
                          </li>
                          <li>• Paso adelante en desplante profundo</li>
                          <li>
                            • Balanceo brazos de atrás hacia adelante hasta
                            final colchón
                          </li>
                          <li>
                            • Realizar resorte al frente, juntar piernas al
                            pasar vertical
                          </li>
                          <li>
                            • Aterrizar con cadera extendida, posición arco
                            apretado
                          </li>
                          <li>
                            • Concentrarse en manos manteniendo posición recta y
                            estirada
                          </li>
                          <li>• Brazos arriba junto a orejas todo el tiempo</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="mortal-frente">
                    <AccordionTrigger>
                      ¾ de Mortal al Frente Extendido
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Desarrollo de rotación:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Desde aproximación controlada al botador</li>
                          <li>
                            • Saltar y realizar ¾ de mortal al frente extendido
                          </li>
                          <li>• Aterrizar acostada sobre espalda</li>
                          <li>• Brazos a nivel hombros al despegar</li>
                          <li>• Ruta de brazos opcional durante mortal</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="paradas-ayuda">
                    <AccordionTrigger>
                      Paradas de Manos con Ayuda
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Fortalecimiento y equilibrio:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Con botador, patear hasta parada de manos</li>
                          <li>
                            • Antebrazos presionados contra extremo abierto del
                            botador
                          </li>
                          <li>
                            • Ayuda para equilibrio y desarrollo de fuerza
                          </li>
                          <li>
                            • Aumentar tiempo con mejora en forma y fuerza
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
                  Barras Asimétricas - Nivel 3
                </CardTitle>
                <CardDescription>
                  El Nivel 3 introduce el kip como elemento de entrada
                  alternativo, marcando un avance significativo en los
                  requisitos de fuerza y coordinación.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Balanceo de kip y regreso (0.20 puntos)</li>
                      <li>• Entrada de subida de estómago (0.40 puntos)</li>
                      <li>
                        • Entrada: Kip carpado o con piernas separadas (0.60
                        puntos)
                      </li>
                      <li>• Impulso (0.20 puntos)</li>
                      <li>• Vuelta atrás (0.40 puntos)</li>
                      <li>
                        • Vuelta al frente, pequeño impulso, regreso al apoyo
                        frontal (0.40 puntos)
                      </li>
                      <li>
                        • Impulso, colocación de cuclillas, salida de salto
                        extendido (0.60 puntos)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Kip como elemento de entrada alternativo</li>
                      <li>• Mayor complejidad en transiciones</li>
                      <li>• Control avanzado en movimientos</li>
                      <li>• Continuidad en elementos enlazados</li>
                      <li>• Precisión técnica en cada fase</li>
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
                    <h4 className="font-semibold mb-2">Entrada y Kip:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • Inicio desde parada correcta por fuera de las barras
                      </li>
                      <li>• Despegue simultáneo con ambos pies</li>
                      <li>• Balanceo controlado sin "correr"</li>
                      <li>• Kip carpado o con piernas separadas</li>
                      <li>• Transición fluida a subida de estómago</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Impulso con alineación correcta</li>
                      <li>• Vuelta atrás con posición recta</li>
                      <li>• Vuelta al frente con pequeño impulso</li>
                      <li>• Colocación de cuclillas controlada</li>
                      <li>• Salida de salto extendido</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Control Corporal:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Posición neutra de la cabeza</li>
                      <li>• Cuerpo recto y ahuecado</li>
                      <li>• Contacto adecuado con la barra</li>
                      <li>• Continuidad en círculos</li>
                      <li>• Control en transiciones</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Técnica de Salida:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Colocación de cuclillas precisa</li>
                      <li>• Salto extendido con técnica correcta</li>
                      <li>• Extensión completa del cuerpo</li>
                      <li>• Amplitud y distancia apropiadas</li>
                      <li>• Finalización controlada</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Inicio correcto
                    desde parada, kip controlado, transiciones fluidas,
                    continuidad en círculos, y técnica precisa en salida.
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
                  3
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {/* Balanceo de kip y regreso */}
                  <AccordionItem value="balanceo-kip">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Balanceo de kip y regreso (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Balanceo controlado de kip con regreso
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No iniciar la rutina desde parada por fuera de las
                              barras, mirando hacia la barra inferior
                            </span>
                            <Badge variant="destructive">0.50</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No despegar con los dos pies al mismo tiempo
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Realizar un balanceo 'corriendo'</span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No guiar el balanceo al frente con los pies
                              (realizar un balanceo de suspensión larga)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Extensión insuficiente al final del balanceo de
                              kip
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No cerrar las piernas al final del balanceo de kip
                              con piernas separadas
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Flexionar las piernas en el balanceo hacia atrás
                              antes de hacer contacto con el piso
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Entrada de subida de estómago */}
                  <AccordionItem value="entrada-subida">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Entrada de subida de estómago (0.40 puntos)
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
                              No mantener el contacto de las manos con la barra
                              entre el balanceo de kip y la subida de estómago
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Paso, brinco o salto adicional antes de la subida
                              de estómago
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
                              Apoyo complementario (la barbilla sobre la barra
                              antes del levantamiento de piernas)
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>No terminar en apoyo frontal extendido</span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No iniciar la rutina desde parada por fuera de las
                              barras, mirando hacia la barra inferior
                            </span>
                            <Badge variant="destructive">0.50</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Entrada: Kip carpado o con piernas separadas */}
                  <AccordionItem value="kip-carpado">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Entrada: Kip carpado o con piernas separadas (0.60
                        puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Kip carpado o con piernas separadas
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No despegar con los dos pies al mismo tiempo
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Realizar un balanceo 'corriendo'</span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No guiar el balanceo al frente con los pies
                              (realizar un balanceo de suspensión larga)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Extensión insuficiente al final del balanceo de
                              kip
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No cerrar las piernas al final del balanceo de kip
                              con piernas separadas
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
                        Impulso (0.20 puntos)
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
                              recta desde los hombros hasta los pies con el
                              pecho ahuecado)
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
                              No mantener una posición neutra de la cabeza (cada
                              vez, hasta 0.10)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mantener la posición recta y ahuecada del
                              cuerpo en todo momento (cada vez, hasta 0.20)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mantener el contacto de la cadera o la parte
                              superior de los muslos con la barra en todo
                              momento (cada vez, hasta 0.20)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de continuidad de círculo (cada vez, hasta
                              0.10)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Falta de continuidad entre los círculos (hasta
                              0.20)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Vuelta al frente, pequeño impulso, regreso al apoyo frontal */}
                  <AccordionItem value="vuelta-frente">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Vuelta al frente, pequeño impulso, regreso al apoyo
                        frontal (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Vuelta al frente con pequeño impulso y regreso
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mostrar una posición del cuerpo recta y
                              ahuecada al empezar la vuelta al frente
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No realizar un pequeño impulso inmediatamente
                              después de la vuelta al frente (mitad del valor)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>Falta de control al regresar a la barra</span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No regresar al apoyo frontal (realizar
                              inmediatamente la colocación de cuclillas)
                            </span>
                            <Badge variant="destructive">0.50</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Colocación alternada de los pies</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Impulso, colocación de cuclillas, salida de salto extendido */}
                  <AccordionItem value="impulso-cuclillas-salida">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Impulso, colocación de cuclillas, salida de salto
                        extendido (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Secuencia completa de impulso, cuclillas y salida
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Balanceo insuficiente de piernas hacia atrás para
                              el impulso (solo se levanta la cadera)
                            </span>
                            <Badge variant="secondary">0.05</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mostrar una posición recta y ahuecada del
                              cuerpo en el vuelo
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Tocar la barra superior</span>
                            <Badge variant="destructive">0.50</Badge>
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
                  Viga de Equilibrio - Nivel 3
                </CardTitle>
                <CardDescription>
                  El Nivel 3 introduce elementos más avanzados en la viga de
                  equilibrio, incluyendo parada de manos transversal, saltos
                  leap split y técnicas de giro más complejas que requieren
                  mayor control y precisión.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>
                        • Entrada de apoyo de pose de pescado al frente (0.20
                        puntos)
                      </li>
                      <li>• Parada de manos transversal (0.60 puntos)</li>
                      <li>
                        • ½ (180°) giro en passé al frente (giro de presión de
                        talón) (0.40 puntos)
                      </li>
                      <li>• Salto extendido (0.40 puntos)</li>
                      <li>• Arabesca (45°) (0.40 puntos)</li>
                      <li>
                        • Salto Leap Split con piernas extendidas (90°) (0.60
                        puntos)
                      </li>
                      <li>• Dos (2) ½ (180°) giros pivote (0.20 puntos)</li>
                      <li>
                        • Salida de inversión lateral a parada de manos lateral,
                        ¼ (90°) de giro (0.60 puntos)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>
                        • Parada de manos transversal como elemento avanzado
                      </li>
                      <li>
                        • Técnicas de giro más complejas (presión de talón)
                      </li>
                      <li>• Saltos leap split con ángulos específicos</li>
                      <li>• Control avanzado en elementos de inversión</li>
                      <li>• Precisión en secuencias de giros múltiples</li>
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
                      <li>• Entrada de apoyo de pose de pescado al frente</li>
                      <li>• Parada de manos transversal</li>
                      <li>• ½ giro en passé al frente</li>
                      <li>• Salto extendido con técnica correcta</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Arabesca con ángulo de 45°</li>
                      <li>• Salto Leap Split con 90°</li>
                      <li>• Dos giros pivote de 180°</li>
                      <li>• Salida de inversión lateral con giro</li>
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
                      <li>• Equilibrio en elementos avanzados</li>
                      <li>• Control en parada de manos transversal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Técnica de Salida:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Inversión lateral controlada</li>
                      <li>• Parada de manos lateral</li>
                      <li>• ¼ giro (90°) preciso</li>
                      <li>• Finalización segura</li>
                      <li>• Control en descenso</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Entrada
                    controlada, parada de manos transversal con vertical, giro
                    de presión de talón preciso, salto extendido con aterrizaje
                    simultáneo, arabesca con ángulo de 45°, leap split con 90°,
                    giros pivote precisos, y salida de inversión lateral con
                    giro de 90°.
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
                  3
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {/* Entrada de apoyo de pose de pescado al frente */}
                  <AccordionItem value="entrada-pose-pescado">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Entrada de apoyo de pose de pescado al frente (0.20
                        puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Entrada de apoyo de pose de pescado al frente
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
                              Falta de continuidad desde la entrada hasta la
                              parada
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Hacer una palanca sobre la rodilla</span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Parada de manos transversal */}
                  <AccordionItem value="parada-manos-transversal">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Parada de manos transversal (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Parada de manos transversal
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No juntar (unir) las piernas (una al lado de la
                              otra)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Colocación incorrecta de las manos (separadas)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>No lograr la vertical</span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* ½ (180°) giro en passé al frente */}
                  <AccordionItem value="giro-passe-frente">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />½ (180°) giro en
                        passé al frente (giro de presión de talón) (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            ½ (180°) giro en passé al frente (giro de presión de
                            talón)
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Piernas en la posición incorrecta (no en passé al
                              frente)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>No bajar el talón al terminar el giro</span>
                            <Badge variant="secondary">0.05</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No usar la técnica de giro de presión de talón
                            </span>
                            <Badge variant="destructive">0.30</Badge>
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
                              (cada vez)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No aterrizar con los pies cerrados (cada vez,
                              hasta 0.10)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Romper el enlace entre los saltos extendidos (sin
                              deducción por continuidad insuficiente entre
                              saltos)
                            </span>
                            <Badge variant="secondary">0.05</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No levantar la pierna libre a mínimo 45° por
                              arriba de la viga
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Arabesca (45°) */}
                  <AccordionItem value="arabesca-45">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Arabesca (45°) (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Arabesca con ángulo de 45°
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No levantar la pierna libre a mínimo 45° por
                              arriba de la viga
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>No mantener la posición un segundo</span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salto Leap Split */}
                  <AccordionItem value="leap-split">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salto Leap Split con piernas extendidas (90°) (0.60
                        puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Salto Leap Split con piernas extendidas (90°)
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Flexionar la pierna guía (frontal) en el despegue
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Separación desigual de las piernas</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No pausar en la posición de arabesca baja en el
                              aterrizaje
                            </span>
                            <Badge variant="secondary">0.05</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Dos (2) ½ (180°) giros pivote */}
                  <AccordionItem value="dos-giros-pivote">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Dos (2) ½ (180°) giros pivote (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Dos (2) ½ (180°) giros pivote
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de precisión (cada vez, hasta 0.10)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Colocación incorrecta de las manos (simultánea)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>No lograr la vertical</span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>No realizar el ¼ (90°) de giro</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              ¼ (90°) de giro incompleto o pasado (sobregirado)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mantener la mano en contacto con la viga hasta
                              que el cuerpo pase por el plano horizontal de la
                              viga
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salida de inversión lateral */}
                  <AccordionItem value="salida-inversion-lateral">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salida de inversión lateral a parada de manos lateral, ¼
                        (90°) de giro (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Salida de inversión lateral a parada de manos
                            lateral, ¼ (90°) de giro
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No completar la salida: estas deducciones no
                              incluyen posibles faltas en la posición del
                              cuerpo. Cuando la gimnasta intenta pero no
                              completa la salida, aplicar las deducciones
                              específicas como se muestran para las fases que no
                              se realizaron.
                            </span>
                            <Badge variant="destructive">0.60</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>No lograr la vertical</span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>No realizar el ¼ (90°) de giro</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Elemento incompleto</span>
                            <Badge variant="destructive">0.50</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Caída</span>
                            <Badge variant="destructive">0.50</Badge>
                          </div>
                        </div>
                        <div className="bg-yellow-50 p-2 rounded">
                          <p className="text-sm text-yellow-700">
                            <strong>Nota:</strong> Si la gimnasta intenta la
                            salida, no logra la vertical, cae y no repite el
                            elemento, las deducciones suman 1.00
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suelo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Suelo - Descripción General
                </CardTitle>
                <CardDescription>
                  La rutina de suelo en Nivel 3 introduce elementos acrobáticos de mayor potencia como la redondilla y el flic-flac, además de exigir una mayor amplitud en los saltos de danza.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Inversión lateral (0.60 puntos)</li>
                      <li>• Rodada atrás a parada de manos (0.60 puntos)</li>
                      <li>• ½ giro en passé al frente (0.40 puntos)</li>
                      <li>• Salto Leap Split (90°) (0.60 puntos)</li>
                      <li>• Salto Jump Split (90°) (0.40 puntos)</li>
                      <li>• Redondilla (0.60 puntos)</li>
                      <li>• Flic-Flac (0.60 puntos)</li>
                      <li>• Parada de manos con rodada al frente (0.40 puntos)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Primer nivel con serie acrobática (Redondilla + Flic-flac)</li>
                      <li>• Rodada atrás con paso por la vertical</li>
                      <li>• Mayor exigencia de split en saltos (90°)</li>
                      <li>• Control de aterrizaje en series dinámicas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Acrobacia Principal */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50/50">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    Serie Acrobática: Redondilla + Flic-Flac
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h5 className="font-medium text-gray-900">Redondilla (Round-off):</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Entrada con paso largo y dinámico</li>
                        <li>• Manos alternadas, pasando por la vertical</li>
                        <li>• Repulsión de hombros potente</li>
                        <li>• Aterrizaje simultáneo con ambos pies</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-gray-900">Flic-Flac (Back Handspring):</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Salto hacia atrás inmediato tras redondilla</li>
                        <li>• Extensión completa del cuerpo en vuelo</li>
                        <li>• Bloqueo fuerte de brazos en el suelo</li>
                        <li>• Aterrizaje controlado en demi-plié</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded text-sm text-red-700">
                    <strong>Penalización Crítica:</strong> 0.30 por falta de continuidad entre redondilla y flic-flac.
                  </div>
                </CardContent>
              </Card>

              {/* Rodada atrás a parada de manos */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Rodada atrás a parada de manos</CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>Rodada hacia atrás manteniendo brazos estirados, pasando por la vertical (parada de manos) antes de bajar a desplante.</p>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                        No pasar por la vertical: hasta 0.30
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                        Brazos doblados: hasta 0.50
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Saltos y Danza */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Elementos de Danza (90° Split)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-3 bg-gray-50 rounded">
                      <h5 className="font-medium mb-1">Leap Split:</h5>
                      <p className="text-xs text-gray-500 mb-2">Salto de gran paso con 90° de separación.</p>
                      <Badge variant="outline" className="text-blue-600 border-blue-200">0.60 pts</Badge>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <h5 className="font-medium mb-1">Jump Split:</h5>
                      <p className="text-xs text-gray-500 mb-2">Salto desde dos pies con 90° de separación.</p>
                      <Badge variant="outline" className="text-blue-600 border-blue-200">0.40 pts</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Puntos para Evaluación */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Resumen de Evaluación - Suelo Nivel 3
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800">
                <ul className="space-y-2">
                  <li>• <strong>Continuidad:</strong> Fluidez total en la conexión Redondilla + Flic-flac.</li>
                  <li>• <strong>Verticalidad:</strong> Control total en la parada de manos tras la rodada.</li>
                  <li>• <strong>Amplitud:</strong> Split de 90° mínimo en todos los saltos requeridos.</li>
                  <li>• <strong>Artística:</strong> Expresividad y ritmo acorde a la música (si aplica).</li>
                </ul>
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

export default function Nivel3Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Nivel3Content />
    </Suspense>
  );
}
