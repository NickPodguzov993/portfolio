import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../styles/Container.module.scss';
import {Project} from "./project/Project";
import TitleName from "../Components/TitleName/TitleName";
import todoImage from '../assets/Image/todo.jpeg'
import socialImage from '../assets/Image/social.jpg'
import pigGame from '../assets/Image/pigGame.png'
import Slide from "react-awesome-reveal";


export const Projects = () => {
    const todoImg = {
        backgroundImage: `url(${todoImage})`
    }
    const socialImg = {
        backgroundImage: `url(${socialImage})`
    }
    const pigsGame = {
        backgroundImage: `url(${pigGame})`
    }

    return (
        <Slide triggerOnce={true}>
            <div id='projects' className={style.projectsBlock}>
                <div className={`${styleContainer.mainContainer} ${style.projectContainer}`}>
                    <TitleName title={'Projects'}/>
                    <div className={style.projects}>
                        <Project title={'Todolist'}
                                 workLink={'https://github.com/NickPodguzov993/todo-self'}
                                 styles={todoImg}
                                 description={'An application made on React using Typescript, Redux. It will be useful for those who want to plan their day or constantly forget important things '}/>
                        <Project title={'Social Network'}
                                 workLink={''}
                                 styles={socialImg}
                                 description={'Application made in React using Typescript, Redux. Allows you to chat with friends online, as well as find new ones'}/>
                        <Project title={'Pig Game'}
                                 workLink={'https://nickpodguzov993.github.io/pigGame/'}
                                 styles={pigsGame}
                                 description={'Application made in React using Typescript, Redux. Allows you to chat with friends online, as well as find new ones'}/>
                    </div>
                </div>
            </div>
        </Slide>
    )
}