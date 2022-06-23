import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../styles/Container.module.css';
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.mainContainer} ${style.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML/CSS'} description={'sdjlkfjslj sdjflkdsjf skdljflksdjf sdjflskd'}/>
                    <Skill  title={'JS'} description={'sdjlkfjslj sdjuilk;ui io;lio; oilio'}/>
                    <Skill  title={'REACT'} description={'sdjlkfjslj qqweqw[pouoi'}/>
                </div>
            </div>
        </div>
    )
}