import React from 'react';
import style from './main.module.css';
import styleContainer from '../styles/Container.module.css';


export const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.mainContainer}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Nikolay Podguzov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    )
}