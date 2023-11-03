import React,{useRef} from 'react'
import { Container } from 'reactstrap'
import './header.css'


const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Cousrse',
        url: '#'
    },
    {
        display: 'Learning Path',
        url: '#'
    },
    {
        display: 'My Learning',
        url: '#'
    },
    {
        display: 'Dashboard',
        url: '#'
    },
    {
        display: 'Library',
        url: '#'
    },
]


function Header() {
    const menuRef=useRef()

    const menuToggle =()=>menuRef.current.classList.toggle('active_menu')


  return (
    <header className='header'>
      <Container>
        <div className='navigation  d-flex   align-item-center justify-content-between'>
            <div className='logo'>
                <h2 className='d-flex align-items-center gap-1'>
                    <i className='ri-pantone-line'></i>Learn Velocity
                </h2>
            </div>

            <div className='nav d-flex align-items-center gap-5'>
                <div className='nav_menu' ref={menuRef} onClick={menuToggle}>
                    <ul className='nav_list'>
                      {navLinks.map((item,index)=>(
                        <li className='nav_item'>
                            <a href={item.url}>{item.display}</a>
                        </li>
                      ))
                      }
                    </ul>
                </div>
                <div className='nav_right'>
                        <p className='mb-0 d-flex align-items-center gap-2'>
                            <i class="ri-customer-service-fill"></i>+910123456789
                        </p>
                </div>
            </div>
            <div className='mobile_menu'>
                <span>
                    <i class="ri-menu-line" onClick={menuToggle}></i>
                </span>
            </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
