import React, { useEffect, useState } from 'react';
import '../styles/typing.css'

const Typing = () => {
    const [text, setText] = useState('');
    const string = "WELCOME TO ELAINE'S PORTFOLIO";
    useEffect(() => {
        const timeout = setTimeout(() => {
            setText(string.slice(0, text.length + 1))
        }, 100)
        return () => clearTimeout(timeout);
    }, [text])
    return (
        <div id="landingtext">{text}</div>
    )
}

export default Typing;