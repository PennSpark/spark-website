import { Link } from "react-router-dom";
export default function Navbar() {
  return (
        <nav className="w-[100svw] h-[78px] md:h-[117px] flex justify-center items-center gap-2 font-light underline-offset-2 decoration-1 bg-black text-white text-xs md:text-base">
          <Link to="/about" className="hover:opacity-80 underline">
            Instagram
          </Link>
          • 
          <Link to="/projects" className="hover:opacity-80 underline">
            Github
          </Link>
          • 
          <Link to="/community" className="hover:opacity-80 underline">
            LinkedIn
          </Link>
          • 
          <Link to="/clients" className="hover:opacity-80 underline">
            Newsletter
          </Link>
          • 
          <Link to="https://pennclubs.com/club/penn-spark" className="hover:opacity-80 underline">
            Penn Clubs
          </Link>
          • 
          <Link to="mailto:pennspark@gmail.com" className="hover:opacity-80 underline">
            Contact
          </Link>          
        </nav>
  );
}