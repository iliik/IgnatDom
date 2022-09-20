import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={s.header}>
            <div>
                <NavLink to={'/'} className={s.navLink}>Prejonior</NavLink>
                <NavLink to={'/junior'} className={s.navLink}> Junior</NavLink>
                <NavLink to={'/junior+'} className={s.navLink}> Junior+</NavLink>
            </div>
            <div className={s.b}></div>
        </div>
    )
}

export default Header
