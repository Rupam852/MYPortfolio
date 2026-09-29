export const projects = [
  {
    id: "fasal-drishti-ai",
    title: "Fasal-Drishti-AI",
    subtitle: "AI Agricultural Vision & Crop Health Diagnostic Engine",
    description: "An AI-powered agricultural diagnosis platform enabling instant crop disease detection, leaf scan analysis, and tailored treatment recommendations.",
    longDescription: "Fasal-Drishti-AI is a modern agricultural intelligence platform designed to empower farmers and agronomists. Using state-of-the-art computer vision models, the system processes plant leaf imagery in real time, accurately identifies bacterial/fungal infections, assesses severity, and delivers localized pesticide and remediation advice. Features include offline scan caching, multi-language diagnostic breakdowns, and a fluid mobile-optimized dashboard.",
    techStack: ["Kotlin", "Python", "Computer Vision", "AI / ML", "FastAPI", "Vercel"],
    category: "Full-Stack / AI",
    metrics: {
      "Model": "Agricultural Vision AI",
      "Diagnosis": "Real-Time Crop Health"
    },
    liveLink: "https://fasaldrishti-ai.vercel.app/",
    repoLink: "https://github.com/Rupam852/Fasal-Drishti-AI"
  },
  {
    id: "omnipdf",
    title: "OmniPDF",
    subtitle: "AI-Powered PDF Processing Platform",
    description: "A production-grade, distributed multi-service PDF processor facilitating seamless document conversions, OCR, compression, and AI-enabled document analytics.",
    longDescription: "OmniPDF is a complete document intelligence hub. It uses a polyglot architecture to achieve sub-second execution times for complex PDF operations. A TypeScript API gateway manages client requests, coordinates with Firebase services, and dispatches heavy workloads to Python background worker nodes. Features include high-fidelity HTML-to-PDF rendering, intelligent optical character recognition (OCR), and PDF-to-image extraction.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "Python", "Firebase", "OCR", "Vercel"],
    category: "Full-Stack / AI",
    metrics: {
      "Performance": "Sub-second conversions",
      "Architecture": "Hybrid Polyglot Microservices"
    },
    liveLink: "https://omnipdf-converter.vercel.app",
    repoLink: "https://github.com/Rupam852/OmniPDF"
  },
  {
    id: "ai-career-mentor",
    title: "AI-Career-Mentor",
    subtitle: "AI-Powered Career Guidance & Mentorship Hub",
    description: "An intelligent career mentorship platform that evaluates student skill profiles, parses resumes, and generates personalized industry learning paths.",
    longDescription: "AI-Career-Mentor guides tech students and aspiring software engineers by analyzing target roles against current capabilities. Integrated with LLM intelligence, it generates step-by-step career roadmaps, mock interview questions, ATS resume reviews, and targeted skill development milestones to prepare candidates for engineering roles.",
    techStack: ["Python", "JavaScript", "HTML5", "CSS3", "Gemini API", "Vercel"],
    category: "Full-Stack / AI",
    metrics: {
      "Intelligence": "LLM Career Guidance",
      "Features": "Dynamic Roadmap Generator"
    },
    liveLink: "https://ai-career-mentor-project.vercel.app/",
    repoLink: "https://github.com/Rupam852/AI-Career-Mentor"
  },
  {
    id: "resume-analyzer",
    title: "Resume-Analyzer",
    subtitle: "AI Resume Screening & ATS Matcher",
    description: "An AI-powered ATS resume analyzer providing instant feedback, score metrics, keyword optimization, and formatting suggestions for job seekers.",
    longDescription: "Resume-Analyzer parses submitted resumes against job descriptions to provide automated ATS scoring, identifying missing keywords, formatting anomalies, and section improvements to enhance interview callback rates.",
    techStack: ["JavaScript", "HTML5", "CSS3", "AI / ML", "PDF Parser", "Vercel"],
    category: "Full-Stack / AI",
    metrics: {
      "Analysis": "Real-time ATS Scoring",
      "Speed": "Instant PDF/DOCX Parsing"
    },
    liveLink: "https://ai-resume-analyzer-tech.vercel.app/",
    repoLink: "https://github.com/Rupam852/Resume-Analyzer"
  },
  {
    id: "gdrive-vault",
    title: "G-Drive-Vault",
    subtitle: "Cloud File Management System",
    description: "A feature-complete virtual cloud file system showcasing dynamic CRUD operations, drag-and-drop batch upload, and real-time folder hierarchy synchronization.",
    longDescription: "G-Drive-Vault serves as an elegant, secure portal to Google Drive, isolated via precise OAuth 2.0 scopes. It uses a custom-built file system layer in Firestore to coordinate file folders, offering instant drag-and-drop uploads, optimistic state rendering for visual responsiveness, and debounced queries. Large files are handled gracefully through virtualized lists that support infinite scrolling.",
    techStack: ["React", "TypeScript", "Firebase Auth", "Firestore", "Google Drive API", "Vercel"],
    category: "Full-Stack / Cloud",
    metrics: {
      "Security": "OAuth 2.0 Isolated Scopes",
      "Features": "Drag-and-Drop Batch Upload"
    },
    liveLink: "https://g-drive-vault.vercel.app",
    repoLink: "https://github.com/Rupam852/G-Drive-Vault"
  },
  {
    id: "trafficflow-ai",
    title: "TRAFFICFLOW-AI",
    subtitle: "AI-Powered Traffic Signal Optimizer",
    description: "An AI-powered smart traffic management platform using real-time monitoring and intelligent signal optimization to reduce city congestion.",
    longDescription: "TrafficFlow AI is an intelligent traffic signal coordinator designed to reduce transit delays. By monitoring vehicle flows in real time, the system runs predictive analytics pipelines to adapt signal intervals dynamically, optimizing throughput at intersections.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Node.js", "Express", "Vercel"],
    category: "Full-Stack / AI",
    metrics: {
      "Analytics": "Real-time flow simulation",
      "Optimization": "Predictive timing patterns"
    },
    liveLink: "https://trafficflowai.vercel.app",
    repoLink: "https://github.com/Rupam852/TRAFFICFLOW-AI"
  },
  {
    id: "glick-x-notes",
    title: "Glick-X-Notes",
    subtitle: "Real-Time Collaborative Notes",
    description: "A high-performance developer note-taking app featuring instant cross-session synchronization, offline persistence, and full-text local search.",
    longDescription: "Glick-X-Notes is built with an offline-first architectural mindset. It synchronizes notes instantly across multiple active client windows using Firestore realtime listeners, while preserving offline edits via IndexedDB and Web Workers. It features an automated debounced sync pipeline, rich-text markdown rendering, tag-based categorization, and sub-millisecond local search indexing.",
    techStack: ["React", "TypeScript", "Firebase", "IndexedDB", "Web Workers", "Vercel"],
    category: "Frontend / Systems",
    metrics: {
      "Latency": "Instant cross-session sync",
      "Storage": "Offline-first IndexedDB cache"
    },
    liveLink: "https://glick-x-notes.vercel.app",
    repoLink: "https://github.com/Rupam852/Glick-X-Notes"
  },
  {
    id: "neo-files-transfer",
    title: "Neo-Files-Transfer",
    subtitle: "P2P Web-Based File Transfer Client",
    description: "A fast, secure, and modern web-based file transfer application built on P2P WebRTC sharing, fully hosted on Cloudflare Pages.",
    longDescription: "Neo-Files-Transfer facilitates instantaneous serverless file transfers directly between browser clients. It coordinates WebRTC peer connections using a lightweight signaling layer, leveraging service workers to manage block transfers locally. Ideal for zero-trust private file sharing.",
    techStack: ["JavaScript", "Cloudflare Pages", "WebRTC", "Service Workers"],
    category: "Frontend / Systems",
    metrics: {
      "Privacy": "Direct peer-to-peer piping",
      "Speed": "Zero-server transit delay"
    },
    liveLink: "https://neofilestransfer.site",
    repoLink: "https://github.com/Rupam852/Neo-Files-Transfer"
  },
  {
    id: "drive-flow",
    title: "Drive_Flow",
    subtitle: "Modern Cloud Drive Client",
    description: "A cloud file management platform that allows users to upload, organize, and access files securely through a fast, card-based web interface.",
    longDescription: "Drive_Flow provides a streamlined web layout to manage and group private assets in real time. It links with serverless storage buckets, managing metadata via a responsive database back-end for sub-second list updates and search queries.",
    techStack: ["React", "TypeScript", "Firebase", "Node.js", "Vercel"],
    category: "Full-Stack / Cloud",
    metrics: {
      "UX": "Card-based asset view",
      "Latency": "Sub-second query filters"
    },
    liveLink: "https://driveflowrupam.vercel.app",
    repoLink: "https://github.com/Rupam852/Drive_Flow"
  },
  {
    id: "cloudstream-tv",
    title: "CloudStream-TV",
    subtitle: "Native Android Streaming Client",
    description: "A modern media catalog and video streaming interface engineered for mobile and Android TV platforms using native declarative components.",
    longDescription: "CloudStream-TV is a fully native Android streaming application featuring an MVVM architecture built on Clean Architecture principles. It uses Kotlin and Jetpack Compose to deliver a fluid, high-fidelity user interface. It integrates custom media stream parsing, Retrofit API consumers, disk-cached image pipelines, and Kotlin Coroutines/Flow for lightweight reactive data streams.",
    techStack: ["Kotlin", "Jetpack Compose", "Coroutines", "Flow", "Coil", "Retrofit", "Android TV"],
    category: "Mobile",
    metrics: {
      "Architecture": "MVVM + Clean Architecture",
      "UI": "Fluid Jetpack Compose Animations"
    },
    liveLink: "https://cloudstream-tv.vercel.app",
    repoLink: "https://github.com/Rupam852/CloudStream-TV"
  },
  {
    id: "expense-app",
    title: "Expense-App",
    subtitle: "Cross-Platform Finance Tracker",
    description: "A beautifully animated finance tracking application providing rich analytics, local database caching, and custom charting tools.",
    longDescription: "Expense-App simplifies personal budgeting by keeping all operations local and private. Engineered using Flutter and Dart, the app features an event-driven BLoC state management pattern. It persists transactions into HiveDB and SQLite, showing responsive charts through CustomPaint. Additional features include budget alerts, recurring transaction pipelines, and PDF analytics reporting.",
    techStack: ["Flutter", "Dart", "HiveDB", "SQLite", "FlChart", "BLoC Pattern", "PDF Export"],
    category: "Mobile",
    metrics: {
      "Security": "100% Local Encrypted Database",
      "UX": "Smooth FlChart Visualizations"
    },
    liveLink: "https://growexpense.vercel.app",
    repoLink: "https://github.com/Rupam852/Expense-App"
  },
  {
    id: "wrist-rx",
    title: "Wrist-Rx",
    subtitle: "Wearable Health & Prescription Tracker",
    description: "A smart health monitoring and prescription management client offering dosage reminders, vital health telemetry, and emergency alerts.",
    longDescription: "Wrist-Rx is engineered for healthcare tracking across mobile and wearable touchpoints. Built with Flutter and Dart, it manages medication schedules, logs vital biometric metrics, and syncs medical histories securely with cloud backends.",
    techStack: ["Flutter", "Dart", "Firebase", "WearOS UI", "Vercel"],
    category: "Mobile",
    metrics: {
      "Platform": "Cross-Platform Flutter",
      "Sync": "Cloud Health Telemetry"
    },
    liveLink: "https://wrist-rx.vercel.app",
    repoLink: "https://github.com/Rupam852/Wrist-Rx"
  },
  {
    id: "gmailmnt",
    title: "GmailMNT",
    subtitle: "Gmail Account Management Dashboard",
    description: "A smart Gmail account management tool for organizing emails, managing multiple accounts, and improving productivity.",
    longDescription: "GmailMNT integrates with the official Google Gmail APIs to construct an account manager interface. Users can deploy custom automation rules, filter high-volume folders instantly, and compose canned template responses using secure OAuth credentials.",
    techStack: ["Kotlin", "JavaScript", "Node.js", "Gmail API", "OAuth 2.0", "Vercel"],
    category: "Full-Stack / Cloud",
    metrics: {
      "Scope": "Multi-Account Sync",
      "Automation": "Custom Inbox Rules Engine"
    },
    liveLink: "https://gmailmntorg.vercel.app/",
    repoLink: "https://github.com/Rupam852/GmailMNT"
  },
  {
    id: "link-flow",
    title: "Link-Flow",
    subtitle: "Developer Bookmark & Profile Hub",
    description: "A modern link management platform that helps users organize, share, and access multiple links from a single customizable profile page.",
    longDescription: "Link-Flow is an active bookmark dashboard designed to help developers catalog websites, tools, and documentations. Built using React and TailwindCSS, it coordinates with a Firebase backend to scrape metadata (og:title, og:description, og:image) for any pasted URL, auto-tag resources, and allow instant keyboard-shortcut navigation for power users.",
    techStack: ["React", "TypeScript", "Firebase", "TailwindCSS", "Vercel"],
    category: "Frontend / Systems",
    metrics: {
      "Features": "Auto Metadata Scraper",
      "UX": "Keyboard Shortcut Navigation"
    },
    liveLink: "https://link-flow-program.vercel.app/",
    repoLink: "https://github.com/Rupam852/Link-Flow"
  },
  {
    id: "calculator",
    title: "Calculator",
    subtitle: "Premium Dual-Platform Calculator",
    description: "A modern, dual-platform calculator featuring a premium glassmorphic design system with ambient glowing backdrops, responsive layouts, and advanced calculation logic.",
    longDescription: "This calculator is a hybrid project hosting both a high-fidelity web application (HTML/CSS/JS) and a native mobile application (Flutter/Dart). It features a glassmorphic design system with auto-matching themes, advanced calculation logic (such as smart backspace undo, continuous calculations, and scientific math notation formatting), dynamic font scaling to prevent overflow, and persistent calculation history using local storage.",
    techStack: ["React", "TypeScript", "Flutter", "Dart", "LocalStorage", "Vercel"],
    category: "Mobile",
    metrics: {
      "Design": "Glassmorphism & Neon Glow",
      "Platforms": "Web & Mobile"
    },
    liveLink: "https://devcalculatoronline.vercel.app/",
    repoLink: "https://github.com/Rupam852/Calculator"
  },
  {
    id: "cmd-music-downloader",
    title: "CMD_Music_Downloader",
    subtitle: "CLI High-Speed Audio Stream Downloader",
    description: "A multithreaded command-line utility for searching, extracting, and downloading high-bitrate audio streams with automatic ID3 tag embedding.",
    longDescription: "CMD_Music_Downloader is built in Python for developers and terminal enthusiasts who need rapid, automated audio stream extractions. Featuring concurrent chunk downloading, automatic album art fetching, and seamless FFmpeg conversion.",
    techStack: ["Python", "CLI", "FFmpeg", "Multithreading", "Metadata API"],
    category: "Frontend / Systems",
    metrics: {
      "Concurrency": "Multithreaded Streams",
      "Audio": "Lossless / 320kbps MP3"
    },
    liveLink: "https://github.com/Rupam852/CMD_Music_Downloader",
    repoLink: "https://github.com/Rupam852/CMD_Music_Downloader"
  },
  {
    id: "payment-page",
    title: "Payment_Page",
    subtitle: "Glassmorphic Checkout & Payment Portal",
    description: "A payment gateway UI template built with modern glassmorphism, responsive form validation, and interactive credit card UX flow.",
    longDescription: "Payment_Page is a responsive checkout interface featuring interactive credit card flip animations, realtime field formatting (Luhn algorithm validation, expiry masking), and smooth micro-interactions.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    category: "Frontend / Systems",
    metrics: {
      "Design": "Modern Glass UI",
      "Validation": "Real-Time Card Parsing"
    },
    liveLink: "https://payment-page-build.vercel.app/",
    repoLink: "https://github.com/Rupam852/Payment_Page"
  },
  {
    id: "login-glass-effect",
    title: "Login-Page-Glass-Effect",
    subtitle: "Glassmorphic Login Portal",
    description: "A gorgeous login page template featuring a premium glassmorphic interface, custom background art, and responsive styling.",
    longDescription: "Login_page_Glass_Effect showcases clean glass container design with frosted-glass styling, borders, and subtle transparencies. Deployed on Vercel, it features full responsive support, micro-interactions, and beautiful custom background imagery.",
    techStack: ["HTML5", "CSS3", "Vercel"],
    category: "Frontend / Systems",
    metrics: {
      "Design": "Frosted Glassmorphism",
      "Response": "Fluid Layout"
    },
    liveLink: "https://login-page-glass-effect.vercel.app",
    repoLink: "https://github.com/Rupam852/Login_page_Glass_Effect"
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe-Game",
    subtitle: "Interactive Web-Based Game",
    description: "A responsive web-based Tic-Tac-Toe game featuring a glassmorphic user interface, active score tracking, and smooth animations.",
    longDescription: "This Tic-Tac-Toe interface was created to practice clean layout transitions and game logic structures in TypeScript. It supports fully responsive grids, local scoreboard states, and micro-animations for grid interactions.",
    techStack: ["TypeScript", "HTML5", "CSS3", "Vercel"],
    category: "Frontend / Systems",
    metrics: {
      "Design": "Sleek Glassmorphic Grid",
      "Features": "Active Score Tracking"
    },
    liveLink: "https://tic-tac-toe-gamego.vercel.app/",
    repoLink: "https://github.com/Rupam852/Tic-Tac-Toe-Game"
  }
];
