import * as React from "react";

export default function Join() {
  return (
    <div id="join-section">
      <h2>06. Join Us</h2>
      <p className="larger-text">
        We will be opening up applications for the Spring 2022 semester soon –
        please fill out our interest form to be added to our mailing list!
      </p>
      <br />
      <a
        href="https://forms.gle/4jftLcEG3r2fvMSJ9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>interest form &rarr;</button>
      </a>
      <br />
      <br />
      <div>
        <h3>FAQ</h3>
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
          </p>
        </div>

        <div className="faq-container">
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
        </div>

        <div className="faq-spacer" />

        <div className="faq-container">
          <p className="faq-question">
            04. What makes a strong applicant?
          </p>
          <p className="faq-answer">
            While there's no cookie-cutter answer, we generally look for
            curiosity in tech and/or design, a love for learning, community-fit,
            and demonstrated interest in our org.
          </p>
        </div>
      </div>
    </div>
  );
}
