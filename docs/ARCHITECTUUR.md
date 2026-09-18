# Architectuur

## Filosofie

ClubPilot wordt modulair opgebouwd.

Elke assistent krijgt:

- eigen pagina
- eigen API
- eigen prompt
- eigen componenten

Hierdoor blijft het project schaalbaar.

## Structuur

app/
components/
lib/
docs/

## Componenten

Een component heeft één verantwoordelijkheid.

Voorbeeld:

ResultaatTitel.tsx

doet alleen de titel.

Niet de AI.

Niet de API.

Niet het formulier.