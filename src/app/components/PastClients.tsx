import Image from "next/image";
export default function PastClients() {
    return (
      <section className="content-section w-full">
        {" "}
        <h3>
          Our past clients
        </h3>
        <div className="flex flex-row items-center justify-center gap-10 md:gap-14 mt-10 w-full flex-wrap md:flex-nowrap">
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
