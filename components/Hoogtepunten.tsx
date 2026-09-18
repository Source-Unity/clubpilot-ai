"use client";

import type {
  Dispatch,
  SetStateAction,
} from "react";
import type { Wedstrijdgegevens } from "@/lib/types";

type HoogtepuntenProps = {
  gegevens: Wedstrijdgegevens;
  setGegevens: Dispatch<
    SetStateAction<Wedstrijdgegevens>
  >;
};

const maximaalAantalTekens = {
  doelpuntenmakers: 400,
  manOfTheMatch: 250,
};

export default function Hoogtepunten({
  gegevens,
  setGegevens,
}: HoogtepuntenProps) {
  function wijzigVeld(
    veld: "doelpuntenmakers" | "manOfTheMatch",
    waarde: string
  ) {
    setGegevens((huidigeGegevens) => ({
      ...huidigeGegevens,
      [veld]: waarde,
    }));
  }

  return (
    <div className="hoogtepuntenModule">
      <div className="scheidingslijn" />

      <div className="formuliersectie">
        <div className="sectiekop">
          <span>02</span>

          <div>
            <h3>Hoogtepunten en spelers</h3>
            <p>Optioneel, maar aanbevolen</p>
          </div>
        </div>

        <div className="uitleg">
          Voeg alleen informatie toe die je zeker weet.
          Meer concrete details zorgen voor een persoonlijker
          en geloofwaardiger wedstrijdverslag.
        </div>

        <label>
          <div className="veldKop">
            <span>Doelpuntenmakers</span>

            <span className="optioneelLabel">
              Optioneel
            </span>
          </div>

          <textarea
            placeholder="Bijvoorbeeld: Daan scoorde 2 keer, waarvan één keer op aangeven van Sem. Het derde doelpunt was een eigen doelpunt."
            value={gegevens.doelpuntenmakers}
            maxLength={
              maximaalAantalTekens.doelpuntenmakers
            }
            onChange={(event) =>
              wijzigVeld(
                "doelpuntenmakers",
                event.target.value
              )
            }
            rows={4}
          />

          <div className="veldOnderkant">
            <small>
              Je kunt ook minuten, assists en bijzondere
              details vermelden.
            </small>

            <span className="tekenTeller">
              {gegevens.doelpuntenmakers.length}/
              {
                maximaalAantalTekens.doelpuntenmakers
              }
            </span>
          </div>
        </label>

        <div className="invulhulp">
          <p className="invulhulpTitel">
            Wat kun je hier vermelden?
          </p>

          <div className="hulpRaster">
            <div className="hulpItem">
              <span className="hulpIcoon">1</span>

              <div>
                <strong>Wie scoorde?</strong>
                <p>Daan 2 keer en Sem 1 keer</p>
              </div>
            </div>

            <div className="hulpItem">
              <span className="hulpIcoon">2</span>

              <div>
                <strong>Wanneer?</strong>
                <p>Daan scoorde in de 18e minuut</p>
              </div>
            </div>

            <div className="hulpItem">
              <span className="hulpIcoon">3</span>

              <div>
                <strong>Bijzonderheden</strong>
                <p>
                  Een strafschop, assist of eigen doelpunt
                </p>
              </div>
            </div>
          </div>
        </div>

        <label>
          <div className="veldKop">
            <span>Man of the Match</span>

            <span className="optioneelLabel">
              Optioneel
            </span>
          </div>

          <textarea
            placeholder="Bijvoorbeeld: Keeper Milan, dankzij twee belangrijke reddingen in de slotfase."
            value={gegevens.manOfTheMatch}
            maxLength={
              maximaalAantalTekens.manOfTheMatch
            }
            onChange={(event) =>
              wijzigVeld(
                "manOfTheMatch",
                event.target.value
              )
            }
            rows={3}
          />

          <div className="veldOnderkant">
            <small>
              Vermeld bij voorkeur ook waarom deze speler
              uitblonk.
            </small>

            <span className="tekenTeller">
              {gegevens.manOfTheMatch.length}/
              {
                maximaalAantalTekens.manOfTheMatch
              }
            </span>
          </div>
        </label>

        <div className="kwaliteitTip">
          <div className="tipIcoon">✦</div>

          <div>
            <strong>Tip voor een beter verslag</strong>

            <p>
              Schrijf liever één concreet detail dan een
              algemene zin. “Milan stopte een strafschop”
              helpt de AI meer dan “Milan speelde goed”.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hoogtepuntenModule {
          color: #344054;
        }

        .scheidingslijn {
          height: 1px;
          margin: 26px 0;
          background: #edf0f3;
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
          flex: 0 0 30px;
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

        .sectiekop p {
          margin: 2px 0 0;
          color: #98a2b3;
          font-size: 12px;
        }

        .uitleg {
          padding: 12px 14px;
          color: #667085;
          background: #fafbfc;
          border: 1px solid #e9edf1;
          border-radius: 10px;
          font-size: 13px;
          line-height: 1.55;
        }

        label {
          display: grid;
          gap: 8px;
          color: #344054;
          font-size: 13px;
          font-weight: 700;
        }

        .veldKop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .optioneelLabel {
          padding: 4px 7px;
          color: #667085;
          background: #f2f4f7;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 700;
        }

        textarea {
          width: 100%;
          min-height: 92px;
          padding: 13px 14px;
          color: #172033;
          background: #fbfcfd;
          border: 1px solid #d8dee5;
          border-radius: 10px;
          outline: none;
          font: inherit;
          font-weight: 400;
          line-height: 1.55;
          resize: vertical;
          transition:
            border-color 0.2s,
            box-shadow 0.2s,
            background 0.2s;
        }

        textarea:focus {
          background: white;
          border-color: #16865e;
          box-shadow: 0 0 0 4px
            rgba(22, 134, 94, 0.1);
        }

        textarea::placeholder {
          color: #98a2b3;
        }

        .veldOnderkant {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        small {
          max-width: 420px;
          color: #7a8494;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.5;
        }

        .tekenTeller {
          flex: 0 0 auto;
          color: #98a2b3;
          font-size: 10px;
          font-weight: 500;
        }

        .invulhulp {
          padding: 14px;
          background: #fcfdfd;
          border: 1px solid #e9edf1;
          border-radius: 11px;
        }

        .invulhulpTitel {
          margin: 0 0 12px;
          color: #475467;
          font-size: 12px;
          font-weight: 800;
        }

        .hulpRaster {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .hulpItem {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 10px;
          background: white;
          border: 1px solid #edf0f3;
          border-radius: 9px;
        }

        .hulpIcoon {
          display: grid;
          width: 22px;
          height: 22px;
          flex: 0 0 22px;
          place-items: center;
          color: #16865e;
          background: #eaf8f1;
          border-radius: 6px;
          font-size: 10px;
          font-weight: 800;
        }

        .hulpItem strong {
          display: block;
          margin-bottom: 3px;
          color: #344054;
          font-size: 11px;
        }

        .hulpItem p {
          margin: 0;
          color: #7a8494;
          font-size: 10px;
          line-height: 1.45;
        }

        .kwaliteitTip {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 13px 14px;
          color: #35624f;
          background: #edf8f3;
          border: 1px solid #d7eee3;
          border-radius: 10px;
        }

        .tipIcoon {
          display: grid;
          width: 27px;
          height: 27px;
          flex: 0 0 27px;
          place-items: center;
          color: #16865e;
          background: white;
          border-radius: 8px;
          font-size: 13px;
        }

        .kwaliteitTip strong {
          display: block;
          margin-bottom: 4px;
          color: #285642;
          font-size: 12px;
        }

        .kwaliteitTip p {
          margin: 0;
          font-size: 11px;
          line-height: 1.55;
        }

        @media (max-width: 620px) {
          .hulpRaster {
            grid-template-columns: 1fr;
          }

          .veldOnderkant {
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}