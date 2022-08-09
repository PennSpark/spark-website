import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Box, { BoxLink } from "../components/Box"

const BlueRedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

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

const Join = () => {
  return (
    <Layout title="Join | Spark 💡">
      <h1 className="header"><strong className="stroke">join</strong> spark</h1>
      <p>We will <strong>soon be recruiting for the Fall 2022 semester. </strong>
        In the meantime, <a href="/mail" target="_blank" rel="noopener noreferrer">join our newsletter</a> to keep up to date with our club & learn about our branches below!</p>

      <BlueRedContainer>
        <Box title="Spark Blue" backgroundColor="var(--blue)" textColor="var(--white)">
          <p className="box-subheader">What do we do?</p>
          <p>
            Participate in a 6 week bootcamp in either the design or development track,
            followed by a creative team project.
          </p>
          <p className="box-subheader">Who can join?</p>
          <p>Anyone, but targeted towards beginners without previous coding and/or design experience.</p>
          <BoxLink to="https://google.com/">Apply for Blue</BoxLink>
        </Box>
        <Box title="Spark Red" backgroundColor="var(--red)" textColor="var(--white)">
          <p className="box-subheader">What do we do?</p>
          <p>
            Work in teams to build more advanced projects,
            either through working with real-world clients and nonprofits
            or on creatively brainstormed ideas.
          </p>
          <p className="box-subheader">Who can join?</p>
          <p>
            Returning members or new members with proficient technical experience.
            (Developers: CIS 120 or equivalent, knowledge of full-stack development.)
          </p>
          <BoxLink to="https://google.com/">Apply for Red</BoxLink>
        </Box>
      </BlueRedContainer>

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
    </Layout>
  )
}

export default Join