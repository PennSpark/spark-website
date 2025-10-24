import Image from "next/image";

export default function Navbar() {
  return (
    // navbar
    <div className="w-full h-16 flex items-center px-8 bg-linear-to-r from-gray-30 to-gray-400 shadow-md">
      <h1 className="ml-4 text-lg font-semibold">Penn Spark header!</h1>

      {/* links to different pages */}
      <div className="ml-auto flex gap-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/projects" className="hover:underline">
          Projects
        </a>
      </div>
    </div>
  );
}
