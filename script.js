/* Общие стили */
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #f5f5f5;
  background: #000;
  scroll-behavior: smooth;
  overflow-x: hidden;
  position: relative;
}

/* Мерцающее звездное небо */
.stars {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: transparent;
  z-index: -1;
  overflow: hidden;
}

.stars::after {
  content: '';
  position: absolute;
  width: 2px; height: 2px;
  background: white;
  border-radius: 50%;
  box-shadow: 
    50px 100px white, 200px 300px white, 400px 50px white, 600px 200px white,
    800px 400px white, 1000px 150px white, 1200px 350px white;
  animation: twinkle 3s infinite alternate;
}

@keyframes twinkle {
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
}

/* Hero-секция */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%);
  padding: 20px;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 2rem;
  max-width: 600px;
  margin: 0 0 40px;
  line-height: 1.4;
}

.scroll-down {
  font-size: 2rem;
  cursor: pointer;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(10px); }
  60% { transform: translateY(5px); }
}

/* Секция карточек */
.cards-section {
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.group h2 {
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
}

.card {
  background: #111;
  border-radius: 10px;
  padding: 15px 20px;
  min-width: 150px;
  max-width: 100%;
  flex: 1 1 150px;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Особое выделение созвездий Дева и Рак */
.card.special {
  background: #2a2a50;
  border: 2px solid #f5f5a5;
}

/* Адаптив */
@media (max-width: 768px) {
  .hero h1 { font-size: 1.6rem; }
  .group { gap: 15px; }
  .card { min-width: 120px; }
}

@media (max-width: 480px) {
  .hero h1 { font-size: 1.4rem; }
  .scroll-down { font-size: 1.5rem; }
  .card { flex: 1 1 100%; }
}
