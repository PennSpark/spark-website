import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
  return (
        <nav className="h-[78px] flex justify-center items-center gap-8 bg-[#E4E4E4] underline font-light">
          <Link href="/about" className="text-sm tracking-wide hover:opacity-80">
            Instagram
          </Link>
          <Link href="/projects" className="text-sm tracking-wide hover:opacity-80">
            Github
          </Link>
          <Link href="/community" className="text-sm tracking-wide hover:opacity-80">
            LinkedIn
          </Link>
          <Link href="/clients" className="text-sm tracking-wide hover:opacity-80">
            Newsletter
          </Link>
          <Link href="/join" className="text-sm tracking-wide hover:opacity-80">
            Penn Clubs
          </Link>
          <Link href="/join" className="text-sm tracking-wide hover:opacity-80">
            Contact
          </Link>          
        </nav>
  );
}