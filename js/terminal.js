import { projects } from './projects.js';

export class DevTerminal {
  constructor(terminalElId, inputElId, outputElId) {
    this.terminal = document.getElementById(terminalElId);
    this.input = document.getElementById(inputElId);
    this.output = document.getElementById(outputElId);
    this.history = [];
    this.historyIndex = -1;
    
    if (this.input) {
      this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));
      // Focus input when clicking anywhere on the terminal
      this.terminal.addEventListener('click', () => this.input.focus());
    }

    this.commands = {
      help: {
        description: 'List all available terminal commands.',
        exec: () => this.showHelp()
      },
      about: {
        description: 'Who is Rupam Bairagya?',
        exec: () => this.showAbout()
      },
      projects: {
        description: 'Display interactive list of featured projects.',
        exec: (args) => this.showProjects(args)
      },
      skills: {
        description: 'Show full technical capabilities stack.',
        exec: () => this.showSkills()
      },
      contact: {
        description: 'Get direct communication links.',
        exec: () => this.showContact()
      },
      github: {
        description: 'Analyze GitHub profile metrics.',
        exec: () => this.showGithub()
      },
      clear: {
        description: 'Purge console buffer.',
        exec: () => {
          this.output.innerHTML = '';
          return '';
        }
      },
      matrix: {
        description: 'Enter the digital stream.',
        exec: () => this.triggerMatrix()
      },
      secret: {
        description: 'Access classified developer logs.',
        exec: () => this.showSecret()
      }
    };

    // Print welcome message
    this.printWelcome();
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      const commandString = this.input.value.trim();
      this.input.value = '';
      if (commandString) {
        this.history.push(commandString);
        this.historyIndex = this.history.length;
        this.executeCommand(commandString);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.input.value = this.history[this.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.input.value = this.history[this.historyIndex];
      } else {
        this.historyIndex = this.history.length;
        this.input.value = '';
      }
    }
  }

  print(text, type = 'default') {
    const line = document.createElement('div');
    line.className = `terminal-line line-${type}`;
    line.innerHTML = text;
    this.output.appendChild(line);
    this.terminal.scrollTop = this.terminal.scrollHeight;
  }

  printWelcome() {
    this.print('====================================================================', 'system');
    this.print('▲ TERMINAL NEXUS v1.0.4 initialized successfully.', 'system');
    this.print('▲ Connected node: rupam-dev-hub.local (West Bengal, IN)', 'system');
    this.print('▲ Type <span class="cmd-glow">help</span> to list available commands.', 'info');
    this.print('====================================================================', 'system');
    this.print('');
  }

  executeCommand(cmdStr) {
    const parts = cmdStr.split(' ');
    const cmdName = parts[0].toLowerCase();
    const args = parts.slice(1);

    this.print(`<span class="terminal-prompt">guest@rupam852:~$</span> ${cmdStr}`, 'input');

    if (this.commands[cmdName]) {
      try {
        const result = this.commands[cmdName].exec(args);
        if (result) {
          this.print(result);
        }
      } catch (err) {
        this.print(`Error executing command: ${err.message}`, 'error');
      }
    } else {
      this.print(`Command not found: '${cmdName}'. Type <span class="cmd-glow">help</span> for a list of available commands.`, 'error');
    }
    this.print('');
  }

  showHelp() {
    let output = '<div class="help-grid">';
    output += '<div class="help-header">Command</div><div class="help-header">Description</div>';
    for (const [name, cmd] of Object.entries(this.commands)) {
      output += `<div class="help-cmd">${name}</div><div class="help-desc">${cmd.description}</div>`;
    }
    output += '</div>';
    return output;
  }

  showAbout() {
    return `
<span class="hl-title">◈ RUPAM BAIRAGYA</span>
<span class="hl-subtitle">Full-Stack Software Engineer & Product Builder</span>
--------------------------------------------------------------
* <span class="hl-label">Bio</span>: Product-minded engineer focused on building robust, high-fidelity web
       and mobile architectures, along with AI-integrated pipelines.
* <span class="hl-label">Location</span>: West Bengal, India
* <span class="hl-label">Education</span>: B.Tech in Computer Science & Engineering
* <span class="hl-label">Status</span>: Open for SDE roles, collaborations, and consulting.
    `;
  }

  showProjects(args) {
    if (args.length > 0) {
      const searchId = args[0].toLowerCase();
      const proj = projects.find(p => p.id === searchId || p.title.toLowerCase() === searchId);
      if (proj) {
        return `
<span class="hl-title">❖ ${proj.title} (${proj.category})</span>
<span class="hl-subtitle">${proj.subtitle}</span>
--------------------------------------------------------------
* <span class="hl-label">Description</span>: ${proj.longDescription}
* <span class="hl-label">Stack</span>: ${proj.techStack.join(' · ')}
* <span class="hl-label">Metrics</span>: ${JSON.stringify(proj.metrics).replace(/[\{\}\"]/g, '').replace(/,/g, ' | ')}
* <span class="hl-label">Live App</span>: <a href="${proj.liveLink}" target="_blank" class="terminal-link">${proj.liveLink}</a>
* <span class="hl-label">Source</span>: <a href="${proj.repoLink}" target="_blank" class="terminal-link">${proj.repoLink}</a>
        `;
      } else {
        this.print(`Project '${args[0]}' not found. Available project IDs are listed below.`, 'error');
      }
    }

    let output = `<span class="hl-title">❖ FEATURED PROJECTS</span><br>`;
    output += `Type <span class="cmd-glow">projects [id]</span> to read deep technical notes.<br><br>`;
    projects.forEach(p => {
      output += `* <span class="hl-cmd">${p.id}</span> - ${p.title} (${p.subtitle})<br>`;
    });
    return output;
  }

  showSkills() {
    return `
<span class="hl-title">◈ CORE CAPABILITIES & TECH STACK</span>
--------------------------------------------------------------
* <span class="hl-label">Languages</span>: TypeScript, JavaScript, Kotlin, Dart, Python, Java, C++
* <span class="hl-label">Frontend</span>: React, Next.js, Vite, HTML5, CSS3, TailwindCSS
* <span class="hl-label">Backend</span>: Node.js, Express, Firebase, Supabase, Postgres, MongoDB, Redis
* <span class="hl-label">Mobile</span>: Flutter, Native Android (Jetpack Compose)
* <span class="hl-label">AI / ML</span>: OpenAI API, Gemini API, PyPDF, OCR Pipelines, Vector Search, RAG
* <span class="hl-label">DevOps</span>: Docker, Git, CI/CD, Vercel, Netlify, Linux
    `;
  }

  showContact() {
    return `
<span class="hl-title">◈ COMMUNICATION CHANNELS</span>
--------------------------------------------------------------
* <span class="hl-label">Email</span>: <a href="mailto:rupambairagya08@gmail.com" class="terminal-link">rupambairagya08@gmail.com</a>
* <span class="hl-label">LinkedIn</span>: <a href="https://www.linkedin.com/in/rupam-bairagya" target="_blank" class="terminal-link">linkedin.com/in/rupam-bairagya</a>
* <span class="hl-label">GitHub</span>: <a href="https://github.com/Rupam852" target="_blank" class="terminal-link">github.com/Rupam852</a>
* <span class="hl-label">Links Hub</span>: <a href="https://link-flow-program.vercel.app/rupam-bairagya" target="_blank" class="terminal-link">link-flow-program/rupam-bairagya</a>
    `;
  }

  showGithub() {
    return `
<span class="hl-title">◈ GITHUB ANALYTICS (RUPAM852)</span>
--------------------------------------------------------------
* <span class="hl-label">Repositories</span>: 14 Public Repositories
* <span class="hl-label">Featured Work</span>: OmniPDF (AI PDF Processor), G-Drive-Vault (Cloud File System)
* <span class="hl-label">Top Language</span>: TypeScript / Dart / Kotlin
* <span class="hl-label">Stats Status</span>: Active Open-Source Contributor (100% public code)
* <span class="hl-label">Contribution Snake</span>: Output Dark and Light matrix running in background
    `;
  }

  triggerMatrix() {
    this.print('Entering the matrix... press clear to exit.', 'system');
    
    // Check if matrix overlay already exists
    let canvas = document.getElementById('matrix-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'matrix-canvas';
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '5';
      canvas.style.opacity = '0.15';
      canvas.style.pointerEvents = 'none';
      this.terminal.appendChild(canvas);
    }
    
    const ctx = canvas.getContext('2d');
    canvas.width = this.terminal.clientWidth;
    canvas.height = this.terminal.clientHeight;
    
    const katakana = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabet = katakana.split('');
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }
    
    if (this.matrixInterval) clearInterval(this.matrixInterval);
    
    this.matrixInterval = setInterval(() => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#06B6D4'; // Match theme accent color (Cyan) instead of plain green
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    }, 30);
    
    // Clear matrix on clear command
    const originalClear = this.commands.clear.exec;
    this.commands.clear.exec = () => {
      if (this.matrixInterval) {
        clearInterval(this.matrixInterval);
        this.matrixInterval = null;
      }
      if (canvas) {
        canvas.remove();
      }
      this.commands.clear.exec = originalClear;
      return originalClear();
    };

    return 'Digital stream activated. Overlay opacity: 15%. Enjoy the view.';
  }

  showSecret() {
    return `
<span class="hl-label">[SYSTEM DECRYPTION COMPLETE]</span>
--------------------------------------------------------------
◈ SECRETS REVEALED:
* "Offline-first" architectures are the best way to handle poor network conditions.
* Real-time listeners make interfaces feel collaborative and immediate.
* Web Workers prevent CPU intensive parsing blocks from lagging main threads.
* Good developer tools are those that are modular, readable, and highly maintainable.
    `;
  }
}
