import React from 'react';
import style from './main.module.scss';
import styleContainer from '../styles/Container.module.scss';
import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


export const Main = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div className={style.main}>
            <div className={styleContainer.mainContainer}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        'z-index': -1,
                        background: {},
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1200,
                                },
                                value: 70,
                            },
                            opacity: {
                                value: 0.2,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: {min: 1, max: 5},
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <div>
                    <span>Hi There</span>
                    <h1 className={style.mainTitle}>I am Nikolay <span className={style.lastName}>Podguzov</span></h1>
                    <p className={style.discription}>
                        <ReactTypingEffect text={["Frontend Developer"]}/>
                    </p>
                </div>
                <div className={style.border}>

                    <Tilt className="Tilt" options={{max: 25, transition: true}}>
                        <div className={style.photo}></div>
                    </Tilt>
                </div>

            </div>
        </div>
    )
}