import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
  return (
      <div className="fixed inset-x-0 top-0 z-50 h-[78px] px-[72px] bg-white flex items-center justify-between">
        <Link href="/">
            <Image
            src="/logo-black.svg"
            alt="Spark Logo"
            className="w-20 h-8"
            width={120}
            height={60}
            />
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/about" className="text-sm tracking-wide hover:opacity-80">
            About
          </Link>
          <Link href="/projects" className="text-sm tracking-wide hover:opacity-80">
            Projects
          </Link>
          <Link href="/community" className="text-sm tracking-wide hover:opacity-80">
            Community
          </Link>
          <Link href="/clients" className="text-sm tracking-wide hover:opacity-80">
            Clients
          </Link>
          <Link href="/join" className="text-sm tracking-wide hover:opacity-80">
            Join
          </Link>
        </nav>

        {/* spacer to balance logo*/}
        <div className="w-20 h-8" />
      </div>
  );
}