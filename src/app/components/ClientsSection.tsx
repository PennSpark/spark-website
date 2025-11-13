import Image from "next/image";

export default function ClientsSection() {
  return (
    <section
      className={`relative flex-col px-8 lg:px-42 w-[100svw] items-start justify-center flex`}
    >
      {" "}
      <p className="larger-text bold text-left max-w-[49vw]">
        Our past clients
      </p>
      <div className="flex flex-row flex-wrap gap-10 mt-10">
        <Image
          src="/clients/counselab.png"
          alt="Counselab Logo"
          width={250}
          height={100}
          className="object-contain"
        ></Image>
        <Image
          src="/clients/gaiaai.png"
          alt="GaiaAI Logo"
          width={250}
          height={100}
          className="object-contain"
        ></Image>
        <Image
          src="/clients/clarifi.png"
          alt="Clarifi Logo"
          width={250}
          height={100}
          className="object-contain"
        ></Image>
        <Image
          src="/clients/bonfire.png"
          alt="Bonfire Logo"
          width={250}
          height={100}
          className="object-contain"
        ></Image>
      </div>
    </section>
  );
}
