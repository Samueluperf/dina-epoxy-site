
import { GoogleGenAI, Type } from "@google/genai";
import { SEOData } from "../types";

const API_KEY = process.env.API_KEY;

export const generateSEOContent = async (pageName: string, context: string): Promise<SEOData | null> => {
  if (!API_KEY) return null;

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Générer des métadonnées SEO optimisées pour une page intitulée "${pageName}" basée sur ce contexte : "${context}". Le site web appartient à DinaEpoxy, expert en peinture industrielle, thermolaquage et traitement de surface en Île-de-France (95, 93, 60). Utiliser des mots-clés pertinents pour le secteur industriel français.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            metaDescription: { type: Type.STRING },
            h1: { type: Type.STRING },
            keywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "metaDescription", "h1", "keywords"]
        }
      }
    });

    return JSON.parse(response.text.trim()) as SEOData;
  } catch (error) {
    console.error("Gemini SEO Generation failed:", error);
    return null;
  }
};
