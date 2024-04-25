/* eslint-disable react/prop-types */
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ChatHeading.module.css'
import { useShort } from '../../useShort';
import { useEffect, useState } from 'react';
const ChatHeading = (props) => {
  const [active, setActive] = useState(false);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const name = props.children;
  const temp = useShort(name);

  useEffect(()=>{
    if(id === props.id){
      setActive(true);
    }
    else{
      setActive(false)
    }
  },[id, props.id])

  const navigateHandler = () => {
    navigate(`/notes/${props.id}`)
  }

  return (
    <div className={styles.chatHeading} onClick={navigateHandler} style={ active ? {backgroundColor: "#2F2F2F2B"}:{} }>
        <span className={styles.bubble} style={{backgroundColor: props.colour}}> {temp.toUpperCase()}</span>
        <span className={styles.heading}> {name} </span>
    </div>
  )
}

export default ChatHeading