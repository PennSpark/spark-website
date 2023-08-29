import * as React from "react";
import "./style.css"

export default function FAQ() {
  return (
    <div id="faq-section" className="content-section">
      <h2>FAQ</h2>
      <div>
        <div className="faq-container">
          <p className="faq-question">
            01. Do I need to be interested in both tech &amp; design to join?
          </p>
          <p className="faq-answer">
            Nope! As long as you're curious about one of the fields, we welcome
            you to apply. We don't expect developers to design or desginers to
            develop, although the option is open if you're interested in both!
          </p>
        </div>

        <div className="faq-spacer" />

        <div className="faq-container">
          <p className="faq-question">
            02. Which track should I apply for: Blue or Red?
          </p>

          <p className="faq-answer">
            <span className="bold">For Developers</span>: If you have CIS1200/equivalent experience,
            familiarity with web development frameworks (or can pick up new frameworks fairly easily), and/or
            previous software engineering internship experience, we recommend applying for Red. If you're new to coding
            or web development in general, we recommend applying for Blue. Feel free to apply for both
            if you're unsure which one suits you better!
            <br /><br />
            <span className="bold">For Designers</span>: If you have experience with Figma/Adobe Suite, a design portfolio,
            and/or previous design internship experience, we recommend applying for Red. If you're new to design or looking
            to build up your fundamentals, we recommend applying for Blue. Feel free to apply for both
            if you're unsure which one suits you better!
          </p>

          {/* <p className="faq-answer">
            Feel free to look over our bootcamp and see how much content you're
            comfortable with.
            <ul>
              <li><span className="bold">&lt; 60%</span> of the material: we recommend Blue.</li>
              <li>
              <span className="bold">Between 60% and 90%</span> of the material: we recommend applying for
                both.
              </li>
              <li>
              <span className="bold">&gt;90%</span> of the material, or you have extensive technical/design
                background experience: we recommend Red.
              </li>
            </ul>
          </p> */}
        </div>

        {/* <div className="faq-container">
          <p className="faq-question">
            03. What does the application process look like?
          </p>
          <p className="faq-answer">
            Our application is broken down into the following parts:
            <ol>
              <li>
                <span className="bold">Written Response</span>
              </li>
              <li>
                <span className="bold">Behavorial Interview</span>
              </li>
              <li>
                <span className="bold">Technical Challenge</span> (Red
                applicants only)
              </li>
            </ol>
          </p>
        </div> */}

        <div className="faq-spacer" />

        <div className="faq-container">
          <p className="faq-question">
            03. What makes a strong applicant?
          </p>
          <p className="faq-answer">
            While there's no cookie-cutter answer, we generally look for
            curiosity in tech and/or design, community-fit,
            and demonstrated interest in our org.
          </p>
        </div>
      </div>
    </div>
  );
}
