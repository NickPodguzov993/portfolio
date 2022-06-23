import React from 'react';
import style from './Project.module.css';


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}