"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Trophy, Star, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default function NivelesCompetitivosPage() {
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
              <h1 className="text-xl font-bold text-gray-900">Niveles Competitivos</h1>
            </div>
            <Badge variant="secondary">USAG</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sistema de Niveles USAG</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            El sistema de niveles de USA Gymnastics está diseñado para proporcionar una progresión estructurada desde
            principiantes hasta atletas de élite, asegurando el desarrollo seguro y apropiado de habilidades.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="levels-1-6">Niveles 1-6</TabsTrigger>
            <TabsTrigger value="levels-7-10">Niveles 7-10</TabsTrigger>
            <TabsTrigger value="elite">Elite</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-900">Niveles 1-6</CardTitle>
                  <CardDescription className="text-blue-700">Programa de desarrollo básico</CardDescription>
                </CardHeader>
                <CardContent className="text-blue-800">
                  <ul className="space-y-2 text-sm">
                    <li>• Enfoque en fundamentos</li>
                    <li>• Rutinas obligatorias</li>
                    <li>• Desarrollo de fuerza y flexibilidad</li>
                    <li>• Introducción a elementos básicos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-green-900">Niveles 7-10</CardTitle>
                  <CardDescription className="text-green-700">Programa competitivo opcional</CardDescription>
                </CardHeader>
                <CardContent className="text-green-800">
                  <ul className="space-y-2 text-sm">
                    <li>• Rutinas opcionales</li>
                    <li>• Mayor dificultad técnica</li>
                    <li>• Preparación para becas universitarias</li>
                    <li>• Competencias estatales y regionales</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-900">Elite</CardTitle>
                  <CardDescription className="text-purple-700">Nivel más alto de competencia</CardDescription>
                </CardHeader>
                <CardContent className="text-purple-800">
                  <ul className="space-y-2 text-sm">
                    <li>• Camino hacia equipos nacionales</li>
                    <li>• Competencias internacionales</li>
                    <li>• Requisitos de calificación estrictos</li>
                    <li>• Entrenamiento de tiempo completo</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Progresión del Sistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Desarrollo de Fundamentos (Niveles 1-3)</h4>
                      <p className="text-sm text-gray-600">Enfoque en postura, formas básicas y coordinación</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Construcción de Habilidades (Niveles 4-6)</h4>
                      <p className="text-sm text-gray-600">
                        Introducción de elementos más complejos y rutinas completas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Competencia Avanzada (Niveles 7-10)</h4>
                      <p className="text-sm text-gray-600">
                        Rutinas opcionales y preparación para competencias de alto nivel
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Elite y Internacional</h4>
                      <p className="text-sm text-gray-600">Máximo nivel de competencia con aspiraciones olímpicas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="levels-1-6" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Niveles 1-6: Programa de Desarrollo</CardTitle>
                <CardDescription>
                  Estos niveles forman la base del programa de gimnasia artística, enfocándose en el desarrollo
                  progresivo de habilidades fundamentales.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Características Generales:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Rutinas Obligatorias:</strong> Todas las gimnastas realizan las mismas rutinas
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Progresión Estructurada:</strong> Cada nivel construye sobre el anterior
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Enfoque en Forma:</strong> Técnica correcta sobre dificultad
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Desarrollo Integral:</strong> Trabajo en todos los aparatos
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Requisitos de Avance:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Puntuación Mínima:</strong> Generalmente 31.00 en All-Around
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Edad Apropiada:</strong> Desarrollo físico y mental adecuado
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Dominio Técnico:</strong> Ejecución consistente de habilidades
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Preparación Mental:</strong> Confianza para el siguiente nivel
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((level) => (
                <Card key={level} className="border-l-4 border-l-blue-600">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Nivel {level}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {level <= 3 ? "Fundamentos" : "Desarrollo"}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-gray-600 mb-3">
                      {level === 1 && "Introducción a posiciones básicas y movimientos fundamentales"}
                      {level === 2 && "Desarrollo de fuerza básica y coordinación"}
                      {level === 3 && "Elementos básicos en todos los aparatos"}
                      {level === 4 && "Introducción a elementos de conexión"}
                      {level === 5 && "Habilidades más complejas y rutinas completas"}
                      {level === 6 && "Preparación para programa opcional"}
                    </p>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500">Edad típica:</div>
                      <div className="font-medium">
                        {level <= 2 && "6-8 años"}
                        {level === 3 && "7-9 años"}
                        {level === 4 && "8-10 años"}
                        {level === 5 && "9-11 años"}
                        {level === 6 && "10-12 años"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="levels-7-10" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Niveles 7-10: Programa Opcional</CardTitle>
                <CardDescription>
                  Los niveles opcionales permiten a las gimnastas crear rutinas personalizadas mientras cumplen con
                  requisitos específicos de elementos y dificultad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Características del Programa Opcional:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Rutinas Personalizadas:</strong> Coreografía única para cada gimnasta
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Requisitos de Elementos:</strong> Grupos específicos de habilidades requeridas
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Valor de Dificultad:</strong> Puntuación basada en dificultad de elementos
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Competencias Estatales:</strong> Oportunidad de avanzar a regionales/nacionales
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Sistema de Puntuación:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Valor de Inicio:</strong> Basado en dificultad de elementos (hasta 10.0)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Ejecución:</strong> Deducciones por errores técnicos y de forma
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Artística:</strong> Evaluación de presentación y coreografía
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Neutrales:</strong> Deducciones por violaciones de tiempo/vestimenta
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              {[7, 8, 9, 10].map((level) => (
                <Card key={level} className="border-l-4 border-l-green-600">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Nivel {level}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">Opcional</Badge>
                      <Badge variant="secondary">{level <= 8 ? "Desarrollo" : "Avanzado"}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm space-y-3">
                    <p className="text-gray-600">
                      {level === 7 && "Primera experiencia con rutinas opcionales, elementos básicos requeridos"}
                      {level === 8 && "Mayor complejidad técnica, introducción a elementos de conexión avanzados"}
                      {level === 9 && "Preparación para competencia universitaria, habilidades de alto nivel"}
                      {level === 10 && "Máximo nivel antes de Elite, preparación para becas universitarias"}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-gray-500 mb-1">Edad típica:</div>
                        <div className="font-medium">
                          {level === 7 && "11-13 años"}
                          {level === 8 && "12-14 años"}
                          {level === 9 && "13-16 años"}
                          {level === 10 && "14-18 años"}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">Valor de inicio:</div>
                        <div className="font-medium">
                          {level === 7 && "9.0-9.5"}
                          {level === 8 && "9.0-9.8"}
                          {level === 9 && "9.0-10.0"}
                          {level === 10 && "9.0-10.0"}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="elite" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Programa Elite</CardTitle>
                <CardDescription>
                  El nivel Elite representa la cúspide de la gimnasia artística en Estados Unidos, sirviendo como puerta
                  de entrada a los equipos nacionales y competencias internacionales.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Requisitos de Calificación:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Puntuación de Calificación:</strong> Mínimo requerido en competencia oficial
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Edad Mínima:</strong> Restricciones específicas por categoría
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Evaluación Técnica:</strong> Revisión por comité técnico nacional
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Entrenamiento Intensivo:</strong> Compromiso de tiempo completo
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Oportunidades:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Equipos Nacionales:</strong> Junior y Senior
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Competencias Internacionales:</strong> Mundiales, Juegos Olímpicos
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Desarrollo Profesional:</strong> Entrenamiento con mejores coaches
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                        <span>
                          <strong>Becas Universitarias:</strong> Oportunidades académicas premium
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <CardTitle className="text-lg">Elite Junior</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    11-15 años
                  </Badge>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p className="text-gray-600">
                    Programa diseñado para gimnastas jóvenes con potencial excepcional, enfocado en desarrollo técnico
                    avanzado y preparación para competencias internacionales junior.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-medium">Características:</h5>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li>• Rutinas basadas en Código de Puntuación FIG modificado</li>
                      <li>• Competencias nacionales e internacionales</li>
                      <li>• Desarrollo progresivo hacia Elite Senior</li>
                      <li>• Enfoque en fundamentos técnicos sólidos</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-600">
                <CardHeader>
                  <CardTitle className="text-lg">Elite Senior</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    16+ años
                  </Badge>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p className="text-gray-600">
                    El nivel más alto de competencia doméstica, siguiendo completamente el Código de Puntuación FIG y
                    sirviendo como selección para equipos olímpicos y mundiales.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-medium">Características:</h5>
                    <ul className="space-y-1 text-xs text-gray-600">
                      <li>• Código de Puntuación FIG completo</li>
                      <li>• Selección para Juegos Olímpicos</li>
                      <li>• Campeonatos Mundiales</li>
                      <li>• Máximo nivel de dificultad técnica</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-900">Camino hacia Elite</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Excelencia en Nivel 10</h4>
                      <p className="text-sm text-gray-600">Puntuaciones consistentemente altas y dominio técnico</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Evaluación y Calificación</h4>
                      <p className="text-sm text-gray-600">
                        Competencia de calificación con puntuación mínima requerida
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Entrenamiento Especializado</h4>
                      <p className="text-sm text-gray-600">
                        Transición a entrenamiento de tiempo completo con coaches elite
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white rounded-lg">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Competencia Elite</h4>
                      <p className="text-sm text-gray-600">
                        Participación en competencias nacionales e internacionales
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
