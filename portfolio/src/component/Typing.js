import React, { useEffect, useState } from 'react';
import '../styles/typing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faStar } from '@fortawesome/free-solid-svg-icons'
import lightparticlesInit from '../config/lightparticlesInit';
import blueparticlesInit from '../config/blueparticlesInit';
import lightParticles from '../config/lightParticles';
import blueParticles from '../config/blueParticles';
import particlesInit from '../config/particlesInit';
import Particles from "react-tsparticles";
import particlesConfig from '../config/configParticles';

const Typing = () => {
    const [over, setOver] = useState(false);
    const [text, setText] = useState('');
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const string = "WELCOME TO ELAINE'S PORTFOLIO";



    const handleClick = () => {
        setActive(!active);
    };

    const handleClick2 = () => {
        setActive2(!active2);
    };
    useEffect(() => {
        const timeout = setTimeout(() => {
            setText(string.slice(0, text.length + 1))
        }, 100);
        return () => clearTimeout(timeout);
    }, [text]);

    return (
        <>
            <Particles
                id="newparticles"
                init={active ? lightparticlesInit : ((active === false && active2) ? blueparticlesInit : particlesInit)}
                options={active ? lightParticles : ((active === false && active2) ? blueParticles : particlesConfig)}
            />


            <div id="landingtext">{text}</div>
            <div id='themeBtn'>
                <button
                    onClick={handleClick}
                    onMouseOver={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}
                >
                    <FontAwesomeIcon
                        icon={faPalette}
                        size="xl"
                        className='themeIcon'
                        style={
                            over ? { opacity: 0.6, fontSize: "1.8em" } : {}
                        }
                    />
                </button>
                <button
                    onClick={handleClick2}
                    onMouseOver={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}
                >
                    <FontAwesomeIcon
                        icon={faStar}
                        size="xl"
                        className='themeIcon2'
                        style={
                            over ? { opacity: 0.6, fontSize: "1.8em" } : {}
                        }
                    />
                </button>

            </div>

        </>
    );
};
export default Typing;