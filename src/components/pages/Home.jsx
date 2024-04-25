/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Hero from '../hero/Hero'

const Home = () => {
  return (
    <>
        <Sidebar chatIsOpen={false}/>
        <Hero/>
    </>
  )
}

export default Home