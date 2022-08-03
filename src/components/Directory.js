import React from "react"
import styled from "styled-components"

// All headshots are stored in public/images/sp22-headshots
// Can alter the url below if images need to be moved
const imageSrc = "images/sp22-headshots/"

const allMembers = [
  {
    name: "Andrew Jiang",
    pic: "andrew-jiang.jpg",
    role: "Co Director"
  },
  {
    name: "Jimmy Ren",
    pic: "jimmy-ren.jpg",
    role: "Co Director"
  },
]

const ProfileContainer = styled.div`
  img {
    max-width: 150px;
  }
`

// Each object (person) in the allMembers array has its name and pic displayed
const Profile = props => {
  return (
    <ProfileContainer>
      <img src={`${imageSrc + props.pic}`} />
      <p>{props.name}</p>
      <p>{props.role}</p>
    </ProfileContainer>
  )
}

const Directory = () => {
  return (
    <>
      {allMembers.map(member => <Profile name={member.name} pic={member.pic} role={member.role} />)}
    </>
  )
}

export default Directory