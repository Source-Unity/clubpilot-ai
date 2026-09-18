"use client";

import { useRef, useState } from "react";
import type {
  Wedstrijdgegevens,
  Wedstrijdtype,
} from "@/lib/types";
import { wedstrijdgegevensSchema } from "@/lib/types";
import KopieerMelding from "@/components/KopieerMelding";
import {
  WedstrijdFormulier,
  WedstrijdHeader,
  WedstrijdIntro,
  WedstrijdResultaat,
} from "@/components/wedstrijdverslag";
import { geefWedstrijdtypeLabel } from "@/components/wedstrijdverslag/WedstrijdTypeKeuze";
import { haalWedstrijdverslagOp } from "@/lib/wedstrijdverslag/api";
import { kopieerNaarKlembord } from "@/lib/wedstrijdverslag/clipboard";
import {
  legeInhoud,
  type GegenereerdeInhoud,
} from "@/lib/wedstrijdverslag/parser";

const legeWedstrijd: Wedstrijdgegevens = {
  thuisclub: "",
  uitclub: "",
  eindstand: "",
  wedstrijdtype: "competitie",
  doelpuntenmakers: "",
  manOfTheMatch: "",
  samenvatting: "",
  spelers: [],
  doelpuntenSelectie: [],
};

export default function WedstrijdverslagPage() {
  const [gegevens, setGegevens] =
    useState<Wedstrijdgegevens>(legeWedstrijd);

  const [inhoud, setInhoud] =
    useState<GegenereerdeInhoud>(legeInhoud);

  const [laden, setLaden] = useState(false);

  const [foutmelding, setFoutmelding] =
    useState("");

  const [kopieerMelding, setKopieerMelding] =
    useState("");

  const resultaatRef =
    useRef<HTMLDivElement | null>(null);

  function wijzigVeld(
    veld: keyof Wedstrijdgegevens,
    waarde: string
  ) {
    setGegevens((huidigeGegevens) => ({
      ...huidigeGegevens,
      [veld]: waarde,
    }));

    setFoutmelding("");
  }

  function wijzigWedstrijdtype(
    wedstrijdtype: Wedstrijdtype
  ) {
    setGegevens((huidigeGegevens) => ({
      ...huidigeGegevens,
      wedstrijdtype,
    }));

    setFoutmelding("");
  }

  async function genereerVerslag() {
    const controle =
      wedstrijdgegevensSchema.safeParse(gegevens);

    if (!controle.success) {
      setFoutmelding(
        "Controleer de ingevulde wedstrijdgegevens."
      );

      return;
    }

    try {
      setLaden(true);
      setInhoud(legeInhoud);
      setFoutmelding("");
      setKopieerMelding("");

      const resultaat =
        await haalWedstrijdverslagOp(
          controle.data
        );

      setInhoud(resultaat);

      window.setTimeout(() => {
        resultaatRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    } catch (error) {
      setFoutmelding(
        error instanceof Error
          ? error.message
          : "Er is iets misgegaan."
      );
    } finally {
      setLaden(false);
    }
  }

  async function kopieerTekst(
    tekst: string,
    melding: string
  ) {
    try {
      await kopieerNaarKlembord(tekst);

      setKopieerMelding(melding);

      window.setTimeout(() => {
        setKopieerMelding("");
      }, 2500);
    } catch (error) {
      setFoutmelding(
        error instanceof Error
          ? error.message
          : "Het kopiëren is niet gelukt."
      );
    }
  }

  function maakNieuwVerslag() {
    setGegevens(legeWedstrijd);
    setInhoud(legeInhoud);
    setFoutmelding("");
    setKopieerMelding("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <main className="pagina">
      <WedstrijdHeader
        merknaam="ClubPilot Assistent"
        onderschrift="Professionele wedstrijdverslagen in enkele seconden"
      />

      <WedstrijdIntro
        label="WEDSTRIJDVERSLAG"
        titel="Maak een publiceerbaar wedstrijdverslag"
        beschrijving="Vul de belangrijkste wedstrijdgegevens in. ClubPilot Assistent maakt een titel, professioneel verslag en direct bruikbare socialmediapost."
      />

      <section className="werkruimte">
        <WedstrijdFormulier
          gegevens={gegevens}
          setGegevens={setGegevens}
          laden={laden}
          foutmelding={foutmelding}
          onWijzigVeld={wijzigVeld}
          onWijzigWedstrijdtype={
            wijzigWedstrijdtype
          }
          onGenereer={genereerVerslag}
        />

        <div ref={resultaatRef}>
          <WedstrijdResultaat
            laden={laden}
            titel={inhoud.titel}
            verslag={inhoud.verslag}
            socialmediapost={
              inhoud.socialmediapost
            }
            thuisclub={gegevens.thuisclub}
            uitclub={gegevens.uitclub}
            eindstand={gegevens.eindstand}
            wedstrijdtypeLabel={geefWedstrijdtypeLabel(
              gegevens.wedstrijdtype
            )}
            onKopieerTitel={() =>
              kopieerTekst(
                inhoud.titel,
                "Titel gekopieerd"
              )
            }
            onKopieerVerslag={() =>
              kopieerTekst(
                [
                  inhoud.titel,
                  inhoud.verslag,
                ]
                  .filter(Boolean)
                  .join("\n\n"),
                "Wedstrijdverslag gekopieerd"
              )
            }
            onKopieerSocial={() =>
              kopieerTekst(
                inhoud.socialmediapost,
                "Socialmediapost gekopieerd"
              )
            }
            onNieuwVerslag={maakNieuwVerslag}
          />
        </div>
      </section>

      <KopieerMelding tekst={kopieerMelding} />

      <style jsx>{`
        .pagina {
          min-height: 100vh;
          padding: 0 40px 60px;
          color: #172033;
          background:
            radial-gradient(
              circle at top right,
              rgba(32, 171, 107, 0.12),
              transparent 28%
            ),
            #f5f7f9;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .werkruimte {
          display: grid;
          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(0, 1.1fr);
          gap: 24px;
          max-width: 1400px;
          margin: 0 auto;
          align-items: start;
        }

        @media (max-width: 980px) {
          .pagina {
            padding: 0 22px 40px;
          }

          .werkruimte {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .pagina {
            padding: 0 14px 30px;
          }
        }
      `}</style>
    </main>
  );
}