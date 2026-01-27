import { assetUrl } from "../utils";

export default function PastClients() {
    return (
      <section className="content-section w-full">
        {" "}
        <h3>
          Our past clients
        </h3>
        <div className="flex flex-row flex-wrap gap-10 mt-10">
          <img
            src={assetUrl("/clients/counselab.png")}
            alt="Counselab Logo"
            width={250}
            height={100}
            className="object-contain"
          ></img>
          <img
            src={assetUrl("/clients/gaiaai.png")}
            alt="GaiaAI Logo"
            width={250}
            height={100}
            className="object-contain"
          ></img>
          <img
            src={assetUrl("/clients/clarifi.png")}
            alt="Clarifi Logo"
            width={250}
            height={100}
            className="object-contain"
          ></img>
          <img
            src={assetUrl("/clients/bonfire.png")}
            alt="Bonfire Logo"
            width={250}
            height={100}
            className="object-contain"
          ></img>
          <img
            src={assetUrl("/clients/museum.png")}
            alt="Penn Museum Logo"
            width={250}
            height={100}
            className="object-contain"
          ></img>
          <img
            src={assetUrl("/clients/sphereus.png")}
            alt="Sphereus Logo"
            width={250}
            height={100}
            className="object-contain"
          ></img>
        </div>
      </section>
    );
  }