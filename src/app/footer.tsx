export default function Footer() {
  return (
    // navbar
    // gradient and cool shadow
    <div className="w-full h-16 flex items-center px-8 bg-linear-to-r from-gray-30 to-gray-400 shadow-md">
      <h1 className="text-lg font-semibold">Penn Spark footer</h1>

      <div className="ml-auto flex gap-7">
        <a href="https://instagram.com/pennspark">Instagram</a>
        <a href="https://github.com/pennspark">GitHub</a>
        <a href="https://www.linkedin.com/company/69605156/">LinkedIn</a>
        <a href="https://pennspark.substack.com/">Newsletter</a>
        <a href="https://pennclubs.com/club/penn-spark">Penn Clubs</a>
        <span className="bold">
          Contact Us:
          <a href="mailto:upennspark@gmail.com"> upennspark@gmail.com </a>
        </span>
      </div>
    </div>
  );
}
