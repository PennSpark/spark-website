'use client';

type ApplicationCard = {
  title: string;
  body: string;
  buttonLabel: string;
  buttonVariant: 'yellow' | 'blue' | 'red';
};

const cards: ApplicationCard[] = [
  {
    title: 'Visit Us',
    body: 'Join us to meet the team and learn about what we do!',
    buttonLabel: 'Interest Form',
    buttonVariant: 'yellow',
  },
  {
    title: 'Blue Application',
    body: 'Our educational track - no experience required',
    buttonLabel: 'Blue Form',
    buttonVariant: 'blue',
  },
  {
    title: 'Red Application',
    body: 'Our experienced track - jump right into projects',
    buttonLabel: 'Red Form',
    buttonVariant: 'red',
  },
];

export default function ApplicationBlocks() {
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
          width: '1401px', // 3 * 417 + 2 * ~75 gutter
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              width: '417px',
              height: '306px',
              flexShrink: 0,
              borderRadius: '60px',
              border: '1.25px solid #000',
              background: '#FFF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '48px 32px 40px',
              boxSizing: 'border-box',
              textAlign: 'center',
            }}
          >
            <h2
            style={{
                textAlign: 'center',
                fontFamily: '"Hanken Grotesk", "Inter", "Karla", sans-serif',
                fontSize: '2.5rem',
                fontWeight: 700,
                transition: '0.2s',
                margin: 0,
                marginBottom: '16px',
                color: '#000',
                textTransform: 'none'
            }}
            >
                {card.title}
            </h2>
            <p
              style={{
                margin: '8px 0 24px',
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: '22px',
                fontWeight: 400,
                color: '#5E5E5E',
                lineHeight: '1.4',
              }}
            >
              {card.body}
            </p>

            <button
              type="button"
              className={`application-button application-button--${card.buttonVariant}`}
            >
              {card.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
