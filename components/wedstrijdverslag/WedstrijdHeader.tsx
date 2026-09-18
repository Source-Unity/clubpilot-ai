type WedstrijdHeaderProps = {
  merknaam: string;
  onderschrift: string;
};

export default function WedstrijdHeader({
  merknaam,
  onderschrift,
}: WedstrijdHeaderProps) {
  return (
    <header className="header">
      <div className="merk">
        <div className="logo">CP</div>

        <div>
          <p className="merknaam">{merknaam}</p>
          <p className="onderschrift">
            {onderschrift}
          </p>
        </div>
      </div>

      <style jsx>{`
        .header {
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px 0;
          border-bottom: 1px solid #e2e7ec;
        }

        .merk {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          color: white;
          background: #16865e;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 20px
            rgba(22, 134, 94, 0.2);
        }

        .merknaam {
          margin: 0;
          color: #111827;
          font-size: 17px;
          font-weight: 800;
        }

        .onderschrift {
          margin: 3px 0 0;
          color: #6b7280;
          font-size: 13px;
        }

        @media (max-width: 620px) {
          .header {
            padding: 17px 0;
          }

          .onderschrift {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}