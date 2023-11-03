import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import Hero from '../components/Hero-section/Hero'
import Company from '../components/company-section/Company'
import AboutUs from '../components/About-us/AboutUs'
import Course from '../components/Course-section/Course'


function Home() {
  return (
    <div>
      <Fragment>
        <Header/>
        <Hero/>
        <Company/>
        <AboutUs/>
        <Course/>
      </Fragment>
    </div>
  )
}

export default Home
