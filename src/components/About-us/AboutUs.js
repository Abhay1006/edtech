import React from 'react'
import './about.css'
import { Container,Row,Col } from 'reactstrap'
import CountUp from 'react-countup'
import './about.css'
import aboutImg from "../../assests/about-us.avif"


function AboutUs() {
  return (
    <section>
      <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='about__img'>
                    <img src={aboutImg} alt="" className='w-100'/>
                </div>
            </Col>
            <Col lg='6' md='6'>
                <div className='about__content'>
                    <h2>About us</h2>
                    <p>
                    Welcome to <b>Learn Velocity</b> - Where Learning Meets Innovation!
<br />
                    At <b>Learn Velocity</b>, we are passionate about transforming education through the power of technology.
<br />                    Our mission is to make learning accessible, engaging, and effective for students of all ages and backgrounds.
       <br />             We believe that education is the key to personal and societal growth, and we're dedicated to providing the tools and resources needed to empower learners on their educational journey.
                    </p>
                    <div className='about__couter'>
                    <div className='d-flex gap-5 align-items-center'>
                    <div className='single_counter'>
                        <span className='counter'>
                            <CountUp  start={0} end={25} duration={2} suffix='K'/>
                        </span>
                        <p className='counter_title'>Completed Project</p>
                    </div>
                    <div className='single_counter'>
                        <span className='counter'>
                            <CountUp  start={0} end={12} duration={2} suffix='M'/>
                        </span>
                        <p className='counter_title'>User Around World</p>
                    </div>
                    </div>
                </div>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
