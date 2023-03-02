import React from 'react';
import style from './Project.module.scss';


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}  style={props.styles}>
                <a href={'https://www.youtube.com/'} className={style.button}>View</a>
            </div>
            <h3>{props.title}</h3>
            <p className={style.description}>{props.description}</p>
        </div>
    )
}