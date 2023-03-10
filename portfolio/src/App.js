import React, { useEffect, useState } from 'react';
import './App.css';
import particlesConfig from '../src/config/configParticles';
import Particles from "react-tsparticles";
import LoadingPage from "./component/LoadingPage";
import Typing from './component/Typing';
import particlesInit from './config/particlesInit';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6200)
  }, [])

  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };

  return (
    <>
      {loading === false ?
        (<div className="App">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
          />
          <Typing />
        </div>) : <LoadingPage />}
    </>
  );
}

export default App;