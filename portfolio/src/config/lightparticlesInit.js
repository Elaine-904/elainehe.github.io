import { loadFull } from "tsparticles";
import lightParticles from '../config/lightParticles';

const lightparticlesInit = async (main) => {
    await loadFull(main);
    // set the initial particle options
    main.options = lightParticles;
    // define a function to update the particle options
    const updateOptions = (newOptions) => {
        main.options = newOptions;
    };
    // expose the updateOptions function to the global scope
    window.updateParticleOptions = updateOptions;
};

export default lightparticlesInit;