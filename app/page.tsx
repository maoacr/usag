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
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Star,
  ChevronRight,
  Search,
  Zap,
  Info,
} from "lucide-react";
import Link from "next/link";

import { searchIndex, SearchResult } from "@/lib/search-data";
import { PenalizacionesGenerales } from "@/components/penalizaciones-generales";

export default function HomePage() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const filtered = searchIndex.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const categorias = [
    {
      href: "/niveles-competitivos",
      title: "Niveles Obligatorios",
      description: "Programas de desarrollo técnico niveles 1 al 5.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "border-blue-600",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      badges: ["Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4", "Nivel 5"]
    },
    {
      href: "/niveles-opcionales",
      title: "Niveles Opcionales",
      description: "Reglamento para niveles avanzados del 6 al 10.",
      icon: <Star className="w-6 h-6" />,
      color: "border-purple-600",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      badges: ["Nivel 6-8", "Nivel 9-10", "Composición"]
    },
    {
      href: "/programa-xcel",
      title: "Programa Xcel",
      description: "Divisiones alternativas con rutinas personalizadas.",
      icon: <Zap className="w-6 h-6" />,
      color: "border-yellow-500",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      badges: ["Bronze/Silver", "Gold", "Platinum/Diamond"]
    }
  ];

  const filteredCategorias = categorias.filter(cat => 
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.badges.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
              Gymnastics en español
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
                    Niveles Obligatorios, Opcionales y Xcel
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <Star className="w-5 h-5 text-purple-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Actualizado</h3>
                  <p className="text-sm text-gray-600">
                    Información basada en los estándares oficiales USAG
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
      <header className="bg-white shadow-sm border-b sticky top-0 z-20">
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
            <div className="hidden sm:flex items-center gap-4">
              <Badge variant="secondary">Gimnasia Artística</Badge>
              <Button variant="outline" size="sm" asChild>
                <Link href="/glosario">Glosario</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero / Search Section */}
      <div className="bg-blue-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            ¿Qué reglamento estás buscando?
          </h2>
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Ej: Salto Nivel 3, Deducciones, Flic-flac..."
              className="pl-12 h-12 text-lg bg-white border-0 shadow-xl focus-visible:ring-2 focus-visible:ring-blue-400"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            
            {/* Search Results Overlay */}
            {searchResults.length > 0 && (
              <Card className="absolute top-14 left-0 right-0 z-30 shadow-2xl max-h-[400px] overflow-y-auto text-left">
                <CardContent className="p-2">
                  {searchResults.map((result, index) => (
                    <Link key={index} href={result.path} className="block p-3 hover:bg-blue-50 rounded-lg transition-colors border-b last:border-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-blue-700">{result.title}</h4>
                          <p className="text-sm text-gray-600 line-clamp-1">{result.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-2 shrink-0">
                          {result.category}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}
            
            {searchQuery.length > 2 && searchResults.length === 0 && (
              <Card className="absolute top-14 left-0 right-0 z-30 shadow-2xl text-left">
                <CardContent className="p-4">
                  <p className="text-gray-500 italic">No se encontraron resultados para "{searchQuery}"</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Categorías Principales
          </h2>
          <p className="text-gray-600">
            Accede rápidamente a la información técnica de cada programa.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategorias.length > 0 ? (
            filteredCategorias.map((cat, idx) => (
              <Link key={idx} href={cat.href}>
                <Card className={`h-full hover:shadow-lg transition-all border-l-4 ${cat.color} cursor-pointer group`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 ${cat.bgColor} rounded-lg flex items-center justify-center ${cat.textColor}`}>
                        {cat.icon}
                      </div>
                      <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:${cat.textColor} transition-colors`} />
                    </div>
                    <CardTitle className="text-xl mt-4">{cat.title}</CardTitle>
                    <CardDescription>{cat.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {cat.badges.map((badge, bIdx) => (
                        <Badge key={bIdx} variant="outline">{badge}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 italic">No se encontraron categorías que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>

        {/* Herramientas Rápidas */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Herramientas de Referencia</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" asChild>
              <Link href="/glosario">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Glosario Técnico
              </Link>
            </Button>
            <PenalizacionesGenerales 
              trigger={
                <Button variant="outline" size="lg" className="h-24 flex-col gap-2">
                  <Info className="w-6 h-6 text-green-600" />
                  Penalizaciones Grales.
                </Button>
              }
            />
            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" disabled>
              <div className="flex flex-col items-center">
                <Trophy className="w-6 h-6 text-gray-400" />
                <span className="text-gray-400">Calculadora VP</span>
                <Badge variant="secondary" className="text-[10px] mt-1">Próximamente</Badge>
              </div>
            </Button>
            <Button variant="outline" size="lg" className="h-24 flex-col gap-2" disabled>
              <div className="flex flex-col items-center">
                <Users className="w-6 h-6 text-gray-400" />
                <span className="text-gray-400">Ayudas Visuales</span>
                <Badge variant="secondary" className="text-[10px] mt-1">Próximamente</Badge>
              </div>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Digital Reference USAG. Esta aplicación es una herramienta de consulta y no sustituye al manual oficial de USA Gymnastics.
          </p>
        </div>
      </footer>
    </div>
  );
}
