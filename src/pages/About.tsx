import WhyJoin from "../components/WhyJoin";
import DropBanner from "../components/banners/DropBanner";
import Branches from "./about-components/Branches";

export default function About() {
  return (
    <>
      <DropBanner className=" text-black mb-20">
        <h1>
          Spark is where Penn’s <br></br> creatives and coders collide
        </h1>
      </DropBanner>
    
      <section id="header-section">
        <h1>
          about <span id="header-spark-text">spark</span>
        </h1>
        <p>
          Established in Spring 2021, Spark is a community of student developers 
          and designers at the University of Pennsylvania that builds both creative and client projects.
        </p>

      <div className='flex flex-row gap-10 justify-center mt-10'>
          <label className="pill-toggle pill-toggle--yellow">
            Education
          </label>
          <label className="pill-toggle pill-toggle--red">
            Experience
          </label>
          <label className="pill-toggle pill-toggle--blue">
              Community
          </label>
      </div>
      
    </section>


      <WhyJoin />

      <section id="header-section">Our Branches

        
      </section>

      <Branches />
      <section id="header-section"></section>
    </>
  );
}
