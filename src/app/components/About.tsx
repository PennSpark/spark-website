import NumberCard from "./NumberCard";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="justify-center items-center flex flex-col mb-40"
    >
      <section className="flex gap-10">
        <h1 id="big-header">
          what we <span id="header-spark-text">do</span>
        </h1>
        <img
          src="/brand-icons/yellow-smile-face.svg"
          alt="Spark Brand Icon"
          width={64}
          height={42}
          className="hover:scale-110
            transition-transform duration-300"
        ></img>
      </section>
      <p className="larger-text text-center max-w-[49vw]">
        Established in Spring 2021, Spark is a community of student developers
        and designers at the University of Pennsylvania that builds both
        creative and client projects.
      </p>

      <section className="flex gap-10 mt-20 mb-10">
        <NumberCard
          number="58"
          label="Active Members"
          color="red-header-spark-text"
        />
        <NumberCard
          number="42"
          label="Projects Complete"
          color="yellow-header-spark-text"
        />
        <NumberCard
          number="9"
          label="Live Semesters"
          color="blue-header-spark-text"
        />
      </section>

      <button>
        <Link href="/about">About Us &rarr;</Link>
      </button>
    </section>
  );
}
