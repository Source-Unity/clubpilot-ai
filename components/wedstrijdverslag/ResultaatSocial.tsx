type ResultaatSocialProps = {
  socialmediapost: string;
  onKopieer: () => void;
};

export default function ResultaatSocial({
  socialmediapost,
  onKopieer,
}: ResultaatSocialProps) {
  if (!socialmediapost) {
    return null;
  }

  return (
    <section className="kaart resultaatOnderdeel">
      <div className="resultaatKop">
        <div className="resultaatKopLinks">
          <span className="resultaatIcoon">#</span>

          <div>
            <p className="stap">SOCIAL MEDIA</p>
            <h2>Socialmediapost</h2>
          </div>
        </div>

        <span className="gereedBadge">
          Gereed
        </span>
      </div>

      <div className="socialPost">
        {socialmediapost}
      </div>

      <button
        className="kopieerKnop"
        type="button"
        onClick={onKopieer}
      >
        Kopieer socialmediapost
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

        .gereedBadge {
          flex: 0 0 auto;
          padding: 7px 10px;
          color: #16865e;
          background: #eaf8f1;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
        }

        .socialPost {
          padding: 22px;
          color: #344054;
          background: #f5faf7;
          border: 1px solid #dcebe4;
          border-radius: 13px;
          font-size: 15px;
          line-height: 1.75;
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

        .kopieerKnop:hover {
          background: #e2f4ec;
        }

        @media (max-width: 620px) {
          .resultaatOnderdeel {
            padding: 19px;
            border-radius: 14px;
          }

          .resultaatKop {
            align-items: flex-start;
            flex-direction: column;
          }

          .socialPost {
            padding: 18px;
          }
        }
      `}</style>
    </section>
  );
}