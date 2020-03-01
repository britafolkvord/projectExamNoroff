const particlesJSON = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#fff", "#fefcd6"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0.2,
                "color": "#fff"
            }
        },
        "opacity": {
            "value": 1,
            "random": true
        },
        "size": {
            "value": 5,
            "random": true
        },
        "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#007ecc",
            "opacity": 0,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
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

            "repulse": {
                "distance": 150,
                "duration": 0.6
            },
            "push": {
                "particles_nb": 20
            }
        }
    },
    "retina_detect": true
}

particlesJS("particles-js", particlesJSON)

