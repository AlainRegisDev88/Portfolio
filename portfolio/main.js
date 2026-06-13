// Neural Canvas
const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');
let W, H, nodes = [], animId;
const NODE_COUNT = 60;

function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}

function initNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
            x: Math.random() * W, y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.5 + 0.5, pulse: Math.random() * Math.PI * 2
        });
    }
}

function drawNeural() {
    ctx.clearRect(0, 0, W, H);
    const t = Date.now() * 0.001;

    nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.pulse += 0.02;
    });

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 120) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 120) * 0.12})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }
    // Draw nodes
    nodes.forEach(n => {
        const pulse = 0.7 + Math.sin(n.pulse) * 0.3;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${pulse * 0.4})`;
        ctx.fill();
    });

    animId = requestAnimationFrame(drawNeural);
}

resizeCanvas(); initNodes(); drawNeural();
window.addEventListener('resize', () => { resizeCanvas(); initNodes() });

// Reduce motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cancelAnimationFrame(animId);
    canvas.style.display = 'none';
}

// Sidebar active state + scroll spy
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');

function updateActive() {
    let current = '';
    sections.forEach(s => {
        const top = s.offsetTop - 100;
        if (window.scrollY >= top) current = s.id;
    });
    navItems.forEach(n => {
        n.classList.toggle('active', n.getAttribute('href') === '#' + current);
    });
}

window.addEventListener('scroll', updateActive, { passive: true });

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
    });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Animate skill bars when visible
const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                setTimeout(() => { bar.style.width = bar.dataset.w + '%' }, 200);
            });
            barObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-cat').forEach(c => barObserver.observe(c));

// Personality bars
const traits = [
    { label: 'Curiosity', val: 95 }, { label: 'Discipline', val: 88 },
    { label: 'Creativity', val: 80 }, { label: 'Adaptability', val: 85 }, { label: 'Teamwork', val: 90 }
];
const pbContainer = document.getElementById('personality-bars');
if (pbContainer) {
    pbContainer.innerHTML = traits.map(t => `
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;color:var(--text2)">
        <span>${t.label}</span><span style="color:var(--text3);font-family:var(--font-mono)">${t.val}%</span>
      </div>
      <div style="height:2px;background:var(--border2);border-radius:2px">
        <div style="height:100%;background:var(--text);border-radius:2px;width:0%;transition:width 1.2s cubic-bezier(0.16,1,0.3,1)" data-pw="${t.val}"></div>
      </div>
    </div>
  `).join('');
    const pbObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.querySelectorAll('[data-pw]').forEach(b => {
                    setTimeout(() => { b.style.width = b.dataset.pw + '%' }, 300);
                });
                pbObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });
    pbObs.observe(pbContainer);
}

// Mobile sidebar
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('show');
}
function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
}

// Contact form
function handleSubmit(e) {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    msg.style.display = 'block';
    msg.textContent = '✓ Message received — I\'ll get back to you soon.';
}
