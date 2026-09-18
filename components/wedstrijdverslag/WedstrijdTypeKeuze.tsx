"use client";

import type { Wedstrijdtype } from "@/lib/types";

type WedstrijdTypeKeuzeProps = {
  wedstrijdtype: Wedstrijdtype;
  onWijzig: (wedstrijdtype: Wedstrijdtype) => void;
};

const wedstrijdtypeOpties: {
  waarde: Wedstrijdtype;
  label: string;
  uitleg: string;
}[] = [
  {
    waarde: "competitie",
    label: "Competitie",
    uitleg: "Reguliere competitiewedstrijd",
  },
  {
    waarde: "beker",
    label: "Beker",
    uitleg: "Knock-outwedstrijd of bekerronde",
  },
  {
    waarde: "oefenwedstrijd",
    label: "Oefenwedstrijd",
    uitleg: "Vriendschappelijke wedstrijd",
  },
  {
    waarde: "toernooi",
    label: "Toernooi",
    uitleg: "Wedstrijd tijdens een toernooi",
  },
  {
    waarde: "overig",
    label: "Overig",
    uitleg: "Een ander soort wedstrijd",
  },
];

export function geefWedstrijdtypeLabel(
  wedstrijdtype: Wedstrijdtype
) {
  return (
    wedstrijdtypeOpties.find(
      (optie) => optie.waarde === wedstrijdtype
    )?.label ?? "Wedstrijd"
  );
}

export default function WedstrijdTypeKeuze({
  wedstrijdtype,
  onWijzig,
}: WedstrijdTypeKeuzeProps) {
  return (
    <div className="wedstrijdtypeBlok">
      <div className="wedstrijdtypeKop">
        <div>
          <p className="veldTitel">Wedstrijdtype</p>

          <p className="veldUitleg">
            Hiermee past ClubPilot de toon en context van het
            verslag aan.
          </p>
        </div>

        <span className="aanbevolenBadge">
          Aanbevolen
        </span>
      </div>

      <div className="wedstrijdtypeRaster">
        {wedstrijdtypeOpties.map((optie) => {
          const isActief =
            wedstrijdtype === optie.waarde;

          return (
            <button
              key={optie.waarde}
              type="button"
              className={`wedstrijdtypeOptie ${
                isActief ? "actief" : ""
              }`}
              onClick={() => onWijzig(optie.waarde)}
              aria-pressed={isActief}
            >
              <span className="keuzeCirkel">
                {isActief && (
                  <span className="keuzePunt" />
                )}
              </span>

              <span className="keuzeTekst">
                <strong>{optie.label}</strong>
                <small>{optie.uitleg}</small>
              </span>
            </button>
          );
        })}
      </div>

      <style jsx>{`
        .wedstrijdtypeBlok {
          display: grid;
          gap: 14px;
          padding: 16px;
          background: #fafcfc;
          border: 1px solid #e6ece9;
          border-radius: 12px;
        }

        .wedstrijdtypeKop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .veldTitel {
          margin: 0;
          color: #344054;
          font-size: 13px;
          font-weight: 800;
        }

        .veldUitleg {
          margin: 4px 0 0;
          color: #7a8494;
          font-size: 11px;
          line-height: 1.5;
        }

        .aanbevolenBadge {
          flex: 0 0 auto;
          padding: 5px 8px;
          color: #16865e;
          background: #eaf8f1;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
        }

        .wedstrijdtypeRaster {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .wedstrijdtypeOptie {
          display: flex;
          min-height: 64px;
          padding: 11px 12px;
          text-align: left;
          align-items: flex-start;
          gap: 10px;
          color: #475467;
          background: white;
          border: 1px solid #e1e6ea;
          border-radius: 10px;
          font: inherit;
          cursor: pointer;
          transition:
            background 0.2s,
            border-color 0.2s,
            box-shadow 0.2s;
        }

        .wedstrijdtypeOptie:hover {
          border-color: #a7d9c4;
          background: #fbfefd;
        }

        .wedstrijdtypeOptie.actief {
          color: #285642;
          background: #eff9f4;
          border-color: #79c5a4;
          box-shadow:
            0 0 0 3px rgba(22, 134, 94, 0.08);
        }

        .keuzeCirkel {
          display: grid;
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
          margin-top: 1px;
          place-items: center;
          background: white;
          border: 1.5px solid #cbd3da;
          border-radius: 50%;
        }

        .wedstrijdtypeOptie.actief
          .keuzeCirkel {
          border-color: #16865e;
        }

        .keuzePunt {
          width: 8px;
          height: 8px;
          background: #16865e;
          border-radius: 50%;
        }

        .keuzeTekst {
          display: grid;
          gap: 3px;
        }

        .keuzeTekst strong {
          color: #344054;
          font-size: 12px;
        }

        .keuzeTekst small {
          color: #7a8494;
          font-size: 10px;
          font-weight: 400;
          line-height: 1.4;
        }

        @media (max-width: 620px) {
          .wedstrijdtypeKop {
            align-items: flex-start;
            flex-direction: column;
          }

          .wedstrijdtypeRaster {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}