type ResultaatVerslagProps = {
  titel: string;
  fallbackTitel: string;
  thuisclub: string;
  uitclub: string;
  eindstand: string;
  wedstrijdtypeLabel: string;
  verslag: string;
  onKopieer: () => void;
};

export default function ResultaatVerslag({
  titel,
  fallbackTitel,
  thuisclub,
  uitclub,
  eindstand,
  wedstrijdtypeLabel,
  verslag,
  onKopieer,
}: ResultaatVerslagProps) {
  const zichtbareTitel = titel || fallbackTitel;

  return (
    <section className="kaart resultaatOnderdeel">
      <div className="resultaatKop">
        <div className="resultaatKopLinks">
          <span className="resultaatIcoon">V</span>

          <div>
            <p className="stap">
              WEDSTRIJDVERSLAG
            </p>

            <h2>Publiceerbaar artikel</h2>
          </div>
        </div>

        <span className="wedstrijdtypeBadge">
          {wedstrijdtypeLabel}
        </span>
      </div>

      <article className="document">
        <div className="documentBovenkant">
          <span className="documentLabel">
            CLUBNIEUWS
          </span>

          <span className="documentStatus">
            Klaar voor publicatie
          </span>
        </div>

        <h2 className="documentTitel">
          {zichtbareTitel}
        </h2>

        <div className="wedstrijdInfo">
          <span>{thuisclub}</span>

          <strong>{eindstand}</strong>

          <span>{uitclub}</span>
        </div>

        <div className="documentLijn" />

        <div className="documentTekst">
          {verslag}
        </div>
      </article>

      <button
        className="kopieerKnop"
        type="button"
        onClick={onKopieer}
        disabled={!verslag}
      >
        Kopieer wedstrijdverslag
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

        .resultaatOnderdeel {
          padding: 27px;
        }

        .resultaatKop {
          display: flex;
          margin-bottom: 20px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
        }

        .resultaatKopLinks {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .resultaatIcoon {
          display: grid;
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          place-items: center;
          color: white;
          background: #16865e;
          border-radius: 11px;
          font-size: 14px;
          font-weight: 900;
        }

        .stap {
          margin: 0;
          color: #16865e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .resultaatKop h2 {
          margin: 5px 0 0;
          color: #101828;
          font-size: 23px;
        }

        .wedstrijdtypeBadge {
          flex: 0 0 auto;
          padding: 7px 10px;
          color: #667085;
          background: #f2f4f7;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
        }

        .document {
          padding: clamp(28px, 5vw, 52px);
          background: #ffffff;
          border: 1px solid #e6e9ed;
          border-radius: 13px;
          box-shadow:
            inset 0 0 0 1px
              rgba(17, 24, 39, 0.01),
            0 10px 30px
              rgba(15, 23, 42, 0.04);
        }

        .documentBovenkant {
          display: flex;
          margin-bottom: 18px;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .documentLabel,
        .documentStatus {
          padding: 6px 9px;
          border-radius: 5px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .documentLabel {
          color: #16865e;
          background: #eaf8f1;
        }

        .documentStatus {
          color: #667085;
          background: #f2f4f7;
        }

        .documentTitel {
          margin: 0;
          color: #101828;
          font-family:
            Georgia,
            "Times New Roman",
            serif;
          font-size: clamp(27px, 3vw, 39px);
          line-height: 1.15;
          letter-spacing: -0.7px;
        }

        .wedstrijdInfo {
          display: flex;
          margin-top: 24px;
          align-items: center;
          gap: 10px;
          color: #667085;
          font-size: 13px;
          flex-wrap: wrap;
        }

        .wedstrijdInfo strong {
          padding: 6px 10px;
          color: #101828;
          background: #f1f3f5;
          border-radius: 6px;
          font-size: 14px;
        }

        .documentLijn {
          height: 1px;
          margin: 25px 0;
          background: #e7eaee;
        }

        .documentTekst {
          color: #344054;
          font-family:
            Georgia,
            "Times New Roman",
            serif;
          font-size: 17px;
          line-height: 1.85;
          white-space: pre-wrap;
        }

        .kopieerKnop {
          width: 100%;
          min-height: 46px;
          margin-top: 16px;
          padding: 11px 18px;
          color: #157a56;
          background: #edf8f3;
          border: 1px solid #ccebdc;
          border-radius: 10px;
          font: inherit;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition:
            background 0.2s,
            opacity 0.2s;
        }

        .kopieerKnop:hover:not(:disabled) {
          background: #e2f4ec;
        }

        .kopieerKnop:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }

        @media (max-width: 620px) {
          .resultaatOnderdeel {
            padding: 19px;
            border-radius: 14px;
          }

          .resultaatKop,
          .documentBovenkant {
            align-items: flex-start;
            flex-direction: column;
          }

          .document {
            padding: 27px 22px;
          }

          .documentTitel {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}