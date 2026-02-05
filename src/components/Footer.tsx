import { Link } from "react-router-dom";
export default function Navbar() {
  return (
        <nav className="w-[100svw] h-[78px] md:h-[117px] flex justify-center items-center gap-2 font-light underline-offset-2 decoration-1 bg-black text-white text-xs md:text-base">
          <Link to="https://www.instagram.com/pennspark/" className="hover:opacity-80 underline"> 
            Instagram
          </Link>
          <span className='hidden md:block'>•</span>
          <Link to="http://github.com/PennSpark/" className="hover:opacity-80 underline">
            Github
          </Link>
          <span className='hidden md:block'>•</span>
          <Link to="https://www.linkedin.com/company/pennspark/" className="hover:opacity-80 underline">
            LinkedIn
          </Link>
          <span className='hidden md:block'>•</span>
          <Link to="/clients" className="hover:opacity-80 underline">
            Newsletter
          </Link>
          <span className='hidden md:block'>•</span>
          <Link to="https://pennclubs.com/club/penn-spark" className="hover:opacity-80 underline">
            Penn Clubs
          </Link>
          <span className='hidden md:block'>•</span>
          <Link to="mailto:pennspark@gmail.com" className="hover:opacity-80 underline">
            Contact
          </Link>          
        </nav>
  );
}