"use client";

import Link from "next/link";

const huidigeFuncties = [
  {
    nummer: "01",
    titel: "Wedstrijdgegevens invullen",
    tekst:
      "Voer de teams, eindstand, doelpuntenmakers en belangrijkste wedstrijdmomenten in.",
  },
  {
    nummer: "02",
    titel: "De assistent schrijft",
    tekst:
      "ClubPilot Assistent maakt een professionele titel, een volledig wedstrijdverslag en een socialmediapost.",
  },
  {
    nummer: "03",
    titel: "Direct publiceren",
    tekst:
      "Kopieer de teksten en plaats ze direct op de clubwebsite, Facebook of Instagram.",
  },
];

const voordelen = [
  "Binnen enkele minuten een professioneel verslag",
  "Speciaal ontwikkeld voor futsal en voetbal",
  "Consistente en geloofwaardige schrijfstijl",
  "Inclusief direct bruikbare socialmediapost",
  "Geen technische kennis nodig",
  "Minder werk voor trainers, vrijwilligers en mediateams",
];

const roadmap = [
  {
    label: "Clubbeheer",
    titel: "Alles van jouw club op één plek",
    tekst:
      "Maak vaste clubprofielen met clubnaam, logo, kleuren en voorkeursinstellingen.",
    onderdelen: [
      "Opgeslagen clubprofielen",
      "Clublogo en clubkleuren",
      "Meerdere clubs beheren",
    ],
  },
  {
    label: "Teams",
    titel: "Werk met meerdere teams",
    tekst:
      "Beheer selecties, trainers en verschillende teams binnen dezelfde vereniging.",
    onderdelen: [
      "Meerdere teams per club",
      "Vaste selecties",
      "Trainers en teambeheerders",
    ],
  },
  {
    label: "Spelers",
    titel: "Spelers en prestaties",
    tekst:
      "Leg spelers vast en gebruik hun informatie automatisch in toekomstige content.",
    onderdelen: [
      "Spelersdatabase",
      "Doelpunten en assists",
      "Man of the Match",
    ],
  },
  {
    label: "Assistent",
    titel: "Meer dan wedstrijdverslagen",
    tekst:
      "Bouw ClubPilot Assistent uit tot de complete digitale contentassistent voor jouw vereniging.",
    onderdelen: [
      "Wedstrijdvoorbeschouwingen",
      "Interviews en aankondigingen",
      "Seizoenssamenvattingen",
    ],
  },
  {
    label: "Publiceren",
    titel: "Van schrijven naar delen",
    tekst:
      "Publiceer content uiteindelijk vanuit ClubPilot op alle relevante clubkanalen.",
    onderdelen: [
      "Facebook en Instagram",
      "Clubwebsite-koppeling",
      "PDF- en nieuwsbriefexport",
    ],
  },
  {
    label: "Analyse",
    titel: "Inzicht in het hele seizoen",
    tekst:
      "Maak van losse wedstrijdinformatie een duidelijk statistisch seizoensoverzicht.",
    onderdelen: [
      "Wedstrijdhistorie",
      "Teamstatistieken",
      "Seizoensoverzichten",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="pagina">
      <header className="header">
        <div className="navigatie">
          <Link href="/" className="merk">
            <span className="logo">CP</span>

            <span className="merkTekst">
              <strong>ClubPilot</strong>
              <small>Digitale assistent voor futsal en voetbal</small>
            </span>
          </Link>

          <nav className="menu" aria-label="Hoofdnavigatie">
            <a href="#mogelijkheden">Mogelijkheden</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#waarom">Waarom ClubPilot</a>
          </nav>

          <Link href="/wedstrijdverslag" className="headerKnop">
            Maak een verslag
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="heroInhoud">
          <div className="heroTekst">
            <div className="heroLabel">
              <span className="statusPunt" />
              DIGITALE ASSISTENT VOOR FUTSAL EN VOETBAL
            </div>

            <h1>
              Professionele clubcontent,
              <span> zonder uren schrijfwerk.</span>
            </h1>

            <p className="heroIntro">
              ClubPilot Assistent helpt futsal- en voetbalverenigingen om snel
              professionele wedstrijdverslagen en socialmediaposts te maken.
              Vul de belangrijkste wedstrijdinformatie in en de assistent doet
              de rest.
            </p>

            <div className="heroActies">
              <Link
                href="/wedstrijdverslag"
                className="primaireKnop"
              >
                Start met wedstrijdverslag
                <span aria-hidden="true">→</span>
              </Link>

              <a href="#mogelijkheden" className="secundaireKnop">
                Bekijk hoe het werkt
              </a>
            </div>

            <div className="vertrouwen">
              <div>
                <strong>30 sec.</strong>
                <span>om te starten</span>
              </div>

              <div>
                <strong>3 teksten</strong>
                <span>titel, verslag en social</span>
              </div>

              <div>
                <strong>0 ervaring</strong>
                <span>met slimme software nodig</span>
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="achtergrondVlak vlakEen" />
            <div className="achtergrondVlak vlakTwee" />

            <div className="productKaart">
              <div className="productBovenkant">
                <div>
                  <span className="kleinLabel">
                    WEDSTRIJDVERSLAG
                  </span>
                  <h2>SV Voorbeeld wint overtuigend</h2>
                </div>

                <span className="gereedBadge">Gereed</span>
              </div>

              <div className="scoreKaart">
                <span>SV Voorbeeld</span>
                <strong>4 - 1</strong>
                <span>FC Tegenstander</span>
              </div>

              <div className="tekstRegels">
                <span className="regel breed" />
                <span className="regel" />
                <span className="regel kort" />
                <span className="regel breed" />
                <span className="regel middel" />
              </div>

              <div className="socialPreview">
                <div className="socialIcoon">#</div>

                <div>
                  <strong>Socialmediapost</strong>
                  <p>Direct klaar voor Facebook en Instagram.</p>
                </div>
              </div>

              <div className="productVoettekst">
                <span>Gemaakt met ClubPilot Assistent</span>
                <span className="groenPunt" />
              </div>
            </div>

            <div className="zwevendeKaart snelheid">
              <span className="zwevendIcoon">⚡</span>
              <div>
                <strong>Binnen seconden</strong>
                <small>Direct publiceerbaar</small>
              </div>
            </div>

            <div className="zwevendeKaart kwaliteit">
              <span className="zwevendIcoon">✓</span>
              <div>
                <strong>Clubwaardige stijl</strong>
                <small>Menselijk en geloofwaardig</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logoBalk">
        <p>Ontwikkeld voor de mensen die een club draaiende houden</p>

        <div className="doelgroepen">
          <span>Bestuurders</span>
          <span>Trainers</span>
          <span>Teammanagers</span>
          <span>Vrijwilligers</span>
          <span>Mediateams</span>
        </div>
      </section>

      <section className="sectie" id="mogelijkheden">
        <div className="sectieIntro gecentreerd">
          <span className="sectieLabel">
            VAN WEDSTRIJD NAAR PUBLICATIE
          </span>

          <h2>
            Eén eenvoudige werkwijze.
            <br />
            Direct een professioneel resultaat.
          </h2>

          <p>
            ClubPilot Assistent neemt het schrijfwerk niet alleen over, maar
            helpt clubs ook om consequenter en sneller te publiceren.
          </p>
        </div>

        <div className="stappenRaster">
          {huidigeFuncties.map((functie, index) => (
            <article className="stapKaart" key={functie.nummer}>
              <div className="stapBovenkant">
                <span className="stapNummer">{functie.nummer}</span>

                {index < huidigeFuncties.length - 1 && (
                  <span className="stapPijl">→</span>
                )}
              </div>

              <div className="stapIllustratie">
                {index === 0 && (
                  <div className="formulierIllustratie">
                    <span />
                    <span />
                    <span className="grootVeld" />
                  </div>
                )}

                {index === 1 && (
                  <div className="aiIllustratie">
                    <span className="aiSter">✦</span>
                    <span className="aiCirkel cirkelEen" />
                    <span className="aiCirkel cirkelTwee" />
                  </div>
                )}

                {index === 2 && (
                  <div className="publicatieIllustratie">
                    <span>f</span>
                    <span>◎</span>
                    <span>W</span>
                  </div>
                )}
              </div>

              <h3>{functie.titel}</h3>
              <p>{functie.tekst}</p>
            </article>
          ))}
        </div>

        <div className="middenActie">
          <Link href="/wedstrijdverslag" className="primaireKnop">
            Maak jouw eerste verslag
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="donkereSectie" id="waarom">
        <div className="donkereInhoud">
          <div className="donkereTekst">
            <span className="sectieLabel lichtLabel">
              WAAROM CLUBPILOT
            </span>

            <h2>
              Minder tijd achter een scherm.
              <br />
              Meer aandacht voor de club.
            </h2>

            <p>
              Een wedstrijdverslag schrijven kost vaak meer tijd dan verwacht.
              ClubPilot Assistent verandert enkele wedstrijdgegevens in
              verzorgde content die past bij een futsal- of voetbalvereniging.
            </p>

            <Link href="/wedstrijdverslag" className="lichteKnop">
              Probeer de assistent
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="voordelenRaster">
            {voordelen.map((voordeel) => (
              <div className="voordeel" key={voordeel}>
                <span className="vinkje">✓</span>
                <p>{voordeel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectie roadmapSectie" id="roadmap">
        <div className="sectieIntro roadmapIntro">
          <div>
            <span className="sectieLabel">
              DE TOEKOMST VAN CLUBPILOT
            </span>

            <h2>
              Vandaag een digitale assistent.
              <br />
              Morgen het platform van de club.
            </h2>
          </div>

          <p>
            ClubPilot groeit stap voor stap uit tot een breder platform voor
            futsal- en voetbalverenigingen. ClubPilot Assistent is de eerste
            module binnen dat platform.
          </p>
        </div>

        <div className="roadmapRaster">
          {roadmap.map((onderdeel, index) => (
            <article className="roadmapKaart" key={onderdeel.label}>
              <div className="roadmapKop">
                <span className="roadmapNummer">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="binnenkort">Binnenkort</span>
              </div>

              <span className="roadmapLabel">{onderdeel.label}</span>

              <h3>{onderdeel.titel}</h3>
              <p>{onderdeel.tekst}</p>

              <ul>
                {onderdeel.onderdelen.map((item) => (
                  <li key={item}>
                    <span>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="ctaSectie">
        <div className="ctaKaart">
          <div className="ctaDecoratie decoratieEen" />
          <div className="ctaDecoratie decoratieTwee" />

          <div className="ctaInhoud">
            <span className="ctaLabel">KLAAR VOOR DE AFTRAP?</span>

            <h2>Maak vandaag nog jouw eerste wedstrijdverslag.</h2>

            <p>
              Vul de wedstrijdgegevens in en laat ClubPilot Assistent binnen
              enkele seconden de rest doen.
            </p>

            <Link href="/wedstrijdverslag" className="witteKnop">
              Start met ClubPilot Assistent
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInhoud">
          <div className="merk footerMerk">
            <span className="logo">CP</span>

            <span className="merkTekst">
              <strong>ClubPilot</strong>
              <small>Digitale assistent voor futsal en voetbal</small>
            </span>
          </div>

          <p>
            ClubPilot Assistent is de eerste module van het ClubPilot-platform.
            Nieuwe functies worden stap voor stap toegevoegd.
          </p>

          <Link href="/wedstrijdverslag">
            Wedstrijdverslag maken
          </Link>
        </div>
      </footer>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #f7f9f8;
        }

        :global(a) {
          color: inherit;
          text-decoration: none;
        }

        .pagina {
          min-height: 100vh;
          overflow: hidden;
          color: #14251e;
          background: #f7f9f8;
          font-family: Arial, Helvetica, sans-serif;
        }

        .header {
          position: relative;
          z-index: 20;
          padding: 0 32px;
          background: rgba(255, 255, 255, 0.88);
          border-bottom: 1px solid rgba(20, 37, 30, 0.08);
          backdrop-filter: blur(16px);
        }

        .navigatie {
          display: flex;
          min-height: 78px;
          max-width: 1400px;
          margin: 0 auto;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .merk {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          display: grid;
          width: 44px;
          height: 44px;
          flex: 0 0 44px;
          place-items: center;
          color: #ffffff;
          background: linear-gradient(145deg, #18865f, #0c6847);
          border-radius: 13px;
          box-shadow: 0 10px 24px rgba(20, 122, 85, 0.2);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.5px;
        }

        .merkTekst {
          display: grid;
          gap: 3px;
        }

        .merkTekst strong {
          color: #13261e;
          font-size: 17px;
          letter-spacing: -0.2px;
        }

        .merkTekst small {
          color: #77847e;
          font-size: 11px;
        }

        .menu {
          display: flex;
          align-items: center;
          gap: 30px;
          color: #53625b;
          font-size: 13px;
          font-weight: 700;
        }

        .menu a {
          transition: color 0.2s;
        }

        .menu a:hover {
          color: #14825b;
        }

        .headerKnop {
          display: inline-flex;
          min-height: 42px;
          padding: 0 18px;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: #147a56;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 8px 20px rgba(20, 122, 86, 0.16);
          transition:
            background 0.2s,
            transform 0.2s;
        }

        .headerKnop:hover {
          background: #0d6848;
          transform: translateY(-1px);
        }

        .hero {
          position: relative;
          padding: 88px 32px 100px;
          background:
            radial-gradient(
              circle at 80% 15%,
              rgba(93, 200, 151, 0.18),
              transparent 30%
            ),
            linear-gradient(180deg, #fbfdfc 0%, #f4f8f6 100%);
        }

        .hero::before {
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          content: "";
          background: linear-gradient(
            transparent,
            rgba(20, 122, 86, 0.08),
            transparent
          );
        }

        .heroInhoud {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(420px, 1.05fr);
          max-width: 1400px;
          margin: 0 auto;
          align-items: center;
          gap: 72px;
        }

        .heroTekst {
          position: relative;
          z-index: 2;
        }

        .heroLabel,
        .sectieLabel,
        .ctaLabel {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #147a56;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.6px;
        }

        .statusPunt {
          width: 8px;
          height: 8px;
          background: #26a876;
          border-radius: 50%;
          box-shadow: 0 0 0 5px rgba(38, 168, 118, 0.12);
        }

        .hero h1 {
          max-width: 730px;
          margin: 22px 0 24px;
          color: #10231b;
          font-size: clamp(46px, 5.5vw, 76px);
          line-height: 0.98;
          letter-spacing: -3px;
        }

        .hero h1 span {
          color: #16865e;
        }

        .heroIntro {
          max-width: 650px;
          margin: 0;
          color: #64736c;
          font-size: 18px;
          line-height: 1.75;
        }

        .heroActies {
          display: flex;
          margin-top: 34px;
          align-items: center;
          gap: 13px;
          flex-wrap: wrap;
        }

        .primaireKnop,
        .secundaireKnop,
        .lichteKnop,
        .witteKnop {
          display: inline-flex;
          min-height: 52px;
          padding: 0 22px;
          align-items: center;
          justify-content: center;
          gap: 13px;
          border-radius: 11px;
          font-size: 14px;
          font-weight: 800;
          transition:
            transform 0.2s,
            box-shadow 0.2s,
            background 0.2s;
        }

        .primaireKnop {
          color: #ffffff;
          background: #147a56;
          box-shadow: 0 12px 28px rgba(20, 122, 86, 0.2);
        }

        .primaireKnop:hover {
          background: #0d6848;
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(20, 122, 86, 0.24);
        }

        .secundaireKnop {
          color: #294039;
          background: #ffffff;
          border: 1px solid #dce5e1;
        }

        .secundaireKnop:hover {
          transform: translateY(-2px);
          border-color: #a8cabb;
        }

        .vertrouwen {
          display: flex;
          margin-top: 46px;
          gap: 30px;
          flex-wrap: wrap;
        }

        .vertrouwen div {
          display: grid;
          gap: 4px;
        }

        .vertrouwen strong {
          color: #183129;
          font-size: 15px;
        }

        .vertrouwen span {
          color: #87938e;
          font-size: 11px;
        }

        .heroVisual {
          position: relative;
          min-height: 590px;
        }

        .achtergrondVlak {
          position: absolute;
          border-radius: 30px;
          transform: rotate(-4deg);
        }

        .vlakEen {
          inset: 65px 35px 40px 55px;
          background: #dcefe6;
        }

        .vlakTwee {
          inset: 45px 55px 60px 35px;
          background: #eef6f2;
          border: 1px solid #d4e6dd;
          transform: rotate(4deg);
        }

        .productKaart {
          position: absolute;
          z-index: 3;
          top: 60px;
          right: 55px;
          bottom: 45px;
          left: 55px;
          padding: 30px;
          background: #ffffff;
          border: 1px solid rgba(31, 73, 56, 0.1);
          border-radius: 24px;
          box-shadow: 0 35px 80px rgba(27, 62, 48, 0.16);
        }

        .productBovenkant {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .kleinLabel {
          color: #16865e;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .productBovenkant h2 {
          max-width: 330px;
          margin: 9px 0 0;
          color: #182d25;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          line-height: 1.18;
        }

        .gereedBadge {
          height: fit-content;
          padding: 7px 10px;
          color: #16865e;
          background: #eaf7f1;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
        }

        .scoreKaart {
          display: flex;
          margin-top: 27px;
          padding: 17px;
          align-items: center;
          justify-content: center;
          gap: 18px;
          color: #65736d;
          background: #f7faf8;
          border: 1px solid #e4ebe7;
          border-radius: 12px;
          font-size: 12px;
          text-align: center;
        }

        .scoreKaart strong {
          padding: 7px 11px;
          color: #173128;
          background: #ffffff;
          border-radius: 7px;
          box-shadow: 0 4px 12px rgba(31, 73, 56, 0.08);
          font-size: 15px;
        }

        .tekstRegels {
          display: grid;
          margin-top: 30px;
          gap: 12px;
        }

        .regel {
          width: 78%;
          height: 8px;
          background: #e8eeeb;
          border-radius: 999px;
        }

        .regel.breed {
          width: 100%;
        }

        .regel.kort {
          width: 58%;
        }

        .regel.middel {
          width: 86%;
        }

        .socialPreview {
          display: flex;
          margin-top: 33px;
          padding: 17px;
          align-items: center;
          gap: 13px;
          background: #eff8f4;
          border: 1px solid #d5ebe1;
          border-radius: 12px;
        }

        .socialIcoon {
          display: grid;
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          place-items: center;
          color: #ffffff;
          background: #16865e;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 900;
        }

        .socialPreview strong {
          color: #244338;
          font-size: 12px;
        }

        .socialPreview p {
          margin: 4px 0 0;
          color: #718078;
          font-size: 10px;
        }

        .productVoettekst {
          display: flex;
          position: absolute;
          right: 30px;
          bottom: 25px;
          left: 30px;
          padding-top: 18px;
          align-items: center;
          justify-content: space-between;
          color: #8d9994;
          border-top: 1px solid #edf1ef;
          font-size: 10px;
        }

        .groenPunt {
          width: 8px;
          height: 8px;
          background: #28a776;
          border-radius: 50%;
        }

        .zwevendeKaart {
          display: flex;
          position: absolute;
          z-index: 5;
          padding: 13px 16px;
          align-items: center;
          gap: 11px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(33, 78, 60, 0.1);
          border-radius: 13px;
          box-shadow: 0 15px 36px rgba(25, 57, 44, 0.13);
        }

        .zwevendeKaart.snelheid {
          top: 20px;
          right: 0;
        }

        .zwevendeKaart.kwaliteit {
          bottom: 12px;
          left: 0;
        }

        .zwevendIcoon {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          color: #157b57;
          background: #eaf7f1;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 900;
        }

        .zwevendeKaart div {
          display: grid;
          gap: 3px;
        }

        .zwevendeKaart strong {
          color: #254239;
          font-size: 11px;
        }

        .zwevendeKaart small {
          color: #89958f;
          font-size: 9px;
        }

        .logoBalk {
          padding: 31px 32px;
          text-align: center;
          background: #ffffff;
          border-top: 1px solid #e6ece9;
          border-bottom: 1px solid #e6ece9;
        }

        .logoBalk p {
          margin: 0 0 18px;
          color: #98a29d;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .doelgroepen {
          display: flex;
          max-width: 1000px;
          margin: 0 auto;
          align-items: center;
          justify-content: center;
          gap: 42px;
          flex-wrap: wrap;
          color: #69766f;
          font-size: 13px;
          font-weight: 800;
        }

        .sectie {
          max-width: 1400px;
          margin: 0 auto;
          padding: 110px 32px;
        }

        .sectieIntro.gecentreerd {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .sectieIntro h2,
        .donkereTekst h2,
        .roadmapIntro h2,
        .ctaInhoud h2 {
          margin: 17px 0 20px;
          color: #132820;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.08;
          letter-spacing: -2px;
        }

        .sectieIntro p,
        .roadmapIntro > p {
          margin: 0;
          color: #6e7c75;
          font-size: 16px;
          line-height: 1.7;
        }

        .stappenRaster {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 58px;
          gap: 20px;
        }

        .stapKaart {
          position: relative;
          min-height: 390px;
          padding: 25px;
          background: #ffffff;
          border: 1px solid #e0e8e4;
          border-radius: 18px;
          box-shadow: 0 16px 40px rgba(31, 65, 51, 0.05);
        }

        .stapBovenkant {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stapNummer {
          display: grid;
          width: 35px;
          height: 35px;
          place-items: center;
          color: #16865e;
          background: #edf8f3;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 900;
        }

        .stapPijl {
          position: absolute;
          top: 31px;
          right: -31px;
          z-index: 4;
          color: #9ab6a9;
          font-size: 20px;
        }

        .stapIllustratie {
          display: grid;
          height: 150px;
          margin: 26px 0;
          place-items: center;
          background: #f4f8f6;
          border: 1px solid #e7eeea;
          border-radius: 14px;
        }

        .formulierIllustratie {
          display: grid;
          width: 72%;
          padding: 16px;
          gap: 9px;
          background: #ffffff;
          border: 1px solid #dfe8e3;
          border-radius: 10px;
          box-shadow: 0 8px 22px rgba(31, 65, 51, 0.07);
        }

        .formulierIllustratie span {
          height: 9px;
          background: #e8efec;
          border-radius: 4px;
        }

        .formulierIllustratie .grootVeld {
          height: 36px;
        }

        .aiIllustratie {
          display: grid;
          position: relative;
          width: 90px;
          height: 90px;
          place-items: center;
          color: #ffffff;
          background: #16865e;
          border-radius: 24px;
          box-shadow: 0 15px 30px rgba(22, 134, 94, 0.2);
        }

        .aiSter {
          font-size: 30px;
        }

        .aiCirkel {
          position: absolute;
          background: #70c9a5;
          border-radius: 50%;
        }

        .cirkelEen {
          top: -10px;
          right: -14px;
          width: 25px;
          height: 25px;
        }

        .cirkelTwee {
          bottom: -8px;
          left: -10px;
          width: 17px;
          height: 17px;
        }

        .publicatieIllustratie {
          display: flex;
          gap: 12px;
        }

        .publicatieIllustratie span {
          display: grid;
          width: 47px;
          height: 47px;
          place-items: center;
          color: #16865e;
          background: #ffffff;
          border: 1px solid #dce8e2;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(31, 65, 51, 0.07);
          font-weight: 900;
        }

        .stapKaart h3 {
          margin: 0 0 11px;
          color: #183128;
          font-size: 20px;
        }

        .stapKaart p {
          margin: 0;
          color: #718078;
          font-size: 14px;
          line-height: 1.65;
        }

        .middenActie {
          display: flex;
          margin-top: 42px;
          justify-content: center;
        }

        .donkereSectie {
          padding: 105px 32px;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(51, 167, 117, 0.2),
              transparent 30%
            ),
            #10281f;
        }

        .donkereInhoud {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          max-width: 1336px;
          margin: 0 auto;
          align-items: center;
          gap: 80px;
        }

        .lichtLabel {
          color: #75d2aa;
        }

        .donkereTekst h2 {
          color: #ffffff;
        }

        .donkereTekst p {
          max-width: 560px;
          margin: 0;
          color: #a9bcb3;
          font-size: 16px;
          line-height: 1.75;
        }

        .lichteKnop {
          margin-top: 31px;
          color: #143328;
          background: #ffffff;
        }

        .lichteKnop:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
        }

        .voordelenRaster {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .voordeel {
          display: flex;
          min-height: 115px;
          padding: 20px;
          align-items: flex-start;
          gap: 14px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 15px;
        }

        .vinkje {
          display: grid;
          width: 28px;
          height: 28px;
          flex: 0 0 28px;
          place-items: center;
          color: #173a2d;
          background: #79d4ad;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 900;
        }

        .voordeel p {
          margin: 3px 0 0;
          color: #e3eee9;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.55;
        }

        .roadmapSectie {
          padding-bottom: 120px;
        }

        .roadmapIntro {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: end;
          gap: 60px;
        }

        .roadmapIntro h2 {
          margin-bottom: 0;
        }

        .roadmapRaster {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 55px;
          gap: 18px;
        }

        .roadmapKaart {
          min-height: 390px;
          padding: 25px;
          background: #ffffff;
          border: 1px solid #e0e8e4;
          border-radius: 18px;
          transition:
            transform 0.2s,
            box-shadow 0.2s,
            border-color 0.2s;
        }

        .roadmapKaart:hover {
          transform: translateY(-4px);
          border-color: #b6d8c8;
          box-shadow: 0 20px 45px rgba(31, 65, 51, 0.08);
        }

        .roadmapKop {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .roadmapNummer {
          color: #a3b0aa;
          font-size: 12px;
          font-weight: 800;
        }

        .binnenkort {
          padding: 6px 9px;
          color: #7e8a84;
          background: #f0f3f1;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .roadmapLabel {
          display: block;
          margin-top: 34px;
          color: #16865e;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .roadmapKaart h3 {
          margin: 11px 0 12px;
          color: #183128;
          font-size: 21px;
          line-height: 1.25;
        }

        .roadmapKaart > p {
          margin: 0;
          color: #748179;
          font-size: 13px;
          line-height: 1.65;
        }

        .roadmapKaart ul {
          display: grid;
          margin: 25px 0 0;
          padding: 19px 0 0;
          gap: 11px;
          border-top: 1px solid #e9eeeb;
          list-style: none;
        }

        .roadmapKaart li {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #53625b;
          font-size: 12px;
          font-weight: 700;
        }

        .roadmapKaart li span {
          display: grid;
          width: 20px;
          height: 20px;
          flex: 0 0 20px;
          place-items: center;
          color: #16865e;
          background: #edf8f3;
          border-radius: 6px;
          font-size: 12px;
        }

        .ctaSectie {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px 90px;
        }

        .ctaKaart {
          position: relative;
          overflow: hidden;
          min-height: 380px;
          padding: 70px;
          color: #ffffff;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.03),
              transparent
            ),
            #16865e;
          border-radius: 26px;
        }

        .ctaDecoratie {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 50%;
        }

        .decoratieEen {
          top: -180px;
          right: -90px;
          width: 470px;
          height: 470px;
        }

        .decoratieTwee {
          right: 150px;
          bottom: -240px;
          width: 380px;
          height: 380px;
        }

        .ctaInhoud {
          position: relative;
          z-index: 2;
          max-width: 730px;
        }

        .ctaLabel {
          color: #c7efdd;
        }

        .ctaInhoud h2 {
          color: #ffffff;
        }

        .ctaInhoud p {
          max-width: 570px;
          margin: 0;
          color: #d4eee3;
          font-size: 16px;
          line-height: 1.7;
        }

        .witteKnop {
          margin-top: 31px;
          color: #14523b;
          background: #ffffff;
        }

        .witteKnop:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(10, 65, 43, 0.2);
        }

        .footer {
          padding: 34px 32px;
          background: #ffffff;
          border-top: 1px solid #e3eae6;
        }

        .footerInhoud {
          display: flex;
          max-width: 1336px;
          margin: 0 auto;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .footerInhoud p {
          max-width: 520px;
          margin: 0;
          color: #88948e;
          font-size: 11px;
          line-height: 1.5;
          text-align: center;
        }

        .footerInhoud > a {
          color: #147a56;
          font-size: 12px;
          font-weight: 800;
        }

        @media (max-width: 1100px) {
          .menu {
            display: none;
          }

          .heroInhoud {
            grid-template-columns: 1fr;
          }

          .heroTekst {
            max-width: 800px;
          }

          .heroVisual {
            width: 100%;
            max-width: 740px;
            margin: 0 auto;
          }

          .stappenRaster,
          .roadmapRaster {
            grid-template-columns: repeat(2, 1fr);
          }

          .stapPijl {
            display: none;
          }

          .donkereInhoud {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .header,
          .hero,
          .logoBalk,
          .sectie,
          .donkereSectie,
          .ctaSectie,
          .footer {
            padding-right: 18px;
            padding-left: 18px;
          }

          .navigatie {
            min-height: 70px;
          }

          .merkTekst small {
            display: none;
          }

          .headerKnop {
            min-height: 39px;
            padding: 0 13px;
            font-size: 11px;
          }

          .hero {
            padding-top: 58px;
            padding-bottom: 72px;
          }

          .heroInhoud {
            gap: 45px;
          }

          .hero h1 {
            font-size: 45px;
            letter-spacing: -2px;
          }

          .heroIntro {
            font-size: 16px;
          }

          .vertrouwen {
            gap: 20px;
          }

          .heroVisual {
            min-height: 490px;
          }

          .productKaart {
            top: 45px;
            right: 14px;
            bottom: 35px;
            left: 14px;
            padding: 22px;
          }

          .vlakEen,
          .vlakTwee {
            right: 5px;
            left: 5px;
          }

          .productBovenkant h2 {
            font-size: 23px;
          }

          .zwevendeKaart.snelheid {
            right: -5px;
          }

          .zwevendeKaart.kwaliteit {
            left: -5px;
          }

          .doelgroepen {
            gap: 20px;
          }

          .sectie {
            padding-top: 78px;
            padding-bottom: 78px;
          }

          .stappenRaster,
          .roadmapRaster,
          .voordelenRaster {
            grid-template-columns: 1fr;
          }

          .stapKaart {
            min-height: auto;
          }

          .donkereSectie {
            padding-top: 75px;
            padding-bottom: 75px;
          }

          .donkereInhoud {
            gap: 50px;
          }

          .roadmapIntro {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 24px;
          }

          .ctaKaart {
            min-height: 360px;
            padding: 48px 26px;
          }

          .footerInhoud {
            align-items: flex-start;
            flex-direction: column;
          }

          .footerInhoud p {
            text-align: left;
          }
        }

        @media (max-width: 470px) {
          .hero h1 {
            font-size: 39px;
          }

          .heroActies,
          .primaireKnop,
          .secundaireKnop {
            width: 100%;
          }

          .heroVisual {
            min-height: 470px;
          }

          .productKaart {
            padding: 18px;
          }

          .scoreKaart {
            gap: 8px;
            font-size: 10px;
          }

          .zwevendeKaart {
            padding: 10px 12px;
          }

          .zwevendeKaart.kwaliteit {
            bottom: 0;
          }

          .zwevendeKaart.snelheid {
            top: 5px;
          }

          .sectieIntro h2,
          .donkereTekst h2,
          .roadmapIntro h2,
          .ctaInhoud h2 {
            font-size: 34px;
            letter-spacing: -1.4px;
          }
        }
      `}</style>
    </main>
  );
}