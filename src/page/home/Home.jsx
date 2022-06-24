/* eslint-disable react/style-prop-object */
/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react';
import ReactTextTransition from "react-text-transition";
import './home.scss';

export default function Home() {
  const height = screen.height;
  const width = screen.width;

  const [text, setText] = useState({ value: 'Developer' });

  useEffect(() => {
    const valueTime = setTimeout(() => {
      setText({ value: "Developer" })
    }, 2000);
    return () => clearTimeout(valueTime);
  }, [text]);

  useEffect(() => {
    return () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    const H = height;
    const W = width;
    let dots = [];
    canvas.width = W;
    canvas.height = H;

    const DOT = {
      color: "rgb(256,256,256,0.7)",
      colorLine: "rgb(256,256,256,0.5)",
      count: 40,
      vX: 3,
      vY: 3,
      range: 150
    };
    const gradient = context.createLinearGradient(0, 0, W, H);
    gradient.addColorStop(0, "#5ca6faf8");
    gradient.addColorStop(1, "#8127f7b2");

    class Dot {
      constructor(x, y, vx, vy, r) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.dotsNears = [];
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fillStyle = DOT.color;
        context.fill();
        this.dotsNears.forEach((dotNear) => {
          context.beginPath();
          context.moveTo(this.x, this.y);
          context.lineTo(dotNear.x, dotNear.y);
          context.lineWidth = (DOT.range - dotNear.d) * (2 / DOT.range);
          context.strokeStyle = DOT.colorLine;
          context.stroke();
        });
      }

      update(dots) {
        if (this.x - this.r >= W) {
          this.x = 0 - this.r;
          this.vy = (Math.random() - 0.5) * DOT.vY;
        }
        if (this.x + this.r < 0) {
          this.x = W + this.r;
          this.vy = (Math.random() - 0.5) * DOT.vY;
        }
        if (this.y - this.r >= H) {
          this.y = 0 - this.r;
          this.vx = (Math.random() - 0.5) * DOT.vX;
        }
        if (this.y + this.r < 0) {
          this.y = H + this.r;
          this.vx = (Math.random() - 0.5) * DOT.vX;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.dotsNears = [];
        dots.forEach((dot) => {
          if (dot === this) return;
          const d = Math.sqrt((this.x - dot.x) ** 2 + (this.y - dot.y) ** 2);
          if (d < DOT.range) {
            this.dotsNears.push({ x: dot.x, y: dot.y, d: d });
          }
        });
        this.draw();
      }
    }

    function init() {
      for (let i = 0; i < DOT.count; i++) {
        const r = Math.random() * 3 + 3;
        const positionX = Math.random() * W;
        const positionY = Math.random() * H;
        const vx = (Math.random() - 0.5) * DOT.vX;
        const vy = (Math.random() - 0.5) * DOT.vY;
        dots.push(new Dot(positionX, positionY, vx, vy, r));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      if (dots.length > DOT.count) {
        dots = dots.filter(
          (dot) =>
            dot.x + dot.r > 0 &&
            dot.x - dot.r < W &&
            dot.y + dot.r > 0 &&
            dot.y - dot.r < H
        );
      }
      dots.forEach((dot) => {
        dot.update(dots);
      });
    }

    init();
    animate();

    canvas.addEventListener("click", function (event) {
      for (let i = 0; i < 3; i++) {
        const r = Math.random() * 3 + 3;
        const positionX = event.offsetX;
        const positionY = event.offsetY;
        const vx = (Math.random() - 0.5) * DOT.vX;
        const vy = (Math.random() - 0.5) * DOT.vY;
        dots.push(new Dot(positionX, positionY, vx, vy, r));
      }
    });

    };
  }, [height, width]);

  return (
    <div className="wapper-home">
      <div className="water-effect jquery-ripples">
        <canvas
          id='canvas'
          width="1140"
          height="943"
          style={{ position: 'absolute', inset: '0px', zIndex: '1' }}
        />
      </div>
      <div className="content">
        <h5>Hello, my name is <strong>Trung</strong></h5>
        <h1>
          <span>I'm a </span>
          <span className='waviy'>
            {text && `${text.value}`.split("").map((n, i) => (
            <ReactTextTransition
              key={i}
              children={n}
              delay={i * 200}
              className="big"
              overflow
              inline
            />
          ))}
          </span>
        </h1>
        <p>I'm a Full-Stack Web Developer with extensive experience for over 2 years. My expertise is to create  and design Websites, Apps, Mockups and many more...
        </p>
        <button className="custom-btn btn-12"><span>Click!</span><span>Project</span></button>
        <button className="custom-btn btn-12"><span>Click!</span><span>Hire Me</span></button>
      </div>
    </div>
  );
}
