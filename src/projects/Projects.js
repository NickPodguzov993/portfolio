import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../styles/Container.module.scss';
import {Project} from "./project/Project";
import TitleName from "../Components/TitleName/TitleName";
import todoImage from '../assets/Image/todo.jpeg'
import socialImage from '../assets/Image/social.jpg'


export const Projects = () => {
    const todoImg = {
        backgroundImage:  `url(${todoImage})`
    }
    const socialImg = {
        backgroundImage:`url(${socialImage})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.mainContainer} ${style.projectContainer}`}>
                <TitleName title={'Projects'}/>
                <div className={style.projects}>
                    <Project title={'Todolist'}
                             styles={todoImg}
                             description={'sdjlkfjslj sdjflkdsjf skdljflksdjf sdjflskd asadasfasf' +
                             'asfasfasdasdasda ' +
                             'asfasfasdasd asdasdas asdsa asdadasd  asdsada '}/>
                    <Project  title={'Social network'}
                              styles={socialImg}
                              description={'sdjlkfjslj sdjflkdsjf skdljflksdjf sdjflskd asadasfasf' +
                              'asfasfasdasdasda ' +
                              'asfasfasdasd asdasdas asdsa asdadasd  asdsada '}/>
                </div>
            </div>
        </div>
    )
}