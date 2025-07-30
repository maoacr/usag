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

export default function Nivel4Page() {
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
                Nivel 4 - USAG
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
            <Link href="/nivel-3">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nivel 3
            </Link>
          </Button>
          <div className="hidden md:block text-center">
            <p className="text-sm text-gray-600">Progresión de Niveles USAG</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">Nivel 1</Badge>
              <Badge variant="outline">Nivel 2</Badge>
              <Badge variant="outline">Nivel 3</Badge>
              <Badge variant="default">Nivel 4</Badge>
              <Badge variant="outline">Nivel 5</Badge>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href="/nivel-5">
              Nivel 5
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nivel 4 - Reglamento Completo
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            El Nivel 4 representa un avance significativo en la gimnasia
            competitiva, introduciendo el resorte sobre tabla de salto y
            elementos técnicos más complejos que requieren mayor precisión y
            control.
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
                  El Nivel 4 introduce el resorte sobre tabla de salto, marcando
                  la transición hacia el equipamiento estándar de gimnasia
                  artística y técnicas más avanzadas.
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
                      Características Técnicas:
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Número de pasos de carrera opcional</li>
                      <li>
                        • Carrera uniforme y fuerte, acelerando hasta la talacha
                      </li>
                      <li>• Dos fases de vuelo distintas con tabla de salto</li>
                      <li>
                        • Extensión completa o 3/4 de hombros en primera fase
                      </li>
                      <li>• Cuerpo abandona tabla cerca de la vertical</li>
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

            {/* Técnica Detallada del Resorte sobre Tabla */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Técnica Completa del Resorte sobre Tabla
                </CardTitle>
                <Badge variant="outline">10.0 puntos total</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Carrera y Primera Fase de Vuelo:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • Carrera uniforme y fuerte, acelerando hasta la talacha
                        hacia el botador
                      </li>
                      <li>
                        • Contacto con botador con pies adelante del cuerpo
                      </li>
                      <li>
                        • Brazos se mueven hacia adelante para completar
                        extensión o 3/4 extensión de hombros
                      </li>
                      <li>• Cabeza neutra, mirada en manos</li>
                      <li>
                        • Mantener cuerpo recto, piernas juntas, cadera
                        extendida
                      </li>
                      <li>
                        • Gimnasta rota a posición invertida dirigiendo
                        piernas/talones hacia atrás y arriba
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Fase de Apoyo en Tabla:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        • Al hacer contacto con manos, extender hombros rápido
                      </li>
                      <li>• Bloquear con brazos rectos contra tabla</li>
                      <li>• Cuerpo abandona tabla cerca de vertical</li>
                      <li>
                        • Posición de parada de manos vertical con brazos
                        extendidos
                      </li>
                      <li>• Brazos a nivel hombros al despegar y bloquear</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Segunda Fase de Vuelo:
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Mantener postura recta y apretada</li>
                      <li>• Cadera extendida durante vuelo</li>
                      <li>• Cabeza neutra en todo momento</li>
                      <li>• Rotación continúa hasta aterrizaje</li>
                      <li>• Brazos arriba en segunda fase de vuelo</li>
                      <li>
                        • Cuerpo mantiene posición recta desde apoyo hasta
                        aterrizaje
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Aterrizaje:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Aterrizaje en demi-plié</li>
                      <li>• Posición de brazos en aterrizaje opcional</li>
                      <li>
                        • Estirar piernas para terminar en posición recta de pie
                      </li>
                      <li>• Brazos mover hacia arriba</li>
                      <li>• Piernas juntas y pies en punta durante vuelo</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Carrera
                    acelerada manteniendo velocidad, extensión completa de
                    hombros, posición vertical en apoyo, y cuerpo recto con
                    piernas juntas desde apoyo hasta aterrizaje.
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
                    pista, contacto con botador o tabla sin recargarse en parte
                    superior
                  </li>
                  <li>
                    • <strong>No se permite un cuarto intento</strong>
                  </li>
                </ul>
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
                  <AccordionItem value="redondilla-botador">
                    <AccordionTrigger>
                      Redondilla sobre Botador a Posición de Extensión
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Progresión básica:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>
                            • Desde aproximación controlada al botador, realizar
                            talacha
                          </li>
                          <li>
                            • Colocar manos alternadamente separadas sobre
                            colchón frontal al botador
                          </li>
                          <li>• Ejecutar redondilla sobre botador</li>
                          <li>
                            • Saltar/impactar hacia atrás con cuerpo apretado
                          </li>
                          <li>• Aterrizar acostada en pila colchones</li>
                          <li>• Brazos a nivel hombros durante talacha</li>
                          <li>
                            • Levantarse y mantener posición arriba luego del
                            empuje
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="metodologia-tsukahara">
                    <AccordionTrigger>
                      Metodología Tsukahara sobre Pila de Colchones
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>
                            Desarrollo de giros (1.5m x 1.5m mínimo):
                          </strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>
                            • Desde carrera controlada al botador, realizar
                            talacha e impactar botador
                          </li>
                          <li>
                            • Realizar 1/4 - 1/2 (90°-180°) giro hacia pila de
                            colchones
                          </li>
                          <li>• Rechazar para aterrizar mirando pila</li>
                          <li>
                            • Manos en pila colchones y brazos arriba después de
                            empuje
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="metodologia-yurchenko">
                    <AccordionTrigger>
                      Metodología Yurchenko sobre Pila de Colchones
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>
                            Desarrollo de entrada con redondilla (1.5m x 1.5m
                            mínimo):
                          </strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>
                            • Desde carrera controlada al botador, realizar
                            talacha
                          </li>
                          <li>
                            • Colocar manos sobre colchón frente al botador para
                            ejecutar redondilla
                          </li>
                          <li>
                            • Saltar/impactar hacia atrás con cuerpo apretado
                          </li>
                          <li>• Realizar un flic-flac sobre la pila</li>
                          <li>
                            • Empujar pila para aterrizar de pie mirando pila
                          </li>
                          <li>
                            • Brazos a nivel hombros durante talacha y arriba
                            después del empuje
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
                  Barras Asimétricas - En Desarrollo
                </CardTitle>
                <CardDescription>
                  El contenido para Barras Asimétricas del Nivel 4 estará
                  disponible próximamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800">
                    <strong>Próximamente:</strong> Información detallada sobre
                    los elementos requeridos, técnicas y penalizaciones para
                    Barras Asimétricas en Nivel 4.
                  </p>
                </div>
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
                  El contenido para Viga de Equilibrio del Nivel 4 estará
                  disponible próximamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800">
                    <strong>Próximamente:</strong> Información detallada sobre
                    los elementos requeridos, técnicas y penalizaciones para
                    Viga de Equilibrio en Nivel 4.
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
                  El contenido para Suelo del Nivel 4 estará disponible
                  próximamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800">
                    <strong>Próximamente:</strong> Información detallada sobre
                    los elementos requeridos, técnicas y penalizaciones para
                    Suelo en Nivel 4.
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
