"use client";

import Image from "next/image";

type Feature = {
  title: string;
  body: string;
  imageSrc: string;
};

const features: Feature[] = [
  {
    title: "Gain Experience",
    body: "Members gain a range of technical and interpersonal experience through project development on teams. Blue members learn and apply our tech stack of Figma (for designers) or HTML/CSS, React.js, and Django (for developers), while Red members deepen their current skillset through building more technically rigorous projects. We accept students from all majors and experience levels, and highly encourage anyone with a curiosity for tech and/or design to apply!",
    imageSrc: "/images/experience.jpg",
  },
  {
    title: "Join Our Community",
    body: "Outside of work, our organization has a strong emphasis on community. This upcoming semester, we're planning on doing our first overnight club-wide retreat 👀, intra-club mixers, food runs, study sessions, BYO/karaoke, and general member hangouts. For more information, check out our community page!",
    imageSrc: "/images/community.jpg",
  },
  {
    title: "Professional Growth",
    body: "Spark fully encourages the professional growth of our members. Our Red members have the opportunity to gain industry experience by working closely with our clients, and some of our members even go on to pursue paid full-time internships with our client companies. Additionally, Spark hosts a mentorship program between upperclassmen and underclassmen, workshops on resume writing and recruiting, and an internal referral network.",
    imageSrc: "/images/growth.jpg",
  },
];

export default function FeatureBlocks() {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
      }}
    >
      {features.map((feature, index) => {
        const isEven = index % 2 === 1;

        return (
          <div
            key={feature.title}
            style={{
              width: "1401px",
              height: "448px",
              flexShrink: 0,
              display: "flex",
              flexDirection: isEven ? "row-reverse" : "row",
              borderRadius: "30px",
              border: "1.25px solid #000",
              background: "#FFF",
              overflow: "hidden",
            }}
          >
            {/* Image half */}
            <div
              style={{
                flex: "1 1 50%",
                position: "relative",
              }}
            >
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>

            {/* Text half */}
            <div
              style={{
                flex: "1 1 50%",
                padding: "48px 64px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  marginBottom: "16px",
                  textAlign: "left",
                  color: "#000",
                  fontFamily:
                    '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: "40px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "65px", // 162.5%,
                  textTransform: "none",
                }}
              >
                {feature.title}
              </h2>
              <p
                style={{
                  margin: 0,
                  textAlign: "left",
                  color: "#5E5E5E",
                  fontFamily:
                    '"Hanken Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                {feature.body}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
