import WhyJoin from "./components/WhyJoin";
import HeaderBanner from "../components/HeaderBanner";
import Branches from "./components/Branches";

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
                <p className="description-paragraph"               
        style={{
                margin: '8px 0 24px',
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: '23px',
                fontWeight: 400,
                color: '#000000',
                lineHeight: '1.4',
              }}>
          Established in Spring 2021, Spark is a community of student developers 
          and designers at the University of Pennsylvania that builds both creative and client projects.
        </p>

      <div className='flex flex-row gap-10 justify-center mt-10'>
          <button className="ignore
            px-4 py-2 bg-[#FFFFFF] rounded-full hover:bg-[#FFD552] transition-colors duration-300">
            Education
          </button>
          <button className="ignore
            px-4 py-2 bg-[#FFFFFF] rounded-full hover:bg-[#FFD552] transition-colors duration-300">   
            Experience
          </button>
          <button className="ignore
            px-4 py-2 bg-[#FFFFFF] rounded-full hover:bg-[#FFD552] transition-colors duration-300">
              Community
          </button>
      </div>
      
    </section>


      <WhyJoin />

      <section id="header-section">Branches

        
      </section>

      <Branches />
      <section id="header-section"></section>
    </>
  );
}
