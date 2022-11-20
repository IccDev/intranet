import React from "react";
import service_data from "../../data/services";
import ServiceCard from "../card";

const Body = () => {
  return (
    <main className="main">
      <div className="main-header">
        <h2>
          Découvrez notre Intranet regroupant l’ensemble de nos différents sites
        </h2>
        <span>
          Veuillez cliquer sur le buton{" "}
          <strong>
            <q>Accéder</q>
          </strong>{" "}
          d'un service spécifique pour y être rediriger
        </span>
      </div>
      <div className="main-container">
        {service_data().map((item, i) => (
          <ServiceCard
            key={i}
            description={item.description}
            image={item.image}
            url={item.url}
          />
        ))}
      </div>
    </main>
  );
};

export default Body;
