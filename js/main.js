import { projects } from './projects.js';
import { DevTerminal } from './terminal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme Switcher (Default: Dark Mode)
  initTheme();

  // 2. Initialize Interactive Terminal
  const terminal = new DevTerminal('terminal-nexus', 'terminal-input', 'terminal-output');

  // 3. Typewriter Subtitle
  initTypewriter();

  // 4. Render Projects Grid & Filters
  initProjects();

  // 5. Scroll Interactions (Header, Active Links, Back to top)
  initScrollEffects();

  // 6. Mobile Menu Drawer
  initMobileMenu();

  // 7. Live GitHub Analytics Loader
  loadGitHubData();
});

/* ==========================================================================
   THEME SWITCHER ENGINE (DEFAULT: DARK MODE)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('rupam_theme') || 'dark';

  // Apply stored or default theme
  applyTheme(storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('rupam_theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  updateGitHubWidgets(theme);
}

function updateGitHubWidgets(theme) {
  const graphImg = document.getElementById('github-graph-img');
  const streakImg = document.getElementById('github-streak-img');

  if (theme === 'light') {
    if (graphImg) {
      graphImg.src = 'https://github-readme-activity-graph.vercel.app/graph?username=Rupam852&theme=default&bg_color=ffffff&color=0284c7&line=7c3aed&point=0f172a&area=true&area_color=f1f5f9&hide_border=true';
    }
    if (streakImg) {
      streakImg.src = 'https://github-readme-streak-stats.herokuapp.com/?user=Rupam852&theme=light&hide_border=true&background=FFFFFF&stroke=7C3AED&ring=0284C7&fire=0284C7&currStreakLabel=0F172A&sideLabels=475569&dates=7C3AED&currStreakNum=0284C7&sideNums=0F172A';
    }
  } else {
    if (graphImg) {
      graphImg.src = 'https://github-readme-activity-graph.vercel.app/graph?username=Rupam852&theme=react-dark&bg_color=0f172a&color=06B6D4&line=8B5CF6&point=F8FAFC&area=true&area_color=1E293B&hide_border=true';
    }
    if (streakImg) {
      streakImg.src = 'https://github-readme-streak-stats.herokuapp.com/?user=Rupam852&theme=midnight-purple&hide_border=true&background=0F172A&stroke=8B5CF6&ring=06B6D4&fire=06B6D4&currStreakLabel=F8FAFC&sideLabels=94A3B8&dates=8B5CF6&currStreakNum=06B6D4&sideNums=F8FAFC';
    }
  }
}

/* ==========================================================================
   TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const lines = [
    "Full-Stack Software Engineer",
    "Product Builder & Open-Source Contributor",
    "Polyglot Systems: TypeScript · Python · Kotlin · Flutter",
    "AI-Powered Document Intelligence Architect"
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function tick() {
    const currentLine = lines[lineIndex];

    if (isDeleting) {
      target.textContent = currentLine.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      target.textContent = currentLine.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    // Trailing animated cursor
    target.innerHTML += '<span class="typewriter-cursor" style="color: var(--accent-cyan); font-weight: bold; animation: blink 0.8s infinite;">|</span>';

    if (!isDeleting && charIndex === currentLine.length) {
      typingSpeed = 2200; // Pause at end of sentence
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      typingSpeed = 450;
    }

    setTimeout(tick, typingSpeed);
  }

  // Inject blink animation keyframe if not present
  if (!document.getElementById('cursor-keyframes')) {
    const style = document.createElement('style');
    style.id = 'cursor-keyframes';
    style.innerHTML = `
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  setTimeout(tick, 600);
}

/* ==========================================================================
   PROJECTS SHOWCASE & DETAILS MODAL
   ========================================================================== */
function initProjects() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-display-body');

  if (!grid) return;

  function renderProjects(filterValue = 'all') {
    grid.innerHTML = '';

    const filteredProjects = filterValue === 'all'
      ? projects
      : projects.filter(p => p.category === filterValue);

    filteredProjects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card glass-panel';
      card.setAttribute('data-id', proj.id);

      const hasLiveDemo = proj.liveLink && !proj.liveLink.includes('github.com');
      const tagsHTML = proj.techStack.slice(0, 5).map(t => `<span class="project-tag">${t}</span>`).join('');

      card.innerHTML = `
        <div class="project-header-row">
          <span class="project-category">${proj.category}</span>
          ${hasLiveDemo ? '<span class="project-live-indicator">● Live App</span>' : '<span style="font-size:0.75rem; color:var(--text-tertiary);">Open Source</span>'}
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">${tagsHTML}</div>
        
        <div class="project-actions-row">
          <div class="project-btn-group">
            ${hasLiveDemo ? `
              <a href="${proj.liveLink}" target="_blank" rel="noopener noreferrer" class="card-action-btn" title="Launch Live Demo" onclick="event.stopPropagation();">
                <span>🚀</span> <span>Live App</span>
              </a>
            ` : ''}
            <a href="${proj.repoLink}" target="_blank" rel="noopener noreferrer" class="card-action-btn" title="View Source Code" onclick="event.stopPropagation();">
              <span>🐙</span> <span>GitHub</span>
            </a>
          </div>
          <span class="card-details-prompt">
            <span>Details</span> <span>➜</span>
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
    const hasLiveDemo = proj.liveLink && !proj.liveLink.includes('github.com');

    modalBody.innerHTML = `
      <h3 class="modal-title">${proj.title}</h3>
      <div class="modal-subtitle">${proj.subtitle}</div>
      
      <div>
        <h4 class="modal-section-title">Overview & Architecture</h4>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7;">${proj.longDescription}</p>
      </div>

      <div>
        <h4 class="modal-section-title">Technologies & Stack</h4>
        <div class="skill-tags" style="margin-top: 0.5rem; margin-bottom: 1rem;">
          ${tagsHTML}
        </div>
      </div>

      <div>
        <h4 class="modal-section-title">Architecture Specs & Highlights</h4>
        <div class="modal-metrics-grid">
          <div class="metric-box">
            <div class="metric-label">Deployment</div>
            <div class="metric-value">Vercel / Cloudflare / GCP</div>
          </div>
          <div class="metric-box">
            <div class="metric-label">Domain Category</div>
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

      <div class="modal-actions">
        ${hasLiveDemo ? `
          <a href="${proj.liveLink}" target="_blank" rel="noopener noreferrer" class="btn-primary">
            <span>🚀 Launch Live Demo</span>
          </a>
        ` : ''}
        <a href="${proj.repoLink}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span>View GitHub Repository</span>
        </a>
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

  // Filter clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });

  // Modal close handlers
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

/* ==========================================================================
   SCROLL EFFECTS & NAVIGATION
   ========================================================================== */
function initScrollEffects() {
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    // 1. Header background on scroll
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // 2. Active nav link highlighting
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
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

    // 3. Back to top button visibility
    if (backToTopBtn) {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   MOBILE MENU DRAWER
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-menu');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.textContent = '☰';
    });
  });
}

/* ==========================================================================
   LIVE GITHUB DATA LOADER
   ========================================================================== */
async function loadGitHubData() {
  const username = 'Rupam852';
  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
    ]);

    if (profileRes.ok && reposRes.ok) {
      const profile = await profileRes.json();
      const repos = await reposRes.json();

      const reposEl = document.getElementById('stat-repos');
      const starsEl = document.getElementById('stat-stars');
      const langEl = document.getElementById('stat-lang');

      if (reposEl) reposEl.textContent = profile.public_repos || repos.length;

      // Sum stars
      const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
      if (starsEl) starsEl.textContent = totalStars > 0 ? `${totalStars}+` : '15+';

      // Count languages
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

      if (langEl) {
        let displayLang = topLang;
        if (topLang === 'TypeScript') displayLang = 'TS / PY';
        if (topLang === 'JavaScript') displayLang = 'JS / TS';
        langEl.textContent = displayLang;
      }
    }
  } catch (err) {
    console.warn('Real-time GitHub fetch fallback to static cache:', err);
  }
}
