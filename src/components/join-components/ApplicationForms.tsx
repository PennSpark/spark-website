type ApplicationCard = {
  title: string;
  body: string;
  buttonLabel: string;
  buttonColor: string;
  textColor: string;
};

const cards: ApplicationCard[] = [
  {
    title: "Visit Us",
    body: "Join us to meet the team and learn about what we do!",
    buttonLabel: "Interest Form",
    buttonColor: "bg-[#FFD552]",
    textColor: "text-black",
  },
  {
    title: "Blue Application",
    body: "Our educational track - no experience required",
    buttonLabel: "Blue Form",
    buttonColor: "bg-[#246DED]",
    textColor: "text-white",
  },
  {
    title: "Red Application",
    body: "Our experienced track - jump right into projects",
    buttonLabel: "Red Form",
    buttonColor: "bg-[#F5654E]",
    textColor: "text-white",
  },
];

export default function ApplicationBlocks() {
  return (
    <section className="content-section w-full">
      <h2 className="mb-4">
        Check back in Fall 2026!
      </h2>
      <div className="w-full max-w-3xl flex flex-col gap-4 md:flex-row md:gap-2 justify-between mb-10">
        {cards.map((card) => {
          return (
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

              <p className="mb-6">{card.body}</p>

              <button
                type="button"
                id="color-button"
                className={[
                  card.textColor,
                  card.buttonColor,
                ].join(" ")}
              >
                {card.buttonLabel}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
