import React from "react"
import { useState } from "react"
import styled from "styled-components"

// All headshots are stored in public/images/sp22-headshots
// Can alter the url below if images need to be moved
const imageSrc = "images/sp22-headshots/"

// Current members
const AcelynChoi = { name: "Acelyn Choi", pic: "acelyn-choi.jpg" }
const AndrewJiang = { name: "Andrew Jiang", pic: "andrew-jiang.jpg" }
const AnnaBaringer = { name: "Anna Baringer", pic: "anna-baringer.jpg" }
const AnnaXia = { name: "Anna Xia", pic: "anna-xia.jpg" }
const ArushMehrotra = { name: "Arush Mehrotra", pic: "arush-mehrotra.jpg" }
const ChelseaCheng = { name: "Chelsea Cheng", pic: "chelsea-cheng.jpg" }
const ClaireZhang = { name: "Claire Zhang", pic: "claire-zhang.jpg" }
const EricWang = { name: "Eric Wang", pic: "eric-wang.jpg" }
const EthanZhao = { name: "Ethan Zhao", pic: "ethan-zhao.jpg", url: "https://ethanxyzhao.com" }
const JaniceKim = { name: "Janice Kim", pic: "janice-kim.jpg" }
const JimmyRen = { name: "Jimmy Ren", pic: "jimmy-ren.jpg" }
const JoyceHe = { name: "Joyce He", pic: "joyce-he.jpg" }
const MarcelKida = { name: "Marcel Kida", pic: "marcel-kida.jpg" }
const MatthewCho = { name: "Matthew Cho", pic: "matthew-cho.jpg" }
const MatthewDong = { name: "Matthew Dong", pic: "matthew-dong.jpg" }
const NakyungLee = { name: "Nakyung Lee", pic: "nakyung-lee.jpg" }
const PaulLoh = { name: "Paul Loh", pic: "paul-loh.jpg" }
const RainYan = { name: "Rain Yan", pic: "rain-yan.jpg" }
const SubinKim = { name: "Subin Kim", pic: "subin-kim.jpg" }
const SumanthKadiyala = { name: "Sumanth Kadiyala", pic: "sumanth-kadiyala.jpg" }
const YuhanLiu = { name: "Yuhan Liu", pic: "yuhan-liu.jpg" }

// Former members
const ChristinaLu = { name: "Christina Lu", pic: "christina-lu.jpg" }
const EricDai = { name: "Eric Dai", pic: "eric-dai.jpg" }
const GraceJiang = { name: "Grace Jiang", pic: "grace-jiang.jpg" }
const JamesCiardullo = { name: "James Ciardullo", pic: "james-ciardullo.jpg" }
const OliviaZha = { name: "Olivia Zha", pic: "olivia-zha.jpg" }

// { name: "", pic: ".jpg" }

// import EmilyGuo from "../images/sp22-headshots/emily-guo.jpg"
// import YanjieZhang from "../images/sp22-headshots/yanjie-zhang.jpg"
// import MykaelaSalvacion from "../images/sp22-headshots/mykaela-salvacion.jpg"
// import ClyveGassant from "../images/sp22-headshots/clyve-gassant.jpg"
// import SanyaShetty from "../images/sp22-headshots/sanya-shetty.jpg"
// import DhatriMedarametla from "../images/sp22-headshots/dhatri-medarametla.jpg"
// import ChristianaGuan from "../images/sp22-headshots/christiana-guan.jpg"
// import AllisonZhang from "../images/sp22-headshots/allison-zhang.jpg"
// import ZainKhan from "../images/sp22-headshots/zain-khan.jpg"
// import AlyssaNie from "../images/sp22-headshots/alyssa-nie.jpg"

// Styling
const ProfileContainer = styled.div`
  a {
    color: var(--black);
    text-decoration: none;
  }

  img {
    max-width: 150px;
  }

  p {
    text-align: center;
  }

  .role {
    margin: auto;
    width: fit-content;
    padding: 0 10px;
    background-color: #D9D9D9;
    border-radius: 50px;
    font-size: 0.8em;
  }
`

const TeamContainer = styled.div`
  margin: 20px auto;
  padding: 0 30px; ${'' /* left and right */}
  max-width: 900px;
`

const TeamMembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 80px;
  row-gap: 20px;
  margin: 20px auto;
  ${'' /* If number of members is divisible by 4, will fit 4 members to a line */}
  max-width: ${props => (props.numMembers % 4 === 0 ? "none" : "700px")}
`

const StyledSelect = styled.div`
  select {
    background-color: var(--white);
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 2em;
    font-weight: 800;
    -webkit-text-fill-color: var(--white);
    -webkit-text-stroke-width: 1.7px;
    -webkit-text-stroke-color: var(--black);
  }
`

// Logic
const fa22teams = [
  {
    team: "Executive Board", members: [
      { person: AndrewJiang, role: "Co-Director" },
      { person: JimmyRen, role: "Co-Director" },
      { person: JaniceKim, role: "VP External" },
      { person: EthanZhao, role: "VP Internal" },
      { person: NakyungLee, role: "VP Blue" },
      { person: SubinKim, role: "VP Red" }
    ]
  }
]

const sp22teams = [
  {
    team: "Executive Board", members: [
      { person: ChristinaLu, role: "Co-Director" },
      { person: GraceJiang, role: "Co-Director" },
      { person: JaniceKim, role: "VP External" },
      { person: EthanZhao, role: "VP Internal" },
      { person: YuhanLiu, role: "VP Blue" },
      { person: AndrewJiang, role: "VP Red" }
    ]
  },
  {
    team: "Penn Playbook", members: [
      { person: MarcelKida, role: "Project Lead" },
      { person: ClaireZhang, role: "Designer" },
      { person: OliviaZha, role: "Designer" },
      { person: AndrewJiang, role: "Developer" },
      { person: AnnaXia, role: "Developer" },
      { person: EthanZhao, role: "Developer" }
    ]
  },
  {
    team: "Gaia AI", members: [
      { person: ChelseaCheng, role: "Project Lead" },
      { person: YuhanLiu, role: "Project Lead" },
      { person: EricDai, role: "Designer" },
      { person: ArushMehrotra, role: "Developer" },
      { person: PaulLoh, role: "Developer" },
      { person: SumanthKadiyala, role: "Developer" }
    ]
  },
  {
    team: "Interviews.live", members: [
      { person: SubinKim, role: "Project Lead" },
      { person: ClaireZhang, role: "Designer" },
      { person: AcelynChoi, role: "Developer" },
      { person: JamesCiardullo, role: "Developer" }
    ]
  },
  {
    team: "ARTZ Philadelphia", members: [
      { person: AnnaBaringer, role: "Project Lead" },
      { person: JoyceHe, role: "Designer" },
      { person: EricWang, role: "Developer" },
      { person: MatthewCho, role: "Developer" }
    ]
  }
]

const fa21teams = [
  {
    team: "Executive Board", members: [
      { person: GraceJiang, role: "Co-Director" },
      { person: OliviaZha, role: "Co-Director" },
      { person: JaniceKim, role: "VP External" },
      { person: JimmyRen, role: "VP Internal"}
    ]
  },
]

// Maps the dropdown string to the array needed
const dict = [
  {
    semester: "FALL 2022",
    teams: fa22teams
  },
  {
    semester: "SPRING 2022",
    teams: sp22teams
  },
  {
    semester: "FALL 2021",
    teams: fa21teams
  }
]

// Each person object has pic, name, and role(s) displayed
const Profile = props => {
  return (
    <ProfileContainer>
      <a href={props.url} target="_blank" rel="noopener noreferrer" >
        <img src={`${imageSrc + props.pic}`} />
        <p>{props.name}</p>
        <p className="role">{props.role}</p>
      </a>
    </ProfileContainer>
  )
}

// The props of the Team component is an object from the teams array
// team.team accesses the team(name) field of each object
// Each team has its members mapped to a profile that accesses the person object referenced
const Team = ({ team }) => {
  return (
    <TeamContainer>
      <h3>{team.team}</h3>
      <TeamMembersContainer numMembers={team.members.length}>
        {team.members.map(member =>
          <Profile name={member.person.name} pic={member.person.pic} role={member.role} url={member.person.url} key={member.person.name} />
        )}
      </TeamMembersContainer>
    </TeamContainer>
  )
}

const Directory = () => {
  const [semester, setSemester] = useState("FALL 2022")

  const handleSemesterChange = (event) => {
    setSemester(event.target.value)
  }

  let teamsToShow = fa22teams

  // Matches the dropdown state (string) to that semester's array of teams
  if (semester === "FALL 2022") {
    teamsToShow = fa22teams
  } else if (semester === "SPRING 2022") {
    teamsToShow = sp22teams
  } else if (semester === "FALL 2021") {
    teamsToShow = fa21teams
  } else {
    teamsToShow = null
  }

  return (
    <>
      <StyledSelect>
        <select defaultValue={semester} onChange={handleSemesterChange} >
          <option value="FALL 2022">FALL 2022</option>
          <option value="SPRING 2022">SPRING 2022</option>
          <option value="FALL 2021">FALL 2021</option>
        </select>
      </StyledSelect>

      {teamsToShow.map(team =>
        <Team team={team} key={team.team} />
      )}
    </>
  )
}

export default Directory