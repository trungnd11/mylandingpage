/* eslint-disable react/style-prop-object */
/* eslint-disable no-restricted-globals */
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { zoomInUp } from "react-animations";
import styled, { keyframes, css } from "styled-components";
import { InView } from "react-intersection-observer";
import { ThemeContext } from '@/components/ContextTheme/ContextTheme';
import { OffsetModel } from '@/model/OffsetModel';
import { offsetDefault } from '@/components/container/Container';

const titleInAnimation = keyframes`${zoomInUp}`;

const Content = styled.div`
  animation: ${(prop: { animate: boolean }) =>
    prop.animate && css`2s ${titleInAnimation} forwards`};
`;

function Home(prop: any, ref: any) {
  const height = screen.height / 1.5;
  const width = screen.width <= 820 ? screen.width : (screen.width * 80) / 100;
  const { theme } = useContext(ThemeContext);
  const [offset, setOffset] = useState<OffsetModel>(offsetDefault);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useImperativeHandle(ref, () => offset, [offset]);

  useEffect(() => {
    const canvas: any = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    const H = height;
    const W = width;
    let dots: any = [];
    canvas.width = W;
    canvas.height = H;

    const DOT = {
      color: "rgb(256,256,256,0.7)",
      colorLine: "rgb(256,256,256,0.5)",
      count: 40,
      vX: 3,
      vY: 3,
      range: 150,
    };
    const gradient = context.createLinearGradient(0, 0, W, H);
    gradient.addColorStop(0, "#5ca6faf8");
    gradient.addColorStop(1, "#8127f7b2");

    class Dot {
      x: any;
      y: any;
      vx: any;
      vy: any;
      r: any;
      dotsNears: any;
      constructor(x: any, y: any, vx: any, vy: any, r: any) {
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
        this.dotsNears.forEach((dotNear: any) => {
          context.beginPath();
          context.moveTo(this.x, this.y);
          context.lineTo(dotNear.x, dotNear.y);
          context.lineWidth = (DOT.range - dotNear.d) * (2 / DOT.range);
          context.strokeStyle = DOT.colorLine;
          context.stroke();
        });
      }

      update(dots: any) {
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
        dots.forEach((dot: any) => {
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
          (dot: any) =>
            dot.x + dot.r > 0 &&
            dot.x - dot.r < W &&
            dot.y + dot.r > 0 &&
            dot.y - dot.r < H
        );
      }
      dots.forEach((dot: any) => {
        dot.update(dots);
      });
    }

    init();
    animate();

    canvas.addEventListener("click", function (event: any) {
      for (let i = 0; i < 3; i++) {
        const r = Math.random() * 3 + 3;
        const positionX = event.offsetX;
        const positionY = event.offsetY;
        const vx = (Math.random() - 0.5) * DOT.vX;
        const vy = (Math.random() - 0.5) * DOT.vY;
        dots.push(new Dot(positionX, positionY, vx, vy, r));
      }
    });
  }, [height, width]);

  useEffect(() => {
    const offsetDiv: HTMLDivElement | any =
      document.getElementById("home");
    if (offsetDiv) {
      setOffset(() => ({
        offsetHeight: offsetDiv.offsetHeight,
        offsetTop: offsetDiv.offsetTop,
      }));
    }
  }, []);

  return (
    <InView>
      {({ ref, inView }) => (
        <div ref={ref} id="home" className="wapper-home">
          <div className="water-effect jquery-ripples">
            <canvas
              ref={canvasRef}
              id="canvas"
              style={{ position: "absolute", inset: "0px", zIndex: "1" }}
            />
          </div>
          <Content
            animate={inView}
            className={`content ${theme === "dark" ? "content-dark" : ""}`}
          >
            <h5>
              Hello, my name is <strong>Trung</strong>
            </h5>
            <h1>
              <span>I'm a </span>
              <span className="waviy">
                <span className="run-text">D</span>
                <span className="run-text">e</span>
                <span className="run-text">v</span>
                <span className="run-text">e</span>
                <span className="run-text">l</span>
                <span className="run-text">o</span>
                <span className="run-text">p</span>
                <span className="run-text">e</span>
                <span className="run-text">r</span>
              </span>
            </h1>
            <p>
              I'm a Full-Stack Web Developer with extensive experience for over
              5 years. My expertise is to create and design Websites, Wallet, ERP for
              Enterprise and many more...
            </p>
            <div className="wapper-btn">
              <a
                href="#project"
                className="custom-btn btn-12"
                style={{ marginRight: "20px" }}
              >
                <span>Click!</span>
                <span>Project</span>
              </a>
              <a href="#about" className="custom-btn btn-12">
                <span>Click!</span>
                <span>Hire Me</span>
              </a>
            </div>
          </Content>
        </div>
      )}
    </InView>
  );
}

export default forwardRef(Home);
