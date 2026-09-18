"use client";

type KopieerMeldingProps = {
  tekst: string;
};

export default function KopieerMelding({
  tekst,
}: KopieerMeldingProps) {
  if (!tekst) {
    return null;
  }

  return (
    <div
      className="melding"
      role="status"
      aria-live="polite"
    >
      <span className="vinkje">✓</span>
      <span>{tekst}</span>

      <style jsx>{`
        .melding {
          display: flex;
          position: fixed;
          z-index: 1000;
          right: 24px;
          bottom: 24px;
          min-height: 52px;
          padding: 13px 18px;
          align-items: center;
          gap: 10px;
          color: #285642;
          background: #ffffff;
          border: 1px solid #b8dfcc;
          border-radius: 12px;
          box-shadow: 0 14px 40px
            rgba(15, 23, 42, 0.16);
          font-size: 14px;
          font-weight: 700;
          animation: verschijnen 0.25s ease-out;
        }

        .vinkje {
          display: grid;
          width: 26px;
          height: 26px;
          place-items: center;
          color: #ffffff;
          background: #16865e;
          border-radius: 50%;
          font-size: 13px;
          font-weight: 900;
        }

        @keyframes verschijnen {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 620px) {
          .melding {
            right: 14px;
            bottom: 14px;
            left: 14px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}