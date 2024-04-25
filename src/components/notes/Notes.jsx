/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from './Notes.module.css'
import { BiSolidSend } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { useShort } from '../../useShort'
import { FaArrowLeft } from 'react-icons/fa'

const Notes = () => {
    const [message, setMessage] = useState("");
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();

    const params = useParams();
    const id = params.id;
    const group = JSON.parse(localStorage.getItem("groups")).find(group => group.id === id);
    
    const temp = useShort(group.name);
    
    const notesFromLocalStorage = localStorage.getItem(group.name);

    const createMessage = () => {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const d = new Date();
        const date = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
        const time = d.toLocaleTimeString();
        const messageObj = {
            date,
            time,
            message
        }
        let notesFromLocalStorage = localStorage.getItem(group.name);
        if(notesFromLocalStorage !== null){
            notesFromLocalStorage = JSON.parse(notesFromLocalStorage);
            notesFromLocalStorage.push(messageObj);
            localStorage.setItem(group.name, JSON.stringify(notesFromLocalStorage));
        }
        else{
            localStorage.setItem(group.name, JSON.stringify([messageObj]));
        }
        setNotes([...notes, messageObj]);
        setMessage('');
    }
    
    const handleBack = () => {
        navigate("/");
    }

    
    useEffect(()=>{
        setNotes(JSON.parse(notesFromLocalStorage));
    },[notesFromLocalStorage, id])

    const classNames =styles.notes + " " + styles.mobileChat;


  return (
    <div className={classNames}>
        <div className={styles.header}>
            <FaArrowLeft className={styles.back} size={20} onClick={handleBack} />
            <span className={styles.bubble} style={{backgroundColor: group.colour}}> {temp.toUpperCase()}</span>
            <h2>{group.name}</h2>
        </div>
        <div className={styles.body}>

            {notes && notes.map(note =>{
                return <div key={note.time} className={styles.message}>
                    {note.message}
                    <div className={styles.date}>
                        <span>{note.date}</span>
                        |
                        <span>{note.time}</span>
                    </div>
                </div>
            })}
        </div>
        <div className={styles.input}>
            <textarea name="message" id="message" placeholder="Type your message here..." onChange={(e) => setMessage(e.target.value)} ></textarea>
            <button className={styles.send} disabled={!message} onClick={createMessage}>
                <BiSolidSend size={30}/>
            </button>
        </div>
    </div>
  )
}

export default Notes