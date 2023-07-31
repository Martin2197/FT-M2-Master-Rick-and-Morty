import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";

import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: []
 });

 function handleInputChange(event){
    setZoo({
      ...zoo, 
      [event.target.name]: event.target.value
    })
 }

  return (
    <div>
      <label>Zoo Name:</label>
        <input 
        name="zooName"
        type="text" 
        id="zooNameInput" 
        value={zoo.zooName} 
        onChange={handleInputChange}
        />
      <h1>{zoo.zooName}</h1>  
    </div>
  );
}
