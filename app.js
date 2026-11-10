      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  const canvas = document.getElementById('stardustCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
    const particles = Array.from({ length: 34 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -Math.random() * 0.28 - 0.08,
      alpha: Math.random() * 0.45 + 0.15,
      isGold: Math.random() > 0.5
    }));
    function animateStardust() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold
          ? `rgba(194, 160, 104, ${p.alpha})`
          : `rgba(145, 116, 185, ${p.alpha})`;
        ctx.fill();
      }
      requestAnimationFrame(animateStardust);
    }
    animateStardust();
  }
});
