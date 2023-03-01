import React from 'react';
import style from './Skill.module.css';


export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}><div className={style.fontsIcons}>{props.icon}</div></div>
            <h3 className={style.title}>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}