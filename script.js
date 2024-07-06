const canvas = document.getElementById("drawingCanvas");
const context = canvas.getContext("2d");

let canvas_width;
let canvas_height;

const resize = () => {
  canvas_width = canvas.width = window.innerWidth * 0.95;
  canvas_height = canvas.height = window.innerHeight * 0.95;
};

resize();
window.addEventListener("resize", resize);

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.floor(Math.random() * 4 + 1);
    this.radius = 10;
    this.speedX = Math.random() * 3 - 1;
    this.speedY = Math.random() * 3 - 1;
    this.colorDegrees = 0;
    this.color = `hsl(${this.colorDegrees} 100% 50%)`;
    context.fillStyle = this.color;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.radius -= 0.1;
    this.colorDegrees += 20;
  }
  draw(context) {
    if (this.radius > 1) {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fill();
    }
  }
}

const particles = [];

window.addEventListener("mousemove", (event) => {
  particles.push(new Particle(event.offsetX, event.offsetY));
});

function animate() {
  // context.clearRect(0, 0, canvas_width, canvas_height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw(context);
  });
  requestAnimationFrame(animate);
}
animate();
