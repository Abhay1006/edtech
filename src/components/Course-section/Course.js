import React from 'react'
import { Container,Row,Col } from 'reactstrap'



const Course = () => {
  return (
    <section>
      <Container>
        <Row>
            <Col lg='4'>
                <div className='Single_course_item'>

                </div>
                <div className='course_detail'>
                    <h5 className='course_title'>
                        Web Design Bootcamp-2022 for Beginners
                    </h5>
                    <div className='d-flex justify-content-between align-items-center'>
                    <p className='lesson d-flex align-items-center gap-1'>
                        <i class="ri-book-open"></i>
                        12 Lessons
                    </p>
                    <p className='Students d-flex align-items-center gap-1'>
                        <i class="ri-user-line"></i>
                        12.5k 
                    </p>
                    </div>

                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Course
