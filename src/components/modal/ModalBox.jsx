/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './ModalBox.module.css'
import { v4 as uuidv4 } from 'uuid';

const ModalBox = ({ handleClose }) => {
  const [ name, setName ] = useState("");
  const [ colour, setColour ] = useState("#6691FF");
  const [ error, setError ] = useState(false);

  const colors = ["#6691FF", "#0047FF", "#F19576", "#43E6FC", "#FF79F2", "#B38BFA"]

  const handleCreate = () => {
    const words = name.trim().split(" ");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the words back into a sentence
    const result = capitalizedWords.join(" ");

    const group = {
      id: uuidv4(),
      "name" : result,
      colour
    }

    const groupsFromLocalStorage = localStorage.getItem("groups");

    if (groupsFromLocalStorage !== null) {
      const groupsArray = JSON.parse(groupsFromLocalStorage);

      const groupName = group.name;
      const groupExists = groupsArray.some(existingGroup => existingGroup.name.toLowerCase() === groupName.toLowerCase());

      if(!groupExists) {
        groupsArray.push(group);
        localStorage.setItem("groups", JSON.stringify(groupsArray));
      }
      else{
        setError(true);
        return;
      }
    } else {
      const groupsArray = [group];
      localStorage.setItem("groups", JSON.stringify(groupsArray));
    }

    handleClose();
  };

  return (
    <div className={styles.box}>
      <h3>
        Create New Group
      </h3>
      <div>
        <label htmlFor='groupName'>
          Group Name : 
        </label>
        <input type="text" id='groupName' placeholder='Enter Group Name' onChange={(e) => {setName(e.target.value); setError(false);}} />
      </div>
      <div className={styles.error}>
        {error && <p>Group already exists</p>}
      </div>
      <div className={styles.color}>
        <span>
          Choose Colour: 
        </span>
        <ul>
          {colors.map((color) => (
            <li key={color} style={{backgroundColor: color, cursor: 'pointer', border: colour === color ? '4px solid lightgreen' : '4px solid white'}} onClick={() => setColour(color)}  />
          ))}
        </ul>
      </div>
      <div className={styles.button}>
        {/* <button onClick={()=> localStorage.clear()}>Clear</button> */}
        <button onClick={handleCreate} disabled={!name || !colour}>
          Create
        </button>
      </div>
    </div>
  )
}

export default ModalBox