import Link from "next/link"
export default function Navbar() {
  return (
        <nav className="w-[100svw] h-[78px] md:h-[117px] flex justify-center items-center gap-2 font-light underline-offset-2 decoration-1 bg-black text-white text-xs md:text-base">
          <Link href="/about" className="hover:opacity-80 underline">
            Instagram
          </Link>
          • 
          <Link href="/projects" className="hover:opacity-80 underline">
            Github
          </Link>
          • 
          <Link href="/community" className="hover:opacity-80 underline">
            LinkedIn
          </Link>
          • 
          <Link href="/clients" className="hover:opacity-80 underline">
            Newsletter
          </Link>
          • 
          <Link href="https://pennclubs.com/club/penn-spark" className="hover:opacity-80 underline">
            Penn Clubs
          </Link>
          • 
          <Link href="mailto:pennspark@gmail.com" className="hover:opacity-80 underline">
            Contact
          </Link>          
        </nav>
  );
}