'use client';

import Image from 'next/image';

type Feature = {
  title: string;
  body: string;
  imageSrc: string;
};

const features: Feature[] = [
  {
    title: 'Gain Experience',
    body: 'Members gain a range of technical and interpersonal experience through project development on teams. Blue members learn and apply our tech stack of Figma (for designers) or HTML/CSS, React.js, and Django (for developers), while Red members deepen their current skillset through building more technically rigorous projects. We accept students from all majors and experience levels, and highly encourage anyone with a curiosity for tech and/or design to apply!',
    imageSrc: '/join-images/image-1.png',
  },
  {
    title: 'Join Our Community',
    body: "Outside of work, our organization has a strong emphasis on community. This upcoming semester, we're planning on doing our first overnight club-wide retreat 👀, intra-club mixers, food runs, study sessions, BYO/karaoke, and general member hangouts. For more information, check out our community page!",
    imageSrc: '/join-images/image-2.png',
  },
  {
    title: 'Professional Growth',
    body: 'Spark fully encourages the professional growth of our members. Our Red members have the opportunity to gain industry experience by working closely with our clients, and some of our members even go on to pursue paid full-time internships with our client companies. Additionally, Spark hosts a mentorship program between upperclassmen and underclassmen, workshops on resume writing and recruiting, and an internal referral network.',
    imageSrc: '/join-images/image-3.png',
  },
];

export default function FeatureBlocks() {
  return (
    <section className="why-join-section">
      {features.map((feature, index) => {
        const isEven = index % 2 === 1;

        return (
          <div
            key={feature.title}
            className={`why-join-card flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <div className="why-join-divider" aria-hidden="true" />

            <div className="why-join-image relative md:w-1/2">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="why-join-text text-left md:w-1/2">
              <div className="max-w-[520px] w-full mx-auto px-6 md:px-8 flex flex-col gap-3">
                <h2>{feature.title}</h2>
                <p>{feature.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
