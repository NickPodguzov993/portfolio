import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../styles/Container.module.scss';
import {Skill} from "./skill/Skill";
import TitleName from "../Components/TitleName/TitleName";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faSquareJs} from '@fortawesome/free-brands-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons'
import Slide, {Fade} from "react-awesome-reveal";


export const Skills = () => {
    return (
        <Slide triggerOnce={true}>
            <div id='skills' className={style.skillsBlock}>
                <div className={`${styleContainer.mainContainer} ${style.skillsContainer}`}>
                    <TitleName title={'Skills'}/>
                    <div className={style.skills}>

                        <Skill icon={<FontAwesomeIcon icon={faCode}/>}
                               title={'HTML/CSS'}
                               description={'I know everything you need to make a layout of any complexity, worked with sass, module css, styled component, material ui '}/>
                        <Skill icon={<FontAwesomeIcon icon={faSquareJs}/>}
                               title={'JS'} description={'I understand the basics of Javascript, I know what a closure is, array methods, Promises, Typescript'}/>
                        <Skill icon={<FontAwesomeIcon icon={faReact}/>}
                               title={'REACT'} description={'I understand how React applications are built, I work with Redux, function component, Hoc, useState, useEffect'}/>
                    </div>
                </div>
            </div>
        </Slide>
    )
}