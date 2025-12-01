'use client';

type BranchCard = {
  title: string;
  color: string;
  body: string;
  whatwedo: string;
  whocanjoin: string;
};

const cards: BranchCard[] = [
  {
    title: 'Spark Blue',
    body: 'Join us to meet the team and learn about what we do!',
    color: '#246DED',
    whatwedo: 'Participate in a 10-week bootcamp in either the design or development track, followed by a creative team project.',
    whocanjoin: 'Anyone, but targeted towards beginners without previous coding and/or design experience.',
  },
  {
    title: 'Spark Red',
    body: 'Our educational track - no experience required',
    color: '#FF6058',
    whatwedo: 'Work in teams to build more advanced projects, either through working with real-world clients and nonprofits or on creatively brainstormed ideas.',
    whocanjoin: 'Returning members or new members with proficient technical experience. (Developers: CIS 120 or equivalent, knowledge of full-stack development).',
  }
];

export default function Branches() {
  return (
    <section
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '1315px', // 2 * 620 + 1 * 75 gutter
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              width: '620px',
              height: '489px',
              flexShrink: 0,
              borderRadius: '30px',
              border: '1.3px solid #000',
              background: '#FFF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              padding: '56px 56px 56px',
              boxSizing: 'border-box',
              textAlign: 'left',
            }}
          >
            <h2
            style={{
                textAlign: 'left',
                fontFamily: '"Hanken Grotesk", "Inter", "Karla", sans-serif',
                fontSize: '2rem',
                fontWeight: 600,
                transition: '0.2s',
                margin: 0,
                marginBottom: '16px',
                color: card.color,
                textTransform: 'none'
            }}
            >
                {card.title}
            </h2>


            <section>

            <p
              style={{
                margin: '8px 0 0px',
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: '25px',
                fontWeight: 500,
                color: '#4B4B4B',
                lineHeight: '1.4',
              }}
            >
              What we do?
            </p>
            
            <p
              style={{
                margin: '8px 0 24px',
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: '20px',
                fontWeight: 400,
                color: '#4B4B4B',
                lineHeight: '1.4',
              }}
            >
              {card.whatwedo}
            </p>
            </section>

            <section>
            <p
              style={{
                margin: '8px 0 0px',
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: '25px',
                fontWeight: 500,
                color: '#4B4B4B',
                lineHeight: '1.4',
              }}
            >
              Who can join?
            </p>
            <p
              style={{
                margin: '8px 0 24px',
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: '20px',
                fontWeight: 400,
                color: '#4B4B4B',
                lineHeight: '1.4',
              }}
            >
              {card.whocanjoin}
            </p>
            </section>

            
          </div>
        ))}
      </div>
    </section>
  );
}
