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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

export default function NivelesCompetitivosPage() {
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
                Niveles Competitivos - USAG
              </h1>
            </div>
            <Badge variant="secondary">Gimnasia Artística</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Niveles Competitivos USAG
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl">
            Sistema de niveles progresivos que desarrolla habilidades técnicas,
            fuerza y precisión en gimnasia artística competitiva.
          </p>
        </div>

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

        {/* Grid de Niveles */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Nivel 1 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                Nivel 1
              </CardTitle>
              <CardDescription>
                Fundamentos básicos y elementos introductorios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Elementos básicos en todos los aparatos</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Enfoque en técnica correcta</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Desarrollo de fuerza y flexibilidad</span>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/nivel-1">
                    Ver Detalles
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Nivel 2 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                Nivel 2
              </CardTitle>
              <CardDescription>
                Progresión técnica y elementos más complejos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Elementos intermedios</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Mayor precisión técnica</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Desarrollo de rutinas</span>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/nivel-2">
                    Ver Detalles
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Nivel 3 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                Nivel 3
              </CardTitle>
              <CardDescription>
                Técnicas avanzadas y elementos competitivos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Elementos avanzados</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Rutinas completas</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Preparación competitiva</span>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/nivel-3">
                    Ver Detalles
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Nivel 4 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                Nivel 4
              </CardTitle>
              <CardDescription>
                Nivel competitivo con equipamiento estándar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Equipamiento oficial</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Elementos de alto nivel</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Competencia oficial</span>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/nivel-4">
                    Ver Detalles
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Nivel 5 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                Nivel 5
              </CardTitle>
              <CardDescription>
                Máximo nivel competitivo juvenil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Elementos de élite</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Máxima precisión técnica</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Competencia de alto nivel</span>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/nivel-5">
                    Ver Detalles
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
