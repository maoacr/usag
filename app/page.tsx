"use client";

import { useState } from "react";
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
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Star,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md sm:max-w-lg md:max-w-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">
              Reglamento USAG
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Tu guía completa del reglamento de gimnasia artística de USA
              Gymnastics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    Información Clara
                  </h3>
                  <p className="text-sm text-gray-600">
                    Reglamentos organizados y fáciles de entender
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Por Categorías</h3>
                  <p className="text-sm text-gray-600">
                    Separado por niveles y disciplinas
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <Star className="w-5 h-5 text-purple-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Actualizado</h3>
                  <p className="text-sm text-gray-600">
                    Información basada en las últimas regulaciones
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={() => setShowOnboarding(false)}
              className="w-full bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              Comenzar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Reglamento USAG
              </h1>
            </div>
            <Badge variant="secondary">Gimnasia Artística</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Explora el Reglamento por Categorías
          </h2>
          <p className="text-gray-600">
            Selecciona la sección que necesites consultar para acceder a
            información detallada y actualizada.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Niveles Competitivos */}
          <Link href="/niveles-competitivos">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-blue-600" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardTitle className="text-lg">Niveles Competitivos</CardTitle>
                <CardDescription>
                  Requisitos y regulaciones para cada nivel de competencia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Nivel 1-5</Badge>
                  <Badge variant="outline">Nivel 7-10</Badge>
                  <Badge variant="outline">Elite</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Aparatos Femeninos */}
          <Link href="/aparatos-femeninos">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-pink-600" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardTitle className="text-lg">Aparatos Femeninos</CardTitle>
                <CardDescription>
                  Reglamentos específicos para gimnasia artística femenina
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Salto</Badge>
                  <Badge variant="outline">Barras</Badge>
                  <Badge variant="outline">Viga</Badge>
                  <Badge variant="outline">Piso</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Aparatos Masculinos */}
          <Link href="/aparatos-masculinos">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardTitle className="text-lg">Aparatos Masculinos</CardTitle>
                <CardDescription>
                  Reglamentos específicos para gimnasia artística masculina
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Piso</Badge>
                  <Badge variant="outline">Caballo</Badge>
                  <Badge variant="outline">Anillas</Badge>
                  <Badge variant="outline">Salto</Badge>
                  <Badge variant="outline">Paralelas</Badge>
                  <Badge variant="outline">Barra Fija</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Sistema de Puntuación */}
          <Link href="/puntuacion">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-yellow-600" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardTitle className="text-lg">Sistema de Puntuación</CardTitle>
                <CardDescription>
                  Cómo se evalúan las rutinas y se asignan las puntuaciones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Valor D</Badge>
                  <Badge variant="outline">Ejecución</Badge>
                  <Badge variant="outline">Deducciones</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Requisitos de Competencia */}
          <Link href="/requisitos-competencia">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-purple-600" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardTitle className="text-lg">
                  Requisitos de Competencia
                </CardTitle>
                <CardDescription>
                  Elementos obligatorios y restricciones por nivel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Elementos</Badge>
                  <Badge variant="outline">Conexiones</Badge>
                  <Badge variant="outline">Restricciones</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Guías de Entrenadores */}
          <Link href="/guias-entrenadores">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
                <CardTitle className="text-lg">
                  Guías para Entrenadores
                </CardTitle>
                <CardDescription>
                  Recursos y directrices para entrenadores certificados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Certificación</Badge>
                  <Badge variant="outline">Seguridad</Badge>
                  <Badge variant="outline">Desarrollo</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Quick Access Section */}
        <div className="mt-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">
                Acceso Rápido
              </CardTitle>
              <CardDescription className="text-blue-700">
                Enlaces directos a las secciones más consultadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Button
                  variant="outline"
                  className="justify-start bg-transparent"
                  asChild
                >
                  <Link href="/tablas-puntuacion">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Tablas de Puntuación
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start bg-transparent"
                  asChild
                >
                  <Link href="/elementos-prohibidos">
                    <Trophy className="w-4 h-4 mr-2" />
                    Elementos Prohibidos
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start bg-transparent"
                  asChild
                >
                  <Link href="/cambios-recientes">
                    <Star className="w-4 h-4 mr-2" />
                    Cambios Recientes
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start bg-transparent"
                  asChild
                >
                  <Link href="/preguntas-frecuentes">
                    <Users className="w-4 h-4 mr-2" />
                    FAQ
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
