import React, { useState, useEffect } from 'react';
import '../styles/loading.css'

const LoadingPage = () => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (percent < 100) {
                setPercent(percent + 20);
            }
        }, 100000);

        return () => clearInterval(interval);
    }, [percent]);

    return (
        <>
            <div id='center'>
                <div id="loadingText">
                    <p>loading {percent}% </p>
                </div>
                <div id="barBox">
                    <div id="bar" style={{ width: `${percent}%` }}></div>
                </div>
            </div>
        </>
    );
};

export default LoadingPage;
