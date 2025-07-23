"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Trophy, BookOpen, Target, AlertCircle, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function Nivel2Page() {
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
              <h1 className="text-xl font-bold text-gray-900">Nivel 2 - USAG</h1>
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
          <div className="text-center">
            <p className="text-sm text-gray-600">Progresión de Niveles USAG</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">Nivel 1</Badge>
              <Badge variant="default">Nivel 2</Badge>
              <Badge variant="outline">Nivel 3</Badge>
              <Badge variant="outline">Nivel 4</Badge>
              <Badge variant="outline">Nivel 5</Badge>
              <Badge variant="outline">Nivel 6</Badge>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nivel 2 - Reglamento Completo</h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            El Nivel 2 avanza en complejidad técnica, introduciendo elementos como el salto a parada de manos y
            movimientos más dinámicos que requieren mayor fuerza, coordinación y control corporal.
          </p>
        </div>

        <Tabs defaultValue="salto" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="salto">Salto</TabsTrigger>
            <TabsTrigger value="barras">Barras Asimétricas</TabsTrigger>
            <TabsTrigger value="viga">Viga de Equilibrio</TabsTrigger>
            <TabsTrigger value="suelo">Suelo</TabsTrigger>
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
                  El Nivel 2 introduce el salto a parada de manos, un elemento más avanzado que requiere mayor control
                  corporal y fuerza en la fase invertida.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">Elementos Requeridos:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>
                        • <strong>Salto a Parada de Manos</strong> hacia superficie elevada de colchones (mín 40 cm/16")
                      </li>
                      <li>
                        • <strong>Descenso</strong> a la posición de extensión acostada en la espalda
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">Especificaciones Técnicas:</h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Distancia de carrera: ~9 metros (30 pies) o 7-9 pasos</li>
                      <li>• Carrera uniforme y fuerte, acelerando hasta la talacha</li>
                      <li>• Mantener cuerpo extendido al rotar hacia posición invertida</li>
                      <li>• Aterrizar en parada de manos vertical con brazos rectos</li>
                      <li>• Descenso controlado a posición acostada en la espalda</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Técnica Detallada */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Técnica del Salto a Parada de Manos</CardTitle>
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
                      <li>• Brazos se balancean hacia adelante hasta hombros extendidos</li>
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
                    <strong>Nota Importante:</strong> No se requiere rechace de brazos. Si la gimnasta aterriza primero
                    en pies, debe regresar a posición acostada para no ser penalizada.
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
                    • Se permiten <strong>dos saltos</strong> y se cuenta la mejor puntuación
                  </li>
                  <li>
                    • Se permiten <strong>tres intentos</strong> para completar uno o dos saltos exitosos
                  </li>
                  <li>
                    • Se permite <strong>una carrera vacía</strong> sin penalización dentro de los tres intentos
                  </li>
                  <li>
                    • Carrera vacía adicional es <strong>salto nulo</strong>
                  </li>
                  <li>
                    • Carrera vacía: caída en corrida, detención, salirse de pista, o contacto con botador/pila sin
                    recargarse
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
                <CardDescription>Sistema completo de deducciones para el salto a parada de manos</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
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
                          <h5 className="font-medium text-green-700 mb-2">Sin Deducción:</h5>
                          <ul className="space-y-1 text-green-600">
                            <li>• Carrera vacía #1 sin recargarse o apoyarse en pila</li>
                            <li>• Entrenador parado entre botador y pila</li>
                            <li>• Uso de botador alternativo (trampolín o junior)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 mb-2">Salto NULO (0.00 puntos):</h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• Carrera vacía #2 o #3</li>
                            <li>• Salto incorrecto (ej. salto a cuclillas)</li>
                            <li>• Gimnasta no alcanza vertical y regresa</li>
                            <li>• Aterriza entre botador y manos (salto incorrecto)</li>
                            <li>• Ayuda del entrenador del botador a la pila</li>
                            <li>• Correr sobre botador y subir con partes no permitidas</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-carrera">
                    <AccordionTrigger className="text-sm">Penalizaciones de Carrera y Contacto</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div className="grid gap-3 md:grid-cols-2">
                          <div>
                            <h5 className="font-medium text-yellow-700">Carrera:</h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>• 0.30 - Dinamismo insuficiente</li>
                              <li>• 0.30 - Aceleración insuficiente</li>
                              <li>• 0.30 - No mantener velocidad horizontal</li>
                              <li>• 0.30 - Pasos disparejos antes del botador</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-yellow-700">Contacto con Botador:</h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>• 0.30 - Inclinación excesiva hacia adelante</li>
                              <li>• 0.30 - Brincos adicionales (doble rebote)</li>
                              <li>• 0.30 - Desviación de dirección</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-vuelo">
                    <AccordionTrigger className="text-sm">Penalizaciones de Vuelo y Forma</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div className="grid gap-3 md:grid-cols-2">
                          <div>
                            <h5 className="font-medium text-yellow-700">Forma Corporal:</h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>• 0.10 - No mantener cabeza neutra (cada fase)</li>
                              <li>• 0.10 - Forma pies incorrecta</li>
                              <li>• 0.20 - Piernas separadas</li>
                              <li>• 0.30 - Piernas dobladas</li>
                              <li>• 0.30 - Cuerpo arqueado</li>
                              <li>• 0.50 - Cuerpo carpado</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-yellow-700">Posición de Brazos:</h5>
                            <ul className="space-y-1 text-yellow-600">
                              <li>• 0.30 - Alineación incorrecta hombros (&lt;180°)</li>
                              <li>• 0.50 - Brazos doblados en apoyo</li>
                              <li>• 2.00 - Brazos completamente doblados</li>
                              <li>• 2.00 - Contacto cabeza con colchones</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-apoyo">
                    <AccordionTrigger className="text-sm">Penalizaciones de Apoyo y Aterrizaje</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h5 className="font-medium text-red-700 mb-2">Apoyo de Manos:</h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• Hasta 2.00 - No mostrar posición vertical invertida</li>
                            <li>• 0.05 a 1.00 - Contacto manos más allá de vertical (según ángulo)</li>
                            <li>• 0.50 - No colocar ambas manos en zona correcta</li>
                            <li>• 0.20 - Colocación separada de manos</li>
                            <li>• 0.10 cada vez - Colocación adicional de manos</li>
                            <li>• 3.00 - No hacer contacto con ambas manos</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-yellow-700 mb-2">Aterrizaje:</h5>
                          <ul className="space-y-1 text-yellow-600">
                            <li>• 0.50 - Aterrizar en pies y bajar del colchón</li>
                            <li>• 0.50 - Sentarse con ángulo de cadera 90° y bajar</li>
                            <li>• 0.50 - Aterrizar sobre espalda arqueada y piernas dobladas</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-ayuda">
                    <AccordionTrigger className="text-sm">Penalizaciones por Ayuda del Entrenador</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-red-600">
                          <li>
                            • <strong>2.00</strong> - Ayuda del entrenador tras apoyo de manos en pila de colchones
                          </li>
                          <li>
                            • <strong>0.50 (JP)</strong> - Realizar salto sin señal del Juez Principal (deducción
                            promedio del siguiente salto)
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
                <CardDescription>Ejercicios preparatorios para dominar el salto a parada de manos</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="forma-carrera-2">
                    <AccordionTrigger>Forma y Técnica de Carrera</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm">
                        <strong>Énfasis en buena técnica además de aceleración y mantenimiento de velocidad.</strong>
                        La carrera debe ser progresiva, uniforme y fuerte, culminando en una talacha potente al botador.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="mantenciones-paradas">
                    <AccordionTrigger>Mantenciones de Paradas de Manos</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Progresión con bloque de asistencia:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Usar bloque de asistencia o superficie similar</li>
                          <li>• Posición lagartija con manos en piso y pies en superficie de apoyo</li>
                          <li>• Acercar manos y patear hasta pararse de manos</li>
                          <li>• ¾ del cuerpo apoyado en superficie, equilibrar parada</li>
                          <li>• Aumentar tiempo a medida que mejora forma y fuerza</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="brincos-parada">
                    <AccordionTrigger>Brincos a Parada de Manos</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Desarrollo de potencia y coordinación:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li>• Desde desplante largo llevar brazos atrás hacia adelante</li>
                          <li>• Bloquear piso para aterrizar en parada de manos</li>
                          <li>• Cuerpo recto y apretado sobre colchón de 5 cm</li>
                          <li>• Salida de parada opcional (rodar, bajar, etc.)</li>
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
                  En Nivel 2, se introduce el balanceo de kip como elemento de entrada, aumentando la complejidad
                  técnica y los requisitos de fuerza.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">Equipamiento:</h4>
                    <p className="text-blue-800 text-sm">
                      Se puede usar una sola barra que cumpla con especificaciones de barra inferior.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">Posición Inicial:</h4>
                    <p className="text-green-800 text-sm">
                      Parada con pies juntos mirando a barra inferior. Botador o colchón permitido como superficie de
                      entrada, a remover lo antes posible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Entrada: Balanceo de kip */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">1. Entrada: Balanceo de Kip y Regreso</CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Brincar con ambos pies, levantar cadera</li>
                        <li>• Sujetar barra con toma dorsal, manos al ancho de hombros</li>
                        <li>• Cuerpo carpado y ahuecado con piernas extendidas</li>
                        <li>• Balancear cuerpo adelante con piernas juntas o separadas</li>
                        <li>• Al finalizar balanceo adelante: piernas juntas, cadera extendida</li>
                        <li>• Balanceo atrás con piernas estiradas y juntas</li>
                        <li>• Pies fuera del piso durante balanceo</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Puntos Críticos:</h4>
                      <ul className="text-xs text-red-600 space-y-1">
                        <li>• 0.10 - No despegar con ambos pies simultáneamente</li>
                        <li>• 0.30 - Balanceo corriendo</li>
                        <li>• 0.10 - No guiar balanceo al frente con pies</li>
                        <li>• 0.20 - Extensión insuficiente final balanceo</li>
                        <li>• 0.10 - No cerrar piernas en balanceo kip</li>
                        <li>• 0.30 - Flexión piernas balanceo atrás antes de tocar piso</li>
                      </ul>
                      <div className="mt-2 bg-yellow-50 p-2 rounded">
                        <p className="text-xs text-yellow-700">
                          <strong>Importante:</strong> Pies no deben regresar al botador tras kip
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subida de estómago */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">2. Subida de Estómago</CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Levantar ambas piernas sobre barra inferior</li>
                        <li>• Jalar con brazos flexionados</li>
                        <li>• Levantar cadera sobre barra para apoyo frontal extendido</li>
                        <li>• Mover manos a parte superior de barra</li>
                        <li>• Estirar brazos, mantener piernas extendidas</li>
                        <li>• Cabeza neutra durante todo el movimiento</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-2">
                        Simultaneidad en levantar piernas y terminar con brazos extendidos
                      </p>
                      <div>
                        <h5 className="text-xs font-medium text-red-700">Deducciones:</h5>
                        <ul className="text-xs text-red-600">
                          <li>• 0.10 - No mantener contacto manos con barra entre kip y subida</li>
                          <li>• 0.30 - No levantar ambas piernas simultáneamente</li>
                          <li>• 0.30 - Apoyo complementario (barbilla sobre barra)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impulsos */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">3. Impulso (Primer y Segundo)</CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Hombros ligeramente delante de barra</li>
                        <li>• Balancear piernas adelante, atrás y arriba</li>
                        <li>• Empujar barra, extender hombros</li>
                        <li>• Levantar cuerpo con piernas juntas</li>
                        <li>• Mantener cuerpo recto y ahuecado</li>
                        <li>• Glúteos y abdominales apretados</li>
                        <li>• Brazos y piernas extendidos, cabeza neutra</li>
                        <li>• Segundo impulso idéntico tras regresar al apoyo frontal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Puntos de Evaluación:</h4>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• Impulsos con brazos extendidos</li>
                        <li>• Piernas juntas durante todo el movimiento</li>
                        <li>• Cuerpo recto y ahuecado</li>
                        <li>• Control al regresar a la barra</li>
                      </ul>
                      <div className="mt-2">
                        <h5 className="text-xs font-medium text-red-700">Deducciones:</h5>
                        <ul className="text-xs text-red-600">
                          <li>• 0.20 - Mala alineación del cuerpo</li>
                          <li>• 0.10 - Falta control al regresar a barra</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vuelta atrás */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">4. Vuelta Atrás</CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Inclinar hombros atrás antes que cadera regrese a barra</li>
                        <li>• Cuerpo hace círculo atrás sobre la barra</li>
                        <li>• Mantener posición recta y ahuecada</li>
                        <li>• Manos se mueven hacia parte superior de barra</li>
                        <li>• Apoyo frontal extendido momentáneo</li>
                        <li>• Cabeza neutra en todo momento</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-2">
                        Vuelta atrás continua con brazos y piernas extendidos
                      </p>
                      <div>
                        <h5 className="text-xs font-medium text-red-700">Deducciones:</h5>
                        <ul className="text-xs text-red-600">
                          <li>• 0.10 - No mantener cabeza neutra</li>
                          <li>• 0.20 - No mantener cuerpo recto y ahuecado</li>
                          <li>• 0.20 - No mantener contacto cadera/muslos con barra</li>
                          <li>• 0.10 - Falta continuidad de círculo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salida de sub balanceo */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">5. Salida de Sub Balanceo</CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Presionar barra para contacto de parte media a inferior muslos</li>
                        <li>• Cabeza neutra, pecho y torso ahuecados</li>
                        <li>• Brazos extendidos durante preparación</li>
                        <li>• Inclinar hombros hacia atrás</li>
                        <li>• Hacer círculo en barra con cadera alejada</li>
                        <li>• Al elevar cadera se abre ángulo de hombros</li>
                        <li>• Empujar barra hacia atrás</li>
                        <li>• Soltar manos para salida de sub balanceo</li>
                        <li>• Mantener cuerpo apretado en vuelo</li>
                        <li>• Aterrizar en demi-plié controlado</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Énfasis:</h4>
                      <p className="text-sm text-green-700 bg-green-50 p-2 rounded mb-2">
                        Cuerpo recto, brazos extendidos hasta aterrizaje. Ritmo continuo del sub balanceo.
                      </p>
                      <div>
                        <h5 className="text-xs font-medium text-red-700">Deducciones:</h5>
                        <ul className="text-xs text-red-600">
                          <li>• 0.10 - No mantener cabeza neutra</li>
                          <li>• 0.20 - No mantener cuerpo recto y ahuecado</li>
                          <li>• 0.20 - Cadera hace contacto (no si muslos tocan)</li>
                          <li>• 0.20 - Extensión insuficiente en vuelo</li>
                          <li>• 0.20 - Amplitud insuficiente en vuelo</li>
                          <li>• 0.10 - Distancia insuficiente</li>
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
                    • <strong>Balanceos de kip:</strong> Desde superficie elevada, cuerpo carpado y cabeza neutra
                  </li>
                  <li>
                    • <strong>Mantenciones de inversiones ahuecadas:</strong> Sobre barra inferior durante 5-10 segundos
                    con cabeza neutra
                  </li>
                  <li>
                    • <strong>Simulación kip:</strong> Con dispositivos de entrenamiento para fortalecimiento y memoria
                    muscular
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
                  Viga de Equilibrio - Descripción General
                </CardTitle>
                <CardDescription>
                  La rutina de viga en Nivel 2 tiene un límite de tiempo de 40 segundos (5 segundos más que Nivel 1) e
                  introduce elementos más dinámicos como balanceos de piernas y giros.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-900 mb-2">Límite de Tiempo:</h4>
                    <p className="text-blue-800 text-lg font-bold">40 segundos</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-semibold text-green-900 mb-2">Notas Importantes:</h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li>• Figuras guían aprendizaje, texto con flexibilidad</li>
                      <li>• Rutina puede invertirse excepto elementos con asterisco</li>
                      <li>• Reemplazar derecha por izquierda en gimnastas zurdas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {/* Entrada */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">1. Entrada de Salto al Apoyo Frontal</CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Manos a la altura de los hombros en viga</li>
                        <li>• Saltar a apoyo frontal con brazos y cuerpo extendidos</li>
                        <li>• Levantar pierna derecha con giro 90° a izquierda</li>
                        <li>• Terminar sentada con piernas separadas mirando largo de viga</li>
                        <li>• Brazos: izquierda hacia atrás, luego ambos a corona, atrás para tomar viga</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura y brazos extendidos
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
                      2. Sentada en "V", Cuclillas, Apoyo Carpado, Patada de Una Pierna
                    </CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia Completa:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Levantar y flexionar piernas para cuclillas con dedos en punta</li>
                        <li>• Brazos tomando viga detrás de glúteos</li>
                        <li>• Extender pierna derecha a sentada en "V"</li>
                        <li>• Pasos para cuclillas, empujar viga</li>
                        <li>• Mover brazos adelante y arriba a corona</li>
                        <li>• Extender piernas, talones planos para apoyo carpado</li>
                        <li>
                          • <strong>Patear pierna izquierda hacia atrás y arriba fuera de la viga</strong>
                        </li>
                        <li>• Descender pierna derecha manteniendo brazos cubriendo orejas</li>
                        <li>• Cerrar izquierda detrás derecha, terminar piernas extendidas</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Deducción importante:</strong> 0.20 por pie(s) que no abandona viga en patada
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Equilibrio en passé */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">3. Equilibrio en Passé al Frente</CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Paso adelante sobre pierna derecha con pie ligeramente afuera</li>
                        <li>• Flexionar rodilla izquierda con pie en punta tocando rodilla derecha</li>
                        <li>• Manos en cadera, marcar posición</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura, posición piernas y base
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bloqueo de equilibrio y salto */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">4. Bloqueo Relevé, Plié, Relevé, Plié, Salto Extendido</CardTitle>
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia Rítmica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Cerrar pie izquierdo detrás de pie derecho en bloqueo relevé</li>
                        <li>• Brazos arriba adelante-arriba a corona</li>
                        <li>• Hacer demi-plié, bajar brazos a lados-abajo</li>
                        <li>• Estirar piernas para bloquear equilibrio en relevé</li>
                        <li>• Repetir demi-plié, bajar brazos</li>
                        <li>• Empujar viga para salto extendido</li>
                        <li>• Durante salto juntar muslos presionando interno</li>
                        <li>• Aterrizar con pies juntos en demi-plié</li>
                        <li>• Brazos en corona durante salto y aterrizaje</li>
                        <li>• Finalizar con círculo de brazos hacia atrás, abajo, adelante y arriba</li>
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
                    <Badge variant="secondary">0.40 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Bajar talón pie derecho</li>
                        <li>• Mover pierna izquierda extendida atrás apuntando pie sobre viga</li>
                        <li>• Brazos bajados a lados o medio</li>
                        <li>• Mantener torso erguido y pierna izquierda girada hacia afuera</li>
                        <li>
                          • <strong>Levantar mínimo 30°</strong>
                        </li>
                        <li>• Cadera izquierda puede descuadrar para mostrar giro</li>
                        <li>
                          • <strong>Mantener posición 1 segundo</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      <p className="text-sm text-red-700">
                        <strong>Deducciones:</strong> 0.20 por no levantar mínimo 30°, 0.10 por no mantener 1 segundo
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Balanceo de piernas */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">6. Balanceo de Pierna al Frente y Atrás</CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Técnica:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Paso adelante pierna izquierda ligeramente afuera</li>
                        <li>• Balancear pierna derecha a horizontal o más arriba y bajar rápido</li>
                        <li>• Paso adelante pierna derecha</li>
                        <li>
                          • Repetir con pierna izquierda balanceando atrás <strong>mínimo 45°</strong>
                        </li>
                        <li>• Bajar rápido, terminar con pies en planta ligeramente afuera</li>
                        <li>• Brazos a los lados-en medio</li>
                        <li>• Hacer demi-plié y relevé con bloqueo equilibrio</li>
                        <li>• Brazos al frente-arriba a corona</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura y piernas extendidas durante balanceos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Giro pivote */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">7. Bloqueo Relevé, ½ Giro Pivote, Pose en Desplante</CardTitle>
                    <Badge variant="secondary">0.20 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Paso adelante izquierda, cerrar pie derecho detrás</li>
                        <li>• Bloqueo relevé, brazos en corona</li>
                        <li>
                          • <strong>Hacer ½ giro pivote rápido a derecha</strong>
                        </li>
                        <li>• Brazos en corona durante giro</li>
                        <li>• Hacer desplante izquierdo con pie arco forzado</li>
                        <li>• Empujar rodilla y cadera adelante, torso cuadrado</li>
                        <li>• Bajar brazos fluidamente adelante-abajo con palmas abajo</li>
                        <li>• Desplante derecho similar, torso cuadrado</li>
                        <li>• Flexionar brazos acercando palmas frente pecho</li>
                        <li>• Levantar pierna derecha adelante apuntando pie sobre viga</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Mantener cadera cuadrada, relevé completo, giro preciso
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Salida */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">8. Salida Inversión Lateral a Parada de Manos Lateral</CardTitle>
                    <Badge variant="secondary">0.60 puntos</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Secuencia Completa:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Paso atrás pierna derecha para desplante derecho</li>
                        <li>• Levantar pierna izquierda atrás y arriba por encima de cabeza</li>
                        <li>• Orejas cubiertas por brazos</li>
                        <li>• Colocar mano derecha de lado en viga</li>
                        <li>• Cuerpo gira 90° a izquierda</li>
                        <li>• Colocar mano izquierda de lado (manos separadas ancho hombros)</li>
                        <li>• Pierna derecha empuja viga</li>
                        <li>
                          • <strong>Parada de manos lateral con piernas juntas</strong>
                        </li>
                        <li>• Hombros extendidos, ángulo cadera abierto</li>
                        <li>• Mantener cuerpo recto, descender hasta pila colchones</li>
                        <li>• Demi-plié al contacto, equilibrio controlado</li>
                        <li>• Manos permanecen en viga hasta aterrizaje</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="text-sm text-green-700">
                        <strong>Énfasis:</strong> Postura, parada manos vertical en final controlado
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
                    • <strong>Series de saltos extendidos:</strong> En viga baja con rebotes
                  </li>
                  <li>
                    • <strong>Parada de manos transversal:</strong> En viga baja a descenso sobre pila de colchones
                  </li>
                  <li>
                    • <strong>Inversión lateral a parada de manos lateral:</strong> En viga baja a descenso a pila
                    colchones
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
                        <li>• Brazos hacia adelante y arriba para terminar flexionados en medio</li>
                        <li>• Palmas afuera, enfoque abajo</li>
                        <li>• Extender torso y piernas a posición recta de pie</li>
                        <li>• Abrir brazos a lados-en medio, enfoque al frente</li>
                        <li>• Si se invierte inversión lateral, apuntar pie izquierdo adelante</li>
                        <li>• Transferir peso a pie derecho para desplante derecho</li>
                        <li>• Levantar pierna izquierda atrás y arriba sobre cabeza</li>
                        <li>• Cubrir orejas con brazos durante descenso</li>
                        <li>• Giro 90° izquierda, colocar manos separadas en suelo</li>
                        <li>• Realizar inversión lateral derecha</li>
                        <li>• Cabeza alineada, hombros y cadera abiertos</li>
                        <li>• Girar 90° hacia adentro para descender</li>
                        <li>• Piernas juntas, terminar recta de pie</li>
                        <li>• Brazos arriba durante toda acción y descenso</li>
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
                        <strong>Deducciones:</strong> 0.10 colocación incorrecta manos simultánea, 0.30 no pasar por
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
                    habilidades progresivas de gimnasia, construyendo sobre las bases del Nivel 1.
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

            {/* Puntos para Evaluación */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Puntos para Evaluación - Suelo</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800">
                <ul className="space-y-2">
                  <li>
                    • <strong>Expresión artística:</strong> Coordinación de brazos y movimientos fluidos
                  </li>
                  <li>
                    • <strong>Técnica de tumbling:</strong> Alineación correcta en inversión lateral
                  </li>
                  <li>
                    • <strong>Postura:</strong> Mantenimiento de líneas corporales durante toda la rutina
                  </li>
                  <li>
                    • <strong>Transiciones:</strong> Fluidez entre elementos de danza y acrobacia
                  </li>
                  <li>
                    • <strong>Uso del espacio:</strong> Aprovechamiento adecuado del área de competencia
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
