"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
} from "lucide-react"
import Link from "next/link"

export default function Nivel3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Link>
              </Button>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Nivel 3 - USAG</h1>
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
              <Badge variant="outline">Nivel 6</Badge>
            </div>
          </div>
          <Button variant="outline" disabled>
            Nivel 4
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nivel 3 - Reglamento Completo</h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            El Nivel 3 marca un salto significativo en complejidad técnica, introduciendo el resorte en salto, el kip en
            barras asimétricas, y rutinas más largas que requieren mayor resistencia y precisión técnica.
          </p>
        </div>

        <Tabs defaultValue="salto" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="salto" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden md:inline">Salto</span>
            </TabsTrigger>
            <TabsTrigger value="barras" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden md:inline">Barras Asimétricas</span>
            </TabsTrigger>
            <TabsTrigger value="viga" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span className="hidden md:inline">Viga de Equilibrio</span>
            </TabsTrigger>
            <TabsTrigger value="suelo" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
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
                  El Nivel 3 introduce el resorte, un elemento dinámico que requiere dos fases de vuelo y mayor
                  coordinación técnica que los saltos anteriores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">Elemento Principal:</h4>
                    <p className="text-blue-800">
                      <strong>RESORTE</strong> sobre una superficie elevada de colchones (mínimo 81 cm/32")
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">Características Técnicas:</h4>
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
                <CardTitle className="text-lg">Técnica Completa del Resorte</CardTitle>
                <Badge variant="outline">10.0 puntos total</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Primera Fase de Vuelo:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Carrera uniforme y fuerte, acelerando hasta talacha</li>
                      <li>• Brazos se mueven hacia adelante para completar extensión de hombros</li>
                      <li>• Cabeza neutra, mirada en manos</li>
                      <li>• Mantener posición del cuerpo recta</li>
                      <li>• Piernas juntas y cadera extendida</li>
                      <li>• Rotación a posición invertida dirigiendo piernas/talones hacia atrás y arriba</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fase de Apoyo:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Al tocar suelo con manos, extender hombros rápido y con fuerza</li>
                      <li>• Generar bloqueo con brazos rectos</li>
                      <li>• Contacto con pila de colchones</li>
                      <li>• Cuerpo abandona la pila cerca de la vertical</li>
                      <li>• Posición parada de manos vertical con brazos extendidos</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Segunda Fase de Vuelo:</h4>
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
                      <li>• Cuerpo se mantiene recto desde apoyo hasta aterrizaje</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Carrera acelerada, extensión completa de hombros,
                    posición vertical en apoyo, y cuerpo recto con piernas juntas desde apoyo hasta aterrizaje.
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
                    • La gimnasta puede realizar <strong>dos saltos</strong>, la mejor puntuación cuenta
                  </li>
                  <li>
                    • <strong>Tres intentos</strong> permitidos para completar exitosamente uno o dos saltos
                  </li>
                  <li>
                    • <strong>Carrera vacía</strong> permitida una vez sin penalización, adicional será salto NULO
                  </li>
                  <li>
                    • Carrera vacía = caída durante corrida, detención, salirse de pista o contacto botador/pila sin
                    recargarse
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
                <CardTitle>Sistema de Penalizaciones del Resorte</CardTitle>
                <CardDescription>Deducciones específicas para cada fase del resorte</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
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
                          <h5 className="font-medium text-green-700 mb-2">Sin Deducción:</h5>
                          <ul className="space-y-1 text-green-600">
                            <li>• Carrera vacía #1: carrera sin recargarse o apoyarse en pila</li>
                            <li>• Entrenador parado o recargado entre botador y pila</li>
                            <li>• Uso botador alternativo como trampolín o botador junior</li>
                            <li>• Distancia insuficiente y altura insuficiente no deducen</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 mb-2">Salto NULO (0.00 puntos):</h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• Carrera vacía #2 o #3</li>
                            <li>• Salto incorrecto (ej. salto a cuclillas)</li>
                            <li>• Gimnasta no alcanza vertical y regresa</li>
                            <li>• Aterriza entre botador y manos (salto incorrecto)</li>
                            <li>• Ayuda desde botador a pila colchones</li>
                            <li>• Correr sobre botador y subir sin usar pies</li>
                            <li>• Sin contacto manos en pila colchones</li>
                            <li>• Tocar pila colchones con una sola mano</li>
                            <li>• No aterrizar pies primero</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-carrera-resorte">
                    <AccordionTrigger className="text-sm">Penalizaciones de Carrera y Primera Fase</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div className="grid gap-3 md:grid-cols-2">
                          <div>
                            <h5 className="font-medium text-yellow-700">Carrera y Despegue:</h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>• 0.30 - Dinamismo insuficiente (velocidad/potencia)</li>
                              <li>• 0.30 - Desviación de dirección recta</li>
                              <li>• 0.10 - No mantener posición neutra cabeza (cada fase)</li>
                              <li>• 0.10 - Forma incorrecta de pies (cada fase)</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-yellow-700">Primera Fase de Vuelo:</h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>• 0.20 - Piernas separadas (cada fase)</li>
                              <li>• 0.30 - Piernas dobladas (cada fase)</li>
                              <li>• 0.30 - Cuerpo arqueado (cada fase)</li>
                              <li>• 0.50 - Cuerpo carpado (cada fase)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-apoyo-resorte">
                    <AccordionTrigger className="text-sm">Penalizaciones de Apoyo y Bloqueo</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h5 className="font-medium text-red-700 mb-2">Apoyo de Manos:</h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• 0.10 - Colocación separada o alternada de manos (primera fase vuelo)</li>
                            <li>• 0.20 - Rechace alternado de manos (primera fase vuelo)</li>
                            <li>• 0.20 - Alineación incorrecta hombros (&lt;180°)</li>
                            <li>• 0.50 - Brazos doblados en apoyo</li>
                            <li>• 2.00 - Contacto cabeza con pila colchones en apoyo</li>
                            <li>• 0.10 - Colocación adicional manos (pasos o brincos hasta 0.30)</li>
                            <li>• 0.50 - Tiempo excesivo en apoyo</li>
                            <li>• 0.05-1.00 - Contacto manos más allá de la vertical (según ángulo)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-yellow-700 mb-2">Zona de Contacto:</h5>
                          <ul className="space-y-1 text-yellow-600">
                            <li>• 0.20-0.50 - Colocación incorrecta manos fuera de zona de aterrizaje</li>
                            <li>• 0.10 - Colocación adicional de manos</li>
                            <li>• 0.50 - Apoyo con una o dos manos en colchón</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-aterrizaje-resorte">
                    <AccordionTrigger className="text-sm">Penalizaciones de Aterrizaje</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div className="grid gap-3 md:grid-cols-2">
                          <div>
                            <h5 className="font-medium text-yellow-700">Aterrizaje Normal:</h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>• 0.05 - Aterrizar con pies separados (ancho cadera o más)</li>
                              <li>• 0.10 - Pie(s) se deslizan o levantan para juntarse</li>
                              <li>• 0.10 - Brinco pequeño o ajuste de pies</li>
                              <li>• 0.20 - Salto o paso largo (aprox 1 m)</li>
                              <li>• 0.10 - Balanceo de brazo(s) para equilibrio</li>
                              <li>• 0.20 - Postura cuerpo incorrecta en aterrizaje</li>
                              <li>• 0.20 - Movimientos adicionales tronco para equilibrio</li>
                              <li>• 0.30 - Sentadilla en aterrizaje (cadera a nivel rodillas)</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-red-700">Aterrizaje con Problemas:</h5>
                            <ul className="space-y-1 text-red-600">
                              <li>• 0.30 - Ligero roce con una o dos manos sin apoyo</li>
                              <li>• 0.50 - Ayuda en aterrizaje</li>
                              <li>• 0.50 adicional - Caída tras ayuda en aterrizaje</li>
                              <li>• 0.50 - Apoyo de una o dos manos en colchón</li>
                              <li>• 0.50 - Caída sobre colchón en rodillas o cadera</li>
                              <li>• 0.50 - Caída contra pila colchones</li>
                              <li>• 2.00 - No aterrizar con cualquier parte inferior de pies primero</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-green-50 p-2 rounded mt-3">
                          <p className="text-xs text-green-700">
                            <strong>Nota:</strong> No hay deducción por separación de pies hasta ancho cadera si talones
                            se juntan en extensión controlada.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-ayuda-resorte">
                    <AccordionTrigger className="text-sm">Penalizaciones por Ayuda y Procedimiento</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-red-600">
                          <li>
                            • <strong>2.00</strong> - Ayuda del entrenador en cualquier fase
                          </li>
                          <li>
                            • <strong>0.50 (JP)</strong> - Realizar salto sin señal del Juez Principal
                          </li>
                          <li>
                            • <strong>0.05 + 2.00</strong> - Aterrizaje sobre pila colchones tras pasar por vertical
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
                <CardDescription>Ejercicios preparatorios para dominar el resorte</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="resorte-superficie">
                    <AccordionTrigger>Resorte desde Superficie Elevada</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Progresión básica:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Desde soporte al final de colchón plegable apilado</li>
                          <li>• Paso adelante en desplante profundo</li>
                          <li>• Balanceo brazos de atrás hacia adelante hasta final colchón</li>
                          <li>• Realizar resorte al frente, juntar piernas al pasar vertical</li>
                          <li>• Aterrizar con cadera extendida, posición arco apretado</li>
                          <li>• Concentrarse en manos manteniendo posición recta y estirada</li>
                          <li>• Brazos arriba junto a orejas todo el tiempo</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="mortal-frente">
                    <AccordionTrigger>¾ de Mortal al Frente Extendido</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Desarrollo de rotación:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Desde aproximación controlada al botador</li>
                          <li>• Saltar y realizar ¾ de mortal al frente extendido</li>
                          <li>• Aterrizar acostada sobre espalda</li>
                          <li>• Brazos a nivel hombros al despegar</li>
                          <li>• Ruta de brazos opcional durante mortal</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="paradas-ayuda">
                    <AccordionTrigger>Paradas de Manos con Ayuda</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Fortalecimiento y equilibrio:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Con botador, patear hasta parada de manos</li>
                          <li>• Antebrazos presionados contra extremo abierto del botador</li>
                          <li>• Ayuda para equilibrio y desarrollo de fuerza</li>
                          <li>• Aumentar tiempo con mejora en forma y fuerza</li>
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
                  Barras Asimétricas - Introducción del Kip
                </CardTitle>
                <CardDescription>
                  El Nivel 3 introduce el kip como elemento de entrada alternativo, marcando un avance significativo en
                  los requisitos de fuerza y coordinación.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">Posición Inicial:</h4>
                    <p className="text-blue-800 text-sm">
                      Parada con los pies juntos por fuera de las barras mirando barra inferior. Se puede usar botador o
                      superficie elevada a retirar lo antes posible.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">Opciones de Entrada:</h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Balanceo de kip y regreso (0.20 puntos)</li>
                      <li>• Kip carpado o con piernas separadas (0.60 puntos)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Entrada: Balanceo de kip */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">1A. Entrada: Balanceo de Kip y Regreso</CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Brincar con ambos pies y levantar cadera atrás y arriba</li>
                        <li>• Sujetar barra inferior con toma dorsal, manos separadas ancho hombros</li>
                        <li>• Mantener cuerpo carpado y ahuecado con piernas extendidas</li>
                        <li>• Balancear cuerpo hacia adelante con piernas juntas o separadas</li>
                        <li>• Al finalizar balanceo adelante, piernas juntas y cadera extendida</li>
                        <li>• Balanceo atrás con piernas estiradas y juntas, pies fuera piso</li>
                        <li>• Gimnasta puede ponerse de pie momentáneamente</li>
                        <li>• Usar acción "empuje" para iniciar subida de estómago</li>
                        <li>• Manos permanecen en barra en toma dorsal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Puntos Críticos:</h4>
                      <ul className="text-xs text-red-600 space-y-1">
                        <li>• 0.50 - No iniciar rutina desde parada correcta</li>
                        <li>• 0.10 - No despegar con ambos pies simultáneamente</li>
                        <li>• 0.30 - Realizar balanceo corriendo</li>
                        <li>• 0.10 - No guiar balanceo con pies</li>
                        <li>• 0.20 - Extensión insuficiente al final balanceo kip</li>
                        <li>• 0.10 - No cerrar piernas al final balanceo kip</li>
                        <li>• 0.30 - Flexionar piernas en balanceo atrás antes de tocar piso</li>
                      </ul>
                      <div className="mt-2 bg-yellow-50 p-2 rounded">
                        <p className="text-xs text-yellow-700">
                          <strong>Importante:</strong> Al regresar del balanceo, pies no pueden regresar al botador
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Entrada: Kip carpado */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">1B. Entrada: Kip Carpado o con Piernas Separadas</CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica del Kip:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Brincar con ambos pies, levantar cadera atrás y arriba</li>
                        <li>• Sujetar barra inferior con toma dorsal, manos separadas ancho hombros</li>
                        <li>• Mantener cuerpo ahuecado con piernas extendidas</li>
                        <li>• Balancear cuerpo adelante con piernas juntas o separadas</li>
                        <li>• Al finalizar balanceo adelante, piernas juntas y cadera extendida</li>
                        <li>
                          • <strong>Levantar rápidamente pies a barra</strong>
                        </li>
                        <li>
                          • <strong>Jalar barra hacia abajo, subir piernas hasta cadera</strong>
                        </li>
                        <li>• Mientras jala, bajar manos a parte superior barra</li>
                        <li>• Soporte frontal con piernas delante barra, cuerpo ligeramente carpado</li>
                        <li>• Mantener brazos y piernas extendidos todo momento</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis del Kip:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-2">
                        Extensión completa balanceo, brazos y piernas extendidos
                      </p>
                      <div>
                        <h5 className="text-xs font-medium text-red-700">Deducciones:</h5>
                        <ul className="text-xs text-red-600">
                          <li>• 0.50 - No iniciar rutina desde parada correcta</li>
                          <li>• 0.10 - No despegar con ambos pies simultáneamente</li>
                          <li>• 0.30 - Balanceo corriendo</li>
                          <li>• 0.10 - No guiar balanceo con pies</li>
                          <li>• 0.20 - Extensión insuficiente al final balanceo kip</li>
                          <li>• 0.10 - No cerrar piernas al final balanceo kip</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subida de estómago */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">2. Subida de Estómago (si entrada es balanceo)</CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Levantar ambas piernas inmediatamente y sobre barra inferior</li>
                        <li>• Jalar con brazos flexionados</li>
                        <li>• Levantar cadera sobre barra para apoyo frontal extendido</li>
                        <li>• Mover manos a parte superior barra</li>
                        <li>• Estirar brazos, mantener piernas extendidas</li>
                        <li>• Cabeza neutra durante todo el movimiento</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-2">
                        Levantamiento simultáneo piernas extendidas, terminar brazos extendidos
                      </p>
                      <div>
                        <h5 className="text-xs font-medium text-red-700">Deducciones:</h5>
                        <ul className="text-xs text-red-600">
                          <li>• 0.10 - No mantener contacto manos con barra entre kip y subida</li>
                          <li>• 0.10 - Paso, salto o brinco adicional antes de subida</li>
                          <li>• 0.30 - No levantar ambas piernas simultáneamente</li>
                          <li>• 0.30 - Apoyo complementario (barbilla sobre barra)</li>
                          <li>• 0.10 - No terminar en apoyo frontal extendido</li>
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
                    <CardTitle className="text-lg">3. Impulso</CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica Según Entrada:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • <strong>Si entrada es subida estómago:</strong> balancear piernas adelante y atrás y arriba
                        </li>
                        <li>
                          • <strong>Si entrada es kip:</strong> balancear piernas atrás y arriba
                        </li>
                        <li>• Hombros ligeramente delante de barra</li>
                        <li>• Empujar barra para levantar cuerpo con piernas juntas</li>
                        <li>• Mantener cuerpo recto y ahuecado</li>
                        <li>• Glúteos y abdominales apretados</li>
                        <li>• Brazos y piernas extendidos, cabeza neutra</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-2">
                        Cuerpo recto y ahuecado, brazos y piernas extendidos
                      </p>
                      <div>
                        <h5 className="text-xs font-medium text-red-700">Deducciones:</h5>
                        <ul className="text-xs text-red-600">
                          <li>• 0.20 - Mala alineación cuerpo</li>
                          <li>• 0.10 - Falta control regreso a barra</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vueltas atrás */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">4. Vuelta Atrás (Primera y Segunda)</CardTitle>
                    <Badge variant="secondary">0.40 puntos c/u</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Inclinar hombros atrás antes que cadera regrese a barra</li>
                        <li>• Realizar círculo atrás con cuerpo recto y ahuecado</li>
                        <li>• Mover manos a parte superior barra para apoyo frontal extendido</li>
                        <li>• Mantener cabeza neutra todo momento</li>
                        <li>
                          • <strong>Segunda vuelta:</strong> continuar inclinando hombros atrás
                        </li>
                        <li>• Terminar en apoyo frontal con hombros delante barra</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-2">
                        Brazos extendidos y postura correcta en vueltas atrás
                      </p>
                      <div>
                        <h5 className="text-xs font-medium text-red-700">Deducciones:</h5>
                        <ul className="text-xs text-red-600">
                          <li>• 0.10 - No mantener cabeza neutra</li>
                          <li>• 0.20 - No mantener cuerpo recto y ahuecado</li>
                          <li>• 0.20 - No mantener contacto cadera/muslos con barra</li>
                          <li>• 0.10 - Falta continuidad círculo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vuelta al frente */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">5. Vuelta al Frente, Pequeño Impulso, Regreso</CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Empujar barra hasta muslos toquen barra</li>
                        <li>• Levantar talones para caída adelante</li>
                        <li>• Mantener cuerpo recto y ahuecado sin arco</li>
                        <li>• Continuar al círculo rápido carpado</li>
                        <li>• Mover manos a parte superior barra, estirar brazos</li>
                        <li>• Terminar en soporte frontal (piernas delante barra)</li>
                        <li>• Con hombros delante barra, balancear piernas atrás y arriba</li>
                        <li>• Empujar barra para levantar cuerpo, realizar pequeño impulso</li>
                        <li>• Mantener inclinación hombros adelante y regresar controlado</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-2">
                        Terminar vuelta al frente en apoyo frontal con piernas delante la barra, cuerpo ligeramente
                        carpado
                      </p>
                      <div>
                        <h5 className="text-xs font-medium text-red-700">Deducciones:</h5>
                        <ul className="text-xs text-red-600">
                          <li>• 0.10 - No cuerpo recto y ahuecado al comenzar vuelta</li>
                          <li>• 0.20 - No realizar pequeño impulso después de vuelta</li>
                          <li>• 0.10 - Falta control regreso a barra</li>
                          <li>• 0.50 - No regresar a apoyo frontal (hacer cuclillas)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salida */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">6. Impulso a Cuclillas, Salida de Salto Extendido</CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Realizar impulso con brazos extendidos y piernas juntas</li>
                        <li>• Flexionar piernas y colocar metatarsos en barra entre manos</li>
                        <li>• Colocación de cuclillas controlada</li>
                        <li>• Desde posición agrupada, extender piernas</li>
                        <li>• Saltar para salto extendido de salida de barra</li>
                        <li>
                          • <strong>Sin tocar barra superior</strong>
                        </li>
                        <li>• Mantener cuerpo apretado en aire</li>
                        <li>• Aterrizar en demi-plié equilibrado y controlado</li>
                        <li>• Brazos rectos al lado de orejas en vuelo</li>
                        <li>• Estirar piernas para terminar en pie recto</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-2">
                        Demostrar colocación de cuclillas controlada y cuerpo extendido durante salto
                      </p>
                      <div>
                        <h5 className="text-xs font-medium text-red-700">Deducciones:</h5>
                        <ul className="text-xs text-red-600">
                          <li>• 0.20 - Colocación alternada pies</li>
                          <li>• 0.05 - Balanceo insuficiente piernas atrás para impulso</li>
                          <li>• 0.20 - No mostrar cuerpo recto y ahuecado en vuelo</li>
                          <li>• 0.50 - Tocar barra superior</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Elementos de Desarrollo */}
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-900">Elementos de Desarrollo</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-800">
                <ul className="space-y-2">
                  <li>
                    • <strong>Tiempos de kip (canasta):</strong> Realizados en serie, con ayuda si es necesario
                  </li>
                  <li>
                    • <strong>Rodadas ahuecadas:</strong> Desde posición acostada en colchón plegable
                  </li>
                  <li>
                    • <strong>Metodología de suspensiones:</strong> De arco a ahuecarse en barra superior
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
                  <Clock className="w-5 h-5" />
                  Viga de Equilibrio - Rutina Extendida
                </CardTitle>
                <CardDescription>
                  El Nivel 3 extiende significativamente el tiempo de rutina a 55 segundos e introduce elementos más
                  complejos como la parada de manos transversal y saltos leap split.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">Límite de Tiempo:</h4>
                    <p className="text-blue-800 text-lg font-bold">55 segundos</p>
                    <p className="text-blue-700 text-sm">(15 segundos más que Nivel 2)</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">Posición Inicial:</h4>
                    <p className="text-green-800 text-sm">
                      Se puede usar botador o superficie elevada a retirar pronto. Empezar aproximadamente en centro de
                      la viga.
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
                    <CardTitle className="text-lg">1. Entrada de Apoyo de Pose de Pescado al Frente</CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia Compleja:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Manos a altura hombros, saltar a apoyo frontal con brazos y cuerpo extendidos</li>
                        <li>• Al despegar, flexionar pierna izquierda atrás y arriba mínimo 90°</li>
                        <li>• Terminar con rodillas juntas en soporte de pose de pescado</li>
                        <li>• Parte superior cuerpo puede estar arqueada, ahuecada o recta</li>
                        <li>• Presionar viga y estirar pierna izquierda</li>
                        <li>• Levantar pierna izquierda extendida con arco del pie sobre la viga</li>
                        <li>• Flexionar pierna derecha hacia arriba y colocar lado del pie derecho sobre viga</li>
                        <li>• Llegar a sentado de gacela con cadera paralela y torso recto</li>
                        <li>• Ajustar mano izquierda para tomar lado de viga</li>
                        <li>• Presionar brazo derecho hacia abajo para levantar cadera</li>
                        <li>• Girar torso 90° a derecha colocando mano izquierda junto con la derecha</li>
                        <li>• Pie izquierdo en viga, rodilla derecha sobre viga con cadera extendida</li>
                        <li>• Bajar pierna izquierda extendida al lado y sentarse sobre talón derecho</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura y brazos extendidos, ritmo rápido para levantarse
                      </p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Penalizaciones:</strong> Hasta 0.10 no extender cuerpo en apoyo frontal, 0.30 hacer
                        palanca sobre rodilla
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Parada de manos transversal */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">2. Pose de Passé al Frente, Parada de Manos Transversal</CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia Completa:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Hacer demi-plié con pierna izquierda</li>
                        <li>• Balancear pierna derecha extendida adelante a horizontal</li>
                        <li>• Brazos flexionados y extendidos bajan adelante-en medio con palmas abajo</li>
                        <li>• Flexionar pierna derecha para tocar con rodilla izquierda en passé al frente</li>
                        <li>• Juntar rápido (permite ligera contracción durante passé)</li>
                        <li>• Extender piernas y apuntar pie derecho sobre viga</li>
                        <li>• Brazos abren y levantan a corona para preparar parada de manos</li>
                        <li>• Transferir peso a pie derecho para desplante derecho</li>
                        <li>• Levantar pierna izquierda atrás y arriba sobre cabeza</li>
                        <li>• Cubrir orejas con brazos al llegar a viga</li>
                        <li>• Tomar viga y empujar con pierna derecha para parada de manos transversal</li>
                        <li>
                          • <strong>Parada con piernas juntas, brazos extendidos, hombros abiertos</strong>
                        </li>
                        <li>• Ángulo cadera abierto, lineal muñeca a tobillo</li>
                        <li>• Marcar posición (no obligatorio mantener)</li>
                        <li>• Bajar pierna derecha manteniendo brazos cubriendo orejas</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Alineación recta del cuerpo, cabeza y vertical
                      </p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Penalizaciones:</strong> 0.10 no juntar piernas, 0.10 colocación incorrecta manos, hasta
                        0.30 no lograr vertical
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Desplantes y passé */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      3. Desplante Atrás, Pose de Passé, Desplante Atrás, Bloqueo Relevé
                    </CardTitle>
                    <Badge variant="outline">Conexión</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia de Transición:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Demi-plié pierna derecha (o empezar apuntando pie izquierdo si sale de desplante)</li>
                        <li>• Apuntar pierna izquierda adelante para tocar viga y terminar en desplante atrás</li>
                        <li>• Brazos bajan fluido adelante-abajo o adelante-en medio</li>
                        <li>• Flexionar pierna izquierda y poner pie en rodilla derecha para pose passé</li>
                        <li>• Postura recta, brazos al frente-en medio, flexionados a 90°</li>
                        <li>• Extender pierna izquierda y regresar a desplante atrás</li>
                        <li>• Jalar pierna izquierda hacia atrás para terminar en bloqueo relevé</li>
                        <li>• Pie izquierdo delante derecho</li>
                        <li>• Brazos: brazo izquierdo baja a cadera, brazo derecho hace onda</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Giro en passé */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">4. ½ Giro en Passé al Frente (Giros de Presión de Talón)</CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica del Giro:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Bajar talón izquierdo a viga</li>
                        <li>• Apuntar pie derecho adelante ligeramente girado afuera</li>
                        <li>• Dar paso adelante (no relevé)</li>
                        <li>• Flexionar rodilla izquierda y apuntar pie izquierdo en punta</li>
                        <li>• Tocar rodilla derecha (passé al frente)</li>
                        <li>• Brazo izquierdo al lado abajo o medio</li>
                        <li>• Brazo derecho curvado adelante en medio</li>
                        <li>
                          • <strong>Empujar viga y presionar talón realizando giro de presión de talón</strong>
                        </li>
                        <li>• Incrementar relevé durante giro para terminar en relevé completo</li>
                        <li>• Bajar talón derecho al viga y marcar posición</li>
                        <li>• Dar paso adelante con izquierda, cerrar pie derecho detrás</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura, pierna de apoyo extendida, relevé alto y piernas correctas
                      </p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Penalizaciones:</strong> 0.10 piernas mal en passé, 0.05 no bajar talón al terminar
                        giro, 0.30 no usar técnica de giro de presión de talón
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Saltos y arabesca */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      5. Saltos Extendidos Dobles, Arabesca 45°, Salto Leap Split 90°
                    </CardTitle>
                    <Badge variant="outline">Serie de Saltos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia de Saltos:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>
                          • <strong>Dos saltos extendidos consecutivos</strong> con bloqueo relevé
                        </li>
                        <li>• Aterrizaje en demi-plié, brazos y piernas extendidas</li>
                        <li>• Buena postura, altura y continuidad</li>
                        <li>
                          • <strong>Arabesca 45°</strong> con mantener un segundo
                        </li>
                        <li>• Brazos a los lados, torso erguido y pierna extendida</li>
                        <li>
                          • <strong>Salto leap split con piernas extendidas a 90°</strong>
                        </li>
                        <li>• Aterrizando en demi-plié en arabesca baja</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Penalizaciones:</strong> 0.10 no aterrizar dos pies simultáneamente, 0.20 no levantar
                        pierna libre mínimo 45° en arabesca, 0.20 separación desigual piernas en leap split
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Giros pivote */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">6. Giros Pivote Dobles ½ y Poses en Desplante</CardTitle>
                    <Badge variant="outline">Conexión</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Dos ½ giros pivote a la derecha con pie cerrado en relevé</li>
                        <li>• Brazos en corona, postura alineada</li>
                        <li>• Pose en desplante izquierdo y derecho</li>
                        <li>• Pie en arco forzado y cadera empujada</li>
                        <li>• Brazos fluidos bajando adelante-abajo o medio</li>
                        <li>• Palma abajo, enfoque al frente</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salida */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">7. Salida Inversión Lateral a Parada de Manos Lateral</CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia de Salida:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Paso atrás pierna derecha para desplante derecho o escalador</li>
                        <li>• Levantar pierna izquierda atrás y arriba sobre cabeza</li>
                        <li>• Cubrir orejas con brazos</li>
                        <li>• Mano derecha y luego izquierda colocadas de lado en viga</li>
                        <li>• Realizar parada manos lateral piernas juntas</li>
                        <li>• Hombros extendidos, cadera abierta, manos enfocadas</li>
                        <li>• Bajar cuerpo a fila de colchones en demi-plié controlado</li>
                        <li>• Brazos permanecen en viga hasta aterrizaje</li>
                        <li>• Luego brazos arriba adelante o diagonal</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Alineación recta en saltos extendidos y salida inversión lateral a
                        parada de manos lateral
                      </p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Penalizaciones:</strong> 0.10 manos colocación incorrecta simultánea, 0.30 no lograr
                        vertical, 0.10 no mantener contacto manos en aterrizaje
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Elementos de Desarrollo */}
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-900">Elementos de Desarrollo</CardTitle>
              </CardHeader>
              <CardContent className="text-purple-800">
                <ul className="space-y-2">
                  <li>
                    • <strong>Series de saltos extendidos y rebotes:</strong> En viga baja
                  </li>
                  <li>
                    • <strong>Parada de manos transversales y laterales:</strong> A descenso sobre colchones
                  </li>
                  <li>
                    • <strong>Inversiones laterales a paradas de manos lateral:</strong> Con descendente controlado
                  </li>
                </ul>
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
                  La rutina de suelo en Nivel 2 mantiene el enfoque en fundamentos de tumbling y danza, con mayor
                  énfasis en la expresión artística y coordinación.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">Notas Importantes:</h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Figuras son guía, texto tiene flexibilidad para opciones</li>
                      <li>• Solo elementos principales en mayúsculas</li>
                      <li>• Brazos en arriba pueden ser curvados o extendidos</li>
                      <li>• Rutina puede invertirse salvo elementos con asterisco (*)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">Posición Inicial:</h4>
                    <p className="text-green-800 text-sm">
                      Comenzar en esquina o borde de suelo. Posición recta de pie. Brazo derecho flexionado con dorso y
                      antebrazo en espalda baja, brazo izquierdo diagonal abajo al lado. Enfoque hacia brazo izquierdo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Pose, Inversión lateral */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">1. Pose, Inversión Lateral*</CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia Completa:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Desde posición inicial, demi-plié y ligero torso hacia adelante</li>
                        <li>• Abdominales contraídos</li>
                        <li>• Brazos hacia adelante y arriba para terminar flexionados con palmas afuera</li>
                        <li>• Extender torso y piernas a posición recta de pie</li>
                        <li>• Abrir brazos a lados-en medio, enfoque al frente</li>
                        <li>• Si se invierte inversión lateral, apuntar pie izquierdo adelante</li>
                        <li>• Transferir peso a pie derecho para desplante derecho</li>
                        <li>• Levantar pierna izquierda atrás y arriba sobre cabeza</li>
                        <li>• Cubrir orejas con brazos mientras gira 90° izquierda</li>
                        <li>• Colocar manos en suelo separadas ancho hombros para inversión lateral</li>
                        <li>• Cabeza alineada con hombros y cadera abiertos</li>
                        <li>• Girar 90° y descender manteniendo brazos</li>
                        <li>• Terminar recta de pie con brazos arriba</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Alineación cuerpo y cabeza, mostrar ángulo hombros abierto y pasar
                        vertical
                      </p>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Nota:</strong> Elemento marcado con asterisco (*) - no se puede invertir
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-2 rounded">
                      <p className="text-sm text-yellow-700">
                        <strong>Deducciones:</strong> 0.10 colocación incorrecta manos simultánea, hasta 0.30 no pasar
                        vertical, 0.10 no mantener alineación cabeza
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
                    La rutina de suelo del Nivel 2 continúa con elementos adicionales de tumbling y danza. La
                    información completa incluye más elementos que desarrollan coordinación, expresión artística y
                    habilidades progresivas de gimnasia, construyendo sobre las bases de los niveles anteriores.
                  </p>
                  <div className="mt-3 p-3 bg-white rounded border-l-4 border-yellow-600">
                    <p className="text-sm text-yellow-800">
                      <strong>Determinación de Dominancia:</strong> Para gimnastas zurdas, intercambiar derecha por
                      izquierda en toda la rutina según dominio determinado por salto leap split y split frontal.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
