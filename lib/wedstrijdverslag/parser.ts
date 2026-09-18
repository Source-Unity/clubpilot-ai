export type GegenereerdeInhoud = {
  titel: string;
  verslag: string;
  socialmediapost: string;
};

export const legeInhoud: GegenereerdeInhoud = {
  titel: "",
  verslag: "",
  socialmediapost: "",
};

export function verwerkAIResultaat(
  resultaat: string
): GegenereerdeInhoud {
  const opgeschoond = resultaat.trim();

  if (!opgeschoond) {
    return legeInhoud;
  }

  const delen = opgeschoond.split(
    /\n\s*Socialmediapost\s*:\s*/i
  );

  const artikel = delen[0]?.trim() ?? "";

  const socialmediapost = delen
    .slice(1)
    .join("\n")
    .trim();

  const regels = artikel.split("\n");

  const titelIndex = regels.findIndex(
    (regel) => regel.trim().length > 0
  );

  if (titelIndex === -1) {
    return {
      titel: "",
      verslag: artikel,
      socialmediapost,
    };
  }

  return {
    titel: regels[titelIndex].trim(),
    verslag: regels
      .slice(titelIndex + 1)
      .join("\n")
      .trim(),
    socialmediapost,
  };
}