import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import education from '../../assests/education.jpg'
import '../Hero-section/hero.css'

function Hero() {
  return (
    <section>
      <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='hero_content'>
                    <h2 className='mb-4'>
                        Your best guide and learning platform
                    </h2>
                </div>
                <div className='search'>
                    <input type='text' placeholder='Search'/>
                    <button className='btn'>Search</button>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <img src={education} alt="" className="w-100"/>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
