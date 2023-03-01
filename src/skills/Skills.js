import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../styles/Container.module.css';
import {Skill} from "./skill/Skill";
import TitleName from "../Components/TitleName/TitleName";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {  faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.mainContainer} ${style.skillsContainer}`}>
                <TitleName title={'Skills'}/>
                <div className={style.skills}>

                    <Skill icon={<FontAwesomeIcon icon={faCode}/>}  title={'HTML/CSS'} description={'sdjlkfjslj sdjflkdsjf skdljflksdjf sdjflskd'}/>
                    <Skill icon={<FontAwesomeIcon icon={faSquareJs}/>} title={'JS'} description={'sdjlkfjslj sdjuilk;ui io;lio; oilio'}/>
                    <Skill icon={<FontAwesomeIcon icon={faReact}/>} title={'REACT'} description={'sdjlkfjslj qqweqw[pouoi'}/>
                </div>
            </div>
        </div>
    )
}