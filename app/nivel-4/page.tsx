"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
} from "lucide-react"
import Link from "next/link"

export default function Nivel4Page() {
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
              <h1 className="text-xl font-bold text-gray-900">Nivel 4 - USAG</h1>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nivel 4 - Reglamento Completo</h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            El Nivel 4 representa un avance significativo en la gimnasia competitiva, introduciendo el resorte sobre
            tabla de salto y elementos técnicos más complejos que requieren mayor precisión y control.
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
                  Salto - Resorte sobre Tabla de Salto
                </CardTitle>
                <CardDescription>
                  El Nivel 4 introduce el resorte sobre tabla de salto, marcando la transición hacia el equipamiento
                  estándar de gimnasia artística y técnicas más avanzadas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">Elemento Principal:</h4>
                    <p className="text-blue-800">
                      <strong>RESORTE</strong> sobre la tabla de salto oficial
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">Características Técnicas:</h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Número de pasos de carrera opcional</li>
                      <li>• Carrera uniforme y fuerte, acelerando hasta la talacha</li>
                      <li>• Dos fases de vuelo distintas con tabla de salto</li>
                      <li>• Extensión completa o 3/4 de hombros en primera fase</li>
                      <li>• Cuerpo abandona tabla cerca de la vertical</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                    <p className="text-yellow-800">
                      <strong>Importante:</strong> Consultar Reglas y Políticas de USA Gymnastics para especificaciones
                      de equipamiento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Técnica Detallada del Resorte sobre Tabla */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Técnica Completa del Resorte sobre Tabla</CardTitle>
                <Badge variant="outline">10.0 puntos total</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Carrera y Primera Fase de Vuelo:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Carrera uniforme y fuerte, acelerando hasta la talacha hacia el botador</li>
                      <li>• Contacto con botador con pies adelante del cuerpo</li>
                      <li>• Brazos se mueven hacia adelante para completar extensión o 3/4 extensión de hombros</li>
                      <li>• Cabeza neutra, mirada en manos</li>
                      <li>• Mantener cuerpo recto, piernas juntas, cadera extendida</li>
                      <li>• Gimnasta rota a posición invertida dirigiendo piernas/talones hacia atrás y arriba</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fase de Apoyo en Tabla:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Al hacer contacto con manos, extender hombros rápido</li>
                      <li>• Bloquear con brazos rectos contra tabla</li>
                      <li>• Cuerpo abandona tabla cerca de vertical</li>
                      <li>• Posición de parada de manos vertical con brazos extendidos</li>
                      <li>• Brazos a nivel hombros al despegar y bloquear</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Segunda Fase de Vuelo:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Mantener postura recta y apretada</li>
                      <li>• Cadera extendida durante vuelo</li>
                      <li>• Cabeza neutra en todo momento</li>
                      <li>• Rotación continúa hasta aterrizaje</li>
                      <li>• Brazos arriba en segunda fase de vuelo</li>
                      <li>• Cuerpo mantiene posición recta desde apoyo hasta aterrizaje</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Aterrizaje:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Aterrizaje en demi-plié</li>
                      <li>• Posición de brazos en aterrizaje opcional</li>
                      <li>• Estirar piernas para terminar en posición recta de pie</li>
                      <li>• Brazos mover hacia arriba</li>
                      <li>• Piernas juntas y pies en punta durante vuelo</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800 text-sm">
                    <strong>Puntos Clave de Evaluación:</strong> Carrera acelerada manteniendo velocidad, extensión
                    completa de hombros, posición vertical en apoyo, y cuerpo recto con piernas juntas desde apoyo hasta
                    aterrizaje.
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
                    • La gimnasta puede realizar <strong>dos saltos</strong>; la mejor puntuación cuenta
                  </li>
                  <li>
                    • Se permiten <strong>tres intentos</strong> para completar uno o dos saltos exitosos
                  </li>
                  <li>
                    • <strong>Una carrera vacía</strong> dentro de tres intentos sin penalización
                  </li>
                  <li>
                    • Carrera vacía adicional es <strong>salto NULO</strong>
                  </li>
                  <li>
                    • Carrera vacía = caída en corrida, detención, salirse de pista, contacto con botador o tabla sin
                    recargarse en parte superior
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
                <CardTitle>Sistema de Penalizaciones del Resorte sobre Tabla</CardTitle>
                <CardDescription>
                  Deducciones específicas para cada fase del resorte sobre tabla de salto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="faltas-generales-tabla">
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
                            <li>• Carrera vacía #1: acercamiento sin recargarse o apoyarse sobre tabla</li>
                            <li>• Entrenador parado entre botador y tabla</li>
                            <li>• Uso botador alternativo (trampolín o botador junior)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 mb-2">Salto NULO (0.00 puntos):</h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• Carrera vacía #2 o #3</li>
                            <li>• Realizar salto incorrecto (ejemplo: salto a cuclillas)</li>
                            <li>• No alcanzar vertical y regresar o aterrizar en tabla entre botador y manos</li>
                            <li>• Ayuda del entrenador en cualquier fase</li>
                            <li>• Correr sobre botador y subir/rebotar sin usar pies como base</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-carrera-tabla">
                    <AccordionTrigger className="text-sm">Penalizaciones de Carrera y Primera Fase</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div className="grid gap-3 md:grid-cols-2">
                          <div>
                            <h5 className="font-medium text-yellow-700">Carrera (hasta 0.30):</h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>• Dinamismo insuficiente (velocidad o potencia)</li>
                              <li>• Desviación dirección recta</li>
                              <li>• Aceleración insuficiente durante carrera</li>
                              <li>• No mantener velocidad horizontal hacia botador (pasos disparejos)</li>
                              <li>• Inclinación excesiva del cuerpo hacia adelante en contacto botador</li>
                              <li>• Desviación dirección por contacto inicial con colchón</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-yellow-700">Forma Corporal (cada fase):</h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>• 0.10 - No mantener posición neutra cabeza</li>
                              <li>• 0.10 - Forma incorrecta de pies (flexionados, relajados)</li>
                              <li>• 0.20 - Piernas separadas</li>
                              <li>• 0.30 - Piernas dobladas</li>
                              <li>• 0.30 - No mantener cuerpo extendido - arqueada</li>
                              <li>• 0.50 - No mantener cuerpo extendido - carpada</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-apoyo-tabla">
                    <AccordionTrigger className="text-sm">Penalizaciones de Apoyo en Tabla</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h5 className="font-medium text-red-700 mb-2">Apoyo de Manos:</h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• 0.20 - Alineación incorrecta hombros (&lt; 180°)</li>
                            <li>• 0.50 - Brazos doblados en apoyo</li>
                            <li>• Prohibido - Contacto cabeza con tabla en apoyo</li>
                            <li>• Prohibido - No hacer contacto con ambas manos</li>
                            <li>• Colocación adicional de manos (pasos o brincos)</li>
                            <li>• Mucho tiempo en apoyo</li>
                            <li>• Tocar tabla con solo una mano</li>
                            <li>• Ángulo de rechace (no abandonar tabla antes de vertical)</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-aterrizaje-tabla">
                    <AccordionTrigger className="text-sm">Penalizaciones de Aterrizaje</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h5 className="font-medium text-green-700 mb-2">Sin Deducciones:</h5>
                          <ul className="space-y-1 text-green-600">
                            <li>• Distancia insuficiente evaluada según estatura y trayectoria</li>
                            <li>• Altura insuficiente</li>
                          </ul>
                        </div>
                        <div className="grid gap-3 md:grid-cols-2">
                          <div>
                            <h5 className="font-medium text-yellow-700">Aterrizaje Normal:</h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>• 0.05 - Aterrizar con pies separados al ancho de la cadera o más</li>
                              <li>• 0.10 - Deslizamiento de pies para juntarse</li>
                              <li>• 0.10 - Brinco o ajuste pequeño de pies</li>
                              <li>• 0.10 - Pies escalonados</li>
                              <li>• 0.20 - Salto o paso largo (~1 metro o más)</li>
                              <li>• 0.20 - Postura incorrecta en el aterrizaje</li>
                              <li>• 0.20 - Movimientos adicionales de tronco para equilibrio</li>
                              <li>• 0.30 - Sentadilla en aterrizaje (cadera a la altura de rodillas)</li>
                              <li>• 0.30 - Ligero toque o roce de manos sin apoyo</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-red-700">Aterrizaje con Problemas:</h5>
                            <ul className="space-y-1 text-red-600">
                              <li>• 0.50 - Ayuda en aterrizaje</li>
                              <li>• 0.50 - Deducción adicional por caída tras ayuda entrenador</li>
                              <li>• 0.50 - Apoyo en colchón con una o dos manos</li>
                              <li>• 0.50 - Caída sobre colchón en rodillas o cadera</li>
                              <li>• 0.50 - Caída contra tabla de salto</li>
                              <li>• 0.50 - No aterrizar con parte inferior de pies primero</li>
                              <li>
                                • 0.50 + 2.00 - Aterrizaje en posición sentada, acostada o de pie sobre tabla después de
                                pasar vertical
                              </li>
                            </ul>
                          </div>
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
                <CardDescription>Ejercicios preparatorios para dominar el resorte sobre tabla de salto</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="redondilla-botador">
                    <AccordionTrigger>Redondilla sobre Botador a Posición de Extensión</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Progresión básica:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Desde aproximación controlada al botador, realizar talacha</li>
                          <li>• Colocar manos alternadamente separadas sobre colchón frontal al botador</li>
                          <li>• Ejecutar redondilla sobre botador</li>
                          <li>• Saltar/impactar hacia atrás con cuerpo apretado</li>
                          <li>• Aterrizar acostada en pila colchones</li>
                          <li>• Brazos a nivel hombros durante talacha</li>
                          <li>• Levantarse y mantener posición arriba luego del empuje</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="metodologia-tsukahara">
                    <AccordionTrigger>Metodología Tsukahara sobre Pila de Colchones</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Desarrollo de giros (1.5m x 1.5m mínimo):</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Desde carrera controlada al botador, realizar talacha e impactar botador</li>
                          <li>• Realizar 1/4 - 1/2 (90°-180°) giro hacia pila de colchones</li>
                          <li>• Rechazar para aterrizar mirando pila</li>
                          <li>• Manos en pila colchones y brazos arriba después de empuje</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="metodologia-yurchenko">
                    <AccordionTrigger>Metodología Yurchenko sobre Pila de Colchones</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Desarrollo de entrada con redondilla (1.5m x 1.5m mínimo):</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Desde carrera controlada al botador, realizar talacha</li>
                          <li>• Colocar manos sobre colchón frente al botador para ejecutar redondilla</li>
                          <li>• Saltar/impactar hacia atrás con cuerpo apretado</li>
                          <li>• Realizar un flic-flac sobre la pila</li>
                          <li>• Empujar pila para aterrizar de pie mirando pila</li>
                          <li>• Brazos a nivel hombros durante talacha y arriba después del empuje</li>
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
                  El contenido para Barras Asimétricas del Nivel 4 estará disponible próximamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800">
                    <strong>Próximamente:</strong> Información detallada sobre los elementos requeridos, técnicas y
                    penalizaciones para Barras Asimétricas en Nivel 4.
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
                  El contenido para Viga de Equilibrio del Nivel 4 estará disponible próximamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800">
                    <strong>Próximamente:</strong> Información detallada sobre los elementos requeridos, técnicas y
                    penalizaciones para Viga de Equilibrio en Nivel 4.
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
                <CardDescription>El contenido para Suelo del Nivel 4 estará disponible próximamente.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-yellow-800">
                    <strong>Próximamente:</strong> Información detallada sobre los elementos requeridos, técnicas y
                    penalizaciones para Suelo en Nivel 4.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
