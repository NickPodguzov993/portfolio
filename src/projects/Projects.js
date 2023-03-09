import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../styles/Container.module.scss';
import {Project} from "./project/Project";
import TitleName from "../Components/TitleName/TitleName";
import todoImage from '../assets/Image/todo.jpeg'
import socialImage from '../assets/Image/social.jpg'
import pigGame from '../assets/Image/pigGame.png'
import bank from '../assets/Image/bank.png'
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
    const bankImage = {
        backgroundImage: `url(${bank})`
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
                       {/* <Project title={'Social Network'}
                                 workLink={''}
                                 styles={socialImg}
                                 description={'Application made in React using Typescript, Redux. Allows you to chat with friends online, as well as find new ones'}/>*/}
                        <Project title={'Pig Game'}
                                 workLink={'https://nickpodguzov993.github.io/pigGame/'}
                                 styles={pigsGame}
                                 description={'Game on the vanilla js The purpose of which is the purpose of determining the winner by throwing a cube'}/>
                        <Project title={'Simply bank app'}
                                 workLink={'https://nickpodguzov993.github.io/SimplyBankApp/'}
                                 styles={bankImage}
                                 description={'A simple banking application with the ability to transfer funds between accounts, delete an account and the possibility of a loan'}/>
                    </div>
                </div>
            </div>
        </Slide>
    )
}