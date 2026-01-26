'use client'
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [sideOpen, setSideOpen] = useState(false);

  const toggleSideMenu = () => {
    setSideOpen(!sideOpen);
  }

  return (
      <div className="fixed inset-x-0 top-0 z-50 w-[100svw] h-[78px] px-8 md:px-[72px] text-[0.85rem] bg-white flex items-center justify-between">
        <Link to="/">
            <img
            src="/logo-black.svg"
            alt="Spark Logo"
            className="w-20 h-8"
            width={120}
            height={60}
            />
        </Link>

        <button
        onClick={toggleSideMenu}
        className="md:hidden flex flex-col justify-center items-center w-6 h-6 gap-1.5"
        style={{
          border: 'none',
          background: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
        >
          <img src='/icons/dropdown-icon.svg' alt='Menu Icon' width={32} height={32} />
        </button>

        <div className={`absolute w-full top-[98%] text-[0.85rem] ${ sideOpen ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'} transition-all transition-duration-1000 ease-in-out z-50 bg-linear-to-b from-white to-white/80 backdrop-blur-md md:hidden`}>
          <div className="w-full h-full p-8 flex flex-col justify-end">
            <nav className="gap-6 flex flex-col justify-end items-end"
            onClick={toggleSideMenu}
            >
              <Link to="/about" className="hover:opacity-80">
                About
              </Link>
              <Link to="/projects" className="hover:opacity-80">
                Projects
              </Link>
              <Link to="/community" className="hover:opacity-80">
                Community
              </Link>
              <Link to="/clients" className="hover:opacity-80">
                Clients
              </Link>
              <Link to="/join" className="hover:opacity-80">
                Join
              </Link>
            </nav>
          </div>
        </div>
        
        <nav className="items-center gap-8 hidden md:flex">
          <Link to="/about" className="hover:opacity-80">
            About
          </Link>
          <Link to="/projects" className="hover:opacity-80">
            Projects
          </Link>
          <Link to="/community" className="hover:opacity-80">
            Community
          </Link>
          <Link to="/clients" className="hover:opacity-80">
            Clients
          </Link>
          <Link to="/join" className="hover:opacity-80">
            Join
          </Link>
        </nav>

        {/* spacer to balance logo*/}
        <div className="w-20 h-8 hidden md:flex" />
      </div>
  );
}