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

export default function Nivel5Page() {
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
                  <BarChart3 className="w-5 h-5" />
                  Barras Asimétricas
                </CardTitle>
                <CardDescription>
                  Elementos de rutina con valores y especificaciones técnicas
                  avanzadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Descripción General:
                  </h4>
                  <ul className="space-y-1 text-blue-800 text-sm">
                    <li>
                      • Posición inicial: pies juntos, fuera de barras, mirando
                      barra inferior.
                    </li>
                    <li>
                      • Botador o superficie para entrada permitida, a retirar
                      pronto.
                    </li>
                    <li>• No permitir que pies regresen a botador tras kip.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Kip carpado */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      1. Kip carpado o con piernas separadas
                    </CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Brincar con ambos pies, levantar cadera atrás-arriba
                          para sujetar barra inferior, toma dorsal, manos a
                          ancho hombros.
                        </li>
                        <li>
                          • Mantener cuerpo ahuecado, piernas extendidas, cabeza
                          neutra.
                        </li>
                        <li>
                          • Balancear adelante con piernas juntas o separadas.
                        </li>
                        <li>
                          • Al finalizar, piernas juntas y cadera extendida.
                        </li>
                        <li>• Levantar pies rápido y jalar barra para kip.</li>
                        <li>
                          • Mover manos a parte superior barra para apoyo
                          frontal ligeramente carpado.
                        </li>
                        <li>
                          • Mantener brazos y piernas extendidos todo el tiempo.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <h5 className="font-semibold mb-2 text-red-700">
                        Penalizaciones:
                      </h5>
                      <ul className="space-y-1 text-sm text-red-600">
                        <li>
                          • 0.10 por no despegar ambos pies simultáneamente.
                        </li>
                        <li>• 0.30 balanceo corriendo.</li>
                        <li>• 0.10 no guiar balanceo con pies.</li>
                        <li>• 0.20 extensión insuficiente final kip.</li>
                        <li>
                          • 0.10 no cerrar piernas al final kip con piernas
                          separadas.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impulso por arriba */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      2. Impulso por arriba de la horizontal
                    </CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Con hombros delante de barra, balancear piernas
                          atrás y arriba.
                        </li>
                        <li>
                          • Empujar barra para levantar cuerpo con piernas
                          juntas o cadera doblada y piernas separadas.
                        </li>
                        <li>
                          • Mantener cuerpo recto y ahuecado, glúteos y
                          abdominales apretados, brazos y piernas extendidos,
                          cabeza neutra.
                        </li>
                        <li>• Piernas cerradas al completar ángulo.</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <h5 className="font-semibold mb-2 text-red-700">
                        Penalizaciones:
                      </h5>
                      <ul className="space-y-1 text-sm text-red-600">
                        <li>
                          • Hasta 0.30 por amplitud insuficiente del impulso.
                        </li>
                        <li>
                          • Hasta 0.20 por alineación incorrecta del cuerpo.
                        </li>
                        <li>
                          • Hasta 0.10 por falta de control al regresar a la
                          barra.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vuelta de apoyo libre */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      3. Vuelta de apoyo libre por arriba de la horizontal
                    </CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Inclinar hombros atrás para iniciar círculo
                          alrededor de barra con tensión en cuerpo.
                        </li>
                        <li>
                          • Empujar barra hacia parte inferior muslos
                          continuando círculo.
                        </li>
                        <li>• Mantener cuerpo ahuecado con cabeza neutra.</li>
                        <li>
                          • Muslos pueden rozar barra en balanceo hacia arriba.
                        </li>
                        <li>
                          • Jalar barra para abrir ángulo hombros y mover manos
                          a parte superior.
                        </li>
                        <li>
                          • Realizar vuelta de apoyo libre que termine en apoyo
                          libre con cuerpo extendido arriba de la horizontal y
                          hombros ligeramente adelante.
                        </li>
                        <li>
                          • Mantener brazos y piernas extendidos todo momento.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <h5 className="font-semibold mb-2 text-red-700">
                        Penalizaciones:
                      </h5>
                      <ul className="space-y-1 text-sm text-red-600">
                        <li>• Hasta 0.20 por arco/carpa excesiva balanceo.</li>
                        <li>
                          • Hasta 0.30 por amplitud insuficiente balanceo hacia
                          arriba.
                        </li>
                        <li>
                          • Hasta 0.10 por falta de control en balanceo kip.
                        </li>
                        <li>
                          • La cadera tocando barra al terminar balanceo no
                          deduce si muslos tocan barra.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Plantillas completas atrás */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      4. Plantillas completas atrás al apoyo libre
                    </CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Técnicas de Entrada (3 opciones):
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>A:</strong> Impulso con brazos extendidos,
                          flexionar piernas y colocar metatarsos entre manos en
                          posición agrupada, estirar piernas, relevé y realizar
                          plantillas completas atrás.
                        </div>
                        <div>
                          <strong>B:</strong> Impulso, iniciar balanceo hacia
                          abajo separando piernas, colocar metatarsos en barra
                          dentro de manos en primer y segundo cuarto del
                          balanceo, continuar círculo, terminar con apoyo en
                          pies.
                        </div>
                        <div>
                          <strong>C:</strong> Impulso, empezar arco apretado en
                          torso y cadera, empujar cuerpo hacia atrás con cierre
                          rápido de metatarsos en barra, mantener piernas
                          extendidas y cabeza neutra, terminar plantillas
                          completas atrás.
                        </div>
                      </div>
                      <ul className="space-y-1 text-sm mt-2">
                        <li>
                          • Mantener manos desplazadas a parte superior barra y
                          retirar pies antes de apoyo libre.
                        </li>
                        <li>
                          • Mantener brazos y piernas extendidos todo momento.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <h5 className="font-semibold mb-2 text-red-700">
                        Penalizaciones:
                      </h5>
                      <ul className="space-y-1 text-sm text-red-600">
                        <li>• Hasta 0.20 por arco/carpa excesiva.</li>
                        <li>
                          • Hasta 0.30 por amplitud insuficiente balanceo.
                        </li>
                        <li>
                          • Hasta 0.10 falta de control hacia balanceo kip.
                        </li>
                        <li>
                          • Falta de apertura o control en balanceo atrás.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stalder atrás */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      5. Stalder atrás al apoyo libre
                    </CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Técnica opcional de entrada similar a plantillas
                          completas sin pies en barra.
                        </li>
                        <li>
                          • Después del impulso, empujar hombros para abrir y
                          mover pies para iniciar círculo con cuerpo inverso
                          compacto, torso redondeado.
                        </li>
                        <li>
                          • Mantener cabeza neutra y brazos y piernas extendidos
                          todo círculo.
                        </li>
                        <li>
                          • Mover manos a parte superior para realizar Stalder.
                        </li>
                        <li>
                          • Piernas pueden terminar carpadas o abiertas en
                          relación al cuerpo.
                        </li>
                        <li>
                          • No debe confundirse con círculo sentado que no
                          cumple requisito de Stalder.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <h5 className="font-semibold mb-2 text-red-700">
                        Penalizaciones:
                      </h5>
                      <ul className="space-y-1 text-sm text-red-600">
                        <li>• Hasta 0.20 por arco/carpa excesiva.</li>
                        <li>• Hasta 0.30 por amplitud insuficiente.</li>
                        <li>• Hasta 0.10 falta control hacia balanceo kip.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salto a kip suspensión larga */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      6. Salto a kip de suspensión larga
                    </CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Desde posición agrupada o carpada en barra inferior
                          saltar inmediatamente para tomar barra superior,
                          manteniendo cuerpo recto y ahuecado.
                        </li>
                        <li>
                          • Mover cuerpo casi horizontalmente desde hombros a
                          pies.
                        </li>
                        <li>
                          • Al final balanceo, levantar pies y jalar barra para
                          kip suspensión larga.
                        </li>
                        <li>
                          • Mover manos a parte superior barra para soporte
                          frontal con piernas delante barra, cuerpo ligeramente
                          carpado.
                        </li>
                        <li>
                          • Mantener brazos y piernas extendidos todo momento.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <h5 className="font-semibold mb-2 text-red-700">
                        Penalizaciones:
                      </h5>
                      <ul className="space-y-1 text-sm text-red-600">
                        <li>
                          • Hasta 0.20 por no balancearse hasta horizontal.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* VIGA DE EQUILIBRIO */}
          <TabsContent value="viga" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Viga de Equilibrio
                </CardTitle>
                <CardDescription>
                  Elementos de rutina con especificaciones técnicas detalladas y
                  límite de tiempo extendido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Límite de Tiempo:
                    </h4>
                    <p className="text-blue-800 text-lg font-bold">
                      1:10 minutos
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">
                      Descripción General:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>
                        • Figuras son guías; texto tiene flexibilidad para
                        opciones.
                      </li>
                      <li>
                        • Elementos principales en mayúsculas; otros títulos
                        para conexiones.
                      </li>
                      <li>• Brazos pueden ser curvados o extendidos.</li>
                      <li>
                        • Pasos deben seguir técnica de baile con pies
                        ligeramente hacia afuera.
                      </li>
                      <li>
                        • Rutina puede invertirse salvo elementos con asterisco.
                      </li>
                      <li>
                        • Adaptar derecha-izquierda según gimnasta diestra o
                        zurda.
                      </li>
                      <li>
                        • Posición inicial: usar botador o superficie elevada a
                        retirar rápidamente.
                      </li>
                      <li>• Comenzar aproximadamente en centro de la viga.</li>
                      <li>
                        • Entrada acomodada para que parada de manos transversal
                        ocurra en extremo de la viga.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Entrada de apoyo */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      1. Entrada de apoyo de pose de pescado al frente
                    </CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica Detallada:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Manos a altura hombros (mano izquierda recta o al
                          lado), saltar a apoyo frontal con brazos y cuerpo
                          extendidos.
                        </li>
                        <li>
                          • Al despegar, flexionar pierna izquierda atrás y
                          arriba mínimo 90°, terminando con rodillas juntas.
                        </li>
                        <li>
                          • Parte superior cuerpo puede estar ligeramente
                          arqueada, ahuecada o recta.
                        </li>
                        <li>
                          • Presionar y estirar pierna izquierda, colocar arco
                          del pie izquierdo sobre la viga y talón al lado.
                        </li>
                        <li>
                          • Flexionar pierna derecha, colocar lado pie derecho
                          en viga para sentado de gacela con torso recto.
                        </li>
                        <li>
                          • Brazos: mano derecha permanece en la viga, brazo
                          izquierdo levanta a corona.
                        </li>
                        <li>
                          • Girar torso 90° a derecha al colocar mano izquierda
                          junto a derecha.
                        </li>
                        <li>
                          • Colocar rodilla derecha en la viga y bajar pierna
                          izquierda para sentarse sobre talón derecho, con torso
                          erguido.
                        </li>
                        <li>• Levantar glúteos del talón y extender cadera.</li>
                        <li>
                          • Levantar pierna izquierda adelante y flexionar
                          rodilla para colocar pie izquierdo en la viga frente a
                          rodilla derecha.
                        </li>
                        <li>
                          • Extender piernas para levantarse sobre pierna
                          izquierda (pie ligeramente girado afuera) con pierna
                          derecha detrás apuntando atrás.
                        </li>
                        <li>
                          • Brazos: bajar brazo derecho a cadera, brazo
                          izquierdo hacer ola circular y terminar en diagonal
                          arriba al lado.
                        </li>
                        <li>• Enfoque: al frente.</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-2 rounded">
                      <p className="text-sm text-yellow-700">
                        <strong>Énfasis:</strong> Postura y brazos extendidos,
                        ritmo rápido para levantarse.
                      </p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <h5 className="font-semibold mb-2 text-red-700">
                        Penalizaciones:
                      </h5>
                      <ul className="space-y-1 text-sm text-red-600">
                        <li>
                          • Hasta 0.10: No extender cuerpo en apoyo frontal,
                          falta de continuidad desde entrada hasta parada.
                        </li>
                        <li>• 0.30: Realizar palanca sobre la rodilla.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pose de passé */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      2. Pose de passé al frente, inversión lateral
                    </CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica Detallada:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • Demi-plié pierna izquierda, balancear
                          simultáneamente la pierna derecha extendida adelante a
                          la horizontal.
                        </li>
                        <li>
                          • Brazo derecho levanta al frente-arriba o en medio,
                          brazo izquierdo baja adelante-en medio, palmas hacia
                          abajo.
                        </li>
                        <li>
                          • Flexionar pierna derecha para tocar pie derecho con
                          rodilla izquierda en passé al frente (juntar de
                          golpe).
                        </li>
                        <li>
                          • Brazo derecho toca dedo medio dentro brazo izquierdo
                          con codo derecho hacia afuera, palma hacia afuera,
                          brazo izquierdo al frente-en medio.
                        </li>
                        <li>
                          • Abrir brazos hacia lados y arriba para preparar
                          inversión lateral.
                        </li>
                        <li>
                          • Transferir peso al pie derecho para realizar
                          desplante derecho o entrada tipo escalador.
                        </li>
                        <li>
                          • Levantar pierna izquierda hacia atrás y arriba por
                          encima de la cabeza, mantener orejas cubiertas con
                          brazos mientras desciende y gira 90° a la izquierda.
                        </li>
                        <li>
                          • Colocar manos separadas al ancho de los hombros, de
                          lado o ligeramente hacia adentro en la viga.
                        </li>
                        <li>
                          • Pierna derecha empuja la viga para realizar
                          inversión lateral.
                        </li>
                        <li>
                          • Cabeza alineada con ángulo de hombros y cadera
                          abiertos, enfoque por debajo brazo izquierdo.
                        </li>
                        <li>
                          • Girar 90° a la izquierda para bajar pierna izquierda
                          mientras se mantienen brazos cubriendo orejas.
                        </li>
                        <li>
                          • Cerrar pierna derecha detrás de la izquierda para
                          terminar piernas extendidas con pies en planta
                          apoyados en viga o en desplante izquierdo.
                        </li>
                        <li>
                          • Brazos permanecen arriba al paso y cuando desciende
                          abriendo en diagonal arriba a los lados.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-2 rounded">
                      <p className="text-sm text-yellow-700">
                        <strong>Énfasis:</strong> Alineación correcta del cuerpo
                        y la cabeza.
                      </p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <h5 className="font-semibold mb-2 text-red-700">
                        Penalizaciones:
                      </h5>
                      <ul className="space-y-1 text-sm text-red-600">
                        <li>
                          • 0.10: Colocación incorrecta de manos simultánea.
                        </li>
                        <li>• Hasta 0.30: No pasar por la vertical.</li>
                      </ul>
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
                  <Users className="w-5 h-5" />
                  Suelo - En Desarrollo
                </CardTitle>
                <CardDescription>
                  El contenido para Suelo del Nivel 5 estará disponible
                  próximamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800">
                    <strong>Próximamente:</strong> Información detallada sobre
                    los elementos requeridos, técnicas y penalizaciones para
                    Suelo en Nivel 5.
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
