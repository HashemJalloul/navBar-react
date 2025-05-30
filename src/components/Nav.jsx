import { CiMenuBurger } from 'react-icons/ci'
import './Nav/Nav.css'
import NavMenu from './Nav/NavMenu'
import { useState } from 'react'
const Nav = ({ logo, items, btn }) => {
    const [navActive, setNavActive] = useState(items[0]?.content)
    const [showMenu, setShowMenu] = useState(true)
    return (
        <nav>
            <h1 className="logo">{logo}</h1>
            <ul className='navItems'>
                {items?.map((item, index) => {
                    return (
                        <li key={index}><a href={item?.link} onClick={() => setNavActive(item?.content)} className={navActive == item?.content ? 'active' : ''}>{item?.content}</a></li>
                    )
                })}
            </ul>
            <button className='btn'>{btn}</button>
            <button className='showMenuBtn' onClick={() => setShowMenu(!showMenu)}><NavMenu /></button>
            <ul className={`navMenu ${showMenu && "show"}`}>
                {items?.map((item, index) => {
                    return (
                        <li key={index}><a href={item?.link} onClick={() => setNavActive(item?.content)} className={navActive == item?.content ? 'active' : ''}>{item?.content} </a></li>
                    )
                })}
            </ul>


        </nav >
    )
}

export default Nav
