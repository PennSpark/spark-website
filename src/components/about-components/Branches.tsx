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
    <section className="content-section w-full">
      <div className="w-full flex flex-col md:flex-row gap-4"
      >
        {cards.map((card) => (
          <div key={card.title} className='border-box flex flex-col justify-start items-start text-left p-4 md:p-8 flex-1'>
            <h2 className='mb-4' style={{ color: card.color }}>
                {card.title}
            </h2>

            <h3>
              What we do?
            </h3>
            <p className='mb-4'>
              {card.whatwedo}
            </p>

            <h3>
              Who can join?
            </h3>
            <p>
              {card.whocanjoin}
            </p>   
          </div>
        ))}
      </div>
    </section>
  );
}
