/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ChatHeading from '../chatHeading/ChatHeading';
import styles from './Sidebar.module.css';
import { FaPlus } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import ModalBox from '../modal/ModalBox';


const Sidebar = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [ groups, setGroups ] = useState([]);

    const groupsFromLocalStorage = localStorage.getItem("groups");
    useEffect(() => {
        if (groupsFromLocalStorage !== null) {
          setGroups(JSON.parse(groupsFromLocalStorage));
        }
      }, [groupsFromLocalStorage]);

    const classNames = !props.chatIsOpen ? styles.sidebar + " " + styles.mobileMenu : styles.sidebar + " " + styles.mobileChat;

  return (
    <>
        <div className={classNames}>
          <div className= {styles.container} >

            <h2 className={styles.heading}>Pocket Notes</h2>
            <div className= {styles.chats} >
              {groups.map((group) => (
                <ChatHeading key={group.id} colour={group.colour} id={group.id} >{group.name}</ChatHeading>
              ))}
            </div>
            <button onClick={handleOpen}> <FaPlus size={30}/> </button>
              </div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox handleClose={handleClose} />
      </Modal>
    </>
  )
}

export default Sidebar