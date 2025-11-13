import ProjectCarousel from "../projects/components/ProjectCarousel";

export default function RecentWork() {
  return (
    <section
      id="recent-work"
      className="justify-center items-center flex flex-col mb-40"
    >
      <section className="flex gap-10">
        <h1 id="big-header">
          recent <span id="header-spark-text">work</span>
        </h1>
        <img
          src="/brand-icons/red-round-guy.svg"
          alt="Spark Brand Icon"
          width={64}
          height={42}
          className="hover:scale-110
            transition-transform duration-300"
        ></img>
      </section>
      <ProjectCarousel></ProjectCarousel>
    </section>
  );
}
