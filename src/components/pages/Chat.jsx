/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Notes from '../notes/Notes'

const Chat = () => {
  return (
    <>
        <Sidebar chatIsOpen={true}/>
        <Notes/>
    </>
  )
}

export default Chat