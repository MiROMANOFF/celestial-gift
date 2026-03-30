// Плавный скролл
function scrollToCards() {
  document.getElementById('cards-section').scrollIntoView({ behavior: 'smooth' });
}

// Анимация карточек при скролле
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// Эффект мерцающих звезд
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const stars = [];
for(let i=0;i<150;i++){
  stars.push({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*1.5,
    dx: (Math.random()-0.5)*0.2,
    dy: (Math.random()-0.5)*0.2,
    alpha: Math.random(),
    dalpha: Math.random()*0.02
  });
}

function animate(){
  ctx.clearRect(0,0,w,h);
  for(let s of stars){
    s.alpha += s.dalpha;
    if(s.alpha>1){ s.alpha=1; s.dalpha*=-1; }
    if(s.alpha<0){ s.alpha=0; s.dalpha*=-1; }
    s.x += s.dx; s.y += s.dy;
    if(s.x<0)s.x=w; if(s.x>w)s.x=0;
    if(s.y<0)s.y=h; if(s.y>h)s.y=0;
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize',()=>{
  w=canvas.width=window.innerWidth;
  h=canvas.height=window.innerHeight;
});