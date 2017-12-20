import getRandomColor from './RandomColor.js';
import Particle from './Particle.js';

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d'),
    particleArray = [],
    mouse = {};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener('resize', (event) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function init() {
    particleArray = [];
    for(let i = 0; i < 50; i += 1 ) {
        let radius = (Math.random() * 2) + 1,
            x = canvas.width / 2,
            y = canvas.height / 2,
            randomColor = getRandomColor();
        particleArray.push(new Particle(x,y,radius,randomColor,c,mouse,particleArray));
    }
}

export default function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255,255,255,0.05)';
    c.fillRect(0,0, window.innerWidth, window.innerHeight); 
    particleArray.map( p => p.update());
}

init();