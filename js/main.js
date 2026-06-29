import { projects } from './projects.js';
import { DevTerminal } from './terminal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Terminal
  const terminal = new DevTerminal('terminal-nexus', 'terminal-input', 'terminal-output');

  // 2. Typewriter Effect
  initTypewriter();

  // 3. Render Projects Grid & Filters
  initProjects();

  // 4. Scroll Interactions (Header shrink & Active link highlighting)
  initScrollEffects();

  // 5. Mobile Navigation Menu Toggle
  initMobileMenu();



  // 7. Load Live GitHub Stats
  loadGitHubData();
});

/* --- TYPEWRITER EFFECT --- */
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const lines = [
    "Full-Stack Software Engineer",
    "Product Builder & Open Source Contributor",
    "Kotlin, Flutter & React Craftsman",
    "AI-Powered Document Pipeline Developer"
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function tick() {
    const currentLine = lines[lineIndex];
    
    if (isDeleting) {
      target.textContent = currentLine.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      target.textContent = currentLine.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    // Add trailing blink cursor styling
    target.innerHTML += '<span class="typewriter-cursor" style="color: var(--accent-primary); font-weight: bold; animation: blink 0.8s infinite;">|</span>';

    if (!isDeleting && charIndex === currentLine.length) {
      // Pause at full word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(tick, typingSpeed);
  }

  // Add blink keyframes to style
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Start the typewriter loop
  setTimeout(tick, 1000);
}

/* --- PROJECTS GRID & DETAILS MODAL --- */
function initProjects() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-display-body');

  if (!grid) return;

  // Render cards based on active filter
  function renderProjects(filterValue = 'all') {
    grid.innerHTML = '';
    
    const filteredProjects = filterValue === 'all' 
      ? projects 
      : projects.filter(p => p.category === filterValue);

    filteredProjects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card glass-panel';
      card.setAttribute('data-id', proj.id);

      // Tech tags string
      const tagsHTML = proj.techStack.map(t => `<span class="project-tag">${t}</span>`).join('');

      card.innerHTML = `
        <div class="project-category">${proj.category}</div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-links">
          <span class="project-links-btn" style="color: var(--accent-primary); font-weight: 600; display: flex; align-items: center; gap: 0.25rem;">
            Explore details ➜
          </span>
        </div>
      `;

      // Open Modal on Card Click
      card.addEventListener('click', () => openProjectModal(proj));

      grid.appendChild(card);
    });
  }

  function openProjectModal(proj) {
    const tagsHTML = proj.techStack.map(t => `<span class="skill-tag">${t}</span>`).join('');
    
    modalBody.innerHTML = `
      <h3 class="modal-title">${proj.title}</h3>
      <div class="modal-subtitle">${proj.subtitle}</div>
      
      <div class="modal-body">
        <div>
          <h4 class="modal-section-title">Overview</h4>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${proj.longDescription}</p>
        </div>

        <div>
          <h4 class="modal-section-title">Key Tech Stack & Specs</h4>
          <div class="skill-tags" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">
            ${tagsHTML}
          </div>
        </div>

        <div>
          <h4 class="modal-section-title">Architecture Metrics</h4>
          <div class="modal-metrics-grid" style="margin-top: 0.5rem;">
            <div class="metric-box">
              <div class="metric-label">Deployment</div>
              <div class="metric-value">Vercel / Firebase Cloud</div>
            </div>
            <div class="metric-box">
              <div class="metric-label">Project Domain</div>
              <div class="metric-value">${proj.category}</div>
            </div>
            ${Object.entries(proj.metrics).map(([key, val]) => `
              <div class="metric-box">
                <div class="metric-label">${key}</div>
                <div class="metric-value">${val}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="margin-top: 1.5rem; display: flex; gap: 2rem;">
          <a href="${proj.liveLink}" target="_blank" class="nav-btn" style="text-shadow: none;">Launch Application</a>
          <a href="${proj.repoLink}" target="_blank" style="display: flex; align-items: center; gap: 0.5rem; font-weight: 600;">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: middle;">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Review Source Repository
          </a>
        </div>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  }

  // Filter Button Clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });

  // Modal Close Events
  if (modalClose) modalClose.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  // Initial render
  renderProjects();
}

/* --- SCROLL INTERACTIONS --- */
function initScrollEffects() {
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // 1. Shrink Header
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // 2. Active Link Highlighting
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentId) {
        link.classList.add('active');
      }
    });
  });
}

/* --- MOBILE MENU --- */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-menu');
  
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
  });

  // Close menu when clicking links
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.textContent = '☰';
    });
  });

  // Mobile navigation CSS helpers dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    @media (max-width: 768px) {
      #nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(13, 10, 26, 0.95);
        backdrop-filter: blur(10px);
        padding: 2rem;
        border-bottom: 1px solid rgba(168, 85, 247, 0.15);
      }
      #nav-menu.active {
        display: block;
      }
      #nav-menu ul {
        flex-direction: column;
        gap: 1.5rem;
      }
      #nav-menu .nav-btn {
        width: 100%;
        text-align: center;
      }
    }
  `;
  document.head.appendChild(style);
}



/* --- LIVE GITHUB STATS LOADER --- */
async function loadGitHubData() {
  const username = 'Rupam852';
  try {
    const profileRes = await fetch(`https://api.github.com/users/${username}`);
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    
    if (profileRes.ok && reposRes.ok) {
      const profile = await profileRes.json();
      const repos = await reposRes.json();
      
      const reposEl = document.getElementById('stat-repos');
      const starsEl = document.getElementById('stat-stars');
      const langEl = document.getElementById('stat-lang');
      
      if (reposEl) reposEl.textContent = profile.public_repos || repos.length;
      
      // Sum stars across all repos
      const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
      if (starsEl) starsEl.textContent = totalStars;
      
      // Calculate top language count
      const langCounts = {};
      repos.forEach(r => {
        if (r.language) {
          langCounts[r.language] = (langCounts[r.language] || 0) + 1;
        }
      });
      
      let topLang = 'TypeScript';
      let maxCount = 0;
      for (const [lang, count] of Object.entries(langCounts)) {
        if (count > maxCount) {
          maxCount = count;
          topLang = lang;
        }
      }
      
      let displayLang = topLang;
      if (topLang === 'TypeScript') displayLang = 'TS';
      if (topLang === 'JavaScript') displayLang = 'JS';
      if (langEl) langEl.textContent = displayLang;
    }
  } catch (err) {
    console.warn('Could not fetch real-time GitHub data, falling back to static stats:', err);
  }
}
