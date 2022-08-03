import { faFileExcel } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import styled from "styled-components"

// All headshots are stored in public/images/sp22-headshots
// Can alter the url below if images need to be moved
const imageSrc = "images/sp22-headshots/"

const AndrewJiang = { name: "Andrew Jiang", pic: "andrew-jiang.jpg" }
const EthanZhao = { name: "Ethan Zhao", pic: "ethan-zhao.jpg", url: "https://ethanxyzhao.com" }
const JaniceKim = { name: "Janice Kim", pic: "janice-kim.jpg" }
const JimmyRen = { name: "Jimmy Ren", pic: "jimmy-ren.jpg" }
const MarcelKida = { name: "Marcel Kida", pic: "marcel-kida.jpg" }
const NakyungLee = { name: "Nakyung Lee", pic: "nakyung-lee.jpg" }
const SubinKim = { name: "Subin Kim", pic: "subin-kim.jpg" }

const teams = [
  {
    team: "Executive Board", members: [
      { person: AndrewJiang, role: "Co Director" },
      { person: JimmyRen, role: "Co Director" },
      { person: JaniceKim, role: "VP External" },
      { person: EthanZhao, role: "VP Internal" },
      { person: NakyungLee, role: "VP Blue" },
      { person: SubinKim, role: "VP Red" }
    ]
  },
  {
    team: "Red Playbook", members: [
      { person: MarcelKida, role: "Project Lead" }
    ]
  }
]

// ProfileContainer provides styling to all of the Profiles
const ProfileContainer = styled.div`
  a {
    color: black;
    text-decoration: none;
  }

  img {
    max-width: 150px;
  }

  p {
    text-align: center;
  }
`

const TeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 80px;
  row-gap: 20px;
`

// Each person object has pic, name, and role(s) displayed
const Profile = props => {
  return (
    <ProfileContainer>
      <a href={props.url} target="_blank" rel="noopener noreferrer" >
        <img src={`${imageSrc + props.pic}`} />
        <p>{props.name}</p>
        <p>{props.role}</p>
      </a>
    </ProfileContainer>
  )
}

// The props of the Team component is an object from the teams array
// team.team accesses the team(name) field of each object
// Each team has its members mapped to a profile that accesses the person object referenced
const Team = ({ team }) => {
  return (
    <div>
      <h3>{team.team}</h3>
      <TeamMembersContainer>
        {team.members.map(member =>
          <Profile name={member.person.name} pic={member.person.pic} role={member.role} url={member.person.url} key={member.person.name} />
        )}
      </TeamMembersContainer>
    </div>
  )
}

const Directory = () => {
  return (
    <>
      {teams.map(team =>
        <Team team={team} key={team.team} />
      )}
    </>
  )
}

export default Directory