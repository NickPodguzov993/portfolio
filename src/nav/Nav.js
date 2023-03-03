import React, {useState} from 'react';
import style from './nav.module.scss';
import { Link} from 'react-scroll'

export const Nav = () => {



    return (
        <div className={style.nav}>
            <Link  to="main"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
            >Main</Link>
            <Link  to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
            >Skills</Link>
            <Link  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
            >Projects</Link>
            <Link  to="footer"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  >Contacts</Link>
        </div>
    )
}