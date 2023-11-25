import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import courseImg1 from "/edtech/src/assests/course.png"
import courseImg4 from "/edtech/src/assests/c++.png"
import courseImg2 from "/edtech/src/assests/Ai.jpg"
import courseImg3 from "/edtech/src/assests/appDev.jpg"
import "./course.css"
import CourseCard from './CourseCard'

const courseData=[
  {
    id:'01',
    title: 'Web Desgin Bootcamp-2022 for Beginner',
    lesson: 12,
    students: 12.5,
    rating:4.3,
    imgUrl:courseImg1
  },
  {
    id:'02',
    title: 'Artifical Intelligence for beginner',
    lesson: 20,
    students: 5,
    rating:4.6,
    imgUrl:courseImg2
  },
  {
    id:'03',
    title: 'App Development Bootcamp',
    lesson: 18,
    students: 16,
    rating:4,
    imgUrl:courseImg3
  },
  {
    id:'04',
    title: 'C++ for beginners',
    lesson: 10,
    students: 20,
    rating:4.5,
    imgUrl:courseImg4
  }
]

const Course = () => {
  return (
    <section>
      <Container>
        <Row>
        
        <Col lg='12'>
          <div className='course_top d-flex justify-content-between align-items-center'>
            <div className='course_top_left w-50'>
              <h2>
                Our Popular Courses
              </h2>
              <p>
              Welcome to the 'Web Development Mastery' course section, your gateway to becoming a proficient web developer.
              <br/>We'll cover everything from HTML and CSS basics to JavaScript interactivity and advanced frameworks.
              <br/>Get ready to embark on an exciting journey into the realm of web development, where you'll learn to bring your ideas to life on the web
              </p>
            </div>
            <div className='w-50 text-end'>
            <button className='btn'>See All</button>
            </div>
          </div>
        </Col>

        {
          courseData.map(item=>(
            <Col lg='4'md='6'>
              <CourseCard key={item.id} item={item} />
            </Col>
          ))
        }
        </Row>
      </Container>
    </section>
  )
}

export default Course
