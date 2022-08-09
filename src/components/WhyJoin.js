import React from "react"
import styled from "styled-components"

const WhyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Why = styled.div`
  width: 30%;

  p {
    margin-bottom: 20px;
  }
`

const WhyJoin = () => {
  return (
    <>
      <h2 className="stroke">WHY JOIN?</h2>
      <WhyContainer>
        <Why>
          <h3>Gain Experience</h3>
          <p>Members gain a range of technical and interpersonal experience through project development
            on teams. Blue members learn and apply our tech stack of Figma (for designers) or HTML/CSS,
            React.js, and Django (for developers), while Red members deepen their current skillset through
            building more technically rigorous projects.</p>
          <p>We accept students from all majors and experience levels, and highly encourage anyone with
            a curiosity for tech and/or design to apply!</p>
        </Why>
        <Why>
          <h3>Join Our Community</h3>
          <p>Outside of work, our organization has a strong emphasis on community. This upcoming semester, we’re planning on doing our first overnight club-wide retreat 👀, intra-club mixers, food runs, study sessions, BYO/karaoke, and general member hangouts.</p>
          <p>For more information, check out our community page!</p>
        </Why>
        <Why>
          <h3>Gain Experience</h3>
          <p>Spark fully encourages the professional growth of our members. Our Red members have the
            opportunity to gain industry experience by working closely with our clients, and some of our
            members even go on to pursue paid full-time internships with our client companies.</p>
          <p>Additionally, Spark hosts a mentorship program between upperclassmen and underclassmen,
            workshops on resume writing and recruiting, and an internal referral network.</p>
        </Why>
      </WhyContainer>
    </>
  )
}

export default WhyJoin