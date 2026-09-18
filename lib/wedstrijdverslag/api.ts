import type { Wedstrijdgegevens } from "@/lib/types";
import {
  verwerkAIResultaat,
  type GegenereerdeInhoud,
} from "./parser";

type WedstrijdverslagResponse = {
  resultaat?: string;
  fout?: string;
};

export async function haalWedstrijdverslagOp(
  gegevens: Wedstrijdgegevens
): Promise<GegenereerdeInhoud> {
  const response = await fetch(
    "/api/wedstrijdverslag",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gegevens),
    }
  );

  const data =
    (await response.json()) as WedstrijdverslagResponse;

  if (!response.ok) {
    throw new Error(
      data.fout ||
        "Het verslag kon niet worden gemaakt."
    );
  }

  if (
    typeof data.resultaat !== "string" ||
    !data.resultaat.trim()
  ) {
    throw new Error(
      "ClubPilot ontving geen bruikbaar resultaat."
    );
  }

  return verwerkAIResultaat(data.resultaat);
}