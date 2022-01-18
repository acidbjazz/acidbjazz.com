import type { NextPage } from "next";
import Head from "next/head";
import PDF from "../pdf/CV - Gerardo Rodriguez.pdf";

const CV: NextPage = () => {
  return (
    <>
      <Head>
        <title>acidbjazz.com :: cv</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="cv">
        <h2>Experience</h2>
        <h3>2011 - 2022: The Modern Web</h3>
        <ul className="stack">
          <li>
            <strong>Frontend:</strong> html5, css3 (sass, stylus, less, postcss, css modules), vanilla JS es6,
            typescript, node js, react js, next js, gatsby js, lottie & canvas animations, phonegap, gulp, webpack
          </li>
          <li>
            <strong>Backend:</strong> mysql, php, laravel, wordpress, drupal, shopify, contentful, netlify, vercel
          </li>
          <li>
            <strong>UI & graphic design:</strong> figma, illustrator
          </li>
        </ul>
        <ul className="companies">
          <li>KAMEGO (USA) - Digital agency</li>
          <li>NEXT SOLUTIONS (Canada) - Digital agency</li>
          <li>LA PLEBE (Peru) - Communication agency</li>
          <li>ARELLANO MARKETING (Peru) - Digital marketing research area</li>
          <li>UNIVERSIDAD CÉSAR VALLEJO (Peru) - Branding and advertising area</li>
        </ul>
        <h3>2006 - 2011: Multimedia & Interactive Web</h3>
        <ul className="stack">
          <li>
            <strong>ActionScript 3.0 / 2.0 developer:</strong> interactive animations, collisions, easing (greensock),
            particles, bezier curves, 3d (papervision)
          </li>
          <li>
            <strong>3D (basic):</strong> maya, sketch-up
          </li>
          <li>
            <strong>Video edition / motion graphics:</strong> after effects
          </li>
          <li>
            <strong>Audio edition / production:</strong> audition, fl studio
          </li>
          <li>
            <strong>Press and studio photography / Photo edition:</strong> lightroom, photoshop
          </li>
        </ul>
        <ul className="companies">
          <li>MEDUSATEAM (Spain) - Design agency</li>
          <li>MOVING INTERACTIVE (Peru - USA) - Design agency</li>
          <li>BLUEMETAL (Peru - Chile - USA) - Design agency</li>
          <li>INVENTARTE (Peru) - Design agency</li>
          <li>MAGIA DIGITAL (Peru) - Software production</li>
          <li>FORTUNA INTERACTIVE (Peru) - Design agency</li>
          <li>MAYO FCB NORTE + REEL (Peru) - Advertising agency</li>
        </ul>
        <h2>Education</h2>
        <ul className="education">
          <li>
            UNIVERSIDAD PRIVADA ANTENOR ORREGO (Peru)
            <br />
            Faculty of Engineering - Bachelor of Computer and Systems Engineering
          </li>
        </ul>
        <a href={PDF} className="download" target="_blank" rel="noreferrer">
          <span className="material-icons">file_download</span>pdf
        </a>
      </div>
    </>
  );
};

export default CV;
