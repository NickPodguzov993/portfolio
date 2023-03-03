import React, {useState} from 'react';
import style from './Header.module.scss';
import {Nav} from "../nav/Nav";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [btn, setBtn] = useState(faBars)


    const changeBurgerMenu = () => {
        if (showMenu) {
            setBtn(faBars)
        } else {
            setBtn(faXmark)
        }
        setShowMenu(!showMenu)
    }


    return (
        <div className={style.header}>
            <button onClick={changeBurgerMenu} className={style.btn}>
                <FontAwesomeIcon icon={btn}/>
            </button>
            {showMenu && <Nav/>}

        </div>
    )
}