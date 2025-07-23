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
} from "lucide-react";
import Link from "next/link";

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
                <CardTitle>
                  Sistema de Penalizaciones del Resorte sobre Tabla
                </CardTitle>
                <CardDescription>
                  Deducciones específicas para cada fase del resorte sobre tabla
                  de salto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="sin-deduccion">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Sin Deducción
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-green-600">
                          <li>• Carrera vacía #1 sin recarga en tabla.</li>
                          <li>• Entrenador parado entre botador y tabla.</li>
                          <li>
                            • Uso botador alternativo (trampolín o junior).
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nulo">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Salto Nulo
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <ul className="space-y-1 text-red-600">
                          <li>• Carrera vacía #2 o #3.</li>
                          <li>
                            • Salto incorrecto (ejemplo salto a cuclillas).
                          </li>
                          <li>
                            • No alcanzar vertical y regresar o aterrizar entre
                            botador y manos.
                          </li>
                          <li>• Ayuda del entrenador en cualquier fase.</li>
                          <li>• Subir o rebotar sin base válida.</li>
                          <li>• Sin contacto de manos en tabla.</li>
                          <li>• Tocar solo con una mano la tabla.</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-tecnica">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones por Técnica
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div>
                          <h5 className="font-semibold text-yellow-700 mb-2">
                            Técnica General:
                          </h5>
                          <ul className="space-y-1 text-yellow-600">
                            <li>• Dinamismo insuficiente: Hasta 0.30</li>
                            <li>• Desviación de dirección: Hasta 0.30</li>
                            <li>
                              • Posición cabeza incorrecta: Hasta 0.10 por fase
                            </li>
                            <li>
                              • Forma de pies incorrecta: Hasta 0.10 por fase
                            </li>
                            <li>• Piernas separadas: Hasta 0.20 por fase</li>
                            <li>• Piernas dobladas: Hasta 0.30 por fase</li>
                            <li>• Cuerpo arqueado: Hasta 0.30 por fase</li>
                            <li>• Cuerpo carpado: Hasta 0.50 por fase</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-red-700 mb-2">
                            Fase de Apoyo:
                          </h5>
                          <ul className="space-y-1 text-red-600">
                            <li>• Brazos doblados: Hasta 0.50</li>
                            <li>• Contacto cabeza con tabla: Hasta 2.00</li>
                            <li>• Tiempo excesivo en apoyo: Hasta 0.30</li>
                            <li>• Toque con una sola mano: Hasta 1.00</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="penalizaciones-aterrizaje">
                    <AccordionTrigger className="text-sm">
                      Penalizaciones de Aterrizaje
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>0.05:</strong> Pies separados ancho cadera o
                          más, sin juntar
                        </div>
                        <div>
                          <strong>0.10:</strong> Deslizamiento para juntarse,
                          brinco o ajuste pequeño, pies escalonados
                        </div>
                        <div>
                          <strong>0.20:</strong> Salto o paso largo (~1m o más),
                          postura incorrecta, movimientos extra tronco
                        </div>
                        <div>
                          <strong>0.30:</strong> Sentadilla (cadera a altura
                          rodillas o abajo), toque leve manos sin apoyo
                        </div>
                        <div>
                          <strong>0.50:</strong> Ayuda en aterrizaje, caída tras
                          ayuda, apoyo manos en colchón, caída en rodillas o
                          cadera, caída contra tabla, no aterrizaje con parte
                          inferior de pies primero
                        </div>
                        <div>
                          <strong>0.50+2.00:</strong> Aterrizaje sentada,
                          acostada o pie tras pasar vertical
                        </div>
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
      </main>
    </div>
  );
}
