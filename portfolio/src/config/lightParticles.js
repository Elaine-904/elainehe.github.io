const lightParticles = {
    "fullScreen": {
        "enable": true,
        "zIndex": 0
      },
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 1000
          }
        },
        "color": {
          "value": "#000"
        },
        "shape": {
          "type": "triangle",
          "stroke": {
            "width": 0,
            "color": "#000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 0,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 20,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 144.30708547789692,
          "color": "#000",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3.017060304327607,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "bounce",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 2
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "background": {
        "color": "#fff",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
      }
  }
export default lightParticles;