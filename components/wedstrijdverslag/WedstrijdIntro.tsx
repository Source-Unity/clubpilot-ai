type WedstrijdIntroProps = {
  label: string;
  titel: string;
  beschrijving: string;
};

export default function WedstrijdIntro({
  label,
  titel,
  beschrijving,
}: WedstrijdIntroProps) {
  return (
    <section className="intro">
      <p className="label">{label}</p>

      <h1>{titel}</h1>

      <p>{beschrijving}</p>

      <style jsx>{`
        .intro {
          max-width: 1400px;
          margin: 0 auto;
          padding: 48px 0 30px;
        }

        .label {
          margin: 0;
          color: #16865e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        h1 {
          max-width: 720px;
          margin: 8px 0 12px;
          color: #111827;
          font-size: clamp(32px, 4vw, 50px);
          line-height: 1.05;
          letter-spacing: -1.5px;
        }

        p:last-child {
          max-width: 680px;
          margin: 0;
          color: #667085;
          font-size: 17px;
          line-height: 1.6;
        }

        @media (max-width: 620px) {
          .intro {
            padding: 34px 4px 22px;
          }

          h1 {
            font-size: 34px;
          }

          p:last-child {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}