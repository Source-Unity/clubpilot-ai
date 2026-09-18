"use client";

import type {
  Dispatch,
  SetStateAction,
} from "react";
import type {
  Wedstrijdgegevens,
  Wedstrijdtype,
} from "@/lib/types";
import Hoogtepunten from "@/components/Hoogtepunten";
import WedstrijdTypeKeuze from "./WedstrijdTypeKeuze";

type WedstrijdFormulierProps = {
  gegevens: Wedstrijdgegevens;
  setGegevens: Dispatch<
    SetStateAction<Wedstrijdgegevens>
  >;
  laden: boolean;
  foutmelding: string;
  onWijzigVeld: (
    veld: keyof Wedstrijdgegevens,
    waarde: string
  ) => void;
  onWijzigWedstrijdtype: (
    wedstrijdtype: Wedstrijdtype
  ) => void;
  onGenereer: () => void;
};

export default function WedstrijdFormulier({
  gegevens,
  setGegevens,
  laden,
  foutmelding,
  onWijzigVeld,
  onWijzigWedstrijdtype,
  onGenereer,
}: WedstrijdFormulierProps) {
  return (
    <div className="kaart formulierkaart">
      <div className="kaartkop">
        <div>
          <p className="stap">INVOER</p>
          <h2>Wedstrijdgegevens</h2>
        </div>

        <span className="badge">Stap 1</span>
      </div>

      <div className="formuliersectie">
        <div className="sectiekop">
          <span>01</span>
          <h3>Wedstrijd</h3>
        </div>

        <WedstrijdTypeKeuze
          wedstrijdtype={gegevens.wedstrijdtype}
          onWijzig={onWijzigWedstrijdtype}
        />

        <div className="veldenTweeKolommen">
          <label>
            <span>Thuisclub</span>

            <input
              type="text"
              placeholder="Bijvoorbeeld FC ClubPilot"
              value={gegevens.thuisclub}
              onChange={(event) =>
                onWijzigVeld(
                  "thuisclub",
                  event.target.value
                )
              }
            />
          </label>

          <label>
            <span>Uitclub</span>

            <input
              type="text"
              placeholder="Bijvoorbeeld SV Voorbeeld"
              value={gegevens.uitclub}
              onChange={(event) =>
                onWijzigVeld(
                  "uitclub",
                  event.target.value
                )
              }
            />
          </label>
        </div>

        <label>
          <span>Eindstand</span>

          <input
            type="text"
            placeholder="Bijvoorbeeld 3-1"
            value={gegevens.eindstand}
            onChange={(event) =>
              onWijzigVeld(
                "eindstand",
                event.target.value
              )
            }
          />
        </label>
      </div>

      <Hoogtepunten
        gegevens={gegevens}
        setGegevens={setGegevens}
      />

      <div className="scheidingslijn" />

      <div className="formuliersectie">
        <div className="sectiekop">
          <span>03</span>
          <h3>Wedstrijdverloop</h3>
        </div>

        <label>
          <span>Korte samenvatting</span>

          <textarea
            placeholder="Beschrijf bijvoorbeeld het wedstrijdverloop, belangrijke momenten, kansen en sfeer."
            value={gegevens.samenvatting}
            onChange={(event) =>
              onWijzigVeld(
                "samenvatting",
                event.target.value
              )
            }
            rows={7}
          />
        </label>
      </div>

      {foutmelding && (
        <div
          className="foutmelding"
          role="alert"
        >
          {foutmelding}
        </div>
      )}

      <button
        className="primaireKnop"
        type="button"
        onClick={onGenereer}
        disabled={laden}
      >
        {laden
          ? "Wedstrijdverslag wordt gemaakt..."
          : "Genereer wedstrijdverslag"}
      </button>

      <style jsx>{`
        .kaart {
          overflow: hidden;
          background: rgba(255, 255, 255, 0.97);
          border: 1px solid #e3e8ed;
          border-radius: 18px;
          box-shadow:
            0 16px 45px
            rgba(15, 23, 42, 0.06);
        }

        .formulierkaart {
          padding: 28px;
        }

        .kaartkop {
          display: flex;
          margin-bottom: 28px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
        }

        .stap {
          margin: 0;
          color: #16865e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .kaartkop h2 {
          margin: 5px 0 0;
          color: #101828;
          font-size: 23px;
        }

        .badge {
          flex: 0 0 auto;
          padding: 7px 10px;
          color: #16865e;
          background: #eaf8f1;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
        }

        .formuliersectie {
          display: grid;
          gap: 18px;
        }

        .sectiekop {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sectiekop > span {
          display: grid;
          width: 30px;
          height: 30px;
          place-items: center;
          color: #16865e;
          background: #eaf8f1;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 800;
        }

        .sectiekop h3 {
          margin: 0;
          color: #344054;
          font-size: 15px;
        }

        .veldenTweeKolommen {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        label {
          display: grid;
          gap: 8px;
          color: #344054;
          font-size: 13px;
          font-weight: 700;
        }

        input,
        textarea {
          width: 100%;
          color: #172033;
          background: #fbfcfd;
          border: 1px solid #d8dee5;
          border-radius: 10px;
          outline: none;
          font: inherit;
          font-weight: 400;
          transition:
            border-color 0.2s,
            box-shadow 0.2s,
            background 0.2s;
        }

        input {
          height: 46px;
          padding: 0 14px;
        }

        textarea {
          min-height: 150px;
          padding: 13px 14px;
          line-height: 1.55;
          resize: vertical;
        }

        input:focus,
        textarea:focus {
          background: white;
          border-color: #16865e;
          box-shadow:
            0 0 0 4px
            rgba(22, 134, 94, 0.1);
        }

        input::placeholder,
        textarea::placeholder {
          color: #98a2b3;
        }

        .scheidingslijn {
          height: 1px;
          margin: 26px 0;
          background: #edf0f3;
        }

        .primaireKnop {
          width: 100%;
          min-height: 50px;
          margin-top: 24px;
          padding: 12px 20px;
          color: white;
          background: #16865e;
          border: none;
          border-radius: 11px;
          font: inherit;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          box-shadow:
            0 10px 20px
            rgba(22, 134, 94, 0.18);
          transition:
            background 0.2s,
            opacity 0.2s;
        }

        .primaireKnop:hover:not(:disabled) {
          background: #11724f;
        }

        .primaireKnop:disabled {
          cursor: wait;
          opacity: 0.65;
        }

        .foutmelding {
          margin-top: 20px;
          padding: 12px 14px;
          color: #b42318;
          background: #fef3f2;
          border: 1px solid #fecdca;
          border-radius: 10px;
          font-size: 13px;
          line-height: 1.5;
        }

        @media (max-width: 620px) {
          .formulierkaart {
            padding: 19px;
            border-radius: 14px;
          }

          .veldenTweeKolommen {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}