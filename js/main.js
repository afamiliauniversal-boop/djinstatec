/* ══════════════════════════════════════════════
   DJ INSTATEC — main.js
══════════════════════════════════════════════ */

// ── PARTÍCULAS (canvas) ───────────────────────
(function initParticles() {
  const canvas = document.getElementById('canvas-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], animId;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = ['#00E676', '#27AE60', '#1E5FA8', '#E67E22'];

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    return {
      x: rand(0, W),
      y: rand(0, H),
      vx: rand(-0.4, 0.4),
      vy: rand(-0.4, 0.4),
      r: rand(1, 2.5),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: rand(0.3, 0.9),
    };
  }

  const N = Math.min(120, Math.floor(W * H / 12000));
  for (let i = 0; i < N; i++) particles.push(createParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // linhas de conexão
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(46,125,50,${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // pontos
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2,'0');
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  }
  draw();
})();


// ── NAVBAR SCROLL ─────────────────────────────
(function initNavbar() {
  const nav = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  toggle?.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // fechar ao clicar num link
  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();


// ── CONTADORES ANIMADOS ───────────────────────
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let start = 0;
      const duration = 1800;
      const step = 16;
      const inc = target / (duration / step);

      const timer = setInterval(() => {
        start = Math.min(start + inc, target);
        el.textContent = Math.floor(start) + suffix;
        if (start >= target) clearInterval(timer);
      }, step);

      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
})();


// ── REVEAL ON SCROLL ──────────────────────────
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (entry.target.dataset.delay || 0) * 1);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => obs.observe(el));
})();


// ── SLIDER DEPOIMENTOS ────────────────────────
(function initSlider() {
  const track = document.querySelector('.depoimentos-track');
  const cards = document.querySelectorAll('.depoimento-card');
  const btnPrev = document.getElementById('slider-prev');
  const btnNext = document.getElementById('slider-next');
  if (!track || !cards.length) return;

  let current = 0;
  const perView = window.innerWidth < 700 ? 1 : window.innerWidth < 1000 ? 2 : 3;
  const max = Math.max(0, cards.length - perView);

  function go(idx) {
    current = Math.max(0, Math.min(idx, max));
    const cardW = cards[0].offsetWidth + 24; // gap
    track.style.transform = `translateX(-${current * cardW}px)`;
  }

  btnPrev?.addEventListener('click', () => go(current - 1));
  btnNext?.addEventListener('click', () => go(current + 1));

  // auto-play
  setInterval(() => go(current >= max ? 0 : current + 1), 5000);
})();


// ── FORMULÁRIO ────────────────────────────────
(function initForm() {
  const form = document.getElementById('form-contato');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const tel = form.telefone.value.trim();
    const servico = form.servico.value;
    const msg = form.mensagem.value.trim();

    if (!nome || !tel) {
      showToast('⚠ Preencha nome e telefone.', 'erro');
      return;
    }

    // Monta mensagem para WhatsApp
    const texto = `Olá, D&J Instatec! Meu nome é *${nome}*.\nTelefone: ${tel}\nServiço de interesse: *${servico || 'Não especificado'}*\n\n${msg}`;
    const url = `https://wa.me/5511992137770?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
    showToast('✅ Redirecionando para o WhatsApp!', 'ok');
    form.reset();
  });

  function showToast(msg, tipo) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.style.cssText = `
        position:fixed; bottom:6rem; right:2rem; z-index:9999;
        background:${tipo === 'ok' ? '#27AE60' : '#E67E22'};
        color:#fff; font-family:'Rajdhani',sans-serif; font-weight:700;
        padding:0.8rem 1.5rem; border-radius:8px; font-size:1rem;
        box-shadow:0 4px 20px rgba(0,0,0,0.4);
        transition:opacity 0.4s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 3500);
  }
})();


// ── PARALLAX HERO ─────────────────────────────
(function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.3}px)`;
  }, { passive: true });
})();


// ── SMOOTH SCROLL ─────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
