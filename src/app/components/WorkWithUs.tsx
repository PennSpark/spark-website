import Link from "next/link";

export default function WorkWithUs() {
  return (
    <section
      id="work-with-spark"
      className="justify-center items-center flex flex-col mb-40"
    >
      <section className="flex gap-10">
        <h1 id="big-header">
          work with <span id="header-spark-text">spark</span>
        </h1>
        <img
          src="/brand-icons/blue-sad-face.svg"
          alt="Spark Brand Icon"
          width={64}
          height={42}
          className="hover:scale-110
                    transition-transform duration-300"
        ></img>
      </section>
      <p className="larger-text text-center max-w-[49vw]">
        Interested in working together or learning more? We provide engineering
        and design services, from product branding to full-stack web
        development. Most projects run for about 8 weeks, followed by a 4-week
        trial period for bug fixes and small updates.
      </p>
      <section className="mt-10 mb-10 gap-5 flex">
        <button id="white-button" className="w-[170px] py-0">
          <Link href="/join">Work with Us</Link>
        </button>
        <button id="black-button" className="w-[170px] py-0">
          <Link href="/about">Contact Us</Link>
        </button>
      </section>
    </section>
  );
}
