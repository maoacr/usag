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

function Nivel2Content() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px:8">
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
                Nivel 2 - USAG
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Gimnasia Artística</Badge>
              <Button variant="outline" size="sm" asChild>
                <Link href="/nivel-1">Ver Nivel 1</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navegación entre niveles - MOVER AL INICIO */}
        <div className="mb-8 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/nivel-1">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nivel 1
            </Link>
          </Button>
          <div className="hidden md:block text-center">
            <p className="text-sm text-gray-600">Progresión de Niveles USAG</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">Nivel 1</Badge>
              <Badge variant="default">Nivel 2</Badge>
              <Badge variant="outline">Nivel 3</Badge>
              <Badge variant="outline">Nivel 4</Badge>
              <Badge variant="outline">Nivel 5</Badge>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href="/nivel-3">
              Nivel 3
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nivel 2 - Reglamento Completo
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            El Nivel 2 avanza en complejidad técnica, introduciendo elementos
            como el salto a parada de manos y movimientos más dinámicos que
            requieren mayor fuerza, coordinación y control corporal.
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
                  <Target className="w-5 h-5" />
                  Salto - Descripción General
                </CardTitle>
                <CardDescription>
                  El Nivel 2 introduce el salto a parada de manos, un elemento
                  más avanzado que requiere mayor control corporal y fuerza en
                  la fase invertida.
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
                        • <strong>Salto a Parada de Manos</strong> hacia
                        superficie elevada de colchones (mín 40 cm/16")
                      </li>
                      <li>
                        • <strong>Descenso</strong> a la posición de extensión
                        acostada en la espalda
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Especificaciones Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>
                        • Distancia de carrera: ~9 metros (30 pies) o 7-9 pasos
                      </li>
                      <li>
                        • Carrera uniforme y fuerte, acelerando hasta la talacha
                      </li>
                      <li>
                        • Mantener cuerpo extendido al rotar hacia posición
                        invertida
                      </li>
                      <li>
                        • Aterrizar en parada de manos vertical con brazos
                        rectos
                      </li>
                      <li>
                        • Descenso controlado a posición acostada en la espalda
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Técnica Detallada */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Técnica del Salto a Parada de Manos
                </CardTitle>
                <Badge variant="outline">10.0 puntos total</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Fase de Carrera:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Carrera acelerada manteniendo velocidad</li>
                      <li>• Contacto con botador con pies delante</li>
                      <li>• Rebote a despegue del botador</li>
                      <li>• Énfasis en buena técnica además de aceleración</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fase de Vuelo:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • Brazos se balancean hacia adelante hasta hombros
                        extendidos
                      </li>
                      <li>• Cuerpo recto y ahuecado en vuelo</li>
                      <li>• Cabeza neutra durante toda la rotación</li>
                      <li>• Piernas/talones hacia atrás y arriba</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Fase de Apoyo:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Posición parada de manos vertical</li>
                      <li>• Brazos extendidos y rectos</li>
                      <li>• Cuerpo recto y ahuecado</li>
                      <li>• Piernas juntas y cadera extendida</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fase de Descenso:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Mantener cuerpo recto y ahuecado</li>
                      <li>• Piernas juntas y pies en puntas</li>
                      <li>• Aterrizar en posición extensión acostada</li>
                      <li>• Brazos permanecen arriba</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Nota Importante:</strong> No se requiere rechace de
                    brazos. Si la gimnasta aterriza primero en pies, debe
                    regresar a posición acostada para no ser penalizada.
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
                    • Se permiten <strong>dos saltos</strong> y se cuenta la
                    mejor puntuación
                  </li>
                  <li>
                    • Se permiten <strong>tres intentos</strong> para completar
                    uno o dos saltos exitosos
                  </li>
                  <li>
                    • Se permite <strong>una carrera vacía</strong> sin
                    penalización dentro de los tres intentos
                  </li>
                  <li>
                    • Carrera vacía adicional es <strong>salto nulo</strong>
                  </li>
                  <li>
                    • Carrera vacía: caída en corrida, detención, salirse de
                    pista, o contacto con botador/pila sin recargarse
                  </li>
                  <li>
                    • <strong>No se permite cuarto intento</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Penalizaciones Detalladas */}
            <Card>
              <CardHeader>
                <CardTitle>Tabla de Penalizaciones Detallada</CardTitle>
                <CardDescription>
                  Sistema completo de deducciones para el salto a parada de
                  manos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {/* Faltas Generales y Saltos Nulos */}
                  <AccordionItem value="faltas-generales">
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
                              colchones o recargado
                            </li>
                            <li>
                              • Uso de botador alternativo (trampolín o botador
                              junior)
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 mb-2">
                            Salto NULO (0.00 puntos):
                          </h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• Carrera vacía #2 o carrera vacía #3</li>
                            <li>
                              • Realizar un salto incorrecto (ej. salto a
                              cuclillas, etc.)
                            </li>
                            <li>
                              • No alcanza la vertical y regresa al botador/piso
                              o aterriza entre botador y manos
                            </li>
                            <li>
                              • Ayuda del entrenador del botador a la pila de
                              colchones
                            </li>
                            <li>
                              • Correr sobre el botador y subir en la pila de
                              colchones o rebotar desde el botador hasta
                              recargarse en la pila con partes del cuerpo
                              distintas a la espalda
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-yellow-700 mb-2">
                            Penalizaciones Generales:
                          </h5>
                          <ul className="space-y-1 text-yellow-600">
                            <li>
                              • 2.00 - Ayuda del entrenador después de que la
                              gimnasta logra el apoyo de manos en la pila de
                              colchones
                            </li>
                            <li>
                              • 0.30 - Dinamismo insuficiente
                              (velocidad/potencia)
                            </li>
                            <li>
                              • 0.50 - Realizar el salto sin la señal del Juez
                              Principal (JP), el JP hace la deducción del
                              promedio del siguiente salto completado
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Fase de Ejecución */}
                  <AccordionItem value="fase-ejecucion">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones de Ejecución Corporal
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.10 - No mantener una posición neutra de la
                            cabeza
                          </li>
                          <li>
                            • 0.10 - Forma incorrecta de pies (flexionados,
                            relajados)
                          </li>
                          <li>• 0.20 - Piernas separadas</li>
                          <li>• 0.30 - Piernas dobladas</li>
                          <li>
                            • 0.30 - No mantener la posición extendida del
                            cuerpo (arqueada)
                          </li>
                          <li>
                            • 0.50 - No mantener la posición extendida del
                            cuerpo (carpada)
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Carrera y Contacto con Botador */}
                  <AccordionItem value="carrera-botador">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones de Carrera y Contacto con Botador
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.30 - Aceleración insuficiente durante la carrera
                            (capacidad para obtener velocidad máxima)
                          </li>
                          <li>
                            • 0.30 - No mantener la velocidad horizontal de la
                            carrera hacia el botador (gimnasta hace pasos
                            disparejos antes del botador)
                          </li>
                          <li>
                            • 0.30 - Inclinación excesiva del cuerpo hacia
                            enfrente al contacto con el botador
                          </li>
                          <li>
                            • 0.30 - Brincos adicionales en el botador (doble
                            rebote)
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Primera Fase de Vuelo */}
                  <AccordionItem value="primera-fase-vuelo">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones de la Primera Fase de Vuelo
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.30 - Desviación de la dirección recta
                            determinada por el contacto inicial con el colchón
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Fase de Apoyo */}
                  <AccordionItem value="fase-apoyo">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones de la Fase de Apoyo
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.30 - Alineación incorrecta de hombros (ángulo
                            hombros menor a 180°)
                          </li>
                          <li>• 0.50 - Brazos doblados en el apoyo</li>
                          <li>
                            • 2.00 - Brazos completamente doblados que ocasionan
                            que la cabeza haga contacto con la pila de colchones
                            (incluye la deducción de 0.50 por flexión excesiva
                            de brazos)
                          </li>
                          <li>
                            • 2.00 - No mostrar una posición vertical invertida
                            desde las manos hasta la cadera (ejecuta acción de
                            rodada al frente)
                          </li>
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
                  Ejercicios preparatorios para dominar el salto a parada de
                  manos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="forma-carrera-2">
                    <AccordionTrigger>
                      Forma y Técnica de Carrera
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm">
                        <strong>
                          Énfasis en buena técnica además de aceleración y
                          mantenimiento de velocidad.
                        </strong>
                        La carrera debe ser progresiva, uniforme y fuerte,
                        culminando en una talacha potente al botador.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="mantenciones-paradas">
                    <AccordionTrigger>
                      Mantenciones de Paradas de Manos
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Progresión con bloque de asistencia:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>
                            • Usar bloque de asistencia o superficie similar
                          </li>
                          <li>
                            • Posición lagartija con manos en piso y pies en
                            superficie de apoyo
                          </li>
                          <li>
                            • Acercar manos y patear hasta pararse de manos
                          </li>
                          <li>
                            • ¾ del cuerpo apoyado en superficie, equilibrar
                            parada
                          </li>
                          <li>
                            • Aumentar tiempo a medida que mejora forma y fuerza
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="brincos-parada">
                    <AccordionTrigger>
                      Brincos a Parada de Manos
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>
                            Desarrollo de potencia y coordinación:
                          </strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>
                            • Desde desplante largo llevar brazos atrás hacia
                            adelante
                          </li>
                          <li>
                            • Bloquear piso para aterrizar en parada de manos
                          </li>
                          <li>
                            • Cuerpo recto y apretado sobre colchón de 5 cm
                          </li>
                          <li>
                            • Salida de parada opcional (rodar, bajar, etc.)
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
                  Barras Asimétricas - Nivel 2
                </CardTitle>
                <CardDescription>
                  El Nivel 2 en Barras Asimétricas introduce el balanceo de kip
                  como elemento de entrada, aumentando la complejidad técnica y
                  los requisitos de fuerza.
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
                      <li>• Impulso (0.40 puntos)</li>
                      <li>• Vuelta atrás (0.40 puntos)</li>
                      <li>• Salida de sub balanceo (0.60 puntos)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Balanceo de kip como elemento de entrada</li>
                      <li>• Control en la transición entre elementos</li>
                      <li>• Posición correcta del cuerpo en cada fase</li>
                      <li>• Continuidad en los movimientos</li>
                      <li>• Amplitud y extensión apropiadas</li>
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
                      Entrada y Balanceo de Kip:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Despegue simultáneo con ambos pies</li>
                      <li>• Balanceo controlado sin "correr"</li>
                      <li>• Guía del balanceo al frente con los pies</li>
                      <li>• Extensión completa al final del balanceo</li>
                      <li>
                        • Cierre de piernas en balanceo con piernas separadas
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Subida de estómago con contacto de manos</li>
                      <li>• Impulso con alineación correcta</li>
                      <li>• Vuelta atrás con posición recta</li>
                      <li>• Salida controlada desde sub balanceo</li>
                      <li>• Transiciones fluidas entre elementos</li>
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
                      <li>• Extensión completa en vuelos</li>
                      <li>• Amplitud apropiada en salidas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Técnica de Salida:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Sub balanceo con técnica correcta</li>
                      <li>• Extensión completa del cuerpo</li>
                      <li>• Amplitud y distancia apropiadas</li>
                      <li>• Control en la finalización</li>
                      <li>• Posición correcta de la cadera</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Control en
                    entrada y balanceo de kip, transiciones fluidas, posición
                    correcta del cuerpo, continuidad en movimientos, y amplitud
                    apropiada en salidas.
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
                  2
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
                              (balanceo de suspensión larga)
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
                              recta desde hombros a pies con pecho ahuecado),
                              cada vez hasta 0.20
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de control al regresar a la barra, cada vez
                              hasta 0.10
                            </span>
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
                              No mantener posición neutra de la cabeza, hasta
                              0.10
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mantener posición recta y ahuecada del cuerpo
                              en todo momento, hasta 0.20
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mantener el contacto de la cadera o parte
                              superior de los muslos en barra en todo momento,
                              hasta 0.20
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de continuidad del círculo, hasta 0.10
                            </span>
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
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mantener posición neutra de la cabeza, hasta
                              0.10
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mantener posición recta y ahuecada del cuerpo
                              en todo momento, hasta 0.20
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              La cadera hace contacto con la barra (sin
                              deducción si los muslos tocan la barra), hasta
                              0.20
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Extensión insuficiente del cuerpo en el vuelo,
                              hasta 0.20
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Amplitud insuficiente del vuelo, hasta 0.20
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>Distancia insuficiente, hasta 0.10</span>
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
                  Viga de Equilibrio - Nivel 2
                </CardTitle>
                <CardDescription>
                  El Nivel 2 introduce elementos más dinámicos en la viga de
                  equilibrio, incluyendo balanceos de piernas, giros y técnicas
                  más avanzadas que desarrollan el control y la precisión.
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
                      <li>• Patada de una pierna a levantarse (0.40 puntos)</li>
                      <li>• Equilibrio en passé al frente (0.20 puntos)</li>
                      <li>• Salto extendido (0.40 puntos)</li>
                      <li>• Arabesca (30°) (0.40 puntos)</li>
                      <li>• Balanceo de pierna al frente (0.20 puntos)</li>
                      <li>• Balanceo de pierna atrás (0.20 puntos)</li>
                      <li>• ½ (180°) giro pivote (0.20 puntos)</li>
                      <li>
                        • Salida de inversión lateral a parada de manos lateral
                        (0.60 puntos)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Elementos dinámicos con balanceos de piernas</li>
                      <li>• Técnicas de giro más avanzadas</li>
                      <li>• Control mejorado en elementos de inversión</li>
                      <li>• Precisión en posiciones de danza</li>
                      <li>• Continuidad en secuencias complejas</li>
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
                      <li>• Patada de una pierna a levantarse</li>
                      <li>• Equilibrio en passé al frente</li>
                      <li>• Salto extendido con técnica correcta</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Arabesca con ángulo de 30°</li>
                      <li>• Balanceos de piernas al frente y atrás</li>
                      <li>• ½ giro pivote (180°)</li>
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
                      <li>• Equilibrio en elementos dinámicos</li>
                      <li>• Control en balanceos de piernas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Técnica de Salida:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Inversión lateral controlada</li>
                      <li>• Parada de manos lateral</li>
                      <li>• Contacto de manos mantenido</li>
                      <li>• Finalización segura</li>
                      <li>• Control en descenso</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Entrada
                    controlada, patada de una pierna con pies que abandonen la
                    viga, equilibrio en passé, salto extendido con aterrizaje
                    simultáneo, arabesca con tiempo de mantenimiento, balanceos
                    con altura correcta, giro preciso, y salida de inversión
                    lateral con vertical.
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
                  2
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
                              sentada con las piernas separadas
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Patada de una pierna a levantarse */}
                  <AccordionItem value="patada-una-pierna">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Patada de una pierna a levantarse (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Patada de una pierna a levantarse
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de continuidad desde sentada hasta parada
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No hacer que ninguno de los pies abandone la viga
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
                              encima de la viga
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

                  {/* Balanceo de pierna al frente */}
                  <AccordionItem value="balanceo-pierna-frente">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Balanceo de pierna al frente (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Balanceo de pierna al frente
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No balancear la pierna trasera a mínimo 45° por
                              encima de la viga
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de continuidad durante la secuencia
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Balanceo de pierna atrás */}
                  <AccordionItem value="balanceo-pierna-atras">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Balanceo de pierna atrás (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Balanceo de pierna atrás
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No balancear la pierna trasera a mínimo 45° por
                              encima de la viga
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de continuidad durante la secuencia
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* ½ (180°) giro pivote */}
                  <AccordionItem value="giro-pivote">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />½ (180°) giro pivote
                        (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">½ (180°) giro pivote</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>Falta de precisión</span>
                            <Badge variant="secondary">0.10</Badge>
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
                        Salida de inversión lateral a parada de manos lateral
                        (0.60 puntos)
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
                            lateral
                          </p>
                        </div>
                        <div className="space-y-2">
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
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No mantener el contacto de las manos con la viga
                              en el aterrizaje
                            </span>
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
                  <Target className="w-5 h-5" />
                  Suelo - Descripción General
                </CardTitle>
                <CardDescription>
                  La rutina de suelo en Nivel 2 introduce elementos más complejos
                  de acrobacia y danza, con mayor énfasis en la coordinación y
                  técnica avanzada.
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
                      <li>• Rodada atrás a posición de lagartija (0.60 puntos)</li>
                      <li>• ½ giro en passé al frente (0.40 puntos)</li>
                      <li>• Chassé al frente (0.20 puntos)</li>
                      <li>• Salto leap split con piernas extendidas (0.60 puntos)</li>
                      <li>• Salto jump split (0.40 puntos)</li>
                      <li>• Parada de manos (0.40 puntos)</li>
                      <li>• Vela (0.20 puntos)</li>
                      <li>• Arco, patada a pasar (0.60 puntos)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Elementos con símbolo de inversión</li>
                      <li>• Técnicas de giro de presión de talón</li>
                      <li>• Saltos con mayor exigencia de separación</li>
                      <li>• Control en paradas de manos</li>
                      <li>• Elementos dinámicos de acrobacia</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Elementos detallados */}
            <div className="space-y-4">
              {/* Inversión lateral */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      Inversión lateral
                      <Badge variant="outline" className="bg-purple-100 text-purple-800">
                        Inversión
                      </Badge>
                    </CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Descripción:</strong> Elemento acrobático lateral
                        con paso por la vertical
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-2">Penalizaciones:</h5>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• 0.10 - Colocación incorrecta de las manos (simultánea)</li>
                        <li>• 0.30 - No pasar por la vertical</li>
                        <li>• 0.10 - No mantener la alineación de la cabeza</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rodada atrás a posición de lagartija */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Rodada atrás a posición de lagartija
                    </CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Descripción:</strong> Rodar hacia atrás desde
                        posición de cuclillas hasta mostrar posición de lagartija
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-2">Penalizaciones:</h5>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• 0.30 - Colocar las manos en el suelo durante la fase de cuclillas antes de rodar hacia atrás</li>
                        <li>• 0.10 - Entrelazar los dedos</li>
                        <li>• 0.10 - Manos colocadas más separadas que el ancho de los hombros</li>
                        <li>• 0.20 - No mostrar la posición de lagartija</li>
                        <li>• 0.60 - Realizar una rodada atrás a parada de manos</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ½ (180°) giro en passé al frente */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      ½ (180°) giro en passé al frente
                      <Badge variant="outline" className="bg-purple-100 text-purple-800">
                        Inversión
                      </Badge>
                    </CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Descripción:</strong> Giro de presión de talón
                        de 180° en posición passé al frente
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-2">Penalizaciones:</h5>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• 0.10 - Piernas en posición incorrecta (no en passé al frente)</li>
                        <li>• 0.05 - No bajar el talón al terminar el giro</li>
                        <li>• 0.30 - No usar la técnica de giro de presión de talón</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Chassé al frente */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Chassé al frente
                    </CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Descripción:</strong> Paso de danza con desplazamiento
                        hacia adelante con técnica de chassé
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-2">Penalizaciones:</h5>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• 0.05 - No pasar por plié al principio y al final del chassé al frente (cada vez)</li>
                        <li>• 0.10 (máx.) - No cerrar las piernas en el aire</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salto leap split con piernas extendidas */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Salto leap split con piernas extendidas (60°)
                    </CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Descripción:</strong> Salto en split con separación
                        de piernas de 60° y piernas completamente extendidas
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-2">Penalizaciones:</h5>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• 0.10 (máx.) - Flexionar la pierna guía (frontal) en el despegue</li>
                        <li>• 0.20 (máx.) - Separación desigual de las piernas</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salto jump split */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Salto jump split (60°)
                    </CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Descripción:</strong> Salto jump con separación
                        de piernas en split de 60°
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-2">Penalizaciones:</h5>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• 0.10 - No aterrizar con los dos pies al mismo tiempo</li>
                        <li>• 0.10 (máx.) - No aterrizar con los pies cerrados</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Parada de manos */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      Parada de manos
                      <Badge variant="outline" className="bg-purple-100 text-purple-800">
                        Inversión
                      </Badge>
                    </CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Descripción:</strong> Posición invertida
                        manteniendo el equilibrio en las manos
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-2">Penalizaciones:</h5>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• 0.30 (máx.) - No lograr la vertical</li>
                        <li>• 0.10 - No cerrar las piernas en la vertical</li>
                        <li>• 0.10 (máx.) - No mantener la parada de manos por un segundo</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vela */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Vela
                    </CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Descripción:</strong> Posición agrupada
                        manteniendo los glúteos en contacto con el suelo
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-2">Penalizaciones:</h5>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• 0.20 (máx.) - No mantener la posición agrupada cuando los glúteos tocan el suelo</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arco, patada a pasar */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      Arco, patada a pasar
                      <Badge variant="outline" className="bg-purple-100 text-purple-800">
                        Inversión
                      </Badge>
                    </CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Descripción:</strong> Elemento que comienza
                        en posición de arco y continúa con patada para alcanzar
                        la posición vertical invertida
                      </p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <h5 className="font-semibold text-red-800 mb-2">Penalizaciones:</h5>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• 0.10 - Los hombros no se encuentran sobre las manos en la posición de arco</li>
                        <li>• 0.30 - Patadas adicionales para lograr la posición vertical invertida en la patada a pasar (cada vez)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Puntos para Evaluación */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Puntos para Evaluación - Suelo
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800">
                <ul className="space-y-2">
                  <li>
                    • <strong>Expresión artística:</strong> Coordinación de
                    brazos y movimientos fluidos
                  </li>
                  <li>
                    • <strong>Técnica de tumbling:</strong> Alineación correcta
                    en inversión lateral
                  </li>
                  <li>
                    • <strong>Postura:</strong> Mantenimiento de líneas
                    corporales durante toda la rutina
                  </li>
                  <li>
                    • <strong>Transiciones:</strong> Fluidez entre elementos de
                    danza y acrobacia
                  </li>
                  <li>
                    • <strong>Uso del espacio:</strong> Aprovechamiento adecuado
                    del área de competencia
                  </li>
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

export default function Nivel2Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Nivel2Content />
    </Suspense>
  );
}
