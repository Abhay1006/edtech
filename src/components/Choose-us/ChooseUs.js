import React from 'react'
import { Container,Row,Col } from 'reactstrap'



function ChooseUs() {
  return (
    <section>
      <Container>
        <Row>
            <Col lg='6'>
            <div className='choose_content'>
                <h2>Why Choose us</h2>
                <p>Why choose us? We are more than just an edtech platform; we are your partner in education and personal growth.
                <br/>Our commitment to delivering a top-tier learning experience sets us apart.
                <br/>With expert instructors, comprehensive courses, and the flexibility to fit learning into your busy life, we ensure that education is not a one-size-fits-all endeavor.
                <br/>Our use of cutting-edge technology, interactive learning tools, and affordability make us an ideal choice for learners of all backgrounds.
                <br/>What truly distinguishes us, though, is our dedication to your success. We provide certification, a vibrant community, and continuously updated content to keep you ahead in a rapidly changing world.
                <br/>The feedback from our satisfied learners speaks volumes about the impact we've had on their lives and careers. Choose us, and you're choosing a partner in your lifelong learning journey.
                </p>
            </div>
            </Col>
            <Col className="6">
                <div className="choose_img">
                    <img src='' alt=''/>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ChooseUs
