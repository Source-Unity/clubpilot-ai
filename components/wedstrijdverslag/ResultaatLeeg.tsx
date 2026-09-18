type ResultaatLeegProps = {
  laden: boolean;
};

export default function ResultaatLeeg({
  laden,
}: ResultaatLeegProps) {
  return (
    <div className="kaart resultaatLeeg">
      {laden ? (
        <div className="status">
          <div className="spinner" />

          <h3>
            ClubPilot schrijft het verslag
          </h3>

          <p>
            De wedstrijdgegevens worden verwerkt
            tot een titel, artikel en
            socialmediapost.
          </p>
        </div>
      ) : (
        <div className="status">
          <div className="documentIcoon">
            ✦
          </div>

          <h3>
            Je resultaat verschijnt hier
          </h3>

          <p>
            Vul links de wedstrijdgegevens in en
            klik daarna op de knop om het verslag
            te maken.
          </p>
        </div>
      )}

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

        .resultaatLeeg {
          display: grid;
          min-height: 610px;
          padding: 40px;
          place-items: center;
        }

        .status {
          display: flex;
          max-width: 380px;
          text-align: center;
          align-items: center;
          flex-direction: column;
        }

        .status h3 {
          margin: 14px 0 8px;
          color: #344054;
          font-size: 19px;
        }

        .status p {
          margin: 0;
          color: #7a8494;
          font-size: 14px;
          line-height: 1.6;
        }

        .documentIcoon {
          display: grid;
          width: 54px;
          height: 54px;
          place-items: center;
          color: #16865e;
          background: #eaf8f1;
          border-radius: 15px;
          font-size: 22px;
        }

        .spinner {
          width: 36px;
          height: 36px;
          border: 3px solid #dcefe7;
          border-top-color: #16865e;
          border-radius: 50%;
          animation:
            draaien 0.8s linear infinite;
        }

        @keyframes draaien {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 620px) {
          .resultaatLeeg {
            min-height: 480px;
            padding: 28px 20px;
          }
        }
      `}</style>
    </div>
  );
}