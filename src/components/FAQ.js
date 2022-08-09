import React from "react"
import styled from "styled-components"

const FAQContainer = styled.div`
  p {
    margin-bottom: 10px;
  }

  li + li {
    margin-top: 30px;
  }
`

const FAQ = () => {
  return (
    <FAQContainer>
      <h2 className="stroke">FAQ</h2>
      <ol>
        <li>
          <p><strong>Do I need to be interested in both tech & design to join?</strong></p>
          <p>Nope! As long as you're curious about one of the fields, we welcome you to apply.
            We don't expect developers to design or designers to develop, although the option is
            open if you're interested in both!</p>
        </li>
        <li>
          <p><strong>Which track should I apply for: Blue or Red?</strong></p>
          <p><strong>For Developers: </strong>
            If you have CIS120/equivalent experience, familiarity with web development
            frameworks (or can pick up new frameworks fairly easily), and/or previous software engineering
            internship experience, we recommend applying for Red. If you're new to coding or web development
            in general, we recommend applying for Blue. Feel free to apply for both if you're unsure which
            one suits you better!</p>
          <p><strong>For Designers: </strong>
            If you have experience with Figma/Adobe Suite, a design portfolio, and/or
            previous design internship experience, we recommend applying for Red. If you're new to design
            or looking to build up your fundamentals, we recommend applying for Blue. Feel free to apply for
            both if you're unsure which one suits you better!</p>
        </li>
        <li>
          <p><strong>What makes a strong applicant?</strong></p>
          <p>While there's no cookie-cutter answer, we generally look for curiosity in tech and/or
            design, community-fit, and demonstrated interest in our org.</p>
        </li>
      </ol>
    </FAQContainer>
  )
}

export default FAQ