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
  Target,
  AlertCircle,
  CheckCircle,
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

function Nivel5Content() {
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
                Nivel 5 - USAG
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
          <Button variant="outline" asChild>
            <Link href="/nivel-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nivel 4
            </Link>
          </Button>
          <div className="hidden md:block text-center">
            <p className="text-sm text-gray-600">Progresión de Niveles USAG</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">Nivel 1</Badge>
              <Badge variant="outline">Nivel 2</Badge>
              <Badge variant="outline">Nivel 3</Badge>
              <Badge variant="outline">Nivel 4</Badge>
              <Badge variant="default">Nivel 5</Badge>
            </div>
          </div>
          <Button variant="outline" disabled>
            Completado
            <CheckCircle className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nivel 5 - Reglamento Completo
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            El Nivel 5 representa el nivel más avanzado de la gimnasia
            competitiva juvenil, con elementos técnicos complejos que requieren
            máxima precisión, fuerza y control artístico.
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
                  Salto - Resorte sobre Tabla de Salto
                </CardTitle>
                <CardDescription>
                  El Nivel 5 mantiene el resorte sobre tabla de salto con
                  técnicas refinadas y mayor precisión en la ejecución.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elemento Principal:
                    </h4>
                    <p className="text-blue-800">
                      <strong>RESORTE</strong> sobre la tabla de salto oficial
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Descripción General:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      {[
                        "Resorte sobre la tabla de salto.",
                        "Consultar Reglas y Políticas USA Gymnastics para especificaciones.",
                        "Número de pasos de carrera opcional.",
                        "Carrera uniforme y fuerte, acelerando hasta la talacha hacia el botador.",
                        "Primera fase de vuelo: brazos hacia adelante completando extensión (o 3/4), cabeza neutra, mirada enfocada a manos.",
                        "Mantener cuerpo recto, piernas juntas, cadera extendida.",
                        "Rotación a posición invertida guiando talones hacia atrás y arriba.",
                        "Contacto con manos: bloqueo rápido con brazos rectos contra tabla, cuerpo abandona tabla cerca de la vertical.",
                        "Segunda fase de vuelo: mantener cuerpo apretado, cadera extendida, cabeza neutra.",
                        "Rotación hasta aterrizaje en demi-plié.",
                        "Brazos a nivel hombros al despegar y bloquear, luego arriba en segunda fase.",
                        "Posición brazos en aterrizaje opcional.",
                        "Estirar piernas para terminar en posición recta de pie.",
                        "Brazos mover hacia arriba.",
                      ].map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
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
                  {[
                    "Se permiten dos saltos, cuenta mejor puntuación.",
                    "Tres intentos para completar uno o dos saltos exitosos.",
                    "Una carrera vacía sin penalización; cualquier adicional es salto nulo.",
                    "Carrera vacía: caída en corrida, detención, salirse de pista o contacto sin recargarse.",
                    "No se permite cuarto intento.",
                  ].map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Puntos para Evaluación */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Puntos para Evaluación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {[
                    "Carrera acelerada manteniendo velocidad para contacto botador con pies delante.",
                    "Brazos balancean hasta extensión completa o 3/4 con cuerpo recto y cabeza neutra en primer fase.",
                    "Parada de manos vertical con brazos extendidos en fase apoyo.",
                    "Mantener cuerpo recto desde apoyo hasta aterrizaje con piernas juntas y pies en punta.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5 text-xs">
                        {index + 1}
                      </Badge>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Elementos de Desarrollo */}
            <Card>
              <CardHeader>
                <CardTitle>Elementos de Desarrollo y Progresión</CardTitle>
                <CardDescription>
                  Ejercicios preparatorios para dominar el resorte sobre tabla
                  de salto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="redondilla">
                    <AccordionTrigger>
                      Redondilla sobre botador a extensión acostada
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 ml-4">
                          <li>
                            • Desde carrera controlada, talacha, manos
                            alternadas y separadas en colchón frente al botador.
                          </li>
                          <li>
                            • Ejecutar redondilla, impactar atrás con cuerpo
                            apretado, aterrizar acostada en pila.
                          </li>
                          <li>
                            • Brazos a nivel hombros durante talacha y
                            levantados tras empuje.
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tsukahara">
                    <AccordionTrigger>
                      Tsukahara sobre pila de colchones
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 ml-4">
                          <li>
                            • Desde carrera controlada, talacha, impactar
                            botador, realizar giro ¼-½ hacia pila, rechazar,
                            aterrizar de pie mirando la pila.
                          </li>
                          <li>• Manos en pila, brazos arriba tras empuje.</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="yurchenko">
                    <AccordionTrigger>
                      Yurchenko sobre pila de colchones
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 ml-4">
                          <li>
                            • Desde carrera controlada al botador, talacha,
                            manos sobre colchón frente al botador para
                            redondilla.
                          </li>
                          <li>
                            • Impactar atrás con cuerpo apretado para flic-flac
                            sobre pila.
                          </li>
                          <li>
                            • Empujar pila y aterrizar de pie mirando la pila.
                          </li>
                          <li>
                            • Brazos a nivel hombros durante talacha y arriba
                            tras empuje.
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Sistema de Penalizaciones */}
            <Card>
              <CardHeader>
                <CardTitle>Tabla de Penalizaciones Detallada</CardTitle>
                <CardDescription>
                  Sistema completo de deducciones para el resorte sobre tabla de
                  salto (Niveles 4 y 5)
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
                              recargarse o apoyarse sobre la tabla de salto
                            </li>
                            <li>
                              • Entrenador parado entre el botador y la tabla de
                              salto
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 mb-2">
                            Salto NULO (0.00 puntos):
                          </h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• Carrera vacía #2 o #3</li>
                            <li>
                              • Ayuda del entrenador en cualquier fase (primera
                              fase de vuelo, apoyo o segunda fase de vuelo)
                            </li>
                            <li>
                              • Uso de botador alternativo (trampolín o botador
                              junior)
                            </li>
                            <li>
                              • Salto incorrecto (ejemplo: salto a cuclillas)
                            </li>
                            <li>
                              • La gimnasta nunca alcanza la vertical y regresa
                              al botador/piso o aterriza en la tabla de salto
                              entre el botador y la colocación de las manos
                            </li>
                            <li>
                              • Correr sobre el botador y subir en la tabla de
                              salto o rebotar recargándose en la tabla con
                              cualquier parte del cuerpo
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-yellow-700 mb-2">
                            Penalizaciones Generales:
                          </h5>
                          <ul className="space-y-1 text-yellow-600">
                            <li>
                              • 2.00 - Ayuda del entrenador en cualquier fase
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

                  {/* Penalizaciones Técnicas (todas las fases) */}
                  <AccordionItem value="fase-tecnica">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones Técnicas (todas las fases)
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

                  {/* Penalizaciones en la Fase de Apoyo */}
                  <AccordionItem value="fase-apoyo">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones en la Fase de Apoyo
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
                          <li>
                            • 2.00 - La cabeza hace contacto con la tabla de
                            salto en la fase de apoyo (incluye flexión excesiva
                            de brazos)
                          </li>
                          <li>
                            • 0.10 a 0.30 - Colocación adicional de manos (dar
                            pasos/brincos con las manos)
                          </li>
                          <li>• 0.50 - Mucho tiempo en el apoyo</li>
                          <li>
                            • 1.00 - Tocar la tabla de salto con solo una mano
                            (deducción del JP, si al menos la mitad del panel lo
                            ve)
                          </li>
                        </ul>
                        <div>
                          <h5 className="font-medium text-yellow-700 mb-2">
                            Ángulo de Rechace:
                          </h5>
                          <ul className="space-y-1 text-yellow-600">
                            <li>
                              • Abandonar la tabla de salto antes de la vertical
                            </li>
                            <li>
                              • Abandonar la tabla de salto entre 1° – 45°
                              después de la vertical
                            </li>
                            <li>
                              • Abandonar la tabla de salto entre 46° – 89°
                              después de la vertical
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 mb-2">
                            Sin Contacto de Manos:
                          </h5>
                          <ul className="space-y-1 text-red-600">
                            <li>
                              • Sin contacto de las manos en la tabla de salto
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Segunda Fase de Vuelo */}
                  <AccordionItem value="segunda-fase-vuelo">
                    <AccordionTrigger className="text-sm">
                      Segunda Fase de Vuelo
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.20 - Rozar o pegar con el cuerpo en el extremo
                            más alejado de la tabla de salto
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Otras Observaciones */}
                  <AccordionItem value="otras">
                    <AccordionTrigger className="text-sm">
                      Otras Observaciones
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • Distancia insuficiente (considerar estatura, punto
                            de apoyo de manos y aterrizaje de pies, trayectoria
                            amplitud de la 2da fase de vuelo)
                          </li>
                          <li>• Altura insuficiente</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Penalizaciones de Aterrizaje */}
                  <AccordionItem value="aterrizaje">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones de Aterrizaje
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <h5 className="font-medium text-green-700 mb-2">
                          Sin Deducción:
                        </h5>
                        <ul className="space-y-1 text-green-600">
                          <li>
                            • No hay deducción por pies separados a un máximo
                            del ancho de la cadera si los talones se juntan
                            (deslicen) a la extensión controlada
                          </li>
                        </ul>
                        <h5 className="font-medium text-yellow-700 mb-2 mt-4">
                          Penalizaciones:
                        </h5>
                        <ul className="space-y-1 text-yellow-600">
                          <li>
                            • 0.05 - Aterrizar con los pies separados al ancho
                            de la cadera o más juntos, pero nunca juntos los
                            talones
                          </li>
                          <li>
                            • 0.10 - Si los pies se deslizan o levantan del piso
                            para juntarse, se considera paso pequeño
                          </li>
                          <li>
                            • 0.10 - Aterrizar con los pies separados más que el
                            ancho de la cadera
                          </li>
                          <li>
                            • 0.10 - Brinco pequeño, ajuste de pies ligero o
                            pies escalonados
                          </li>
                          <li>• 0.10 a 0.40 - Pasos (cada uno, máximo 0.40)</li>
                          <li>
                            • 0.20 a 0.40 - Salto o paso largo (~1 metro o más,
                            cada uno, máximo 0.40)
                          </li>
                          <li>
                            • 0.10 - Balanceo de brazos para mantener el
                            equilibrio
                          </li>
                          <li>
                            • 0.20 - Postura incorrecta de cuerpo en el
                            aterrizaje
                          </li>
                          <li>
                            • 0.20 - Movimientos adicionales de tronco para
                            mantener el equilibrio
                          </li>
                          <li>
                            • 0.30 - Sentadilla en el aterrizaje (cadera a la
                            altura de las rodillas o más abajo)
                          </li>
                          <li>
                            • 0.30 - Ligero toque/roce de 1 o 2 manos en el
                            colchón (sin apoyo)
                          </li>
                          <li>• 0.50 - Ayuda en el aterrizaje</li>
                          <li>
                            • 0.50 - Deducción por caída después de ayuda en el
                            aterrizaje
                          </li>
                          <li>• 0.50 - Apoyo en el colchón con 1 o 2 manos</li>
                          <li>
                            • 0.50 - Caída sobre el colchón en rodillas o cadera
                          </li>
                          <li>• 0.50 - Caída contra la tabla de salto</li>
                          <li>
                            • 2.00 - No aterrizar con cualquier porción de la
                            parte inferior de los pies primero
                          </li>
                          <li>
                            • 2.50 - Aterrizaje en posición sentada, acostada o
                            de pie sobre la tabla de salto después de pasar por
                            la vertical (parada de manos)
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
                  Barras Asimétricas - Nivel 5
                </CardTitle>
                <CardDescription>
                  El Nivel 5 representa el nivel más avanzado de barras
                  asimétricas, introduciendo elementos como vuelta de apoyo
                  libre, plantillas completas y Stalder, marcando el máximo
                  desarrollo técnico en la gimnasia juvenil.
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
                        • Entrada: Kip carpado o con piernas separadas (0.60
                        puntos)
                      </li>
                      <li>
                        • Impulso por arriba de la horizontal (0.40 puntos)
                      </li>
                      <li>
                        • Vuelta de apoyo libre por arriba de la horizontal
                        (0.60 puntos)
                      </li>
                      <li>
                        • Plantillas completas atrás al apoyo libre (0.60
                        puntos)
                      </li>
                      <li>• Stalder atrás al apoyo libre (0.60 puntos)</li>
                      <li>
                        • Kip carpado o con piernas separadas (repetición) (0.60
                        puntos)
                      </li>
                      <li>
                        • Impulso, colocación de cuclillas o de plantillas
                        carpada, o plantillas completas atrás 360° (0.20 puntos)
                      </li>
                      <li>• Kip de suspensión larga (0.60 puntos)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Vuelta de apoyo libre como elemento avanzado</li>
                      <li>• Plantillas completas con técnica precisa</li>
                      <li>• Stalder con control máximo</li>
                      <li>• Impulsos por arriba de la horizontal</li>
                      <li>• Máxima precisión técnica en cada fase</li>
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
                      <li>• Kip carpado o con piernas separadas</li>
                      <li>• Impulso por arriba de la horizontal</li>
                      <li>• Vuelta de apoyo libre controlada</li>
                      <li>• Plantillas completas atrás</li>
                      <li>• Stalder atrás al apoyo libre</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Repetición de kip carpado</li>
                      <li>• Colocación de cuclillas o plantillas</li>
                      <li>• Kip de suspensión larga</li>
                      <li>• Transiciones fluidas entre elementos</li>
                      <li>• Control máximo en cada fase</li>
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
                      <li>• Amplitud correcta en impulsos</li>
                      <li>• Control máximo en elementos avanzados</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Técnica Avanzada:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Vuelta de apoyo libre precisa</li>
                      <li>• Plantillas completas controladas</li>
                      <li>• Stalder con técnica perfecta</li>
                      <li>• Extensión completa del cuerpo</li>
                      <li>• Finalización con máxima precisión</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Vuelta de apoyo
                    libre, plantillas completas, Stalder preciso, impulsos por
                    arriba de la horizontal, y control máximo en cada elemento.
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
                  5
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
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
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Impulso por arriba de la horizontal */}
                  <AccordionItem value="impulso-arriba">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Impulso por arriba de la horizontal (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Impulso por arriba de la horizontal
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                            <span>
                              Sin deducción cuando impulso es arriba de la
                              horizontal
                            </span>
                            <Badge variant="outline">0.00</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Amplitud insuficiente: arriba de la horizontal
                            </span>
                            <Badge variant="secondary">0.05</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>Amplitud insuficiente: a la horizontal</span>
                            <Badge variant="secondary">0.10-0.15</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Amplitud insuficiente: de 1° a 44° debajo de la
                              horizontal
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Amplitud insuficiente: a 45° y más debajo de la
                              horizontal
                            </span>
                            <Badge variant="destructive">0.25-0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Alineación incorrecta del cuerpo (no línea recta
                              desde hombros a pies con pecho ahuecado)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Arco o carpa excesivos en el balanceo hacia abajo
                              o hacia arriba (cada vez)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Vuelta de apoyo libre por arriba de la horizontal */}
                  <AccordionItem value="vuelta-apoyo-libre">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Vuelta de apoyo libre por arriba de la horizontal (0.60
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
                            Vuelta de apoyo libre por arriba de la horizontal
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Altura y extensión insuficiente en balanceo hacia
                              arriba (usar deducciones de amplitud de impulsos)
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              La cadera toca la barra a medida que termina el
                              balanceo hacia arriba (sin deducción si muslos
                              rozan la barra)
                            </span>
                            <Badge variant="destructive">0.60</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de control al ir hacia el balanceo de kip
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Arco o carpa excesivos en balanceo hacia abajo o
                              arriba (cada vez)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Plantillas completas atrás al apoyo libre */}
                  <AccordionItem value="plantillas-completas">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Plantillas completas atrás al apoyo libre (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Plantillas completas atrás al apoyo libre
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Amplitud insuficiente del balanceo hacia arriba
                              (línea hombros-cadera)
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                            <span>
                              Sin deducción entre vertical y 45° de la vertical
                            </span>
                            <Badge variant="outline">0.00</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Amplitud insuficiente entre 46° y 89° de la
                              vertical
                            </span>
                            <Badge variant="secondary">0.05-0.15</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Amplitud insuficiente a la horizontal</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Amplitud insuficiente por debajo de la horizontal
                            </span>
                            <Badge variant="destructive">0.25-0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Apoyo del peso en los pies al terminar el balanceo
                              (salto de barra o no lograr apoyo libre)
                            </span>
                            <Badge variant="destructive">0.60</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Piernas flexionadas durante el círculo</span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de control al ir hacia el balanceo de kip
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Arco o carpa excesivos en balanceo hacia abajo o
                              arriba (cada vez)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Stalder atrás al apoyo libre */}
                  <AccordionItem value="stalder-atras">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Stalder atrás al apoyo libre (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Stalder atrás al apoyo libre
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Amplitud insuficiente del balanceo hacia arriba
                              (línea hombros-cadera)
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                            <span>
                              Sin deducción entre vertical y 45° de la vertical
                            </span>
                            <Badge variant="outline">0.00</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Amplitud insuficiente entre 46° y 89° de la
                              vertical
                            </span>
                            <Badge variant="secondary">0.05-0.15</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Amplitud insuficiente a la horizontal</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Amplitud insuficiente por debajo de la horizontal
                            </span>
                            <Badge variant="destructive">0.25-0.30</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Llegar al apoyo en posición de escuadra con
                              piernas separadas (Nota #2)
                            </span>
                            <Badge variant="destructive">0.60</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Falta de control al ir hacia el balanceo de kip
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Kip carpado o con piernas separadas (repetición) */}
                  <AccordionItem value="kip-repeticion">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Kip carpado o con piernas separadas (repetición) (0.60
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
                            Kip carpado o con piernas separadas (repetición)
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              No guiar balanceo al frente con los pies (balanceo
                              de suspensión larga)
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
                              No cerrar las piernas al final del balanceo con
                              piernas separadas
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Impulso, colocación de cuclillas o de plantillas carpada */}
                  <AccordionItem value="impulso-cuclillas-plantillas">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Impulso, colocación de cuclillas o de plantillas
                        carpada, o plantillas completas atrás 360° (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Colocación de cuclillas o plantillas con impulso
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Colocación alternada de los pies</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Balanceo insuficiente de piernas hacia atrás para
                              el impulso (solo se levanta la cadera)
                            </span>
                            <Badge variant="secondary">0.05</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Kip de suspensión larga */}
                  <AccordionItem value="kip-suspension">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Kip de suspensión larga (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Kip de suspensión larga controlado
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No balancearse hasta cerca de la horizontal
                            </span>
                            <Badge variant="destructive">0.20</Badge>
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
                  <Activity className="w-5 h-5" />
                  Viga de Equilibrio - Nivel 5
                </CardTitle>
                <CardDescription>
                  El Nivel 5 representa el nivel más avanzado de viga de
                  equilibrio, introduciendo elementos acrobáticos complejos como
                  flic-flac, arcos a una pierna con ángulos de 150°, mortales
                  agrupados y técnicas de giro avanzadas que requieren máxima
                  precisión y control técnico.
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
                      <li>• Arco atrás a una pierna (150°) (0.60 puntos)</li>
                      <li>
                        • Rodada atrás a mínimo ¾ de parada de manos (0.60
                        puntos)
                      </li>
                      <li>• Flic-flac a una pierna (0.60 puntos)</li>
                      <li>• Flic-flac a dos piernas (0.60 puntos)</li>
                      <li>
                        • Arco al frente a una pierna (150°) (0.60 puntos)
                      </li>
                      <li>
                        • 1/1 (360°) giro en passé al frente (0.40 puntos)
                      </li>
                      <li>• Salto jump split (150°) (0.40 puntos)</li>
                      <li>• Sissone (0.20 puntos)</li>
                      <li>
                        • Palanca (por arriba de la horizontal) (0.40 puntos)
                      </li>
                      <li>
                        • Salto leap split con piernas extendidas (150°) (0.60
                        puntos)
                      </li>
                      <li>• Salto extendido (0.20 puntos)</li>
                      <li>• Inversión lateral (0.60 puntos)</li>
                      <li>• Palanca (0.40 puntos)</li>
                      <li>
                        • Salto leap split con piernas extendidas (150°)
                        repetido (0.60 puntos)
                      </li>
                      <li>• Salto extendido (a empujar) (0.20 puntos)</li>
                      <li>• Mortal atrás agrupado (0.60 puntos)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>
                        • Elementos acrobáticos complejos (flic-flac, mortales)
                      </li>
                      <li>• Arcos a una pierna con ángulos de 150°</li>
                      <li>• Técnicas de giro avanzadas (360° en passé)</li>
                      <li>• Saltos leap split con ángulos de 150°</li>
                      <li>• Control máximo en elementos de inversión</li>
                      <li>• Precisión técnica en secuencias complejas</li>
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
                      <li>• Arco atrás a una pierna con 150°</li>
                      <li>• Rodada atrás a parada de manos</li>
                      <li>• Flic-flac a una y dos piernas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Arco al frente a una pierna con 150°</li>
                      <li>• Giro de 360° en passé al frente</li>
                      <li>• Saltos leap split con 150°</li>
                      <li>• Mortal atrás agrupado</li>
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
                      <li>• Equilibrio en elementos acrobáticos</li>
                      <li>• Control en arcos y inversiones</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Técnica Avanzada:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Precisión en ángulos de 150°</li>
                      <li>• Control en flic-flac y mortales</li>
                      <li>• Técnica correcta en giros de 360°</li>
                      <li>• Continuidad en secuencias complejas</li>
                      <li>• Finalización controlada</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Entrada
                    controlada, arcos a una pierna con 150°, rodada atrás
                    precisa, flic-flac técnicamente correcto, arco al frente con
                    150°, giro de 360° en passé, saltos leap split con 150°,
                    mortal atrás agrupado con forma correcta, y continuidad en
                    secuencias complejas.
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
                  5
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

                  {/* Arco atrás a una pierna (150°) */}
                  <AccordionItem value="arco-atras-150">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Arco atrás a una pierna (150°) (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Arco atrás a una pierna con ángulo de 150°
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No mostrar un levantamiento continuo de la pierna
                              hacia el arco (la pierna se levanta y luego baja,
                              o se levanta después de arquearse hacia atrás)
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Colocación incorrecta de las manos (separadas o
                              alternadas)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Split insuficiente (menor a 150°)</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Rodada atrás a mínimo ¾ de parada de manos */}
                  <AccordionItem value="rodada-atras">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Rodada atrás a mínimo ¾ de parada de manos (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Rodada atrás a mínimo ¾ de parada de manos
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No lograr el mínimo de ¾ de parada de manos
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Realizar una rodada atrás a una pierna (la cabeza
                              permanece en contacto con la viga)
                            </span>
                            <Badge variant="destructive">0.60</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Flic-flac a una pierna */}
                  <AccordionItem value="flic-flac-una-pierna">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Flic-flac a una pierna (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Flic-flac a una pierna
                          </p>
                        </div>
                        <div className="bg-yellow-50 p-2 rounded">
                          <p className="text-sm text-yellow-700">
                            <strong>Nota:</strong> Ver Faltas y Penalizaciones
                            generales
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Flic-flac a dos piernas */}
                  <AccordionItem value="flic-flac-dos-piernas">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Flic-flac a dos piernas (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Flic-flac a dos piernas
                          </p>
                        </div>
                        <div className="bg-yellow-50 p-2 rounded">
                          <p className="text-sm text-yellow-700">
                            <strong>Nota:</strong> Ver Faltas y Penalizaciones
                            generales
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Arco al frente a una pierna (150°) */}
                  <AccordionItem value="arco-frente-150">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Arco al frente a una pierna (150°) (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Arco al frente a una pierna con ángulo de 150°
                          </p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Colocación incorrecta de las manos (separadas o
                              alternadas)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Split insuficiente (menor a 150°)</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* 1/1 (360°) giro en passé al frente */}
                  <AccordionItem value="giro-360-passe">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        1/1 (360°) giro en passé al frente (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            1/1 (360°) giro en passé al frente
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
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Usar la técnica de giro de presión de talón
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salto jump split (150°) */}
                  <AccordionItem value="jump-split-150">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salto jump split (150°) (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Salto jump split con ángulo de 150°
                          </p>
                        </div>
                        <div className="bg-blue-50 p-2 rounded">
                          <h6 className="font-semibold mb-1 text-blue-700">
                            Notas:
                          </h6>
                          <ul className="text-xs text-blue-600 space-y-1">
                            <li>
                              • Continuidad insuficiente entre salto jump split
                              y sissone
                            </li>
                            <li>
                              • Romper el enlace entre salto jump split y
                              sissone
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Sissone */}
                  <AccordionItem value="sissone">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Sissone (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">Sissone</p>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <p className="text-sm text-green-700">
                            <strong>Sin penalizaciones específicas:</strong>{" "}
                            Consultar penalizaciones generales de ejecución
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Palanca (por arriba de la horizontal) */}
                  <AccordionItem value="palanca-horizontal">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Palanca (por arriba de la horizontal) (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Palanca por arriba de la horizontal
                          </p>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <p className="text-sm text-green-700">
                            <strong>Sin penalizaciones específicas:</strong>{" "}
                            Consultar penalizaciones generales de ejecución
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salto leap split con piernas extendidas (150°) */}
                  <AccordionItem value="leap-split-150">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salto leap split con piernas extendidas (150°) (0.60
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
                            Salto leap split con piernas extendidas (150°)
                          </p>
                        </div>
                        <div className="bg-blue-50 p-2 rounded">
                          <h6 className="font-semibold mb-1 text-blue-700">
                            Notas:
                          </h6>
                          <ul className="text-xs text-blue-600 space-y-1">
                            <li>
                              • Continuidad insuficiente entre salto leap split
                              con piernas extendidas y salto extendido
                            </li>
                            <li>
                              • Romper el enlace entre salto leap split con
                              piernas extendidas y salto extendido
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salto extendido */}
                  <AccordionItem value="salto-extendido">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salto extendido (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">Salto extendido</p>
                        </div>
                        <div className="bg-green-50 p-2 rounded">
                          <p className="text-sm text-green-700">
                            <strong>Sin penalizaciones específicas:</strong>{" "}
                            Consultar penalizaciones generales de ejecución
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Inversión lateral */}
                  <AccordionItem value="inversion-lateral">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Inversión lateral (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">Inversión lateral</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Separación desigual de las piernas</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
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
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Elevación insuficiente de la pierna delantera
                              (menos de 45°)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>
                              Elevación insuficiente de la pierna trasera (menos
                              de la horizontal)
                            </span>
                            <Badge variant="secondary">0.10</Badge>
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

                  {/* Palanca */}
                  <AccordionItem value="palanca">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Palanca (0.40 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">Palanca</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              No levantar la pierna libre por arriba la
                              horizontal en la palanca
                            </span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>No mantener un segundo</span>
                            <Badge variant="secondary">0.10</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salto leap split con piernas extendidas (150°) repetido */}
                  <AccordionItem value="leap-split-150-repetido">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salto leap split con piernas extendidas (150°) repetido
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
                            Salto leap split con piernas extendidas (150°)
                            repetido
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
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Salto extendido (a empujar) */}
                  <AccordionItem value="salto-extendido-empujar">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salto extendido (a empujar) (0.20 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">
                            Salto extendido (a empujar)
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
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Altura insuficiente y extensión del salto con
                              levantamiento de cadera
                            </span>
                            <Badge variant="destructive">0.30</Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Mortal atrás agrupado */}
                  <AccordionItem value="mortal-atras-agrupado">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Mortal atrás agrupado (0.60 puntos)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <h5 className="font-semibold mb-2 text-blue-700">
                            Elemento Principal:
                          </h5>
                          <p className="text-blue-600">Mortal atrás agrupado</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>Forma agrupada insuficiente del mortal</span>
                            <Badge variant="destructive">0.20</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                            <span>
                              Postura incorrecta con control en el aterrizaje
                            </span>
                            <Badge variant="destructive">0.20</Badge>
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
                  El Nivel 5 es el nivel obligatorio más avanzado, introduciendo el salto mortal atrás carpado y el mortal al frente, exigiendo una ejecución técnica casi perfecta.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Elementos Principales:
                    </h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Redondilla + Flic-Flac + Salto Mortal Atrás Carpado (0.60 puntos)</li>
                      <li>• Salto Mortal al Frente Agrupado (0.60 puntos)</li>
                      <li>• 1/1 giro en passé al frente (360°) (0.40 puntos)</li>
                      <li>• Salto Leap Split (150°) (0.60 puntos)</li>
                      <li>• Salto Jump Split (150°) (0.40 puntos)</li>
                      <li>• Sissone (0.20 puntos)</li>
                      <li>• Inversión lateral (0.60 puntos)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Introducción de mortales en ambas direcciones (atrás y frente)</li>
                      <li>• Posición carpada (Pike) en el mortal atrás</li>
                      <li>• Giro completo sobre un pie</li>
                      <li>• Split de 150° en todos los saltos de danza</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Tumbling Atrás */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50/50">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    Serie Principal: Mortal Atrás Carpado (Pike)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">La serie Redondilla + Flic-Flac debe culminar en un mortal atrás manteniendo las piernas completamente extendidas y el cuerpo doblado por la cadera (carpado).</p>
                    <div className="bg-red-50 p-3 rounded text-sm text-red-700">
                      <strong>Penalizaciones de Forma:</strong>
                      <ul className="list-disc list-inside mt-1">
                        <li>Piernas dobladas en la carpa: hasta 0.30</li>
                        <li>Ángulo de carpa insuficiente (mayor a 90°): hasta 0.20</li>
                        <li>No mostrar posición carpada clara: el elemento puede ser degradado a agrupado</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Danza de Élite Obligatoria */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Danza y Flexibilidad (150°)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h5 className="font-medium">Giros y Saltos:</h5>
                      <div className="flex justify-between items-center p-2 border rounded text-sm">
                        <span>1/1 Giro (360°) en passé</span>
                        <Badge>0.40</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 border rounded text-sm">
                        <span>Leap Split (150°)</span>
                        <Badge>0.60</Badge>
                      </div>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded text-xs text-yellow-800 self-center">
                      <strong>Requisito de Split:</strong> El Nivel 5 exige una gran flexibilidad. La falta de amplitud en los 150° se penaliza severamente (hasta 0.20 por elemento).
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Puntos para Evaluación */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Resumen de Evaluación - Suelo Nivel 5
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800">
                <ul className="space-y-2">
                  <li>• <strong>Precisión:</strong> Finalización exacta de los giros de 360°.</li>
                  <li>• <strong>Técnica de Mortal:</strong> Altura suficiente para permitir una carpa clara.</li>
                  <li>• <strong>Extensión:</strong> Puntas estiradas y rodillas bloqueadas en toda la danza.</li>
                  <li>• <strong>Ritmo:</strong> La rutina debe mostrar variaciones de tiempo y energía.</li>
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

export default function Nivel5Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Nivel5Content />
    </Suspense>
  );
}
