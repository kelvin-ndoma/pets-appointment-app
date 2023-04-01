import React from "react";
import PetCard from "./PetCard";

function PetList({ pets, onDeletePet, onUpdatePet }) {
  return (
    <div className="petcards">
      {Array.isArray(pets) && pets.map((pet) => {
        return (
          <PetCard
            key={pet.id}
            pet={pet}
            onDeletePet={onDeletePet}
            onUpdatePet={onUpdatePet}
          />
        );
      })}
    </div>
  );
}

export default PetList;
