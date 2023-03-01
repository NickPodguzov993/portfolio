import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../styles/Container.module.scss';
import TitleName from "../Components/TitleName/TitleName";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


export const Footer = () => {

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.mainContainer} ${style.footerContainer}`}>
                <TitleName title={'My network'}/>
                <div className={style.footer}>
                    <a href="https://t.me/nickobullin333"><FontAwesomeIcon className={style.icon} icon={faTelegram}/></a>
                    <a href="https://github.com/NickPodguzov993"><FontAwesomeIcon className={style.icon} icon={faGithub}/></a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox"><FontAwesomeIcon className={style.icon} icon={faEnvelope}/></a>
                </div>
            </div>
        </div>
    )
}