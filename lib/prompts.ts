import type {
  Wedstrijdgegevens,
  Wedstrijdtype,
} from "./types";

type WedstrijdScenario = {
  thuisScore: number | null;
  uitScore: number | null;
  totaalDoelpunten: number | null;
  verschil: number | null;
  uitslagType:
    | "gelijkspel"
    | "thuiswinst"
    | "uitwinst"
    | "onbekend";
  wedstrijdKenmerken: string[];
};

const verbodenCliches = [
  "vanaf het eerste fluitsignaal",
  "beide ploegen begonnen fel",
  "het publiek ging er eens goed voor zitten",
  "de wedstrijd golfde op en neer",
  "stond als een huis",
  "liet de koppies niet hangen",
  "trok uiteindelijk aan het langste eind",
  "een wedstrijd om niet snel te vergeten",
  "voetbal is een spel van twee helften",
  "de drie punten bleven thuis",
  "de drie punten gingen mee naar huis",
];

const structuurVarianten = [
  `
STRUCTUURVARIANT A — DIRECT EN JOURNALISTIEK
- Open met het belangrijkste of meest opvallende moment uit de samenvatting.
- Geef daarna kort de context van de wedstrijd.
- Werk het verloop chronologisch uit wanneer de invoer daarvoor voldoende informatie bevat.
- Eindig met een concrete terugblik, zonder standaard slotzin.
`,
  `
STRUCTUURVARIANT B — UITSLAG ALS STARTPUNT
- Begin met de uitslag en leg direct uit wat die uitslag bijzonder maakte.
- Beschrijf daarna hoe de wedstrijd zich volgens de samenvatting ontwikkelde.
- Verwerk doelpuntenmakers en Man of the Match op natuurlijke plekken.
- Sluit af met wat deze wedstrijd typeerde.
`,
  `
STRUCTUURVARIANT C — SFEER EN WEDSTRIJDBEELD
- Open met één concreet beeld of moment uit de aangeleverde samenvatting.
- Bouw daarna het wedstrijdverhaal op.
- Gebruik korte en langere zinnen door elkaar.
- Eindig rustig en geloofwaardig, zonder overdreven conclusie.
`,
  `
STRUCTUURVARIANT D — CHRONOLOGISCH
- Vertel het wedstrijdverloop in een duidelijke tijdlijn wanneer de invoer die tijdlijn ondersteunt.
- Begin niet met een algemene uitspraak over spanning of inzet.
- Benoem alleen gebeurtenissen die daadwerkelijk zijn aangeleverd.
- Sluit af met de eindstand en een korte duiding.
`,
  `
STRUCTUURVARIANT E — CLUBJOURNALIST
- Schrijf alsof je de vaste verslaggever van de club bent.
- Gebruik een warme en betrokken toon, maar blijf geloofwaardig.
- Open met het verhaal achter de uitslag, niet met een cliché.
- Laat het verslag klinken alsof een mens het na de wedstrijd heeft geschreven.
`,
];

const wedstrijdtypeLabels: Record<
  Wedstrijdtype,
  string
> = {
  competitie: "competitiewedstrijd",
  beker: "bekerwedstrijd",
  oefenwedstrijd: "oefenwedstrijd",
  toernooi: "toernooiwedstrijd",
  overig: "overige wedstrijd",
};

function analyseerEindstand(
  eindstand: string
): WedstrijdScenario {
  const score = eindstand.match(
    /^\s*(\d+)\s*[-–:]\s*(\d+)\s*$/
  );

  if (!score) {
    return {
      thuisScore: null,
      uitScore: null,
      totaalDoelpunten: null,
      verschil: null,
      uitslagType: "onbekend",
      wedstrijdKenmerken: [],
    };
  }

  const thuisScore = Number(score[1]);
  const uitScore = Number(score[2]);
  const totaalDoelpunten =
    thuisScore + uitScore;
  const verschil = Math.abs(
    thuisScore - uitScore
  );

  let uitslagType: WedstrijdScenario["uitslagType"] =
    "gelijkspel";

  if (thuisScore > uitScore) {
    uitslagType = "thuiswinst";
  }

  if (uitScore > thuisScore) {
    uitslagType = "uitwinst";
  }

  const wedstrijdKenmerken: string[] = [];

  if (thuisScore === uitScore) {
    wedstrijdKenmerken.push("gelijkspel");
  }

  if (verschil === 1) {
    wedstrijdKenmerken.push(
      "klein verschil in de eindstand"
    );
  }

  if (verschil >= 4) {
    wedstrijdKenmerken.push(
      "ruim verschil in de eindstand"
    );
  }

  if (totaalDoelpunten === 0) {
    wedstrijdKenmerken.push(
      "doelpuntloze wedstrijd"
    );
  } else if (totaalDoelpunten >= 6) {
    wedstrijdKenmerken.push(
      "doelpuntrijke wedstrijd"
    );
  }

  if (thuisScore === 0 || uitScore === 0) {
    wedstrijdKenmerken.push(
      "één van beide teams hield de nul"
    );
  }

  return {
    thuisScore,
    uitScore,
    totaalDoelpunten,
    verschil,
    uitslagType,
    wedstrijdKenmerken,
  };
}

function maakVariatiecode(
  gegevens: Wedstrijdgegevens
) {
  const bron = [
    gegevens.thuisclub,
    gegevens.uitclub,
    gegevens.eindstand,
    gegevens.wedstrijdtype,
    gegevens.samenvatting,
    gegevens.doelpuntenmakers,
    gegevens.manOfTheMatch,
  ].join("|");

  let totaal = 0;

  for (
    let index = 0;
    index < bron.length;
    index += 1
  ) {
    totaal +=
      bron.charCodeAt(index) * (index + 1);
  }

  return totaal % structuurVarianten.length;
}

function bepaalPerspectief(
  gegevens: Wedstrijdgegevens
) {
  if (gegevens.eigenTeam === "thuis") {
    return `
PERSPECTIEF
Schrijf vanuit het perspectief van ${gegevens.thuisclub}.
De tegenstander is ${gegevens.uitclub}.
`;
  }

  if (gegevens.eigenTeam === "uit") {
    return `
PERSPECTIEF
Schrijf vanuit het perspectief van ${gegevens.uitclub}.
De tegenstander is ${gegevens.thuisclub}.
`;
  }

  return `
PERSPECTIEF
Er is niet aangegeven welke club het eigen team is.
Schrijf daarom neutraal en behandel beide teams evenwichtig.
Doe niet alsof één van de clubs de opdrachtgever is.
`;
}

function bepaalWedstrijdtypeContext(
  wedstrijdtype: Wedstrijdtype
) {
  switch (wedstrijdtype) {
    case "competitie":
      return `
WEDSTRIJDTYPE — COMPETITIE
- Behandel de wedstrijd als een reguliere competitiewedstrijd.
- Je mag spreken over een competitiezege, competitienederlaag of gelijkspel.
- Schrijf niet automatisch over drie punten, de ranglijst, promotie, degradatie, een titelstrijd of kampioenschap.
- Benoem zulke gevolgen alleen wanneer deze expliciet in de samenvatting staan.
`;

    case "beker":
      return `
WEDSTRIJDTYPE — BEKER
- Behandel de wedstrijd als een bekerwedstrijd.
- De toon mag iets meer nadruk leggen op het resultaat en het beslissende karakter van de wedstrijd.
- Schrijf niet automatisch dat een team is uitgeschakeld of naar de volgende ronde gaat.
- Benoem verlenging, strafschoppen, een knock-outfase of plaatsing alleen wanneer dit expliciet is aangeleverd.
`;

    case "oefenwedstrijd":
      return `
WEDSTRIJDTYPE — OEFENWEDSTRIJD
- Behandel de wedstrijd als een oefenwedstrijd.
- Leg niet automatisch nadruk op competitiepunten of gevolgen voor een ranglijst.
- Je mag het resultaat sportief duiden, maar presenteer het niet als een wedstrijd met officiële competitiegevolgen.
- Verzin geen doelen zoals wedstrijdritme opdoen, spelers testen of tactische experimenten.
`;

    case "toernooi":
      return `
WEDSTRIJDTYPE — TOERNOOI
- Behandel de wedstrijd als onderdeel van een toernooi.
- Schrijf niet automatisch over een poule, finaleplaats, volgende ronde, eindklassering of uitschakeling.
- Benoem het belang binnen het toernooi alleen wanneer dat expliciet uit de samenvatting blijkt.
`;

    case "overig":
      return `
WEDSTRIJDTYPE — OVERIG
- De exacte wedstrijdvorm is niet nader gespecificeerd.
- Gebruik daarom geen aannames over competitiepunten, bekerrondes, een toernooistand of officiële gevolgen.
- Houd de context algemeen en richt je op de aangeleverde gebeurtenissen en uitslag.
`;

    default:
      return "";
  }
}

function maakOptioneleInformatie(
  label: string,
  waarde: string | undefined
) {
  const opgeschoondeWaarde =
    waarde?.trim();

  return opgeschoondeWaarde
    ? `${label}: ${opgeschoondeWaarde}`
    : `${label}: niet opgegeven`;
}

export function maakWedstrijdverslagPrompt(
  gegevens: Wedstrijdgegevens
) {
  const scenario = analyseerEindstand(
    gegevens.eindstand
  );

  const structuurVariant =
    structuurVarianten[
      maakVariatiecode(gegevens)
    ];

  const kenmerken =
    scenario.wedstrijdKenmerken.length > 0
      ? scenario.wedstrijdKenmerken.join(", ")
      : "geen aanvullende kenmerken uit de score af te leiden";

  const wedstrijdtypeLabel =
    wedstrijdtypeLabels[
      gegevens.wedstrijdtype
    ];

  return `
ROL
Je bent de vaste clubjournalist van een Nederlandse amateurvoetbal- of zaalvoetbalclub.

Je schrijft geen generieke AI-tekst. Het resultaat moet klinken alsof een betrokken en ervaren clubverslaggever de wedstrijd zelf heeft gevolgd.

OPDRACHT
Schrijf:

1. Eén originele en geloofwaardige titel.
2. Eén professioneel wedstrijdverslag in natuurlijk Nederlands.
3. Eén korte socialmediapost.

De socialmediapost is een aparte tekst en mag de kwaliteit of stijl van het wedstrijdverslag niet beïnvloeden.

LENGTE WEDSTRIJDVERSLAG
- Richtlijn: 200 tot 275 woorden.
- Is weinig informatie aangeleverd, schrijf dan liever een korter en eerlijk verslag.
- Vul het verslag nooit kunstmatig op met verzonnen gebeurtenissen.

LENGTE SOCIALMEDIA
- Richtlijn: 40 tot 80 woorden.
- Houd de tekst compact en direct bruikbaar.
- De post moet geschikt zijn voor Facebook en Instagram.

${bepaalPerspectief(gegevens)}

${bepaalWedstrijdtypeContext(
  gegevens.wedstrijdtype
)}

FEITENREGELS
- Gebruik uitsluitend de aangeleverde wedstrijdgegevens.
- Verzin geen kansen, reddingen, doelpunten, assists, kaarten, blessures, wissels, speelminuten, weersomstandigheden of reacties.
- Bedenk geen chronologisch wedstrijdverloop als dit niet uit de samenvatting blijkt.
- Leid geen comeback, late overwinning of spannende slotfase af uit alleen de eindstand.
- Je mag objectieve conclusies uit de score trekken, zoals winst, verlies, gelijkspel, een ruime uitslag of het houden van de nul.
- Trek geen conclusies over competitiepunten, bekerrondes, poulestanden, plaatsing of uitschakeling tenzij deze expliciet zijn aangeleverd.
- Bij twijfel formuleer je terughoudend.
- Maak ontbrekende informatie niet zichtbaar in het verslag.
- Noem niet dat gegevens ontbreken.
- Gebruik ook in de socialmediapost uitsluitend verstrekte informatie.
- Voeg geen verzonnen sfeer, emotie of gebeurtenissen toe aan de socialmediapost.

SCHRIJFSTIJL WEDSTRIJDVERSLAG
- Schrijf helder, menselijk en concreet.
- Wissel korte en langere zinnen af.
- Gebruik gewone Nederlandse voetbaltaal.
- Houd de toon betrokken, sportief en geloofwaardig.
- Laat de context aansluiten op het gekozen wedstrijdtype.
- Noem het wedstrijdtype alleen wanneer dat natuurlijk waarde toevoegt.
- Herhaal het wedstrijdtype niet onnodig.
- Overdrijf niet.
- Gebruik maximaal één uitroepteken in het wedstrijdverslag.
- Gebruik geen tussenkopjes in het verslag.
- Gebruik geen opsommingen in het uiteindelijke resultaat.
- Herhaal de uitslag niet onnodig.
- Laat doelpuntenmakers en Man of the Match alleen terugkomen wanneer deze zijn opgegeven.
- Verwerk namen natuurlijk in het verhaal en niet als los lijstje.
- Schrijf nooit dat de Man of the Match is gekozen wegens een bepaalde prestatie, tenzij die prestatie expliciet is aangeleverd.

SCHRIJFSTIJL SOCIALMEDIA
- Schrijf enthousiaster en compacter dan het wedstrijdverslag.
- Houd de toon positief, sportief en geloofwaardig.
- Laat de formulering passen bij het gekozen wedstrijdtype.
- Maak geen letterlijke samenvatting van het volledige wedstrijdverslag.
- Benoem bij voorkeur de uitslag en één concreet element uit de samenvatting.
- Gebruik maximaal drie passende emoji's.
- Gebruik geen overdreven emoji-reeksen.
- Gebruik geen hashtags, tenzij ze logisch en relevant zijn.
- Gebruik maximaal twee hashtags.
- Eindig niet standaard met "Op naar de volgende wedstrijd".
- Vermijd overdreven woorden als historisch, legendarisch of sensationeel.
- Gebruik geen losse kop boven de socialmediapost.
- Schrijf de socialmediapost als direct plaatsbare tekst.

VERBODEN CLICHÉS EN FORMULERINGEN
Gebruik geen varianten van deze uitdrukkingen:

${verbodenCliches
  .map((cliche) => `- ${cliche}`)
  .join("\n")}

Vermijd daarnaast:
- "spannende wedstrijd" zonder concrete onderbouwing;
- "fel uit de startblokken";
- "hard gewerkt";
- "goede teamprestatie";
- "verdiende overwinning" tenzij de samenvatting dat ondersteunt;
- overdreven woorden als heroïsch, sensationeel, historisch en legendarisch;
- een voorspelbare afsluiting over de volgende wedstrijd;
- "wat een wedstrijd" als standaardopening;
- "trots op het team" tenzij dit logisch uit de aangeleverde informatie volgt;
- "de mannen" of "de dames" tenzij dit uit de club- of teamnaam duidelijk blijkt.

SCENARIOANALYSE OP BASIS VAN DE SCORE
- Uitslagtype: ${scenario.uitslagType}
- Wedstrijdkenmerken: ${kenmerken}

Gebruik deze analyse alleen voor objectieve duiding.
Maak er geen extra wedstrijdgebeurtenissen van.

${structuurVariant}

TITELREGELS
- Schrijf exact één titel.
- Schrijf een specifieke titel die past bij deze wedstrijd.
- Laat de titel waar mogelijk aansluiten op de context van het wedstrijdtype.
- Gebruik bij voorkeur een concreet element uit de samenvatting.
- Vermijd titels als:
  - "Spannende wedstrijd eindigt in..."
  - "Mooie overwinning voor..."
  - "Sterke teamprestatie van..."
  - "Wedstrijdverslag..."
- Houd de titel tussen 5 en 12 woorden.
- Plaats geen punt achter de titel.
- Zet geen emoji in de titel.
- Zet geen aanhalingstekens om de titel.

WEDSTRIJDGEGEVENS
Wedstrijdtype: ${wedstrijdtypeLabel}
Thuisclub: ${gegevens.thuisclub.trim()}
Uitclub: ${gegevens.uitclub.trim()}
Eindstand: ${gegevens.eindstand.trim()}
${maakOptioneleInformatie(
  "Doelpuntenmakers",
  gegevens.doelpuntenmakers
)}
${maakOptioneleInformatie(
  "Man of the Match",
  gegevens.manOfTheMatch
)}
Samenvatting:
${gegevens.samenvatting.trim()}

UITVOERFORMAAT
Geef uitsluitend de definitieve tekst terug in exact deze vorm:

[Titel]

[Wedstrijdverslag]

Socialmediapost:
[Socialmediapost]

BELANGRIJK
- Plaats geen label boven de titel.
- Plaats geen label boven het wedstrijdverslag.
- Gebruik alleen het label "Socialmediapost:" voor het laatste onderdeel.
- Geef geen uitleg over je keuzes.
- Geef geen opmerkingen vooraf of achteraf.
`;
}