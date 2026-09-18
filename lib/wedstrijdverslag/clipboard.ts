export async function kopieerNaarKlembord(
  tekst: string
) {
  const opgeschoondeTekst = tekst.trim();

  if (!opgeschoondeTekst) {
    throw new Error(
      "Er is geen tekst om te kopiëren."
    );
  }

  await navigator.clipboard.writeText(
    opgeschoondeTekst
  );
}