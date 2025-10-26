import Image from "next/image";

export default function Navbar() {
  const linkStyle = "text-gray-800 hover:text-gray-400";

  return (
    // navbar
    <div className="w-full h-16 flex items-center px-8 bg-linear-to-r from-gray-30 to-gray-400 shadow-md">
      <h1 className="ml-4 text-lg font-semibold">
        <a href="/" className={linkStyle}>
          Penn Spark header!
        </a>
      </h1>

      {/* links to different pages */}
      <div className="ml-auto flex gap-4">
        <a href="/about" className={linkStyle}>
          About Us
        </a>
        <a href="/work" className={linkStyle}>
          Our Work
        </a>
        <a href="/community" className={linkStyle}>
          Our Community
        </a>
      </div>
    </div>
  );
}
