import * as React from "react";
import "./style.css";

export default function WhyJoin() {
  return (
    <div id="why-join-section" className="content-section">
      <h2>Why Join?</h2>

      <div className="why-join-container">
        <h3>Gain Experience</h3>
        <p>
          Members gain a range of technical and interpersonal experience through
          project development on teams. Blue members learn and apply our tech
          stack of Figma (for designers) or HTML/CSS, React.js, and Django (for
          developers), while Red members deepen their current skillset through
          building more technically rigorous projects.  We accept students from all
          majors and experience levels, and{" "}
          <span className="bold">
            highly encourage anyone with a curiosity for tech and/or design to
            apply
          </span>
          !
        </p> 
      </div>

      <div className="why-join-spacer" />

      <div className="why-join-container">
        <h3>Join Our Community</h3>
        <p>
          Outside of work, our organization has a strong emphasis on community.
          This upcoming semester, we’re planning on doing our first overnight
          club-wide retreat 👀, intra-club mixers, food runs, study sessions,
          BYO/karaoke, and general member hangouts. For more information, 
          check out our <a href="/community" style={{color: "inherit"}}>community page</a>!
        </p>
      </div>

      <div className="why-join-spacer" />

      <div className="why-join-container">
        <h3>Pursue Professional Growth</h3>
        <p>
          Spark fully encourages the professional growth of our members.
          Our Red members have the opportunity to gain industry experience by
          working closely with our clients, and some of our members even go
          on to pursue paid full-time internships with our client companies.
          Additionally, Spark hosts a mentorship program between upperclassmen
          and underclassmen, workshops on resume writing and recruiting, and an
          internal referral network.
          {/* big tech, unicorns, and early-stage startups. */}
        </p>
      </div>
    </div>
  );
}
