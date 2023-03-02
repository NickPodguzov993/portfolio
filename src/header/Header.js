import React from 'react';
import style from './Header.module.scss';
import {Nav} from "../nav/Nav";
import styleContainer from '../styles/Container.module.scss';

export const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    )
}