import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../styles/Container.module.css';
import {Project} from "./project/Project";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.mainContainer} ${style.projectContainer}`}>
                <h2>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Todolist'} description={'sdjlkfjslj sdjflkdsjf skdljflksdjf sdjflskd'}/>
                    <Project  title={'Social network'} description={'sdjlkfjslj sdjuilk;ui io;lio; oilio'}/>
                    <Project  title={'ChessMate'} description={'sdjlkfjslj qqweqw[pouoi'}/>
                </div>
            </div>
        </div>
    )
}