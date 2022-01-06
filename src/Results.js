import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2> No pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            key={pet.id}
            breed={pet.breed}
            location={`${pet.city},${pet.state}`}
            id={pet.id}
            images={pet.images}
          />
        ))
      )}
    </div>
  );
};

export default Results;
