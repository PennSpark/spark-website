import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HomeImg from "../images/bw-logo.png"

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px 16px;

  img {
  margin-top: 0.4rem;
  height: 2.2rem;
  }
`

const NavLink = styled(Link)`
  float: left;
  margin-left: 10px;
  padding: 4px 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 100px;
  color: black;
  
  :hover {
    background-color: var(--yellow);
  }
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <Link to="/">
          <img src={HomeImg} alt="home-logo" />
        </Link>
      </div>

      <div>
        <NavLink to="/about" activeStyle={{ backgroundColor: 'var(--yellow)' }}>about us</NavLink>
        <NavLink to="/community" activeStyle={{ backgroundColor: 'var(--yellow)' }}>our community</NavLink>
        <NavLink to="/work" activeStyle={{ backgroundColor: 'var(--yellow)' }}>our work</NavLink>
        <NavLink to="/workwithus" activeStyle={{ backgroundColor: 'var(--yellow)' }}>for clients</NavLink>
        <NavLink to="/" activeStyle={{ backgroundColor: 'var(--yellow)' }}>for students</NavLink>
      </div>
    </NavbarContainer>
  )
}

export default Navbar