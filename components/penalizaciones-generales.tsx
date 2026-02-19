"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Scale,
  Target,
  Info,
} from "lucide-react";
import { ReactNode } from "react";

interface PenalizacionesGeneralesProps {
  trigger?: ReactNode;
}

export function PenalizacionesGenerales({ trigger }: PenalizacionesGeneralesProps) {
  const defaultTrigger = (
    <Button
      size="lg"
      className="rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white"
    >
      <Scale className="w-5 h-5 mr-2" />
      Penalizaciones Generales
    </Button>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Scale className="w-6 h-6" />
            Penalizaciones Generales - USAG
          </DialogTitle>
          <DialogDescription>
            Sistema completo de deducciones aplicable a todos los aparatos y niveles
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
                {["Barras Asimétricas", "Viga de Equilibrio", "Suelo"].map((aparato) => (
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
                        {[
                          { text: "Cambiar, invertir, añadir u omitir una parte pequeña", value: "0.10" },
                          { text: "Cambiar, invertir u omitir serie de enlaces", value: "0.30" },
                          { text: "Invertir orden de dos elementos en serie de danza enlazada", value: "0.30" },
                          { text: "Cambiar un elemento principal", value: "Valor elemento", type: "destructive" },
                          { text: "Sustituir u omitir un elemento principal", value: "Doble valor", type: "destructive" },
                          { text: "Invertir elemento principal si no permitido", value: "Mitad valor", type: "destructive" },
                          { text: "Añadir un elemento adicional", value: "0.30" },
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                            <span>{item.text}</span>
                            <Badge variant={item.type === "destructive" ? "destructive" : "secondary"}>{item.value}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Deducciones de Ejecución */}
          <Card>
            <CardHeader>
              <CardTitle>Deducciones de Ejecución</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 text-sm">
                {[
                  { text: "Dar pasos adicionales", value: "0.05" },
                  { text: "Pies flexionados o relajados", value: "0.05" },
                  { text: "Separación de piernas o rodillas", value: "0.20" },
                  { text: "Brazos o piernas flexionados", value: "0.30" },
                  { text: "Errores de equilibrio", value: "0.30" },
                  { text: "Caída en o desde aparato", value: "0.50", type: "destructive" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-2 border-b last:border-0">
                    <span>{item.text}</span>
                    <Badge variant={item.type === "destructive" ? "destructive" : "secondary"}>{item.value}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
