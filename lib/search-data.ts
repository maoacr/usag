export interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: "Elemento" | "Deducción" | "Nivel" | "Aparato" | "Glosario";
  tags: string[];
}

export const searchIndex: SearchResult[] = [
  // NIVELES GENERALES
  { title: "Nivel 1 Completo", description: "Reglamento general del Nivel 1.", path: "/nivel-1", category: "Nivel", tags: ["1", "uno", "obligatorio"] },
  { title: "Nivel 2 Completo", description: "Reglamento general del Nivel 2.", path: "/nivel-2", category: "Nivel", tags: ["2", "dos", "obligatorio"] },
  { title: "Nivel 3 Completo", description: "Reglamento general del Nivel 3.", path: "/nivel-3", category: "Nivel", tags: ["3", "tres", "obligatorio"] },
  { title: "Nivel 4 Completo", description: "Reglamento general del Nivel 4.", path: "/nivel-4", category: "Nivel", tags: ["4", "cuatro", "obligatorio"] },
  { title: "Nivel 5 Completo", description: "Reglamento general del Nivel 5.", path: "/nivel-5", category: "Nivel", tags: ["5", "cinco", "obligatorio"] },

  // Nivel 1 por Aparatos
  { title: "Salto Nivel 1", description: "Salto extendido sobre pila de colchones.", path: "/nivel-1?tab=salto", category: "Aparato", tags: ["salto", "1", "vault"] },
  { title: "Barras Nivel 1", description: "Subida de estómago, impulso y salida de sub-balanceo.", path: "/nivel-1?tab=barras", category: "Aparato", tags: ["barras", "1", "bars", "asimétricas"] },
  { title: "Viga Nivel 1", description: "Patada de aguja, relevé y salida de inversión lateral.", path: "/nivel-1?tab=viga", category: "Aparato", tags: ["viga", "1", "beam", "equilibrio"] },
  { title: "Suelo Nivel 1", description: "Inversión lateral, rodada atrás y vela.", path: "/nivel-1?tab=suelo", category: "Aparato", tags: ["suelo", "1", "floor", "piso"] },

  // Nivel 2 por Aparatos
  { title: "Salto Nivel 2", description: "Salto a parada de manos sobre colchones.", path: "/nivel-2?tab=salto", category: "Aparato", tags: ["salto", "2", "vault"] },
  { title: "Barras Nivel 2", description: "Balanceo de kip, subida de estómago y vuelta atrás.", path: "/nivel-2?tab=barras", category: "Aparato", tags: ["barras", "2", "bars"] },
  { title: "Viga Nivel 2", description: "Salto extendido, arabesca 30° y salida de inversión lateral.", path: "/nivel-2?tab=viga", category: "Aparato", tags: ["viga", "2", "beam"] },
  { title: "Suelo Nivel 2", description: "Inversión lateral, rodada atrás y arco patada a pasar.", path: "/nivel-2?tab=suelo", category: "Aparato", tags: ["suelo", "2", "floor"] },

  // Nivel 3 por Aparatos
  { title: "Salto Nivel 3", description: "Resorte (Handspring) sobre pila de colchones.", path: "/nivel-3?tab=salto", category: "Aparato", tags: ["salto", "3", "vault", "resorte"] },
  { title: "Barras Nivel 3", description: "Kip, vuelta atrás y salida de salto extendido.", path: "/nivel-3?tab=barras", category: "Aparato", tags: ["barras", "3", "bars", "kip"] },
  { title: "Viga Nivel 3", description: "Parada de manos transversal y Leap Split 90°.", path: "/nivel-3?tab=viga", category: "Aparato", tags: ["viga", "3", "beam"] },
  { title: "Suelo Nivel 3", description: "Redondilla + Flic-flac y rodada atrás a parada de manos.", path: "/nivel-3?tab=suelo", category: "Aparato", tags: ["suelo", "3", "floor", "flic-flac"] },

  // Nivel 4 por Aparatos
  { title: "Salto Nivel 4", description: "Resorte sobre tabla de salto oficial.", path: "/nivel-4?tab=salto", category: "Aparato", tags: ["salto", "4", "vault", "tabla"] },
  { title: "Barras Nivel 4", description: "Kip de suspensión larga y contrabalanceos.", path: "/nivel-4?tab=barras", category: "Aparato", tags: ["barras", "4", "bars"] },
  { title: "Viga Nivel 4", description: "Inversión lateral, jump split 120° y palanca.", path: "/nivel-4?tab=viga", category: "Aparato", tags: ["viga", "4", "beam"] },
  { title: "Suelo Nivel 4", description: "Mortal atrás agrupado y Leap Split 120°.", path: "/nivel-4?tab=suelo", category: "Aparato", tags: ["suelo", "4", "floor", "mortal"] },

  // Nivel 5 por Aparatos
  { title: "Salto Nivel 5", description: "Resorte sobre tabla con técnica de élite.", path: "/nivel-5?tab=salto", category: "Aparato", tags: ["salto", "5", "vault"] },
  { title: "Barras Nivel 5", description: "Stalder, vuelta de apoyo libre y plantillas completas.", path: "/nivel-5?tab=barras", category: "Aparato", tags: ["barras", "5", "bars"] },
  { title: "Viga Nivel 5", description: "Flic-flac, mortal atrás y giros completos.", path: "/nivel-5?tab=viga", category: "Aparato", tags: ["viga", "5", "beam"] },
  { title: "Suelo Nivel 5", description: "Mortal atrás carpado y mortal al frente.", path: "/nivel-5?tab=suelo", category: "Aparato", tags: ["suelo", "5", "floor"] },

  // DEDUCCIONES COMUNES
  { title: "Deducción por Caída", description: "Penalización de 0.50 en cualquier aparato.", path: "/nivel-1", category: "Deducción", tags: ["caída", "fall", "0.50"] },
  { title: "Deducción por Pasos", description: "0.10 por cada paso en el aterrizaje.", path: "/nivel-1", category: "Deducción", tags: ["pasos", "aterrizaje", "0.10"] },
  { title: "Deducción por Brazos Doblados", description: "Hasta 0.50 según la gravedad de la flexión.", path: "/nivel-1", category: "Deducción", tags: ["brazos", "forma", "flexión"] },

  // GLOSARIO
  { title: "Kip (Glosario)", description: "Definición técnica del elemento de ascenso.", path: "/glosario", category: "Glosario", tags: ["kip", "término"] },
  { title: "Flic-Flac (Glosario)", description: "Definición técnica del salto atrás.", path: "/glosario", category: "Glosario", tags: ["flic", "handspring"] }
];
