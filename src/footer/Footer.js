import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../styles/Container.module.css';




export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className= {`${styleContainer.mainContainer} ${style.footerContainer}`}>
                <h2>My network</h2>
                <div className={style.footer}>
                    <div>inst</div>
                    <div>git</div>
                    <div>telegram</div>
                    <div>vk</div>
                </div>
            </div>
        </div>
    )
}