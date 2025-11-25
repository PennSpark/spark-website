"use client";

import Image from "next/image";

export default function PastClients() {
  const clients = [
    { id: 1, name: "Client 1" },
    { id: 2, name: "Client 2" },
    { id: 3, name: "Client 3" },
    { id: 4, name: "Client 4" },
  ];

  return (
    <section className="full-width-content-section">
      <h2 className="past-clients-title" style={{textTransform: 'none'}}>Our Past Clients:</h2>
      <div className="past-clients-grid">
        {clients.map((client) => (
          <div key={client.id} className="past-clients-item">
            <Image
              src="/images/stride.png"
              alt={client.name}
              width={120}
              height={80}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
