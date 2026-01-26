type ApplicationCard = {
  title: string;
  body: string;
  buttonLabel: string;
  buttonColor: string;
};

const cards: ApplicationCard[] = [
  {
    title: "Visit Us",
    body: "Join us to meet the team and learn about what we do!",
    buttonLabel: "Interest Form",
    buttonColor: "#FFD552",
  },
  {
    title: "Blue Application",
    body: "Our educational track - no experience required",
    buttonLabel: "Blue Form",
    buttonColor: "#246DED",
  },
  {
    title: "Red Application",
    body: "Our experienced track - jump right into projects",
    buttonLabel: "Red Form",
    buttonColor: "#F5654E",
  },
];

export default function ApplicationBlocks() {
  return (
    <section className="content-section w-full">
      <div className="w-full max-w-3xl flex flex-col gap-4 md:flex-row md:gap-2 justify-between mb-10">
        {cards.map((card) => (
          <div
            key={card.title}
            className="
              border-box
              flex flex-col items-center justify-between
              font-sans text-center
              pb-6 pt-8 px-6
              flex-1
            "
          >
            <h3 className="font-hanken text-[2rem] md:text-[2.5rem] font-bold mb-4 text-black">
              {card.title}
            </h3>

            <p className="text-[1.1rem] text-[#5E5E5E] mb-6">
              {card.body}
            </p>

            <button
              type="button"
              className={`bg-[${card.buttonColor}] hover:bg-white transition-colors duration-200`}
              style={{
                color: card.buttonColor === "#FFD552" ? "#000" : "#FFF",
              }}
            >
              {card.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
