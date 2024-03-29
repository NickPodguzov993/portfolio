import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../styles/Container.module.scss';
import TitleName from "../Components/TitleName/TitleName";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Fade} from "react-awesome-reveal";

export const Footer = () => {

    return (
        <Fade>
            <div id='footer' className={style.footerBlock}>
                <div className={`${styleContainer.mainContainer} ${style.footerContainer}`}>
                    <TitleName title={'My network'}/>
                    <div className={style.footer}>
                        <a href="https://t.me/nickobullin333"><FontAwesomeIcon className={style.icon}
                                                                               icon={faTelegram}/></a>
                        <a href="https://github.com/NickPodguzov993"><FontAwesomeIcon className={style.icon}
                                                                                      icon={faGithub}/></a>
                        <a href="mailto:verytallman993@gmail.com"><FontAwesomeIcon className={style.icon}
                                                                                                  icon={faEnvelope}/></a>
                    </div>
                </div>
            </div>
        </Fade>
    )
}