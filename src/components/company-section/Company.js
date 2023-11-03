import React from 'react'
import { Container,Row,Col } from 'reactstrap'


function Company() {
  return (
    <section>
        <Container>
        <Row>
        <Col lg='2' md='3'>
            <h3 className='d-flex align-items-center gap-1'>
            <i class="ri-apple-fill">Apple</i>
            </h3>
        </Col>
        <Col lg='2' md='3'>
            <h3 className='d-flex align-items-center gap-1'>
            <i class="ri-google-fill">Google</i>
            </h3>
        </Col>
        <Col lg='2' md='3'>
        <h3 className='d-flex align-items-center gap-1'>
        <i class="ri-facebook-fill">Facebook</i>
        </h3>
        </Col>
        <Col lg='2' md='3'>
        <h3 className='d-flex align-items-center gap-1'>
        <i class="ri-instagram-line">Instagram</i>
        </h3>
        </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Company
