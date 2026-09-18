import OpenAI from "openai";
import { NextResponse } from "next/server";
import { maakWedstrijdverslagPrompt } from "@/lib/prompts";
import { wedstrijdgegevensSchema } from "@/lib/types";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const invoer = await request.json();
    const controle = wedstrijdgegevensSchema.safeParse(invoer);

    if (!controle.success) {
      return NextResponse.json(
        { fout: "Controleer de ingevulde wedstrijdgegevens." },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: maakWedstrijdverslagPrompt(controle.data),
    });

    return NextResponse.json({
      resultaat: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { fout: "Het wedstrijdverslag kon niet worden gemaakt." },
      { status: 500 }
    );
  }
}