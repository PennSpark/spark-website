import React from "react"
import { useState } from "react"
import styled from "styled-components"

// All headshots are stored in public/images/sp22-headshots
// Can alter the url below if images need to be moved
const imageSrc = "images/sp22-headshots/"

// Current members
const AndrewJiang = { name: "Andrew Jiang", pic: "andrew-jiang.jpg" }
const EthanZhao = { name: "Ethan Zhao", pic: "ethan-zhao.jpg", url: "https://ethanxyzhao.com" }
const JaniceKim = { name: "Janice Kim", pic: "janice-kim.jpg" }
const JimmyRen = { name: "Jimmy Ren", pic: "jimmy-ren.jpg" }
const MarcelKida = { name: "Marcel Kida", pic: "marcel-kida.jpg" }
const NakyungLee = { name: "Nakyung Lee", pic: "nakyung-lee.jpg" }
const SubinKim = { name: "Subin Kim", pic: "subin-kim.jpg" }
const YuhanLiu = { name: "Yuhan Liu", pic: "yuhan-liu.jpg" }

// Former members
const ChristinaLu = { name: "Christina Lu", pic: "christina-lu.jpg" }
const GraceJiang = { name: "Grace Jiang", pic: "grace-jiang.jpg" }
const OliviaZha = { name: "Olivia Zha", pic: "olivia-zha.jpg" }

// = { name: "", pic: ".jpg" }

// import OliviaZha from "../images/sp22-headshots/olivia-zha.jpg"
// import AcelynChoi from "../images/sp22-headshots/acelyn-choi.jpg"
// import AnnaBaringer from "../images/sp22-headshots/anna-baringer.jpg"
// import AnnaXia from "../images/sp22-headshots/anna-xia.jpg"
// import ChelseaCheng from "../images/sp22-headshots/chelsea-cheng.jpg"
// import ClaireZhang from "../images/sp22-headshots/claire-zhang.jpg"
// import JamesCiardullo from "../images/sp22-headshots/james-ciardullo.jpg"
// import JimmyRen from "../images/sp22-headshots/jimmy-ren.jpg"
// import JoyceHe from "../images/sp22-headshots/joyce-he.jpg"
// import MarcelKida from "../images/sp22-headshots/marcel-kida.jpg"
// import MatthewDong from "../images/sp22-headshots/matthew-dong.jpg"
// import PaulLoh from "../images/sp22-headshots/paul-loh.jpg"
// import RainYan from "../images/sp22-headshots/rain-yan.jpg"
// import SubinKim from "../images/sp22-headshots/subin-kim.jpg"

// import EricWang from "../images/sp22-headshots/eric-wang.jpg"
// import ArushMehrotra from "../images/sp22-headshots/arush-mehrotra.jpg"
// import SumanthKadiyala from "../images/sp22-headshots/sumanth-kadiyala.jpg"
// import EmilyGuo from "../images/sp22-headshots/emily-guo.jpg"
// import NakyungLee from "../images/sp22-headshots/nakyung-lee.jpg"
// import YanjieZhang from "../images/sp22-headshots/yanjie-zhang.jpg"
// import EricDai from "../images/sp22-headshots/eric-dai.jpg"
// import MykaelaSalvacion from "../images/sp22-headshots/mykaela-salvacion.jpg"
// import ClyveGassant from "../images/sp22-headshots/clyve-gassant.jpg"
// import SanyaShetty from "../images/sp22-headshots/sanya-shetty.jpg"
// import DhatriMedarametla from "../images/sp22-headshots/dhatri-medarametla.jpg"
// import ChristianaGuan from "../images/sp22-headshots/christiana-guan.jpg"
// import AllisonZhang from "../images/sp22-headshots/allison-zhang.jpg"
// import ZainKhan from "../images/sp22-headshots/zain-khan.jpg"
// import MatthewCho from "../images/sp22-headshots/matthew-cho.jpg"
// import AlyssaNie from "../images/sp22-headshots/alyssa-nie.jpg"

const fa22teams = [
  {
    team: "Executive Board", members: [
      { person: AndrewJiang, role: "Co Director" },
      { person: JimmyRen, role: "Co Director" },
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
      { person: ChristinaLu, role: "Co Director" },
      { person: GraceJiang, role: "Co Director" },
      { person: JaniceKim, role: "VP External" },
      { person: EthanZhao, role: "VP Internal" },
      { person: YuhanLiu, role: "VP Blue" },
      { person: AndrewJiang, role: "VP Red" }
    ]
  },
  {
    team: "Red Playbook", members: [
      { person: MarcelKida, role: "Project Lead" }
    ]
  }
]

const fa21teams = [
  {
    team: "Executive Board", members: [
      { person: GraceJiang, role: "Co Director" },
      { person: OliviaZha, role: "Co Director" },
      { person: JaniceKim, role: "VP External" },
    ]
  },
]

const dict = [
  {
    semester: "FALL 2022",
    teams: fa22teams
  },
  {
    semester: "SPRING 2022",
    teams: sp22teams
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

  .role {
    margin: auto;
    width: fit-content;
    padding: 0 10px;
    background-color: #D9D9D9;
    border-radius: 50px;
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
  const [semester, setSemester] = useState("FALL 2022")

  const handleSemesterChange = (event) => {
    setSemester(event.target.value)
  }

  let teamsToShow = fa22teams

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
      <h2 className="stroke">{semester}</h2>

      <select defaultValue={semester} onChange={handleSemesterChange} >
        <option value="FALL 2022">FALL 2022</option>
        <option value="SPRING 2022">SPRING 2022</option>
        <option value="FALL 2021">FALL 2021</option>
      </select>

      {teamsToShow.map(team =>
        <Team team={team} key={team.team} />
      )}
    </>
  )
}

export default Directory