import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../styles/Container.module.scss';
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

                    <Skill icon={<FontAwesomeIcon icon={faCode}/>}
                           title={'HTML/CSS'} description={'sdjlkfjslj sdjflkdsjf skdljflksdjf sdjflskd asadasfasf' +
                    'asfasfasdasdasda ' +
                    'asfasfasdasd asdasdas asdsa asdadasd  asdsada '}/>
                    <Skill icon={<FontAwesomeIcon icon={faSquareJs}/>}
                           title={'JS'} description={'sdjlkfjslj sdjflkdsjf skdljflksdjf sdjflskd asadasfasf' +
                    'asfasfasdasdasda ' +
                    'asfasfasdasd asdasdas asdsa asdadasd  asdsada '}/>
                    <Skill icon={<FontAwesomeIcon icon={faReact}/>}
                           title={'REACT'} description={'sdjlkfjslj sdjflkdsjf skdljflksdjf sdjflskd asadasfasf' +
                    'asfasfasdasdasda ' +
                    'asfasfasdasd asdasdas asdsa asdadasd  asdsada '}/>
                </div>
            </div>
        </div>
    )
}