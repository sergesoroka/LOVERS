// import localFont from "next/font/local";

// // Font files can be colocated inside of `pages`
// const myFont = localFont({
//   src: [
//     { path: "./Mariupol-Regular.otf", weight: "400", style: "normal" },
//     {
//       path: "./LeagueGothic-Regular.ttf",
//       weight: "700",
//       style: "bold",
//       variable: "--contact-head",
//     },
//   ],
// });

import "./globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
