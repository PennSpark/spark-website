import WhyJoin from "./components/WhyJoin";
import HeaderBanner from "../components/HeaderBanner";

export default function About() {
  return (
    <>
      <HeaderBanner className="bg-[#F4F4F4] text-black mb-20">
        <h1>
          The place where Penn’s <br></br> creatives and coders collide
        </h1>
      </HeaderBanner>
    
      <section id="header-section">
        <h1>
          about <span id="header-spark-text">spark</span>
        </h1>
      </section>

      <section id="header-section">
        <p className="description-paragraph">
          Established in Spring 2021, Spark is a community of student developers 
          and designers at the University of Pennsylvania that builds both creative and client projects.
        </p>
      </section>
      <section id="header-section">Recent Works</section>
      <section className="content-section">
        <div className='flex flex-row gap-1 justify-center'>
            <p>Education</p>
            <p>Experience</p>
            <p>Community</p>
        </div>
    </section>
      {/* <section className="full-width-content-section">
      </section>
      <section id="header-section">Our Projects</section>
      <section className="content-section w-full">
      </section>
      <section className="content-section w-full">
        <button>View Github</button>
      </section> */}


      <WhyJoin />
    </>
  );
}
