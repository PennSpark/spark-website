import { Hanken_Grotesk, IBM_Plex_Sans } from "next/font/google";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function About() {
return (
    <main
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <section
        style={{
          position: "relative",
          width: "100vw",
          height: "930px",
          background: "#F5654E",
          overflow: "hidden",
        }}
      >
        <h1
          className={hanken.className}
          style={{
            position: "absolute",
            left: "242px",
            top: "50%",
            transform: "translateY(-50%)",
            margin: 0,
            maxWidth: "min(900px, 80vw)",
            color: "white",
            fontWeight: 700,
            fontSize: "clamp(28px, 4.5vw, 72px)",
            lineHeight: 1.15,
          }}
        >
          Making ideas tangible
          <br />
          through design and code.
        </h1>
      </section>
      <section
        style={{
          background: "#FFFFFF",
          width: "100vw",
          paddingTop: 80,
          paddingBottom: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          className={hanken.className}
          style={{
            color: "black",
            fontSize: 125,
            fontWeight: 700,
            margin: 0,
          }}
        >
          spark <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "2px #000",   // ✅ camelCase
                      textShadow: "none"
                    }}
                  >
                    work
                  </span>
        </h2>

        <p
          className={ibm.className}
          style={{
            marginTop: 48,
            maxWidth: 1100,
            textAlign: "center",
            fontSize: 28,
            lineHeight: 1.5,
            color: "black"
          }}
        >
          Each semester, our members come together to work on a variety of engineering
          and/or design projects. In the past, projects have ranged from redesigning a
          startup's pilot program helping students with ADHD to developing a machine
          learning model that identifies pictures as emojis. We work on both client and
          passion projects!
        </p>
      </section>
    </main>
  );
}
