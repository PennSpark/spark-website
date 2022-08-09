import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Box, { BoxLink } from "../components/Box"
import FAQ from "../components/FAQ"
import WhyJoin from "../components/WhyJoin"

const BlueRedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const Join = () => {
  return (
    <Layout title="Join | Spark 💡">
      <h1 className="header"><strong className="stroke">join</strong> spark</h1>
      <p>We will <strong>soon be recruiting for the Fall 2022 semester. </strong>
        In the meantime, <a href="/mail" target="_blank" rel="noopener noreferrer">join our newsletter</a> to keep up to date with our club & learn about our branches below!</p>
      <div style={{ height: "var(--spacer-height)" }} />
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
          <BoxLink to="https://google.com/">Development Assessment</BoxLink>
        </Box>
      </BlueRedContainer>
      <div style={{ height: "var(--spacer-height)" }} />
      <WhyJoin />
      <div style={{ height: "var(--spacer-height)" }} />
      <FAQ />
    </Layout>
  )
}

export default Join