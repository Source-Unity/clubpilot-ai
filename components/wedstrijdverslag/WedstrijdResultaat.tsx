import ResultaatLeeg from "./ResultaatLeeg";
import ResultaatSocial from "./ResultaatSocial";
import ResultaatTitel from "./ResultaatTitel";
import ResultaatVerslag from "./ResultaatVerslag";

type WedstrijdResultaatProps = {
  laden: boolean;
  titel: string;
  verslag: string;
  socialmediapost: string;
  thuisclub: string;
  uitclub: string;
  eindstand: string;
  wedstrijdtypeLabel: string;
  onKopieerTitel: () => void;
  onKopieerVerslag: () => void;
  onKopieerSocial: () => void;
  onNieuwVerslag: () => void;
};

export default function WedstrijdResultaat({
  laden,
  titel,
  verslag,
  socialmediapost,
  thuisclub,
  uitclub,
  eindstand,
  wedstrijdtypeLabel,
  onKopieerTitel,
  onKopieerVerslag,
  onKopieerSocial,
  onNieuwVerslag,
}: WedstrijdResultaatProps) {
  const heeftResultaat =
    Boolean(titel) ||
    Boolean(verslag) ||
    Boolean(socialmediapost);

  const fallbackTitel =
    thuisclub && uitclub
      ? `${thuisclub} - ${uitclub}`
      : "Wedstrijdverslag";

  if (!heeftResultaat) {
    return (
      <div className="resultaatKolom">
        <ResultaatLeeg laden={laden} />

        <style jsx>{`
          .resultaatKolom {
            display: grid;
            gap: 20px;
          }
        `}</style>
      </div>
    );
  }

  if (laden) {
    return (
      <div className="resultaatKolom">
        <ResultaatLeeg laden />

        <style jsx>{`
          .resultaatKolom {
            display: grid;
            gap: 20px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="resultaatKolom">
      <ResultaatTitel
        titel={titel}
        fallbackTitel={fallbackTitel}
        onKopieer={onKopieerTitel}
      />

      <ResultaatVerslag
        titel={titel}
        fallbackTitel={fallbackTitel}
        thuisclub={thuisclub}
        uitclub={uitclub}
        eindstand={eindstand}
        wedstrijdtypeLabel={wedstrijdtypeLabel}
        verslag={verslag}
        onKopieer={onKopieerVerslag}
      />

      <ResultaatSocial
        socialmediapost={socialmediapost}
        onKopieer={onKopieerSocial}
      />

      <section className="nieuweVerslagBalk">
        <div>
          <strong>Klaar met deze wedstrijd?</strong>

          <p>
            Wis de invoer en begin met een nieuw
            wedstrijdverslag.
          </p>
        </div>

        <button
          type="button"
          className="nieuwVerslagKnop"
          onClick={onNieuwVerslag}
        >
          Nieuw verslag maken
        </button>
      </section>

      <style jsx>{`
        .resultaatKolom {
          display: grid;
          gap: 20px;
        }

        .nieuweVerslagBalk {
          display: flex;
          padding: 20px 22px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: #344054;
          background: #ffffff;
          border: 1px solid #e3e8ed;
          border-radius: 15px;
        }

        .nieuweVerslagBalk strong {
          color: #182d25;
          font-size: 14px;
        }

        .nieuweVerslagBalk p {
          margin: 4px 0 0;
          color: #7a8494;
          font-size: 12px;
          line-height: 1.45;
        }

        .nieuwVerslagKnop {
          flex: 0 0 auto;
          min-height: 42px;
          padding: 0 16px;
          color: #475467;
          background: white;
          border: 1px solid #d8dee5;
          border-radius: 9px;
          font: inherit;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition:
            color 0.2s,
            border-color 0.2s,
            background 0.2s;
        }

        .nieuwVerslagKnop:hover {
          color: #157a56;
          border-color: #9dcfb9;
          background: #f8fcfa;
        }

        @media (max-width: 620px) {
          .nieuweVerslagBalk {
            align-items: flex-start;
            flex-direction: column;
          }

          .nieuwVerslagKnop {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}