
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates pixel art using the Imagen model.
 * @param userPrompt The text prompt from the user.
 * @returns A promise that resolves to the base64 encoded image string.
 */
export const generatePixelArt = async (userPrompt: string): Promise<string> => {
  try {
    const fullPrompt = `A beautiful high-quality pixel art of ${userPrompt}. 16-bit, vibrant colors, detailed, retro video game style.`;
    
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: fullPrompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/png',
        aspectRatio: '1:1',
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return base64ImageBytes;
    } else {
      throw new Error("No image was generated. The response may have been blocked.");
    }
  } catch (error) {
    console.error("Error generating image with Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while generating the image.");
  }
};
