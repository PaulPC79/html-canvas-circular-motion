import getDistance from './PythagoreanUtil.js';
import {rotate,resolveCollision} from './UtilElasticCollision.js';
import getRandomInt from './RandomIntFromRange';

export default class Particle {
    constructor(x,y,radius,color,context,mouse,particles) {
        this._originX = x;
        this._originY = y;
        this._x = x;
        this._y = y;
        this._velocity = {
            x: 0.05,
            y: 0.05
        };
        this._radius = radius;
        this._color = color;
        this._context = context;
        this._mouse = mouse;
        this._particles = particles;
        this._radians = Math.random() * Math.PI * 2;
        this._distanceFromCenter = getRandomInt(50,120);
        this._lastMouse = { x: this._x, y: this._y };
    }

    draw(lastPoint, lastMouse) {
        this._context.beginPath();
        this._context.strokeStyle = this._color;
        this._context.lineWidth = this.radius;
        this._context.moveTo(lastPoint.x,lastPoint.y);
        this._context.lineTo(this._x,this._y);
        this._context.stroke();
        this._context.closePath();
    }

    update() {
        const lastPoint = { x: this._x, y: this._y };
        this._radians += this._velocity.x;

        // Drag Effect
        this._lastMouse.x += (this._mouse.x - this._lastMouse.x) * 0.05;
        this._lastMouse.y += (this._mouse.y - this._lastMouse.y) * 0.05;

        // Cicular Motion
        this._x = this._lastMouse.x +  + Math.cos(this._radians) * this._distanceFromCenter;
        this._y = this._lastMouse.y + Math.sin(this._radians) * this._distanceFromCenter;

        this.draw(lastPoint);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get velocityX() {
        return this._velocity.x;
    }

    get velocityY() {
        return this._velocity.y;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get context() {
        return this._context;
    }
    
    set context(value) {
        this._context = value;
    }
    
    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get velocity() {
        return this._velocity;
    }

    get mouse() {
        return this._mouse;
    }

    set mouse(value) {
        this._mouse = value;
    }

    get particles() {
        return this._particles;
    }

    set particles(value) {
        this._particles = value;
    }
}