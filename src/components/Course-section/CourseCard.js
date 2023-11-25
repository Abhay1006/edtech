import React from 'react'

function CourseCard(props) {
  
  const {imgUrl, title, lesson, students, rating}=props.
  item
  
  
    return (
    <div className='Single_course_item'>
    <div className='Course_img'>
    <img src={imgUrl} alt=""className="w-100"/>
    </div>
    <div className='course_detail'>
        <h6 className='course_title mb-4'>
        {title}
        </h6>
        <div className='d-flex justify-content-between align-items-center'>
        <p className='Lesson d-flex align-items-center gap-1'>
            <i class="ri-book-open"></i>
            {lesson} Lessons
        </p>
        <p className='Students d-flex align-items-center gap-1'>
            <i class="ri-user-line"></i>
            {students}k 
        </p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
        <p className='Rating d-flex align-items-center gap-1'>
          <i class="ri-star-fill"></i>
            {rating}
        </p>
        <p className='enroll d-flex align-items-center gap-1'>
            <a href='#'>Enroll Now</a>
        </p>
        </div>
        </div>
    </div>
  )
}

export default CourseCard
