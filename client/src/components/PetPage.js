import React, {useEffect, useState } from 'react';
import NewPet from './NewPet';
import PetList from './PetList';

function PetPage() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch("/pets")
        .then ((r) => r.json())
        .then((petArray) => {
            setPets(petArray)
            console.log(petArray)
        });
    }, []);

    function handleAddPet(NewPet){
    const updatedPetArray = [NewPet, ...pets]
    setPets(updatedPetArray)
  }

    function handleDeletePet(id){
        const updatedPetArray = pets.filter((pet) => pet.id !== id);
        setPets(updatedPetArray)
    }
    function handleUpdatePet(){
         
    }

  return (
    <div>
          <NewPet onAddPet={handleAddPet}/>
         <PetList
         pets={pets}
         onDeletePet ={handleDeletePet}
         onUpdatepet ={handleUpdatePet}
         />
    </div>
  )
}

export default PetPage;