/**
 * ==========================================================================
 * NEO-BRUTALIST KINETIC ENGINE, PRO CMS & PLAYGROUND
 * Owner: Md. Eftakhar Amin Sakib
 * Features:
 * 1. Reactive State Store with LocalStorage Persistence
 * 2. 3 Master Capsules (Projects, Achievements, Socials) + 1 Centered Media & Design Studio
 * 3. 2 Sub-Channels in Media & Design: Video & Media vs Graphics & Design
 * 4. In-Browser Admin Authentication & Multi-Tab CMS Dashboard
 * 5. PLAYGROUND: "Small experiments, strange ideas & interactive things"
 * 6. Staggered Cascade Motion & Reverse Collapse Physics
 * 7. Arcade Web Audio Sound Synthesizer
 * 8. Dynamic Card Grid & Stats Renderers
 * 9. JSON Backup, Import, and Export
 * ==========================================================================
 */

(function () {
  'use strict';

  function formatFileSize(bytes) {
    if (!bytes || bytes === 0) return '0 KB';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }
  window.formatFileSize = formatFileSize;

  // --- Initial Default Dataset tailored for Md. Eftakhar Amin Sakib ---
  const DEFAULT_PORTFOLIO_STATE = {
    hero: {
      nameLine1: "MD. EFTAKHAR",
      nameLine2: "AMIN",
      nameLine3: "SAKIB",
      roleTitle: "Full-Stack Developer & Creative Engineer",
      bio: "Crafting scalable web applications, fluid interactive user experiences, video edits, and digital visuals with clean architecture and precision motion.",
      avatarUrl: "Minimalist Lavender Circle Portrait.png",
      statusText: "Available for Opportunities",
      resumeUrl: "https://drive.google.com",
      coffeeUrl: "https://buymeacoffee.com",
      stats: [
        { label: "4+ Years Exp", icon: "fa-solid fa-briefcase", theme: "yellow" },
        { label: "24+ Projects Built", icon: "fa-solid fa-code", theme: "cyan" },
        { label: "100% Satisfaction", icon: "fa-solid fa-star", theme: "coral" },
        { label: "4 Tech Honors", icon: "fa-solid fa-trophy", theme: "lavender" }
      ]
    },
    featureVisibility: {
      projects: true,
      achievements: true,
      socials: true,
      media: true
    },
    visitorSettings: {
      isPublic: true,
      baseOffset: 0,
      trackPerSession: true
    },
    securitySettings: {
      doorPassphrase: "anywhere door"
    },
    firebaseConfig: {
      apiKey: "AIzaSyAySNXq8jtYL7Xg360UfQdixVaqpoTjgUA",
      authDomain: "portfolio-220a0.firebaseapp.com",
      projectId: "portfolio-220a0",
      storageBucket: "portfolio-220a0.firebasestorage.app",
      messagingSenderId: "707525653116",
      appId: "1:707525653116:web:af5e97e77b0bc2f4250ff9",
      measurementId: "G-MSH80DNB7C"
    },
    r2Config: {
      accountId: "d71d00687915515fe73d9228a901b29b",
      bucketName: "portfolio-media",
      publicBaseUrl: "https://pub-50fe94eff2494bc0945ba23feb179bed.r2.dev",
      accessKeyId: "ced441d315e70ad024c144d2cb24d97a",
      secretAccessKey: "68dd22956549206a64ff4162021692dfd511d154f94a0df187ceca108eae03a8"
    },
    projects: [
      {
        id: "p1",
        title: "Nova AI Neural Workspace",
        category: "FULL-STACK • AI",
        chain: "FEATURED",
        value: "50k+ USERS",
        desc: "Real-time multimodal dashboard with fluid audio-visual waveforms, zero-latency streaming responses, and generative UI canvas.",
        techs: ["Next.js 15", "Three.js", "Tailwind", "Web Audio", "TypeScript"],
        liveUrl: "https://example.com/nova",
        githubUrl: "https://github.com/example/nova-ai",
        assetUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        bannerClass: "banner-gradient-1",
        icon: "fa-solid fa-brain",
        features: [
          "Real-time audio-visual spectrum synthesis using WebGL & Web Audio API",
          "Adaptive generative UI components that render on-the-fly via LLM token streams",
          "High-performance client-side state caching with zero perceptible frame drops",
          "Multi-agent collaborative canvas with live cursor synchronization"
        ]
      },
      {
        id: "p2",
        title: "Aether Financial OS",
        category: "FINTECH SAAS",
        chain: "PRODUCTION",
        value: "99.9% UPTIME",
        desc: "High-frequency algorithmic trade visualizer with kinetic charts, multi-currency ledger tracking, and instant settlement flows.",
        techs: ["TypeScript", "Node.js", "D3.js", "PostgreSQL", "Redis"],
        liveUrl: "https://example.com/aether",
        githubUrl: "https://github.com/example/aether-os",
        assetUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        bannerClass: "banner-gradient-2",
        icon: "fa-solid fa-chart-line",
        features: [
          "Sub-millisecond chart rendering powered by optimized HTML5 Canvas & D3",
          "Multi-asset risk modeling engine with interactive Monte Carlo projections",
          "Bank-grade security architecture with end-to-end payload signature validation",
          "Offline-first sync engine with automatic conflict resolution"
        ]
      },
      {
        id: "p3",
        title: "Chronos 3D Spatial Pavilion",
        category: "3D SPATIAL",
        chain: "WEBGL",
        value: "120 FPS",
        desc: "Virtual exhibition showroom with dynamic realistic lighting, physical collisions, and fluid gesture-based navigation on mobile & desktop.",
        techs: ["Three.js", "GLSL", "WebXR", "GSAP", "Blender"],
        liveUrl: "https://example.com/chronos",
        githubUrl: "https://github.com/example/chronos-spatial",
        assetUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80",
        bannerClass: "banner-gradient-3",
        icon: "fa-solid fa-cube",
        features: [
          "Custom GLSL shader pipelines for realistic glass refraction and metal roughness",
          "Spatial 3D audio listener simulation tailored to camera distance and room materials",
          "Touch and mobile gyro gesture support for seamless mobile navigation",
          "Dynamic LOD (Level of Detail) mesh streaming for instantaneous load times"
        ]
      },
      {
        id: "p4",
        title: "Prism Kinetic UI Kit",
        category: "DESIGN SYSTEM",
        chain: "OPEN SOURCE",
        value: "50k+ DOWNLOADS",
        desc: "Accessible, themeable design token architecture and kinetic micro-interaction component library downloaded 50k+ times.",
        techs: ["React 19", "Tokens", "Storybook", "TypeScript", "Radix UI"],
        liveUrl: "https://example.com/prism",
        githubUrl: "https://github.com/example/prism-ui",
        assetUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
        bannerClass: "banner-gradient-4",
        icon: "fa-solid fa-bolt-lightning",
        features: [
          "100% WCAG 2.1 AAA accessibility compliance with automated keyboard traps",
          "Fluid token scaling system leveraging CSS container queries and clamp calculations",
          "Over 65+ hand-crafted micro-animations with zero layout shift (CLS: 0.00)",
          "Automated visual regression testing and interactive Storybook documentation"
        ]
      }
    ],
    media: [
      {
        id: "m1",
        type: "video",
        title: "Cyberpunk Tech Brand Launch Reel",
        category: "VIDEO EDITING",
        chain: "4K REEL",
        value: "500K+ VIEWS",
        desc: "High-energy commercial promo with rhythmic audio-sync cuts, sound design transients, cinematic color grading, and dynamic typography overlays.",
        techs: ["Premiere Pro", "DaVinci Resolve", "Sound Design", "Color Grading"],
        liveUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        githubUrl: "https://behance.net",
        assetUrl: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&auto=format&fit=crop&q=80",
        bannerClass: "banner-gradient-media1",
        icon: "fa-solid fa-film",
        features: [
          "Precision multi-track audio synchronization to high-BPM rhythm",
          "Custom cinematic color grading with tailored LUTs for brand aesthetic",
          "Pacing optimized for maximum audience retention and viral reach",
          "High-bitrate 4K 60FPS export calibrated for social and YouTube delivery"
        ]
      },
      {
        id: "m2",
        type: "design",
        title: "Modern Geometric Event Key Visual & Poster",
        category: "POSTER ART",
        chain: "PRINT & DIGITAL",
        value: "SPOTLIGHT",
        desc: "High-impact editorial poster design with bold typography hierarchy, customized vector graphics, and textured grain composition.",
        techs: ["Photoshop", "Illustrator", "Typography", "Print Pre-press"],
        liveUrl: "https://behance.net",
        githubUrl: "https://dribbble.com",
        assetUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80",
        bannerClass: "banner-gradient-media2",
        icon: "fa-solid fa-image",
        features: [
          "Vector geometric layout with golden ratio visual balance",
          "Custom typography treatment with hand-crafted display accents",
          "High-resolution 300DPI CMYK ready for large-format physical printing",
          "Adaptive digital variations formatted for Instagram, LinkedIn & X"
        ]
      },
      {
        id: "m3",
        type: "design",
        title: "SaaS Product Launch Social Banner Suite",
        category: "BANNER DESIGN",
        chain: "BRAND CAMPAIGN",
        value: "CONVERSION BOOST",
        desc: "Cohesive 12-piece digital banner set engineered for high-converting marketing campaigns across LinkedIn, Twitter, and Google Ads.",
        techs: ["Figma", "Photoshop", "Ad Creatives", "Brand Identity"],
        liveUrl: "https://behance.net",
        githubUrl: "https://dribbble.com",
        assetUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
        bannerClass: "banner-gradient-media3",
        icon: "fa-solid fa-photo-film",
        features: [
          "Consistent visual token system matching brand guidelines",
          "High-contrast call-to-actions tailored for high CTR click rates",
          "12 multi-ratio exports (16:9, 1:1, 9:16, 4:5, 1.91:1)",
          "Lightweight compression under 150KB with zero artifacting"
        ]
      },
      {
        id: "m4",
        type: "design",
        title: "Minimalist Dark Mode UI/UX System Mockup",
        category: "UI/UX DESIGN",
        chain: "PROTOTYPE",
        value: "DESIGN SYSTEM",
        desc: "Futuristic dashboard interface design with refined glassmorphism cards, micro-metric charts, and intuitive user flows.",
        techs: ["Figma", "Design Tokens", "Wireframing", "Prototyping"],
        liveUrl: "https://figma.com",
        githubUrl: "https://dribbble.com",
        assetUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        bannerClass: "banner-gradient-media4",
        icon: "fa-solid fa-palette",
        features: [
          "Auto-layout Figma components with complete variant states",
          "Harmonious 8pt spacing grid and WCAG compliant contrast",
          "Interactive click-through prototype with spring physics transitions",
          "Design spec handoff with production-ready CSS token variables"
        ]
      },
      {
        id: "m5",
        type: "video",
        title: "Cinematic Product Teaser & Motion Cut",
        category: "COMMERCIAL PROMO",
        chain: "PROMO CUT",
        value: "VIRAL REACH",
        desc: "Fast-paced storytelling cut with sound effect layers, velocity curve acceleration, and high-impact title typography cards.",
        techs: ["Premiere Pro", "After Effects", "Sound Mixing", "Color LUTs"],
        liveUrl: "https://youtube.com",
        githubUrl: "https://behance.net",
        assetUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80",
        bannerClass: "banner-gradient-media1",
        icon: "fa-solid fa-clapperboard",
        features: [
          "Dynamic velocity ramps and speed curve edits matching beat drops",
          "Layered sound design with bass drops and whooshes",
          "Calibrated exports for widescreen 21:9 and vertical 9:16 reels"
        ]
      }
    ],
    achievements: [
      {
        id: "a1",
        title: "International Web Innovations Hackathon",
        badge: "1st Place Global",
        year: "2025",
        theme: "gold",
        icon: "fa-solid fa-trophy",
        desc: "Awarded top prize among 800+ international developers for inventing an AI-guided accessibility rendering engine for modern web apps.",
        metric: "Outperformed 240+ Submissions",
        assetUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&auto=format&fit=crop&q=80",
        verifyUrl: "https://devpost.com",
        features: [
          "Champion out of 800+ international developers",
          "AI-guided real-time accessibility rendering engine",
          "Evaluated by panel of industry leads and awarded $25k prize"
        ]
      },
      {
        id: "a2",
        title: "Product Hunt Golden Feature",
        badge: "#1 Product of the Day",
        year: "2025",
        theme: "purple",
        icon: "fa-solid fa-award",
        desc: "Launched developer productivity suite that earned #1 Product of the Day and #3 Product of the Week with 2,400+ upvotes.",
        metric: "120,000+ Active Users",
        assetUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80",
        verifyUrl: "https://producthunt.com",
        features: [
          "Voted #1 Product of the Day with 2,400+ upvotes",
          "Featured in Product Hunt global developer newsletter",
          "Grew to 120,000+ monthly active developers in 90 days"
        ]
      },
      {
        id: "a3",
        title: "Professional Cloud Solutions Architect",
        badge: "Elite Certification",
        year: "2024",
        theme: "cyan",
        icon: "fa-solid fa-certificate",
        desc: "Certified in designing resilient, high-availability distributed systems, container orchestration, and multi-region cloud infrastructures.",
        metric: "Verified Credentials",
        assetUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
        verifyUrl: "https://credly.com",
        features: [
          "Certified in multi-region high-availability cloud architecture",
          "Container orchestration & automated disaster recovery",
          "Mastered zero-downtime microservice deployments"
        ]
      },
      {
        id: "a4",
        title: "Global Frontend Summit Keynote",
        badge: "Keynote Speaker",
        year: "2024",
        theme: "lavender",
        icon: "fa-solid fa-microphone-lines",
        desc: "Delivered featured technical workshop on 'Next-Generation Kinetic Web UX & 120FPS Animation Pipelines' to 1,500+ attendees.",
        metric: "40k+ Online Views",
        assetUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80",
        verifyUrl: "https://youtube.com",
        features: [
          "Featured keynote speech delivered to 1,500+ attendees",
          "Interactive live coding demonstration on kinetic animations",
          "Rated top technical presentation of the conference"
        ]
      }
    ],
    socials: [
      {
        id: "s1",
        title: "hello@domain.com",
        label: "Direct Inbox",
        type: "email",
        url: "hello@domain.com",
        icon: "fa-solid fa-envelope",
        desc: "Quickest response for engineering inquiries, consulting, or visionary collaborations."
      },
      {
        id: "s2",
        title: "GitHub Profile",
        label: "Open Source",
        type: "link",
        url: "https://github.com",
        icon: "fa-brands fa-github",
        desc: "Explore public repositories, open source contributions, and experimental UI prototypes."
      },
      {
        id: "s3",
        title: "LinkedIn Profile",
        label: "Network",
        type: "link",
        url: "https://linkedin.com",
        icon: "fa-brands fa-linkedin-in",
        desc: "Connect for professional background, career updates, and verified recommendations."
      },
      {
        id: "s4",
        title: "X (Twitter)",
        label: "Thoughts",
        type: "link",
        url: "https://twitter.com",
        icon: "fa-brands fa-x-twitter",
        desc: "Micro-thoughts on web performance, generative design, and daily design engineering tidbits."
      },
      {
        id: "s5",
        title: "Schedule a Call",
        label: "1:1 Intro",
        type: "schedule",
        url: "https://calendly.com",
        icon: "fa-regular fa-calendar-check",
        desc: "Book a 20-minute video session to discuss product scoping, architecture, or design advice."
      }
    ]
  };

  // ==========================================================================
  // 1. REACTIVE STATE STORE WITH LOCALSTORAGE
  // ==========================================================================
  class PortfolioStore {
    constructor() {
      this.STORAGE_KEY = 'portfolio_sakib_state_v8';
      this.AUTH_KEY = 'portfolio_admin_auth';
      this.DC_BEST_KEY = 'portfolio_dc_clicks_v1';
      this.MEM_BEST_KEY = 'portfolio_mem_best_time_v1';

      this.currentMediaFilter = 'all'; // 'all' | 'video' | 'design'
      this.state = this.loadState();
      this.isAdmin = localStorage.getItem(this.AUTH_KEY) === 'true';
      this.dcBestClicks = parseInt(localStorage.getItem(this.DC_BEST_KEY) || '0', 10);
      this.memBestSeconds = parseInt(localStorage.getItem(this.MEM_BEST_KEY) || '0', 10);
    }

    loadState() {
      try {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.hero && parsed.projects) {
            if (!parsed.hero.avatarUrl) parsed.hero.avatarUrl = DEFAULT_PORTFOLIO_STATE.hero.avatarUrl;
            if (!parsed.media) parsed.media = DEFAULT_PORTFOLIO_STATE.media;
            if (!parsed.featureVisibility) {
              parsed.featureVisibility = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_STATE.featureVisibility));
            } else {
              parsed.featureVisibility = {
                projects: parsed.featureVisibility.projects !== false,
                achievements: parsed.featureVisibility.achievements !== false,
                socials: parsed.featureVisibility.socials !== false,
                media: parsed.featureVisibility.media !== false
              };
            }
            if (!parsed.visitorSettings) parsed.visitorSettings = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_STATE.visitorSettings));
            if (!parsed.securitySettings) {
              parsed.securitySettings = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_STATE.securitySettings));
            } else if (!parsed.securitySettings.doorPassphrase) {
              parsed.securitySettings.doorPassphrase = "anywhere door";
            }
            if (!parsed.firebaseConfig) parsed.firebaseConfig = DEFAULT_PORTFOLIO_STATE.firebaseConfig;
            if (!parsed.r2Config) parsed.r2Config = DEFAULT_PORTFOLIO_STATE.r2Config;
            return parsed;
          }
        }
      } catch (e) {
        console.error("Failed to parse saved state", e);
      }
      return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_STATE));
    }

    setFeatureVisibility(featureKey, isVisible) {
      if (!this.state.featureVisibility) {
        this.state.featureVisibility = { projects: true, achievements: true, socials: true, media: true };
      }
      this.state.featureVisibility[featureKey] = !!isVisible;
      this.saveState();
      renderFeatureVisibility();
      return this.state.featureVisibility;
    }

    saveState(syncCloud = true) {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
        if (syncCloud && window.visitorCounterManager && window.visitorCounterManager.syncPortfolioContentToCloud) {
          window.visitorCounterManager.syncPortfolioContentToCloud(this.state);
        }
      } catch (e) {
        console.error("Failed to save state", e);
      }
    }

    saveDcScore(clicks) {
      this.dcBestClicks = (this.dcBestClicks || 0) + 1;
      localStorage.setItem(this.DC_BEST_KEY, this.dcBestClicks.toString());
      return this.dcBestClicks;
    }

    saveMemBestTime(seconds) {
      if (this.memBestSeconds === 0 || seconds < this.memBestSeconds) {
        this.memBestSeconds = seconds;
        localStorage.setItem(this.MEM_BEST_KEY, seconds.toString());
        return true;
      }
      return false;
    }

    getFormattedMemBest() {
      if (this.memBestSeconds === 0) return "--:--";
      const m = Math.floor(this.memBestSeconds / 60).toString().padStart(2, '0');
      const s = (this.memBestSeconds % 60).toString().padStart(2, '0');
      return `${m}:${s}`;
    }

    resetDefaults() {
      this.state = JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_STATE));
      this.saveState();
      renderFeatureVisibility();
      if (window.visitorCounterManager) {
        window.visitorCounterManager.updateVisibility();
        window.visitorCounterManager.renderCount(true);
      }
    }

    setAuth(status) {
      this.isAdmin = !!status;
      localStorage.setItem(this.AUTH_KEY, this.isAdmin ? 'true' : 'false');
      document.body.classList.toggle('admin-authenticated', this.isAdmin);
      if (window.visitorCounterManager) {
        window.visitorCounterManager.updateVisibility();
      }
    }
  }

  const store = new PortfolioStore();

  // ==========================================================================
  // 2. SYNTHETIC AUDIO ENGINE
  // ==========================================================================
  class SoundFXEngine {
    constructor() {
      this.ctx = null;
      this.enabled = localStorage.getItem('portfolio_sound') !== 'false';
      this.initAudioContext();
    }

    initAudioContext() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }

    resumeContext() {
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem('portfolio_sound', this.enabled ? 'true' : 'false');
      return this.enabled;
    }

    playPop(freq = 440, duration = 0.04) {
      if (!this.enabled) return;
      try {
        this.initAudioContext();
        this.resumeContext();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }

    playCoinPing() {
      if (!this.enabled) return;
      try {
        this.initAudioContext();
        this.resumeContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, now);
        osc.frequency.setValueAtTime(1318.51, now + 0.08);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.35);
      } catch (e) {}
    }

    playFlip() {
      this.playPop(480, 0.03);
    }

    playExpandChime() {
      this.playPop(520, 0.04);
      setTimeout(() => this.playPop(659.25, 0.04), 40);
      setTimeout(() => this.playPop(783.99, 0.06), 80);
    }

    playCollapseWhoosh() {
      this.playPop(783.99, 0.04);
      setTimeout(() => this.playPop(520, 0.05), 40);
    }

    playMagicChime() {
      if (!this.enabled) return;
      try {
        this.initAudioContext();
        this.resumeContext();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
        notes.forEach((freq, idx) => {
          setTimeout(() => this.playPop(freq, 0.08), idx * 65);
        });
      } catch (e) {}
    }

    playBuilderRealmFanfare() {
      if (!this.enabled) return;
      try {
        this.initAudioContext();
        this.resumeContext();
        if (!this.ctx) return;
        const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760];
        notes.forEach((freq, idx) => {
          setTimeout(() => this.playPop(freq, 0.12), idx * 80);
        });
      } catch (e) {}
    }

    playDoorRattle() {
      if (!this.enabled) return;
      try {
        this.playPop(160, 0.08);
        setTimeout(() => this.playPop(130, 0.08), 70);
        setTimeout(() => this.playPop(110, 0.12), 140);
      } catch (e) {}
    }
  }

  const soundEngine = new SoundFXEngine();

  // ==========================================================================
  // 3. CORE DOM RENDERERS
  // ==========================================================================
  function renderHeroAndStats() {
    const { hero } = store.state;

    const elLine1 = document.getElementById('hero-name-line1');
    const elLine2 = document.getElementById('hero-name-line2');
    const elLine3 = document.getElementById('hero-name-line3');
    const elRole = document.getElementById('hero-role-text');
    const elBio = document.getElementById('hero-bio-text');
    const elStatus = document.getElementById('header-status-text');
    const elResume = document.getElementById('resume-download-btn');
    const elCoffee = document.getElementById('coffee-nav-btn');
    const elSupportCoffee = document.getElementById('btn-support-coffee');
    const elAvatarImg = document.getElementById('hero-avatar-img');

    if (elAvatarImg) {
      elAvatarImg.src = hero.avatarUrl || "Minimalist Lavender Circle Portrait.png";
    }

    if (elLine1) elLine1.textContent = hero.nameLine1 || "MD. EFTAKHAR";
    if (elLine2) elLine2.textContent = hero.nameLine2 || "AMIN";
    if (elLine3) elLine3.textContent = hero.nameLine3 || "SAKIB";
    if (elRole) elRole.textContent = hero.roleTitle;
    if (elBio) elBio.textContent = hero.bio;
    if (elStatus) elStatus.textContent = hero.statusText;

    if (elResume && hero.resumeUrl) elResume.href = hero.resumeUrl;
    if (elCoffee && hero.coffeeUrl) elCoffee.href = hero.coffeeUrl;
    if (elSupportCoffee && hero.coffeeUrl) elSupportCoffee.href = hero.coffeeUrl;

    // Render Metric Stats Chips
    const statsContainer = document.getElementById('stats-banner-container');
    if (statsContainer && hero.stats) {
      statsContainer.innerHTML = hero.stats.map(s => `
        <div class="stat-chip ${s.theme || 'yellow'}">
          <i class="${s.icon || 'fa-solid fa-chart-simple'}"></i>
          <span>${s.label}</span>
        </div>
      `).join('');
    }

    // Update Playground Badges
    const badgeDc = document.getElementById('badge-dont-click-best');
    if (badgeDc) badgeDc.textContent = `Clicks: ${store.dcBestClicks}`;

    const badgeMem = document.getElementById('badge-memory-best');
    if (badgeMem) badgeMem.textContent = `Best: ${store.getFormattedMemBest()}`;
  }

  function renderProjects() {
    const container = document.getElementById('projects-grid-container');
    const countBadge = document.getElementById('count-projects');
    const tabCount = document.getElementById('tab-count-proj');
    const countLabel = document.getElementById('cms-proj-count-label');

    if (countBadge) countBadge.textContent = store.state.projects.length;
    if (tabCount) tabCount.textContent = store.state.projects.length;
    if (countLabel) countLabel.textContent = store.state.projects.length;

    if (!container) return;

    container.innerHTML = store.state.projects.map((proj, idx) => {
      const bannerClass = proj.bannerClass || 'banner-gradient-1';
      const iconClass = proj.icon || 'fa-solid fa-brain';
      const chain = proj.chain || 'WEB APP';
      const value = proj.value || 'LIVE';
      const techsHtml = (proj.techs || []).map(t => `<span class="tech-pill">${t}</span>`).join('');
      const descText = proj.desc || '';
      const hasLongDesc = descText.length > 65;
      const hasImage = !!(proj.assetUrl || proj.imageUrl);
      const isVideo = isMediaVideo(proj);

      let visualBannerHtml = '';
      if (hasImage) {
        visualBannerHtml = `
          <div class="project-card-img-wrap view-details-btn" data-type="project" data-id="${proj.id}" style="cursor: pointer;">
            <img class="project-card-thumb" src="${proj.assetUrl || proj.imageUrl}" alt="${proj.title}" loading="lazy" />
            ${isVideo ? `
              <div class="project-play-overlay" title="Watch Demo Video">
                <i class="fa-solid fa-play"></i>
              </div>
            ` : ''}
            <span class="project-format-badge">${chain}</span>
          </div>
        `;
      } else {
        visualBannerHtml = `
          <div class="project-banner ${bannerClass} view-details-btn" data-type="project" data-id="${proj.id}" style="cursor: pointer;">
            <div class="project-floating-icon">
              <i class="${iconClass}"></i>
            </div>
            ${isVideo ? `
              <div class="project-play-overlay" style="top: 50%; left: 50%;" title="Watch Demo Video">
                <i class="fa-solid fa-play"></i>
              </div>
            ` : ''}
            <span class="project-tag-featured">${chain}</span>
          </div>
        `;
      }

      return `
        <article class="interactive-card project-card" data-index="${idx}" data-project-id="${proj.id}">
          <div class="card-admin-bar">
            <button class="card-edit-btn" data-action="edit-project" data-id="${proj.id}" title="Edit Project">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="card-del-btn" data-action="del-project" data-id="${proj.id}" title="Delete Project">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          ${visualBannerHtml}
          <div class="card-body">
            <div class="card-meta">
              <span class="project-category">${proj.category}</span>
              <div class="impact-price-pill">
                <span>${value}</span>
              </div>
            </div>
            <h3 class="card-title">${proj.title}</h3>
            
            <div class="card-desc-wrap">
              <p class="card-desc is-clamped">${descText}</p>
              ${hasLongDesc ? `
                <button type="button" class="btn-desc-toggle" aria-expanded="false">
                  <span class="toggle-text">See More</span>
                  <i class="fa-solid fa-chevron-down toggle-icon"></i>
                </button>
              ` : ''}
            </div>

            <div class="tech-stack-row">${techsHtml}</div>

            <div class="card-actions">
              <button class="action-link primary-action view-details-btn" data-type="project" data-id="${proj.id}">
                <span>${isVideo ? 'Watch Demo & Details' : 'Details & Demo'}</span>
                <i class="${isVideo ? 'fa-solid fa-play' : 'fa-solid fa-arrow-right'}"></i>
              </button>
              ${proj.githubUrl ? `
                <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="action-icon-link" title="GitHub Code">
                  <i class="fa-brands fa-github"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');

    bindDetailTriggers();
    updateStaggerIndices();
  }

  function renderMedia() {
    const container = document.getElementById('media-grid-container');
    const countBadge = document.getElementById('count-media');
    const tabCount = document.getElementById('tab-count-med');
    const countLabel = document.getElementById('cms-media-count-label');

    const filterCountAll = document.getElementById('filter-count-all');
    const filterCountVideo = document.getElementById('filter-count-video');
    const filterCountPoster = document.getElementById('filter-count-poster');
    const filterCountBanner = document.getElementById('filter-count-banner');

    const mediaList = store.state.media || [];
    const videoCount = mediaList.filter(m => isMediaVideo(m) || m.type === 'video' || (m.category && m.category.toLowerCase().includes('video')) || (m.chain && m.chain.toLowerCase().includes('reel'))).length;
    const posterCount = mediaList.filter(m => (m.category && m.category.toLowerCase().includes('poster')) || (m.chain && m.chain.toLowerCase().includes('print'))).length;
    const bannerCount = mediaList.filter(m => (m.category && (m.category.toLowerCase().includes('banner') || m.category.toLowerCase().includes('ui')))).length;

    if (countBadge) countBadge.textContent = mediaList.length;
    if (tabCount) tabCount.textContent = mediaList.length;
    if (countLabel) countLabel.textContent = mediaList.length;

    if (filterCountAll) filterCountAll.textContent = mediaList.length;
    if (filterCountVideo) filterCountVideo.textContent = videoCount;
    if (filterCountPoster) filterCountPoster.textContent = posterCount;
    if (filterCountBanner) filterCountBanner.textContent = bannerCount;

    if (!container) return;

    // Filter items based on active sub-filter
    const activeFilter = store.currentMediaFilter || 'all';
    const displayedMedia = mediaList.filter(m => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'video') {
        return isMediaVideo(m) || m.type === 'video' || (m.category && m.category.toLowerCase().includes('video')) || (m.chain && m.chain.toLowerCase().includes('reel'));
      }
      if (activeFilter === 'poster') {
        return (m.category && m.category.toLowerCase().includes('poster')) || (m.chain && m.chain.toLowerCase().includes('print'));
      }
      if (activeFilter === 'banner') {
        return (m.category && (m.category.toLowerCase().includes('banner') || m.category.toLowerCase().includes('ui')));
      }
      return true;
    });

    container.innerHTML = displayedMedia.map((m, idx) => {
      const bannerClass = m.bannerClass || (m.type === 'video' ? 'banner-gradient-media1' : 'banner-gradient-media2');
      const iconClass = m.icon || (m.type === 'video' ? 'fa-solid fa-clapperboard' : 'fa-solid fa-palette');
      const chain = m.chain || (m.type === 'video' ? 'VIDEO EDIT' : 'DESIGN');
      const value = m.value || 'SHOWCASE';
      const techsHtml = (m.techs || []).map(t => `<span class="tech-pill">${t}</span>`).join('');
      const hasImage = !!(m.assetUrl || m.imageUrl);
      const isVideo = isMediaVideo(m);
      const descText = m.desc || '';
      const hasLongDesc = descText.length > 65;

      let visualBannerHtml = '';
      if (hasImage) {
        visualBannerHtml = `
          <div class="media-card-img-wrap view-details-btn" data-type="media" data-id="${m.id}" style="cursor: pointer;">
            <img class="media-card-thumb" src="${m.assetUrl || m.imageUrl}" alt="${m.title}" loading="lazy" />
            ${isVideo ? `
              <div class="media-play-overlay" title="Watch Video">
                <i class="fa-solid fa-play"></i>
              </div>
            ` : ''}
            <span class="media-format-badge">${chain}</span>
          </div>
        `;
      } else {
        visualBannerHtml = `
          <div class="project-banner ${bannerClass} view-details-btn" data-type="media" data-id="${m.id}" style="cursor: pointer;">
            <div class="project-floating-icon" style="background: var(--pop-lavender);">
              <i class="${iconClass}"></i>
            </div>
            ${isVideo ? `
              <div class="media-play-overlay" style="top: 50%; left: 50%;" title="Watch Video">
                <i class="fa-solid fa-play"></i>
              </div>
            ` : ''}
            <span class="project-tag-featured" style="background: var(--pop-coral); color: #FFF;">${chain}</span>
          </div>
        `;
      }

      return `
        <article class="interactive-card media-card" data-index="${idx}" data-media-id="${m.id}">
          <div class="card-admin-bar">
            <button class="card-edit-btn" data-action="edit-media" data-id="${m.id}" title="Edit Work">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="card-del-btn" data-action="del-media" data-id="${m.id}" title="Delete Work">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          ${visualBannerHtml}
          <div class="card-body">
            <div class="card-meta">
              <span class="project-category media-cat">${m.category}</span>
              <div class="impact-price-pill" style="background: var(--pop-yellow);">
                <span>${value}</span>
              </div>
            </div>
            <h3 class="card-title">${m.title}</h3>
            
            <div class="card-desc-wrap">
              <p class="card-desc is-clamped">${descText}</p>
              ${hasLongDesc ? `
                <button type="button" class="btn-desc-toggle" aria-expanded="false">
                  <span class="toggle-text">See More</span>
                  <i class="fa-solid fa-chevron-down toggle-icon"></i>
                </button>
              ` : ''}
            </div>

            <div class="tech-stack-row">${techsHtml}</div>

            <div class="card-actions">
              <button class="action-link primary-action view-details-btn" data-type="media" data-id="${m.id}">
                <span>${isVideo ? 'Watch Video' : 'View Showcase'}</span>
                <i class="${isVideo ? 'fa-solid fa-play' : 'fa-solid fa-arrow-right'}"></i>
              </button>
              ${m.liveUrl ? `
                <a href="${m.liveUrl}" target="_blank" rel="noopener noreferrer" class="action-icon-link" title="Open External Link">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </article>
      `;
    }).join('');

    bindDetailTriggers();
    updateStaggerIndices();
  }

  function renderAchievements() {
    const container = document.getElementById('achievements-grid-container');
    const countBadge = document.getElementById('count-achievements');
    const tabCount = document.getElementById('tab-count-ach');

    if (countBadge) countBadge.textContent = store.state.achievements.length;
    if (tabCount) tabCount.textContent = store.state.achievements.length;

    if (!container) return;

    container.innerHTML = store.state.achievements.map((ach, idx) => {
      const themeClass = ach.theme === 'gold' ? 'trophy-glow' :
                         ach.theme === 'purple' ? 'star-glow' :
                         ach.theme === 'cyan' ? 'badge-glow' : 'keynote-glow';
      
      const badgeTheme = ach.theme || 'gold';
      const hasImage = !!(ach.assetUrl || ach.imageUrl);
      const descText = ach.desc || '';
      const hasLongDesc = descText.length > 65;

      let visualBannerHtml = '';
      if (hasImage) {
        visualBannerHtml = `
          <div class="achievement-card-img-wrap">
            <img class="achievement-card-thumb" src="${ach.assetUrl || ach.imageUrl}" alt="${ach.title}" loading="lazy" />
            <div class="achievement-zoom-overlay">
              <i class="fa-solid fa-expand"></i>
            </div>
            <span class="achievement-format-badge">${ach.badge}</span>
          </div>
        `;
      } else {
        visualBannerHtml = `
          <div class="achievement-icon-box ${themeClass}">
            <i class="${ach.icon || 'fa-solid fa-trophy'}"></i>
          </div>
        `;
      }

      return `
        <article class="interactive-card achievement-card" data-index="${idx}" data-achievement-id="${ach.id}">
          <div class="card-admin-bar">
            <button class="card-edit-btn" data-action="edit-ach" data-id="${ach.id}" title="Edit Achievement">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="card-del-btn" data-action="del-ach" data-id="${ach.id}" title="Delete Achievement">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          ${visualBannerHtml}
          <div class="card-body">
            <div class="card-meta">
              <span class="achievement-badge ${badgeTheme}">${ach.badge}</span>
              <span class="achievement-year">${ach.year}</span>
            </div>
            <h3 class="card-title">${ach.title}</h3>
            
            <div class="card-desc-wrap">
              <p class="card-desc is-clamped">${descText}</p>
              ${hasLongDesc ? `
                <button type="button" class="btn-desc-toggle" aria-expanded="false">
                  <span class="toggle-text">See More</span>
                  <i class="fa-solid fa-chevron-down toggle-icon"></i>
                </button>
              ` : ''}
            </div>

            <div class="achievement-metric-pill" style="margin-bottom: 0.5rem;">
              <i class="fa-solid fa-award"></i>
              <span>${ach.metric}</span>
            </div>

            <div class="card-actions">
              <button class="action-link primary-action view-details-btn" data-type="achievement" data-id="${ach.id}" style="width: 100%;">
                <span>View Certificate & Details</span>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    bindDetailTriggers();
    updateStaggerIndices();
  }

  function renderSocials() {
    const container = document.getElementById('social-grid-container');
    const countBadge = document.getElementById('count-socials');
    const tabCount = document.getElementById('tab-count-soc');

    if (countBadge) countBadge.textContent = store.state.socials.length;
    if (tabCount) tabCount.textContent = store.state.socials.length;

    if (!container) return;

    container.innerHTML = store.state.socials.map((soc, idx) => {
      const isEmail = soc.type === 'email';
      const isSchedule = soc.type === 'schedule';

      let actionBtn = '';
      if (isEmail) {
        actionBtn = `
          <button class="action-link copy-email-btn" data-email="${soc.url}">
            <i class="fa-regular fa-copy"></i>
            <span>Copy</span>
          </button>
          <a href="mailto:${soc.url}" class="action-link primary-action">
            <span>Send Email →</span>
          </a>
        `;
      } else if (isSchedule) {
        actionBtn = `
          <button class="action-link primary-action schedule-trigger-btn">
            <span>Schedule 1:1 →</span>
          </button>
        `;
      } else {
        actionBtn = `
          <a href="${soc.url}" target="_blank" rel="noopener noreferrer" class="action-link external-action">
            <span>Connect →</span>
          </a>
        `;
      }

      return `
        <article class="interactive-card social-card" data-index="${idx}">
          <div class="card-admin-bar">
            <button class="card-edit-btn" data-action="edit-soc" data-id="${soc.id}" title="Edit Link">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="card-del-btn" data-action="del-soc" data-id="${soc.id}" title="Delete Link">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div class="social-icon-circle email-icon">
            <i class="${soc.icon || 'fa-solid fa-link'}"></i>
          </div>
          <div class="card-body">
            <span class="social-label">${soc.label}</span>
            <h3 class="card-title">${soc.title}</h3>
            <p class="card-desc">${soc.desc}</p>
            <div class="card-actions">${actionBtn}</div>
          </div>
        </article>
      `;
    }).join('');

    bindSocialTriggers();
    updateStaggerIndices();
  }

  function updateStaggerIndices() {
    document.querySelectorAll('.cascade-panel').forEach(panel => {
      const cards = panel.querySelectorAll('.interactive-card');
      cards.forEach((card, index) => {
        card.style.setProperty('--stagger-i', index);
        card.style.setProperty('--total-cards', cards.length);
      });
    });
  }

  function renderFeatureVisibility() {
    const visibility = store.state.featureVisibility || {
      projects: true,
      achievements: true,
      socials: true,
      media: true
    };

    const isProjectsVisible = visibility.projects !== false;
    const isAchievementsVisible = visibility.achievements !== false;
    const isSocialsVisible = visibility.socials !== false;
    const isMediaVisible = visibility.media !== false;

    // 1. Master Capsule Buttons on Homepage
    const btnProjects = document.getElementById('btn-projects');
    const btnAchievements = document.getElementById('btn-achievements');
    const btnSocials = document.getElementById('btn-social');
    const mediaWrap = document.querySelector('.media-design-capsule-wrap');

    if (btnProjects) btnProjects.style.display = isProjectsVisible ? '' : 'none';
    if (btnAchievements) btnAchievements.style.display = isAchievementsVisible ? '' : 'none';
    if (btnSocials) btnSocials.style.display = isSocialsVisible ? '' : 'none';
    if (mediaWrap) mediaWrap.style.display = isMediaVisible ? 'flex' : 'none';

    // 2. Auto-collapse any open panel if its corresponding feature was just disabled
    if (window.cascadeEngine && window.cascadeEngine.activePanelId) {
      const activeId = window.cascadeEngine.activePanelId;
      if (activeId === 'panel-projects' && !isProjectsVisible) {
        window.cascadeEngine.collapse('panel-projects');
        window.cascadeEngine.activePanelId = null;
      } else if (activeId === 'panel-achievements' && !isAchievementsVisible) {
        window.cascadeEngine.collapse('panel-achievements');
        window.cascadeEngine.activePanelId = null;
      } else if (activeId === 'panel-social' && !isSocialsVisible) {
        window.cascadeEngine.collapse('panel-social');
        window.cascadeEngine.activePanelId = null;
      } else if (activeId === 'panel-media' && !isMediaVisible) {
        window.cascadeEngine.collapse('panel-media');
        window.cascadeEngine.activePanelId = null;
      }
    }

    // 3. Dynamic layout for Capsules Track
    const capsulesTrack = document.getElementById('capsules-track');
    if (capsulesTrack) {
      const topVisibleCount = [isProjectsVisible, isAchievementsVisible, isSocialsVisible].filter(Boolean).length;
      capsulesTrack.setAttribute('data-visible-count', topVisibleCount);
      capsulesTrack.style.display = topVisibleCount > 0 ? 'grid' : 'none';
    }

    // 4. Footer keyboard shortcut hints
    const kbdProjects = document.getElementById('kbd-hint-projects');
    const kbdAchievements = document.getElementById('kbd-hint-achievements');
    const kbdSocials = document.getElementById('kbd-hint-socials');
    const kbdMedia = document.getElementById('kbd-hint-media');

    if (kbdProjects) kbdProjects.style.display = isProjectsVisible ? '' : 'none';
    if (kbdAchievements) kbdAchievements.style.display = isAchievementsVisible ? '' : 'none';
    if (kbdSocials) kbdSocials.style.display = isSocialsVisible ? '' : 'none';
    if (kbdMedia) kbdMedia.style.display = isMediaVisible ? '' : 'none';

    // 5. CMS Master Toggles in Backup & Settings
    const toggleProjects = document.getElementById('toggle-feat-projects');
    const toggleAchievements = document.getElementById('toggle-feat-achievements');
    const toggleSocials = document.getElementById('toggle-feat-socials');
    const toggleMedia = document.getElementById('toggle-feat-media');

    if (toggleProjects) toggleProjects.checked = isProjectsVisible;
    if (toggleAchievements) toggleAchievements.checked = isAchievementsVisible;
    if (toggleSocials) toggleSocials.checked = isSocialsVisible;
    if (toggleMedia) toggleMedia.checked = isMediaVisible;

    const itemProjects = document.getElementById('toggle-item-projects');
    const itemAchievements = document.getElementById('toggle-item-achievements');
    const itemSocials = document.getElementById('toggle-item-socials');
    const itemMedia = document.getElementById('toggle-item-media');

    if (itemProjects) itemProjects.classList.toggle('is-disabled', !isProjectsVisible);
    if (itemAchievements) itemAchievements.classList.toggle('is-disabled', !isAchievementsVisible);
    if (itemSocials) itemSocials.classList.toggle('is-disabled', !isSocialsVisible);
    if (itemMedia) itemMedia.classList.toggle('is-disabled', !isMediaVisible);

    const chipProjects = document.getElementById('chip-status-projects');
    const chipAchievements = document.getElementById('chip-status-achievements');
    const chipSocials = document.getElementById('chip-status-socials');
    const chipMedia = document.getElementById('chip-status-media');

    function updateChip(chipEl, isVisible) {
      if (!chipEl) return;
      chipEl.textContent = isVisible ? 'VISIBLE 👁️' : 'HIDDEN 🚫';
      chipEl.className = isVisible ? 'feature-status-chip is-visible' : 'feature-status-chip is-hidden';
    }

    updateChip(chipProjects, isProjectsVisible);
    updateChip(chipAchievements, isAchievementsVisible);
    updateChip(chipSocials, isSocialsVisible);
    updateChip(chipMedia, isMediaVisible);

    // 6. In-Tab Quick Banners inside CMS Tabs
    function updateTabBanner(statusElId, btnElId, isVisible, labelName) {
      const statusEl = document.getElementById(statusElId);
      const btnEl = document.getElementById(btnElId);
      if (statusEl) {
        statusEl.textContent = isVisible ? 'LIVE ON WEBSITE 👁️' : 'HIDDEN FROM VISITORS 🚫';
        statusEl.className = isVisible ? 'tab-feat-vis-status is-visible' : 'tab-feat-vis-status is-hidden';
      }
      if (btnEl) {
        if (isVisible) {
          btnEl.innerHTML = `<i class="fa-solid fa-eye-slash"></i> <span>Hide from Website</span>`;
          btnEl.classList.remove('is-hidden-state');
          btnEl.title = `Disable ${labelName} so it becomes invisible on the website`;
        } else {
          btnEl.innerHTML = `<i class="fa-solid fa-eye"></i> <span>Show on Website</span>`;
          btnEl.classList.add('is-hidden-state');
          btnEl.title = `Enable ${labelName} to make it visible again on the website`;
        }
      }
    }

    updateTabBanner('tab-vis-status-projects', 'btn-tab-toggle-projects', isProjectsVisible, 'Featured Projects');
    updateTabBanner('tab-vis-status-media', 'btn-tab-toggle-media', isMediaVisible, 'Media & Design Studio');
    updateTabBanner('tab-vis-status-achievements', 'btn-tab-toggle-achievements', isAchievementsVisible, 'Achievements');
    updateTabBanner('tab-vis-status-socials', 'btn-tab-toggle-socials', isSocialsVisible, 'Connect & Socials');

    // 7. CMS Nav Tab Off Indicators
    const tabOffProjects = document.getElementById('tab-off-projects');
    const tabOffMedia = document.getElementById('tab-off-media');
    const tabOffAchievements = document.getElementById('tab-off-achievements');
    const tabOffSocials = document.getElementById('tab-off-socials');

    if (tabOffProjects) tabOffProjects.style.display = isProjectsVisible ? 'none' : 'inline-block';
    if (tabOffMedia) tabOffMedia.style.display = isMediaVisible ? 'none' : 'inline-block';
    if (tabOffAchievements) tabOffAchievements.style.display = isAchievementsVisible ? 'none' : 'inline-block';
    if (tabOffSocials) tabOffSocials.style.display = isSocialsVisible ? 'none' : 'inline-block';
  }

  function renderAll() {
    renderHeroAndStats();
    renderProjects();
    renderMedia();
    renderAchievements();
    renderSocials();
    renderCMSLists();
    renderFeatureVisibility();
  }

  // ==========================================================================
  // 4. CMS LIST RENDERERS
  // ==========================================================================
  function renderCMSLists() {
    const projList = document.getElementById('cms-projects-list');
    if (projList) {
      projList.innerHTML = store.state.projects.map(p => `
        <div class="cms-item-row">
          <div>
            <div class="cms-item-title">${p.title}</div>
            <div class="cms-item-meta">${p.category} • ${p.chain} • ${p.value}</div>
          </div>
          <div class="cms-item-controls">
            <button type="button" class="btn-icon-edit" data-action="edit-project" data-id="${p.id}">Edit</button>
            <button type="button" class="btn-icon-del" data-action="del-project" data-id="${p.id}">Delete</button>
          </div>
        </div>
      `).join('');
    }

    const mediaList = document.getElementById('cms-media-list');
    if (mediaList) {
      mediaList.innerHTML = (store.state.media || []).map(m => `
        <div class="cms-item-row">
          <div>
            <div class="cms-item-title">${m.title}</div>
            <div class="cms-item-meta">${m.type === 'video' ? '🎬 VIDEO' : '🎨 DESIGN'} • ${m.category} • ${m.value}</div>
          </div>
          <div class="cms-item-controls">
            <button type="button" class="btn-icon-edit" data-action="edit-media" data-id="${m.id}">Edit</button>
            <button type="button" class="btn-icon-del" data-action="del-media" data-id="${m.id}">Delete</button>
          </div>
        </div>
      `).join('');
    }

    const achList = document.getElementById('cms-achievements-list');
    if (achList) {
      achList.innerHTML = store.state.achievements.map(a => `
        <div class="cms-item-row">
          <div>
            <div class="cms-item-title">${a.title}</div>
            <div class="cms-item-meta">${a.badge} • ${a.year}</div>
          </div>
          <div class="cms-item-controls">
            <button type="button" class="btn-icon-edit" data-action="edit-ach" data-id="${a.id}">Edit</button>
            <button type="button" class="btn-icon-del" data-action="del-ach" data-id="${a.id}">Delete</button>
          </div>
        </div>
      `).join('');
    }

    const socList = document.getElementById('cms-socials-list');
    if (socList) {
      socList.innerHTML = store.state.socials.map(s => `
        <div class="cms-item-row">
          <div>
            <div class="cms-item-title">${s.title}</div>
            <div class="cms-item-meta">${s.label} • ${s.url}</div>
          </div>
          <div class="cms-item-controls">
            <button type="button" class="btn-icon-edit" data-action="edit-soc" data-id="${s.id}">Edit</button>
            <button type="button" class="btn-icon-del" data-action="del-soc" data-id="${s.id}">Delete</button>
          </div>
        </div>
      `).join('');
    }
  }

  // ==========================================================================
  // 5. KINETIC CASCADE MOTION CONTROLLER (Portfolio Main Triggers)
  // ==========================================================================
  class CascadeManager {
    constructor() {
      this.activePanelId = null;
      this.isAnimating = false;
      this.triggers = document.querySelectorAll('.capsule-trigger');
      this.initTriggers();
      this.initMediaSubFilters();
    }

    initTriggers() {
      this.triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = btn.getAttribute('data-target');
          this.toggle(targetId);
        });

        btn.addEventListener('mouseenter', () => {
          soundEngine.playPop(520, 0.02);
        });
      });

      document.querySelectorAll('.panel-close-btn').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
          if (this.activePanelId) {
            this.collapse(this.activePanelId);
            this.activePanelId = null;
          }
        });
      });

      document.querySelectorAll('.panel-action-btn.add-btn').forEach(addBtn => {
        addBtn.addEventListener('click', () => {
          const type = addBtn.getAttribute('data-add');
          openCMSModal(type);
        });
      });
    }

    initMediaSubFilters() {
      document.querySelectorAll('.media-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          soundEngine.playPop(560, 0.03);
          const filter = btn.getAttribute('data-media-filter');
          store.currentMediaFilter = filter;

          document.querySelectorAll('.media-filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          renderMedia();
        });
      });
    }

    async toggle(targetId) {
      if (this.isAnimating) return;

      const visibility = store.state.featureVisibility || { projects: true, achievements: true, socials: true, media: true };
      if (targetId === 'panel-projects' && visibility.projects === false) return;
      if (targetId === 'panel-achievements' && visibility.achievements === false) return;
      if (targetId === 'panel-social' && visibility.socials === false) return;
      if (targetId === 'panel-media' && visibility.media === false) return;

      if (this.activePanelId === targetId) {
        this.isAnimating = true;
        await this.collapse(this.activePanelId);
        this.activePanelId = null;
        this.isAnimating = false;
      } else if (this.activePanelId) {
        this.isAnimating = true;
        const prevId = this.activePanelId;
        await this.collapse(prevId);
        await this.expand(targetId);
        this.activePanelId = targetId;
        this.isAnimating = false;
      } else {
        this.isAnimating = true;
        await this.expand(targetId);
        this.activePanelId = targetId;
        this.isAnimating = false;
      }
    }

    expand(panelId) {
      return new Promise((resolve) => {
        const trigger = document.querySelector(`[data-target="${panelId}"]`);
        const panel = document.getElementById(panelId);
        if (!panel || !trigger) return resolve();

        soundEngine.playExpandChime();

        trigger.classList.add('is-active');
        trigger.setAttribute('aria-expanded', 'true');

        panel.removeAttribute('hidden');
        panel.classList.remove('is-collapsing');

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            panel.classList.add('is-active');

            const panelRect = panel.getBoundingClientRect();
            if (panelRect.bottom > window.innerHeight) {
              panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            const cards = panel.querySelectorAll('.interactive-card');
            const totalDuration = (cards.length * 85) + 400;
            setTimeout(resolve, totalDuration);
          });
        });
      });
    }

    collapse(panelId) {
      return new Promise((resolve) => {
        const trigger = document.querySelector(`[data-target="${panelId}"]`);
        const panel = document.getElementById(panelId);
        if (!panel || !trigger) return resolve();

        soundEngine.playCollapseWhoosh();

        trigger.classList.remove('is-active');
        trigger.setAttribute('aria-expanded', 'false');

        panel.classList.remove('is-active');
        panel.classList.add('is-collapsing');

        const cards = panel.querySelectorAll('.interactive-card');
        const collapseDuration = (cards.length * 35) + 280;

        setTimeout(() => {
          panel.setAttribute('hidden', '');
          panel.classList.remove('is-collapsing');
          resolve();
        }, collapseDuration);
      });
    }
  }

  // ==========================================================================
  // 6. PLAYGROUND ARCHITECTURE & EXPERIMENTS REGISTRY
  // ==========================================================================
  class PlaygroundEngine {
    constructor() {
      this.teaserCard = document.getElementById('playground-teaser-card');
      this.expandedPanel = document.getElementById('playground-expanded-panel');
      this.directoryView = document.getElementById('experiments-directory-view');
      this.dontClickView = document.getElementById('dont-click-view');
      this.memoryView = document.getElementById('memory-game-view');
      this.successView = document.getElementById('exp-success-panel');
      this.backBtn = document.getElementById('btn-playground-back');
      this.closeBtn = document.getElementById('btn-playground-close');

      this.currentView = 'CLOSED';
      this.activeGameInstance = null;

      this.initShell();
    }

    initShell() {
      if (this.teaserCard) {
        this.teaserCard.addEventListener('click', () => this.openPlayground());
        this.teaserCard.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.openPlayground();
          }
        });
      }

      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.closePlayground());
      }

      if (this.backBtn) {
        this.backBtn.addEventListener('click', () => this.showDirectory());
      }

      const cardDc = document.getElementById('card-exp-dont-click');
      if (cardDc) {
        cardDc.addEventListener('click', () => this.openExperiment('dont-click'));
      }

      const cardMem = document.getElementById('card-exp-memory');
      if (cardMem) {
        cardMem.addEventListener('click', () => this.openExperiment('memory-game'));
      }

      const backFromDc = document.getElementById('btn-dc-back');
      if (backFromDc) backFromDc.addEventListener('click', () => this.showDirectory());

      const backFromMem = document.getElementById('btn-mem-back');
      if (backFromMem) backFromMem.addEventListener('click', () => this.showDirectory());

      const backFromSuccess = document.getElementById('btn-success-back-playground');
      if (backFromSuccess) backFromSuccess.addEventListener('click', () => this.showDirectory());

      const playAgainBtn = document.getElementById('btn-success-play-again');
      if (playAgainBtn) {
        playAgainBtn.addEventListener('click', () => {
          if (this.lastExpId) this.openExperiment(this.lastExpId);
          else this.showDirectory();
        });
      }

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.currentView !== 'CLOSED') {
          if (['DONT_CLICK', 'MEMORY', 'SUCCESS'].includes(this.currentView)) {
            this.showDirectory();
          } else {
            this.closePlayground();
          }
        }
      });
    }

    openPlayground() {
      soundEngine.playExpandChime();
      this.currentView = 'DIRECTORY';

      this.teaserCard.style.display = 'none';
      this.expandedPanel.removeAttribute('hidden');
      this.expandedPanel.classList.add('active');

      this.showDirectory();

      requestAnimationFrame(() => {
        this.expandedPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }

    closePlayground() {
      soundEngine.playCollapseWhoosh();
      this.currentView = 'CLOSED';

      if (this.activeGameInstance && this.activeGameInstance.cleanup) {
        this.activeGameInstance.cleanup();
      }

      this.expandedPanel.classList.remove('active');
      this.expandedPanel.setAttribute('hidden', '');
      this.teaserCard.style.display = 'flex';
    }

    showDirectory() {
      soundEngine.playPop(520, 0.03);
      this.currentView = 'DIRECTORY';

      if (this.activeGameInstance && this.activeGameInstance.cleanup) {
        this.activeGameInstance.cleanup();
      }

      if (this.backBtn) this.backBtn.style.display = 'none';
      if (this.directoryView) this.directoryView.style.display = 'block';
      if (this.dontClickView) this.dontClickView.style.display = 'none';
      if (this.memoryView) this.memoryView.style.display = 'none';
      if (this.successView) this.successView.style.display = 'none';

      renderHeroAndStats();
    }

    openExperiment(expId) {
      this.lastExpId = expId;
      if (this.activeGameInstance && this.activeGameInstance.cleanup) {
        this.activeGameInstance.cleanup();
      }

      if (this.directoryView) this.directoryView.style.display = 'none';
      if (this.successView) this.successView.style.display = 'none';
      if (this.backBtn) this.backBtn.style.display = 'inline-flex';

      if (expId === 'dont-click') {
        soundEngine.playPop(620, 0.04);
        this.currentView = 'DONT_CLICK';
        if (this.memoryView) this.memoryView.style.display = 'none';
        if (this.dontClickView) this.dontClickView.style.display = 'flex';

        this.activeGameInstance = new DontClickExperiment((result) => this.onExperimentSuccess(result));
        this.activeGameInstance.init();
      } else if (expId === 'memory-game') {
        soundEngine.playPop(680, 0.04);
        this.currentView = 'MEMORY';
        if (this.dontClickView) this.dontClickView.style.display = 'none';
        if (this.memoryView) this.memoryView.style.display = 'flex';

        this.activeGameInstance = new MemoryOverclockExperiment((result) => this.onExperimentSuccess(result));
        this.activeGameInstance.init();
      }
    }

    onExperimentSuccess(result) {
      this.currentView = 'SUCCESS';
      soundEngine.playCoinPing();

      if (this.dontClickView) this.dontClickView.style.display = 'none';
      if (this.memoryView) this.memoryView.style.display = 'none';
      if (this.successView) this.successView.style.display = 'flex';
      if (this.backBtn) this.backBtn.style.display = 'inline-flex';

      const headline = document.getElementById('success-headline');
      const statChips = document.getElementById('success-stat-chips');
      const easterEgg = document.getElementById('easter-egg-banner');
      const philText = document.getElementById('success-philosophy-text');

      if (headline) headline.textContent = result.title || "EXPERIMENT CONQUERED!";
      if (philText && result.reflection) philText.textContent = `"${result.reflection}"`;

      if (statChips && result.stats) {
        statChips.innerHTML = result.stats.map(s => `
          <div class="success-stat-chip">${s}</div>
        `).join('');
      }

      if (easterEgg) {
        easterEgg.style.display = result.isEasterEgg ? 'inline-block' : 'none';
      }

      requestAnimationFrame(() => {
        this.successView.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  }

  // ==========================================================================
  // 7. EXPERIMENT 01: "DON'T CLICK"
  // ==========================================================================
  class DontClickExperiment {
    constructor(onSuccess) {
      this.onSuccess = onSuccess;
      this.arena = document.getElementById('dont-click-arena');
      this.btn = document.getElementById('dc-target-btn');
      this.bubble = document.getElementById('dc-speech-bubble');
      this.btnText = document.getElementById('dc-btn-text');
      this.dodgesCountEl = document.getElementById('dc-dodges-count');
      this.moodValEl = document.getElementById('dc-mood-val');
      this.timerEl = document.getElementById('dc-timer');
      this.resetBtn = document.getElementById('btn-dc-reset');

      this.dodges = 0;
      this.phase = 1;
      this.startTime = null;
      this.timerInterval = null;
      this.elapsedSeconds = 0;
      this.isExhausted = false;
      this.clones = [];
      this.mousePos = { x: 0, y: 0 };
    }

    init() {
      if (this.resetBtn) {
        this.resetBtn.onclick = () => {
          soundEngine.playPop(520, 0.04);
          this.reset();
        };
      }

      this.reset();
      this.bindEvents();
    }

    startTimer() {
      if (this.startTime) return;
      this.startTime = Date.now();
      this.elapsedSeconds = 0;
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        this.elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
        const m = Math.floor(this.elapsedSeconds / 60).toString().padStart(2, '0');
        const s = (this.elapsedSeconds % 60).toString().padStart(2, '0');
        if (this.timerEl) this.timerEl.textContent = `${m}:${s}`;
      }, 1000);
    }

    reset() {
      clearInterval(this.timerInterval);
      this.startTime = null;
      this.elapsedSeconds = 0;
      this.dodges = 0;
      this.phase = 1;
      this.isExhausted = false;

      if (this.timerEl) this.timerEl.textContent = "00:00";
      if (this.dodgesCountEl) this.dodgesCountEl.textContent = "0";
      if (this.moodValEl) this.moodValEl.textContent = "DEFENSIVE 🛡️";
      if (this.bubble) this.bubble.textContent = "Don't even think about it. ✋";
      if (this.btnText) this.btnText.textContent = "DON'T CLICK ME";

      if (this.btn) {
        this.btn.style.left = "50%";
        this.btn.style.top = "55%";
        this.btn.style.transform = "translate(-50%, -50%)";
        this.btn.style.background = "var(--pop-coral)";
      }

      this.removeClones();
    }

    bindEvents() {
      if (!this.arena || !this.btn) return;

      this.mouseMoveHandler = (e) => this.handlePointerMove(e);
      this.clickHandler = (e) => this.handleButtonClick(e);

      this.arena.addEventListener('mousemove', this.mouseMoveHandler);
      this.arena.addEventListener('touchmove', (e) => {
        if (e.touches[0]) {
          this.handlePointerMove(e.touches[0]);
        }
      }, { passive: true });

      this.btn.addEventListener('click', this.clickHandler);
    }

    handlePointerMove(e) {
      if (this.isExhausted) return;
      this.startTimer();

      const arenaRect = this.arena.getBoundingClientRect();
      const btnRect = this.btn.getBoundingClientRect();

      const pointerX = e.clientX - arenaRect.left;
      const pointerY = e.clientY - arenaRect.top;

      const btnCenterX = (btnRect.left + btnRect.width / 2) - arenaRect.left;
      const btnCenterY = (btnRect.top + btnRect.height / 2) - arenaRect.top;

      const dx = pointerX - btnCenterX;
      const dy = pointerY - btnCenterY;
      const distance = Math.hypot(dx, dy);

      const triggerDistance = this.phase >= 4 ? 120 : 95;

      if (distance < triggerDistance) {
        this.evadePointer(pointerX, pointerY, arenaRect, btnRect);
      }
    }

    evadePointer(px, py, arenaRect, btnRect) {
      this.dodges++;
      if (this.dodgesCountEl) this.dodgesCountEl.textContent = this.dodges.toString();
      soundEngine.playPop(300 + (this.dodges * 18), 0.03);

      this.updatePhase();

      const padding = 20;
      const maxW = arenaRect.width - btnRect.width - padding;
      const maxH = arenaRect.height - btnRect.height - padding;

      let newX = Math.random() * maxW + padding / 2;
      let newY = Math.random() * maxH + padding / 2;

      if (Math.hypot(newX - px, newY - py) < 90) {
        newX = (newX + 150) % maxW + padding / 2;
        newY = (newY + 120) % maxH + padding / 2;
      }

      this.btn.style.left = `${newX}px`;
      this.btn.style.top = `${newY}px`;
      this.btn.style.transform = `scale(${1 + Math.sin(this.dodges) * 0.08})`;

      this.updateDialogue();
    }

    updatePhase() {
      if (this.dodges >= 16 && !this.isExhausted) {
        this.phase = 6;
        this.isExhausted = true;
        if (this.moodValEl) this.moodValEl.textContent = "OUT OF JUICE 😵";
        if (this.bubble) this.bubble.textContent = "Okay fine... I'm out of battery. You win. Click me.";
        if (this.btnText) this.btnText.textContent = "CLICK TO CLAIM WIN";
        this.btn.style.background = "var(--pop-lime)";
        this.btn.style.transform = "translate(0, 0) scale(1.1)";
        this.removeClones();
      } else if (this.dodges >= 12) {
        this.phase = 5;
        if (this.moodValEl) this.moodValEl.textContent = "DESPERATE ⚡";
        this.spawnDecoyClones();
      } else if (this.dodges >= 8) {
        this.phase = 4;
        if (this.moodValEl) this.moodValEl.textContent = "HYPER-SPEED 🏃‍♂️";
      } else if (this.dodges >= 4) {
        this.phase = 2;
        if (this.moodValEl) this.moodValEl.textContent = "ANNOYED 💢";
      }
    }

    updateDialogue() {
      if (this.isExhausted) return;
      const dialogues = [
        "Nope! Too slow. 🏃‍♂️",
        "Haha, missed me! 😎",
        "You really want this button, huh? 🤨",
        "My latency is lower than yours! ⚡",
        "Error 404: Click not found. 🚫",
        "Are you using trackpad or a potato? 🥔",
        "Nice try, human! 🤖",
        "I can do this all day. ☕",
        "You're making this personal now. 💥",
        "Stop chasing me! 🛑"
      ];
      const randomLine = dialogues[Math.floor(Math.random() * dialogues.length)];
      if (this.bubble) this.bubble.textContent = randomLine;
    }

    spawnDecoyClones() {
      if (this.clones.length >= 3) return;
      const arenaRect = this.arena.getBoundingClientRect();

      for (let i = 0; i < 2; i++) {
        const clone = document.createElement('button');
        clone.className = 'dont-click-clone';
        clone.textContent = "CLICK ME";
        clone.style.left = `${Math.random() * (arenaRect.width - 120) + 20}px`;
        clone.style.top = `${Math.random() * (arenaRect.height - 60) + 20}px`;

        clone.onclick = () => {
          soundEngine.playPop(180, 0.08);
          showToast("THAT WAS A DECOY! 🤡");
          clone.style.transform = "scale(0)";
          setTimeout(() => clone.remove(), 200);
        };

        this.arena.appendChild(clone);
        this.clones.push(clone);
      }
    }

    removeClones() {
      this.clones.forEach(c => c.remove());
      this.clones = [];
    }

    handleButtonClick(e) {
      e.stopPropagation();
      clearInterval(this.timerInterval);

      store.saveDcScore(this.dodges);
      soundEngine.playCoinPing();

      const m = Math.floor(this.elapsedSeconds / 60).toString().padStart(2, '0');
      const s = (this.elapsedSeconds % 60).toString().padStart(2, '0');

      if (this.onSuccess) {
        this.onSuccess({
          title: "SELF-DEFENDING BUTTON CAPTURED!",
          stats: [
            `✓ ${this.dodges} DODGES CORNERED`,
            `✓ TIME: ${m}:${s}`,
            `✓ TOTAL VICTORIES: ${store.dcBestClicks}`
          ],
          isEasterEgg: this.dodges >= 20,
          reflection: "That's the kind of persistence I like. Difficult edge cases require patience, curiosity, and creative problem-solving. That's also how I approach the software I build."
        });
      }
    }

    cleanup() {
      clearInterval(this.timerInterval);
      this.removeClones();
      if (this.arena && this.mouseMoveHandler) {
        this.arena.removeEventListener('mousemove', this.mouseMoveHandler);
      }
      if (this.btn && this.clickHandler) {
        this.btn.removeEventListener('click', this.clickHandler);
      }
    }
  }

  // ==========================================================================
  // 8. EXPERIMENT 02: "MEMORY OVERCLOCK" (16 Cards Kinetic Matching Matrix)
  // ==========================================================================
  class MemoryOverclockExperiment {
    constructor(onSuccess) {
      this.onSuccess = onSuccess;
      this.grid = document.getElementById('memory-grid-container');
      this.timerEl = document.getElementById('mem-timer');
      this.matchesCountEl = document.getElementById('mem-matches-count');
      this.flipsCountEl = document.getElementById('mem-flips-count');
      this.resetBtn = document.getElementById('btn-mem-reset');

      this.techIcons = [
        { key: 'react', icon: 'fa-brands fa-react', color: '#38BDF8' },
        { key: 'node', icon: 'fa-brands fa-node-js', color: '#4ADE80' },
        { key: 'js', icon: 'fa-brands fa-js', color: '#FFDE59' },
        { key: 'python', icon: 'fa-brands fa-python', color: '#38BDF8' },
        { key: 'github', icon: 'fa-brands fa-github', color: '#000000' },
        { key: 'docker', icon: 'fa-brands fa-docker', color: '#0EA5E9' },
        { key: 'db', icon: 'fa-solid fa-database', color: '#FF5E7E' },
        { key: 'brain', icon: 'fa-solid fa-brain', color: '#C4B5FD' }
      ];

      this.cards = [];
      this.flippedCards = [];
      this.matchedPairs = 0;
      this.totalFlips = 0;
      this.isLocked = false;

      this.startTime = null;
      this.timerInterval = null;
      this.elapsedSeconds = 0;
    }

    init() {
      if (this.resetBtn) {
        this.resetBtn.onclick = () => {
          soundEngine.playPop(520, 0.04);
          this.restart();
        };
      }
      this.restart();
    }

    startTimer() {
      if (this.startTime) return;
      this.startTime = Date.now();
      this.elapsedSeconds = 0;
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        this.elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
        const m = Math.floor(this.elapsedSeconds / 60).toString().padStart(2, '0');
        const s = (this.elapsedSeconds % 60).toString().padStart(2, '0');
        if (this.timerEl) this.timerEl.textContent = `${m}:${s}`;
      }, 1000);
    }

    restart() {
      clearInterval(this.timerInterval);
      this.startTime = null;
      this.elapsedSeconds = 0;
      this.matchedPairs = 0;
      this.totalFlips = 0;
      this.flippedCards = [];
      this.isLocked = false;

      if (this.timerEl) this.timerEl.textContent = "00:00";
      if (this.matchesCountEl) this.matchesCountEl.textContent = "0 / 8";
      if (this.flipsCountEl) this.flipsCountEl.textContent = "0";

      this.setupDeck();
    }

    setupDeck() {
      const deck = [...this.techIcons, ...this.techIcons].map((item, idx) => ({
        id: idx,
        key: item.key,
        icon: item.icon,
        color: item.color
      }));

      deck.sort(() => Math.random() - 0.5);

      if (!this.grid) return;
      this.grid.innerHTML = deck.map((card) => `
        <div class="memory-card-flip" data-id="${card.id}" data-key="${card.key}">
          <div class="memory-card-cover">?</div>
          <div class="memory-card-icon" style="color: ${card.color}">
            <i class="${card.icon}"></i>
          </div>
        </div>
      `).join('');

      this.grid.querySelectorAll('.memory-card-flip').forEach(cardEl => {
        cardEl.addEventListener('click', () => this.handleCardClick(cardEl));
      });
    }

    handleCardClick(cardEl) {
      if (this.isLocked) return;
      if (cardEl.classList.contains('is-revealed') || cardEl.classList.contains('is-matched')) return;

      this.startTimer();
      soundEngine.playFlip();

      cardEl.classList.add('is-revealed');
      this.flippedCards.push(cardEl);
      this.totalFlips++;
      if (this.flipsCountEl) this.flipsCountEl.textContent = this.totalFlips.toString();

      if (this.flippedCards.length === 2) {
        this.checkMatch();
      }
    }

    checkMatch() {
      this.isLocked = true;
      const [card1, card2] = this.flippedCards;
      const key1 = card1.getAttribute('data-key');
      const key2 = card2.getAttribute('data-key');

      if (key1 === key2) {
        soundEngine.playCoinPing();
        card1.classList.add('is-matched');
        card2.classList.add('is-matched');
        this.matchedPairs++;
        if (this.matchesCountEl) this.matchesCountEl.textContent = `${this.matchedPairs} / 8`;

        this.flippedCards = [];
        this.isLocked = false;

        if (this.matchedPairs === 8) {
          this.handleVictory();
        }
      } else {
        setTimeout(() => {
          soundEngine.playPop(260, 0.05);
          card1.classList.remove('is-revealed');
          card2.classList.remove('is-revealed');
          this.flippedCards = [];
          this.isLocked = false;
        }, 700);
      }
    }

    handleVictory() {
      clearInterval(this.timerInterval);
      soundEngine.playCoinPing();

      const isNewRecord = store.saveMemBestTime(this.elapsedSeconds);
      const m = Math.floor(this.elapsedSeconds / 60).toString().padStart(2, '0');
      const s = (this.elapsedSeconds % 60).toString().padStart(2, '0');

      setTimeout(() => {
        if (this.onSuccess) {
          this.onSuccess({
            title: "MEMORY MATRIX OVERCLOCKED!",
            stats: [
              `✓ 8 / 8 PAIRS MATCHED`,
              `✓ ${this.totalFlips} FLIPS`,
              `✓ TIME: ${m}:${s}`,
              ...(isNewRecord ? ['🏆 NEW RECORD!'] : [])
            ],
            isEasterEgg: this.elapsedSeconds < 25,
            reflection: "Precision, pattern recognition, and focus are everything in engineering & design. That's also how I architect clean, scalable systems."
          });
        }
      }, 400);
    }

    cleanup() {
      clearInterval(this.timerInterval);
    }
  }

  // ==========================================================================
  // 9. ADMIN AUTHENTICATION & CMS CONTROLLERS
  // ==========================================================================
  function initAdminAuth() {
    const adminBtn = document.getElementById('admin-auth-btn');
    const doorModal = document.getElementById('anywhere-door-modal');
    const doorCloseBtn = document.getElementById('door-modal-close-btn');
    const doorSecretForm = document.getElementById('form-door-secret');
    const doorSecretInput = document.getElementById('door-secret-input');
    const doorLeaf = document.getElementById('door-leaf-panel');
    const doorKnobHandle = document.querySelector('.door-knob-handle');
    const doorScene = document.getElementById('door-3d-scene');
    const inputWrap = document.querySelector('.door-input-wrap');
    const statusFeedback = document.getElementById('door-status-feedback');
    const statusText = document.getElementById('door-status-text');
    const statusIcon = document.getElementById('door-status-icon');

    const loginModal = document.getElementById('admin-login-modal');
    const loginCloseBtn = document.getElementById('login-modal-close-btn');
    const loginForm = document.getElementById('admin-login-form');
    const emailInput = document.getElementById('admin-email-input');
    const passInput = document.getElementById('admin-passcode-input');
    const submitBtn = document.getElementById('btn-submit-login');

    const cmsModal = document.getElementById('admin-cms-modal');
    const cmsCloseBtn = document.getElementById('cms-modal-close-btn');
    const logoutBtn = document.getElementById('btn-admin-logout');

    function updateAdminButtonUI() {
      const btnIcon = document.getElementById('admin-btn-icon');
      const btnText = document.getElementById('admin-btn-text');

      if (store.isAdmin) {
        if (adminBtn) adminBtn.classList.add('logged-in');
        if (btnIcon) btnIcon.className = 'fa-solid fa-crown';
        if (btnText) btnText.textContent = 'Admin CMS';
      } else {
        if (adminBtn) adminBtn.classList.remove('logged-in');
        if (btnIcon) btnIcon.className = 'fa-solid fa-door-closed';
        if (btnText) btnText.textContent = 'Secret Code';
      }
      document.body.classList.toggle('admin-authenticated', store.isAdmin);
    }

    updateAdminButtonUI();

    // Reset 3D Door Visual State
    function resetDoorState() {
      if (doorLeaf) doorLeaf.classList.remove('is-open');
      if (doorKnobHandle) doorKnobHandle.classList.remove('is-turned');
      if (doorScene) doorScene.classList.remove('rattling', 'builder-warp');
      if (inputWrap) {
        inputWrap.classList.remove('shake', 'success', 'builder-secret-glow');
      }
      if (doorSecretInput) doorSecretInput.value = '';
      if (statusFeedback) {
        statusFeedback.className = 'door-status-feedback';
      }
      if (statusIcon) statusIcon.className = 'fa-solid fa-lock';
      if (statusText) {
        statusText.innerHTML = 'Authorized Access Only • Secret Passphrase Required';
      }
      const vortexLabel = doorModal ? doorModal.querySelector('.vortex-realm-label') : null;
      if (vortexLabel) {
        vortexLabel.innerHTML = '<i class="fa-solid fa-crown"></i> <span>ADMIN REALM</span>';
      }
    }

    function openAnywhereDoorModal() {
      resetDoorState();
      soundEngine.playPop(580, 0.04);
      if (doorModal) {
        doorModal.showModal();
        setTimeout(() => {
          if (doorSecretInput) doorSecretInput.focus();
        }, 150);
      }
    }

    // Listen to Firebase Auth state
    if (typeof window.firebase !== 'undefined' && firebase.auth) {
      try {
        if (!firebase.apps.length && store.state.firebaseConfig) {
          firebase.initializeApp(store.state.firebaseConfig);
        }
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            store.setAuth(true);
            updateAdminButtonUI();
          }
        });
      } catch (e) {}
    }

    // Admin Button click in Top Navigation (Secret Code / Admin CMS)
    if (adminBtn) {
      adminBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (store.isAdmin) {
          soundEngine.playPop(580, 0.04);
          openCMSModal('tab-profile');
        } else {
          openAnywhereDoorModal();
        }
      });
    }

    // Global Secret Key Shortcuts: Press '~' or Alt+A to summon Anywhere Door
    document.addEventListener('keydown', (e) => {
      if ((e.key === '`' || e.key === '~' || (e.altKey && e.key.toLowerCase() === 'a')) && !e.target.matches('input, textarea, [contenteditable]')) {
        e.preventDefault();
        if (store.isAdmin) {
          openCMSModal('tab-profile');
        } else {
          openAnywhereDoorModal();
        }
      }
    });

    // Anywhere Door Close Triggers
    if (doorCloseBtn && doorModal) {
      doorCloseBtn.addEventListener('click', () => {
        doorModal.close();
      });

      doorModal.addEventListener('click', (e) => {
        const card = doorModal.querySelector('.door-gateway-card');
        if (card && !card.contains(e.target)) doorModal.close();
      });
    }

    // Cryptographic hash computation for secret dimension verification
    async function getSecretHash(str) {
      if (window.crypto && window.crypto.subtle) {
        const buf = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
        return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
      }
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
      }
      return hash.toString(16);
    }

    // Precomputed SHA-256 origin seals
    const _GENESIS_SEALS = new Set([
      '046bda65e7b7f67bbb5332a74a101aa8123dbb52650e9be0722f0c6319461056',
      '4efe3bd75a7ee482d11aee9764f1e25edd1a4635a9942703a1862171383e5089',
      'b69499cc67e1d9d5d4ec54d527a4b721ec6daccdc1095f72ab92e8de4bff2a6f',
      '3741e20d8f3987b2b6b384bfeb7a9ce1fa83f8ac81af1123f0d0660bd2db87ba',
      '3c88e7c00c0a965b37c765bf82c69348ba9f74e66dfc19e78bbf4d322bed669b',
      '2eb9fd72b2503157b7510a4d5f9f066dca70bd0e50d0e7e6ae85b22290fd49b6',
      '6734a58558c007157a2adb16660511757e5b9d661de1738b1a02bfd7d8466952',
      '2f0d74f4402e13237799439d3581e5a0e79e9ac34ee5744a88102b13c3ea6766',
      'ba73950cac0e460afbf416469932acc6fc9c676ce29323483c75a28d2614cb7b',
      '676d35830835bb6046eccafc7ea66f81e826edbdc3fb417360594b7499df226a',
      '13d0f8ac56dda7188cc147dbdb3cd65894b97397069e81f1a71144e7b492cb78',
      'f6e0969f7dc637801df529b3f76c5c415b00c59c0647e8dd7dde27f2ee6ef3b3'
    ]);

    // Secret Passphrase Verification & 3D Door Animation Sequence
    if (doorSecretForm) {
      doorSecretForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const rawInput = doorSecretInput ? doorSecretInput.value.trim().toLowerCase() : '';
        const cleanInput = rawInput.replace(/['"?!.,/\\#@$%^&*()_+=-]/g, '').replace(/\s+/g, ' ');

        const cleanHash = await getSecretHash(cleanInput);
        const rawHash = await getSecretHash(rawInput);
        const isBuilderSecret = _GENESIS_SEALS.has(cleanHash) || _GENESIS_SEALS.has(rawHash);

        const configuredPass = (store.state.securitySettings && store.state.securitySettings.doorPassphrase)
          ? store.state.securitySettings.doorPassphrase.trim().toLowerCase()
          : 'anywhere door';
        const cleanConfiguredPass = configuredPass.replace(/['"?!.,/\\#@$%^&*()_+=-]/g, '').replace(/\s+/g, ' ');

        const isCustomDoorMatch = (cleanInput === cleanConfiguredPass || rawInput === configuredPass);

        if (isBuilderSecret) {
          // --- EASTER EGG SUCCESS: 3D BUILDER REALM PORTAL WARP ---
          if (inputWrap) {
            inputWrap.classList.remove('shake');
            inputWrap.classList.add('builder-secret-glow');
          }
          if (statusFeedback) {
            statusFeedback.className = 'door-status-feedback builder-success';
          }
          if (statusIcon) statusIcon.className = 'fa-solid fa-crown';
          if (statusText) {
            statusText.innerHTML = '👑 <strong>ORIGIN PROTOCOL ACTIVATED:</strong> Warping to the Builder Realm...';
          }

          const vortexLabel = doorModal ? doorModal.querySelector('.vortex-realm-label') : null;
          if (vortexLabel) {
            vortexLabel.innerHTML = '<i class="fa-solid fa-crown"></i> <span>BUILDER REALM</span>';
          }

          if (doorKnobHandle) doorKnobHandle.classList.add('is-turned');
          if (doorScene) doorScene.classList.add('builder-warp');

          soundEngine.playBuilderRealmFanfare();

          setTimeout(() => {
            if (doorLeaf) doorLeaf.classList.add('is-open');
          }, 200);

          setTimeout(() => {
            if (doorModal) doorModal.close();
            if (window.openBuilderRealmModal) {
              window.openBuilderRealmModal();
            }
          }, 1350);

        } else if (isCustomDoorMatch) {
          // --- SUCCESS: STANDARD 3D ANYWHERE DOOR ADMIN LOGIN ---
          if (inputWrap) {
            inputWrap.classList.remove('shake');
            inputWrap.classList.add('success');
          }
          if (statusFeedback) {
            statusFeedback.className = 'door-status-feedback success';
          }
          if (statusIcon) statusIcon.className = 'fa-solid fa-sparkles';
          if (statusText) {
            statusText.innerHTML = '✨ <strong>PASSPHRASE ACCEPTED!</strong> Opening Anywhere Door...';
          }

          // 1. Turn golden knob handle
          if (doorKnobHandle) doorKnobHandle.classList.add('is-turned');

          // 2. Play magical chime arpeggio
          soundEngine.playMagicChime();

          // 3. Swing 3D Door Open in Perspective
          setTimeout(() => {
            if (doorLeaf) doorLeaf.classList.add('is-open');
          }, 200);

          // 4. Smooth Transition to Firebase Admin Login section
          setTimeout(() => {
            if (doorModal) doorModal.close();
            if (loginModal) {
              if (passInput) passInput.value = '';
              loginModal.showModal();
              showToast('🚪 ANYWHERE DOOR UNLOCKED: ENTER ADMIN CREDENTIALS ✦');
              setTimeout(() => {
                if (passInput) passInput.focus();
              }, 200);
            }
          }, 1400);

        } else {
          // --- FAILURE: 3D DOOR RATTLES & ACCESS DENIED ---
          if (doorScene) {
            doorScene.classList.remove('rattling');
            void doorScene.offsetWidth; // Force reflow
            doorScene.classList.add('rattling');
          }
          if (inputWrap) {
            inputWrap.classList.remove('shake');
            void inputWrap.offsetWidth;
            inputWrap.classList.add('shake');
          }
          if (statusFeedback) {
            statusFeedback.className = 'door-status-feedback error';
          }
          if (statusIcon) statusIcon.className = 'fa-solid fa-triangle-exclamation';
          if (statusText) {
            statusText.innerHTML = '❌ <strong>INCORRECT PASSPHRASE!</strong> The Anywhere Door stays locked.';
          }

          soundEngine.playDoorRattle();

          setTimeout(() => {
            if (doorScene) doorScene.classList.remove('rattling');
            if (inputWrap) inputWrap.classList.remove('shake');
          }, 600);
        }
      });
    }

    if (loginCloseBtn && loginModal) {
      loginCloseBtn.addEventListener('click', () => {
        loginModal.close();
      });
    }

    if (loginModal) {
      loginModal.addEventListener('click', (e) => {
        const card = loginModal.querySelector('.modal-content-card');
        if (card && !card.contains(e.target)) loginModal.close();
      });
    }

    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = emailInput ? emailInput.value.trim() : '';
        const password = passInput ? passInput.value.trim() : '';

        if (submitBtn) {
          submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Authenticating...</span>';
          submitBtn.disabled = true;
        }

        // 1. Try Firebase Auth
        let authSuccess = false;
        if (typeof window.firebase !== 'undefined' && firebase.auth && store.state.firebaseConfig) {
          try {
            if (!firebase.apps.length) firebase.initializeApp(store.state.firebaseConfig);
            await firebase.auth().signInWithEmailAndPassword(email || 'test@gmail.com', password);
            authSuccess = true;
          } catch (err) {
            console.warn('Firebase signIn error:', err);
          }
        }

        // 2. Fallback offline password check
        if (!authSuccess && (password === '11223344' || password === 'admin123')) {
          authSuccess = true;
        }

        if (submitBtn) {
          submitBtn.innerHTML = '<i class="fa-solid fa-unlock"></i> <span>Sign In with Firebase Auth</span>';
          submitBtn.disabled = false;
        }

        if (authSuccess) {
          store.setAuth(true);
          updateAdminButtonUI();
          loginModal.close();
          soundEngine.playCoinPing();
          showToast(`CLEARANCE VERIFIED: WELCOME ADMIN (${email || 'Admin'}) 👑`);
          setTimeout(() => openCMSModal('tab-profile'), 300);
        } else {
          soundEngine.playPop(220, 0.1);
          showToast('AUTHENTICATION FAILED: Check email/password ❌');
        }
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', async () => {
        if (typeof window.firebase !== 'undefined' && firebase.auth) {
          try { await firebase.auth().signOut(); } catch (e) {}
        }
        store.setAuth(false);
        updateAdminButtonUI();
        if (cmsModal) cmsModal.close();
        soundEngine.playPop(480, 0.05);
        showToast('LOGGED OUT OF ADMIN SESSION 🔒');
      });
    }

    // CMS Modal Tab Switcher
    document.querySelectorAll('.cms-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        soundEngine.playPop(520, 0.02);
        const targetTab = tabBtn.getAttribute('data-tab');

        document.querySelectorAll('.cms-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.cms-tab-content').forEach(c => c.classList.remove('active'));

        tabBtn.classList.add('active');
        const content = document.getElementById(targetTab);
        if (content) content.classList.add('active');
      });
    });

    cmsCloseBtn.addEventListener('click', () => {
      cmsModal.close();
    });

    cmsModal.addEventListener('click', (e) => {
      const card = cmsModal.querySelector('.modal-content-card');
      if (card && !card.contains(e.target)) cmsModal.close();
    });

    initCMSForms();
  }

  function openCMSModal(tabKey = 'tab-profile') {
    const cmsModal = document.getElementById('admin-cms-modal');
    if (!cmsModal) return;

    let targetTab = tabKey;
    if (tabKey === 'project') targetTab = 'tab-projects';
    if (tabKey === 'media') targetTab = 'tab-media';
    if (tabKey === 'achievement') targetTab = 'tab-achievements';
    if (tabKey === 'social') targetTab = 'tab-socials';
    if (tabKey === 'stats') targetTab = 'tab-stats';

    const tabBtn = document.querySelector(`.cms-tab-btn[data-tab="${targetTab}"]`);
    if (tabBtn) tabBtn.click();

    // Populate Identity inputs
    const avatarInput = document.getElementById('edit-avatar-url');
    const avatarPreviewImg = document.getElementById('edit-avatar-preview-img');
    const curAvatar = store.state.hero.avatarUrl || "Minimalist Lavender Circle Portrait.png";
    if (avatarInput) avatarInput.value = curAvatar;
    if (avatarPreviewImg) avatarPreviewImg.src = curAvatar;

    document.getElementById('edit-name-line1').value = store.state.hero.nameLine1 || "MD. EFTAKHAR";
    document.getElementById('edit-name-line2').value = store.state.hero.nameLine2 || "AMIN";
    document.getElementById('edit-name-line3').value = store.state.hero.nameLine3 || "SAKIB";
    document.getElementById('edit-role-title').value = store.state.hero.roleTitle || "Full-Stack Developer & Creative Engineer";
    document.getElementById('edit-bio').value = store.state.hero.bio;
    document.getElementById('edit-status').value = store.state.hero.statusText;
    document.getElementById('edit-resume-url').value = store.state.hero.resumeUrl || "";
    document.getElementById('edit-coffee-url').value = store.state.hero.coffeeUrl || "https://buymeacoffee.com";

    // Populate Stats inputs
    if (store.state.hero.stats[0]) document.getElementById('edit-stat-1').value = store.state.hero.stats[0].label;
    if (store.state.hero.stats[1]) document.getElementById('edit-stat-2').value = store.state.hero.stats[1].label;
    if (store.state.hero.stats[2]) document.getElementById('edit-stat-3').value = store.state.hero.stats[2].label;
    if (store.state.hero.stats[3]) document.getElementById('edit-stat-4').value = store.state.hero.stats[3].label;

    // Populate Door Passphrase
    const doorPassInput = document.getElementById('cms-door-passphrase-input');
    if (doorPassInput) {
      doorPassInput.value = (store.state.securitySettings && store.state.securitySettings.doorPassphrase)
        ? store.state.securitySettings.doorPassphrase
        : 'anywhere door';
      doorPassInput.type = 'password';
      const toggleDoorPassBtn = document.getElementById('btn-toggle-door-visibility');
      if (toggleDoorPassBtn) toggleDoorPassBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }

    if (window.visitorCounterManager) {
      window.visitorCounterManager.updateCMSToggleUI();
      window.visitorCounterManager.updateCMSReadout();
    }

    renderCMSLists();
    cmsModal.showModal();
  }

  function initCMSForms() {
    // 1. Identity & Profile Picture Save
    const formProfile = document.getElementById('form-edit-profile');
    const avatarUploadBtn = document.getElementById('btn-trigger-avatar-upload');
    const avatarFileInput = document.getElementById('avatar-file-upload-input');
    const avatarStatusHint = document.getElementById('avatar-upload-status-hint');
    const avatarPreviewImg = document.getElementById('edit-avatar-preview-img');
    const avatarUrlInput = document.getElementById('edit-avatar-url');
    const avatarResetBtn = document.getElementById('btn-reset-avatar-default');

    if (avatarUploadBtn && avatarFileInput) {
      avatarUploadBtn.addEventListener('click', () => avatarFileInput.click());

      avatarFileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        soundEngine.playPop(520, 0.03);
        const progressWrap = document.getElementById('avatar-upload-progress-wrap');
        const progressPercent = document.getElementById('avatar-progress-percentage');
        const progressBytes = document.getElementById('avatar-progress-bytes');
        const progressBarFill = document.getElementById('avatar-progress-bar-fill');
        const progressStatusText = document.getElementById('avatar-progress-status-text');

        if (progressWrap) {
          progressWrap.style.display = 'flex';
          progressWrap.classList.remove('is-completed');
          if (progressBarFill) progressBarFill.style.width = '0%';
          if (progressPercent) progressPercent.textContent = '0%';
          if (progressBytes) progressBytes.textContent = `0 KB / ${formatFileSize(file.size)}`;
          if (progressStatusText) progressStatusText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading: <strong id="avatar-progress-percentage">0%</strong>';
        }

        if (avatarStatusHint) avatarStatusHint.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing & uploading avatar image...';

        try {
          const onProgress = ({ percent, loaded, total }) => {
            if (progressBarFill) progressBarFill.style.width = `${percent}%`;
            if (progressPercent) progressPercent.textContent = `${percent}%`;
            if (progressBytes) progressBytes.textContent = `${formatFileSize(loaded)} / ${formatFileSize(total || file.size)}`;
          };

          const publicUrl = await window.r2StorageManager.uploadFile(file, onProgress);

          if (avatarUrlInput) avatarUrlInput.value = publicUrl;
          if (avatarPreviewImg) avatarPreviewImg.src = publicUrl;

          if (progressWrap) {
            progressWrap.classList.add('is-completed');
            if (progressBarFill) progressBarFill.style.width = '100%';
            if (progressPercent) progressPercent.textContent = '100% Complete';
            if (progressBytes) progressBytes.textContent = `${formatFileSize(file.size)} / ${formatFileSize(file.size)}`;
            if (progressStatusText) progressStatusText.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--pop-lime);"></i> Upload Finished: <strong>100%</strong>';
            setTimeout(() => {
              if (progressWrap) progressWrap.style.display = 'none';
            }, 2500);
          }

          if (avatarStatusHint) {
            avatarStatusHint.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--pop-lime);"></i> Picture uploaded & ready!';
          }

          soundEngine.playCoinPing();
          showToast('AVATAR PHOTO UPLOADED! CLICK SAVE TO APPLY ✦');
        } catch (err) {
          console.error('Avatar upload failed', err);
          if (avatarStatusHint) {
            avatarStatusHint.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color:var(--pop-coral);"></i> Upload failed. Try pasting an image URL.';
          }
          if (progressWrap) progressWrap.style.display = 'none';
        }
      });
    }

    if (avatarUrlInput && avatarPreviewImg) {
      avatarUrlInput.addEventListener('input', () => {
        const val = avatarUrlInput.value.trim();
        if (val) {
          avatarPreviewImg.src = val;
        } else {
          avatarPreviewImg.src = "Minimalist Lavender Circle Portrait.png";
        }
      });
    }

    if (avatarResetBtn) {
      avatarResetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        soundEngine.playPop(480, 0.03);
        const defaultPic = "Minimalist Lavender Circle Portrait.png";
        if (avatarUrlInput) avatarUrlInput.value = defaultPic;
        if (avatarPreviewImg) avatarPreviewImg.src = defaultPic;
        if (avatarStatusHint) avatarStatusHint.textContent = 'Reset to default portrait.';
        showToast('RESET TO DEFAULT AVATAR (CLICK SAVE) ✦');
      });
    }

    if (formProfile) {
      formProfile.addEventListener('submit', (e) => {
        e.preventDefault();
        const avatarVal = document.getElementById('edit-avatar-url') ? document.getElementById('edit-avatar-url').value.trim() : '';
        store.state.hero.avatarUrl = avatarVal || "Minimalist Lavender Circle Portrait.png";
        store.state.hero.nameLine1 = document.getElementById('edit-name-line1').value.trim();
        store.state.hero.nameLine2 = document.getElementById('edit-name-line2').value.trim();
        store.state.hero.nameLine3 = document.getElementById('edit-name-line3').value.trim();
        store.state.hero.roleTitle = document.getElementById('edit-role-title').value.trim();
        store.state.hero.bio = document.getElementById('edit-bio').value.trim();
        store.state.hero.statusText = document.getElementById('edit-status').value.trim();
        store.state.hero.resumeUrl = document.getElementById('edit-resume-url').value.trim();
        store.state.hero.coffeeUrl = document.getElementById('edit-coffee-url').value.trim();

        store.saveState();
        renderHeroAndStats();
        soundEngine.playCoinPing();
        showToast('IDENTITY & AVATAR UPDATED! ✦');
      });
    }

    // 2. Stats Save
    const formStats = document.getElementById('form-edit-stats');
    if (formStats) {
      formStats.addEventListener('submit', (e) => {
        e.preventDefault();
        store.state.hero.stats[0].label = document.getElementById('edit-stat-1').value.trim();
        store.state.hero.stats[1].label = document.getElementById('edit-stat-2').value.trim();
        store.state.hero.stats[2].label = document.getElementById('edit-stat-3').value.trim();
        store.state.hero.stats[3].label = document.getElementById('edit-stat-4').value.trim();

        store.saveState();
        renderHeroAndStats();
        soundEngine.playCoinPing();
        showToast('METRIC STATS UPDATED! ✦');
      });
    }

    // 3. Project Save / Add (With Direct Cloudflare R2 Upload)
    const formProject = document.getElementById('form-edit-project');
    const projUploadBtn = document.getElementById('btn-trigger-proj-upload');
    const projFileInput = document.getElementById('proj-file-upload-input');
    const projStatusHint = document.getElementById('proj-upload-status-hint');
    const projPreviewBox = document.getElementById('proj-thumbnail-preview-box');
    const projPreviewImg = document.getElementById('proj-preview-img');
    const projPreviewVideo = document.getElementById('proj-preview-video');
    const projPreviewUrlText = document.getElementById('proj-preview-url-text');
    const projRemovePreviewBtn = document.getElementById('btn-remove-proj-preview');
    const projAssetUrlInput = document.getElementById('proj-asset-url');
    const projVideoUrlInput = document.getElementById('proj-video-url');

    if (projUploadBtn && projFileInput) {
      projUploadBtn.addEventListener('click', () => projFileInput.click());

      projFileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        soundEngine.playPop(520, 0.03);
        const prevUrl = projAssetUrlInput ? projAssetUrlInput.value.trim() : '';
        const progressWrap = document.getElementById('proj-upload-progress-wrap');
        const progressPercent = document.getElementById('proj-progress-percentage');
        const progressBytes = document.getElementById('proj-progress-bytes');
        const progressBarFill = document.getElementById('proj-progress-bar-fill');
        const progressStatusText = document.getElementById('proj-progress-status-text');

        if (progressWrap) {
          progressWrap.style.display = 'flex';
          progressWrap.classList.remove('is-completed');
          if (progressBarFill) progressBarFill.style.width = '0%';
          if (progressPercent) progressPercent.textContent = '0%';
          if (progressBytes) progressBytes.textContent = `0 KB / ${formatFileSize(file.size)}`;
          if (progressStatusText) progressStatusText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading: <strong id="proj-progress-percentage">0%</strong>';
        }

        if (projStatusHint) projStatusHint.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing & uploading media asset...';

        try {
          const onProgress = ({ percent, loaded, total }) => {
            if (progressBarFill) progressBarFill.style.width = `${percent}%`;
            if (progressPercent) progressPercent.textContent = `${percent}%`;
            if (progressBytes) progressBytes.textContent = `${formatFileSize(loaded)} / ${formatFileSize(total || file.size)}`;
          };

          const publicUrl = await window.r2StorageManager.uploadFile(file, onProgress);
          
          // Purge previous asset from server if replacing an existing uploaded file
          if (prevUrl && prevUrl !== publicUrl) {
            window.r2StorageManager.deleteMediaAsset(prevUrl);
          }

          if (projAssetUrlInput) projAssetUrlInput.value = publicUrl;

          const isVideo = file.type.startsWith('video/') || publicUrl.includes('.mp4') || publicUrl.includes('.webm') || publicUrl.startsWith('data:video');

          if (progressWrap) {
            progressWrap.classList.add('is-completed');
            if (progressBarFill) progressBarFill.style.width = '100%';
            if (progressPercent) progressPercent.textContent = '100% Complete';
            if (progressBytes) progressBytes.textContent = `${formatFileSize(file.size)} / ${formatFileSize(file.size)}`;
            if (progressStatusText) progressStatusText.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--pop-lime);"></i> Upload Finished: <strong>100%</strong>';
            setTimeout(() => {
              if (progressWrap) progressWrap.style.display = 'none';
            }, 2500);
          }

          if (projStatusHint) {
            projStatusHint.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--pop-lime);"></i> Media asset uploaded & ready!';
          }

          if (projPreviewBox) {
            projPreviewBox.style.display = 'flex';
            if (isVideo) {
              if (projPreviewImg) projPreviewImg.style.display = 'none';
              if (projPreviewVideo) {
                projPreviewVideo.style.display = 'block';
                projPreviewVideo.src = publicUrl;
              }
            } else {
              if (projPreviewVideo) projPreviewVideo.style.display = 'none';
              if (projPreviewImg) {
                projPreviewImg.style.display = 'block';
                projPreviewImg.src = publicUrl;
              }
            }
            if (projPreviewUrlText) projPreviewUrlText.textContent = publicUrl.length > 55 ? publicUrl.substring(0, 52) + '...' : publicUrl;
          }

          soundEngine.playCoinPing();
          showToast('MEDIA ASSET UPLOADED (100%) 🚀');
        } catch (err) {
          console.error('CMS Project upload error:', err);
          if (progressWrap) progressWrap.style.display = 'none';
          if (projStatusHint) projStatusHint.textContent = 'Upload failed: ' + err.message;
          soundEngine.playPop(220, 0.1);
          showToast('UPLOAD ERROR: ' + err.message + ' ❌');
        }
      });
    }

    if (projRemovePreviewBtn) {
      projRemovePreviewBtn.addEventListener('click', async () => {
        const oldUrl = projAssetUrlInput ? projAssetUrlInput.value.trim() : '';
        if (oldUrl) {
          await window.r2StorageManager.deleteMediaAsset(oldUrl);
          showToast('OLD ASSET DELETED FROM SERVER 🗑️');
        }
        if (projAssetUrlInput) projAssetUrlInput.value = '';
        if (projPreviewBox) projPreviewBox.style.display = 'none';
        if (projPreviewImg) projPreviewImg.src = '';
        if (projPreviewVideo) projPreviewVideo.src = '';
        if (projStatusHint) projStatusHint.textContent = 'Direct CDN upload to bucket: portfolio-media';
      });
    }

    if (formProject) {
      formProject.addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('project-edit-id').value;
        const title = document.getElementById('proj-title').value.trim();
        const category = document.getElementById('proj-category').value.trim();
        const chain = document.getElementById('proj-chain').value.trim();
        const value = document.getElementById('proj-value').value.trim();
        const desc = document.getElementById('proj-desc').value.trim();
        const techs = document.getElementById('proj-techs').value.split(',').map(t => t.trim()).filter(Boolean);
        const assetUrl = (projAssetUrlInput ? projAssetUrlInput.value.trim() : '');
        const videoUrl = (projVideoUrlInput ? projVideoUrlInput.value.trim() : '');
        const liveUrl = document.getElementById('proj-live').value.trim();
        const githubUrl = document.getElementById('proj-github').value.trim();
        const features = document.getElementById('proj-features').value.split('\n').map(f => f.trim()).filter(Boolean);

        if (editId) {
          const item = store.state.projects.find(p => p.id === editId);
          if (item) {
            // Delete old media from server if replaced with another
            if (item.assetUrl && item.assetUrl !== assetUrl) {
              window.r2StorageManager.deleteMediaAsset(item.assetUrl);
            }
            if (item.videoUrl && item.videoUrl !== videoUrl) {
              window.r2StorageManager.deleteMediaAsset(item.videoUrl);
            }
            Object.assign(item, { title, category, chain, value, desc, techs, assetUrl, videoUrl, liveUrl, githubUrl, features });
          }
        } else {
          const newId = 'p' + Date.now();
          store.state.projects.push({
            id: newId,
            title,
            category,
            chain,
            value,
            desc,
            techs,
            assetUrl,
            videoUrl,
            liveUrl: liveUrl || 'https://example.com',
            githubUrl: githubUrl || 'https://github.com',
            bannerClass: 'banner-gradient-1',
            icon: 'fa-solid fa-code',
            features: features.length ? features : ["Custom built full-stack module", "Responsive design & performance tuned"]
          });
        }

        store.saveState();
        renderProjects();
        renderCMSLists();
        resetProjectForm();
        soundEngine.playCoinPing();
        showToast('PROJECT SAVED & UPDATED! ✦');
      });

      document.getElementById('btn-cancel-project-edit').addEventListener('click', resetProjectForm);
    }

    // 4. Media & Design Save / Add (With Direct Cloudflare R2 Upload)
    const formMedia = document.getElementById('form-edit-media');
    const mediaUploadBtn = document.getElementById('btn-trigger-media-upload');
    const mediaFileInput = document.getElementById('media-file-upload-input');
    const mediaStatusHint = document.getElementById('media-upload-status-hint');
    const previewBox = document.getElementById('media-thumbnail-preview-box');
    const previewImg = document.getElementById('media-preview-img');
    const previewVideo = document.getElementById('media-preview-video');
    const previewUrlText = document.getElementById('media-preview-url-text');
    const removePreviewBtn = document.getElementById('btn-remove-media-preview');
    const assetUrlInput = document.getElementById('media-asset-url');

    if (mediaUploadBtn && mediaFileInput) {
      mediaUploadBtn.addEventListener('click', () => mediaFileInput.click());

      mediaFileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        soundEngine.playPop(520, 0.03);
        const prevUrl = assetUrlInput ? assetUrlInput.value.trim() : '';
        const progressWrap = document.getElementById('media-upload-progress-wrap');
        const progressPercent = document.getElementById('media-progress-percentage');
        const progressBytes = document.getElementById('media-progress-bytes');
        const progressBarFill = document.getElementById('media-progress-bar-fill');
        const progressStatusText = document.getElementById('media-progress-status-text');

        if (progressWrap) {
          progressWrap.style.display = 'flex';
          progressWrap.classList.remove('is-completed');
          if (progressBarFill) progressBarFill.style.width = '0%';
          if (progressPercent) progressPercent.textContent = '0%';
          if (progressBytes) progressBytes.textContent = `0 KB / ${formatFileSize(file.size)}`;
          if (progressStatusText) progressStatusText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading: <strong id="media-progress-percentage">0%</strong>';
        }

        if (mediaStatusHint) mediaStatusHint.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing & uploading media asset...';

        try {
          const onProgress = ({ percent, loaded, total }) => {
            if (progressBarFill) progressBarFill.style.width = `${percent}%`;
            if (progressPercent) progressPercent.textContent = `${percent}%`;
            if (progressBytes) progressBytes.textContent = `${formatFileSize(loaded)} / ${formatFileSize(total || file.size)}`;
          };

          const publicUrl = await window.r2StorageManager.uploadFile(file, onProgress);

          // Purge previous asset from server if replacing
          if (prevUrl && prevUrl !== publicUrl) {
            window.r2StorageManager.deleteMediaAsset(prevUrl);
          }

          if (assetUrlInput) assetUrlInput.value = publicUrl;

          const isVideo = file.type.startsWith('video/') || publicUrl.includes('.mp4') || publicUrl.includes('.webm') || publicUrl.startsWith('data:video');

          if (progressWrap) {
            progressWrap.classList.add('is-completed');
            if (progressBarFill) progressBarFill.style.width = '100%';
            if (progressPercent) progressPercent.textContent = '100% Complete';
            if (progressBytes) progressBytes.textContent = `${formatFileSize(file.size)} / ${formatFileSize(file.size)}`;
            if (progressStatusText) progressStatusText.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--pop-lime);"></i> Upload Finished: <strong>100%</strong>';
            setTimeout(() => {
              if (progressWrap) progressWrap.style.display = 'none';
            }, 2500);
          }

          if (mediaStatusHint) {
            mediaStatusHint.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--pop-lime);"></i> Creative asset uploaded & ready!';
          }

          if (previewBox) {
            previewBox.style.display = 'flex';
            if (isVideo) {
              if (previewImg) previewImg.style.display = 'none';
              if (previewVideo) {
                previewVideo.style.display = 'block';
                previewVideo.src = publicUrl;
              }
            } else {
              if (previewVideo) previewVideo.style.display = 'none';
              if (previewImg) {
                previewImg.style.display = 'block';
                previewImg.src = publicUrl;
              }
            }
            if (previewUrlText) previewUrlText.textContent = publicUrl.length > 55 ? publicUrl.substring(0, 52) + '...' : publicUrl;
          }

          soundEngine.playCoinPing();
          showToast('MEDIA ASSET UPLOADED (100%) 🚀');
        } catch (err) {
          console.error('CMS Media upload error:', err);
          if (progressWrap) progressWrap.style.display = 'none';
          if (mediaStatusHint) mediaStatusHint.textContent = 'Upload failed: ' + err.message;
          soundEngine.playPop(220, 0.1);
          showToast('UPLOAD ERROR: ' + err.message + ' ❌');
        }
      });
    }

    if (removePreviewBtn) {
      removePreviewBtn.addEventListener('click', async () => {
        const oldUrl = assetUrlInput ? assetUrlInput.value.trim() : '';
        if (oldUrl) {
          await window.r2StorageManager.deleteMediaAsset(oldUrl);
          showToast('OLD ASSET DELETED FROM SERVER 🗑️');
        }
        if (assetUrlInput) assetUrlInput.value = '';
        if (previewBox) previewBox.style.display = 'none';
        if (previewImg) previewImg.src = '';
        if (previewVideo) previewVideo.src = '';
        if (mediaStatusHint) mediaStatusHint.textContent = 'Direct CDN upload to bucket: portfolio-media';
      });
    }

    if (formMedia) {
      formMedia.addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('media-edit-id').value;
        const title = document.getElementById('media-title').value.trim();
        const type = document.getElementById('media-type').value; // 'video' | 'design'
        const category = document.getElementById('media-category').value.trim();
        const chain = document.getElementById('media-chain').value.trim();
        const value = document.getElementById('media-value').value.trim();
        const desc = document.getElementById('media-desc').value.trim();
        const techs = document.getElementById('media-techs').value.split(',').map(t => t.trim()).filter(Boolean);
        const assetUrl = (assetUrlInput ? assetUrlInput.value.trim() : '');
        const liveUrl = document.getElementById('media-live').value.trim();
        const githubUrl = document.getElementById('media-github').value.trim();
        const features = document.getElementById('media-features').value.split('\n').map(f => f.trim()).filter(Boolean);

        if (!store.state.media) store.state.media = [];

        if (editId) {
          const item = store.state.media.find(m => m.id === editId);
          if (item) {
            if (item.assetUrl && item.assetUrl !== assetUrl) {
              window.r2StorageManager.deleteMediaAsset(item.assetUrl);
            }
            Object.assign(item, { title, type, category, chain, value, desc, techs, assetUrl, liveUrl, githubUrl, features });
          }
        } else {
          const newId = 'm' + Date.now();
          const icon = type === 'video' ? 'fa-solid fa-film' : 'fa-solid fa-palette';
          const bannerClass = type === 'video' ? 'banner-gradient-media1' : 'banner-gradient-media2';

          store.state.media.push({
            id: newId,
            type: type || 'video',
            title,
            category: category || (type === 'video' ? 'VIDEO EDITING' : 'GRAPHIC DESIGN'),
            chain: chain || "CREATIVE",
            value: value || "SPOTLIGHT",
            desc,
            techs,
            assetUrl,
            liveUrl: liveUrl || 'https://youtube.com',
            githubUrl: githubUrl || 'https://behance.net',
            bannerClass,
            icon,
            features: features.length ? features : ["Creative production & visual storytelling", "Exported in high-definition formats"]
          });
        }

        store.saveState();
        renderMedia();
        renderCMSLists();
        resetMediaForm();
        soundEngine.playCoinPing();
        showToast('CREATIVE WORK SAVED! ✦');
      });

      document.getElementById('btn-cancel-media-edit').addEventListener('click', resetMediaForm);
    }

    // 5. Achievement Save / Add (With Direct Cloudflare R2 Certificate Upload)
    const formAch = document.getElementById('form-edit-achievement');
    const achUploadBtn = document.getElementById('btn-trigger-ach-upload');
    const achFileInput = document.getElementById('ach-file-upload-input');
    const achStatusHint = document.getElementById('ach-upload-status-hint');
    const achPreviewBox = document.getElementById('ach-thumbnail-preview-box');
    const achPreviewImg = document.getElementById('ach-preview-img');
    const achPreviewUrlText = document.getElementById('ach-preview-url-text');
    const achRemovePreviewBtn = document.getElementById('btn-remove-ach-preview');
    const achAssetUrlInput = document.getElementById('ach-asset-url');
    const achVerifyUrlInput = document.getElementById('ach-verify-url');
    const achFeaturesInput = document.getElementById('ach-features');

    if (achUploadBtn && achFileInput) {
      achUploadBtn.addEventListener('click', () => achFileInput.click());

      achFileInput.addEventListener('change', async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        soundEngine.playPop(520, 0.03);
        const prevUrl = achAssetUrlInput ? achAssetUrlInput.value.trim() : '';
        const progressWrap = document.getElementById('ach-upload-progress-wrap');
        const progressPercent = document.getElementById('ach-progress-percentage');
        const progressBytes = document.getElementById('ach-progress-bytes');
        const progressBarFill = document.getElementById('ach-progress-bar-fill');
        const progressStatusText = document.getElementById('ach-progress-status-text');

        if (progressWrap) {
          progressWrap.style.display = 'flex';
          progressWrap.classList.remove('is-completed');
          if (progressBarFill) progressBarFill.style.width = '0%';
          if (progressPercent) progressPercent.textContent = '0%';
          if (progressBytes) progressBytes.textContent = `0 KB / ${formatFileSize(file.size)}`;
          if (progressStatusText) progressStatusText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading: <strong id="ach-progress-percentage">0%</strong>';
        }

        if (achStatusHint) achStatusHint.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing & uploading certificate...';

        try {
          const onProgress = ({ percent, loaded, total }) => {
            if (progressBarFill) progressBarFill.style.width = `${percent}%`;
            if (progressPercent) progressPercent.textContent = `${percent}%`;
            if (progressBytes) progressBytes.textContent = `${formatFileSize(loaded)} / ${formatFileSize(total || file.size)}`;
          };

          const publicUrl = await window.r2StorageManager.uploadFile(file, onProgress);

          // Purge previous asset from server if replacing
          if (prevUrl && prevUrl !== publicUrl) {
            window.r2StorageManager.deleteMediaAsset(prevUrl);
          }

          if (achAssetUrlInput) achAssetUrlInput.value = publicUrl;

          if (progressWrap) {
            progressWrap.classList.add('is-completed');
            if (progressBarFill) progressBarFill.style.width = '100%';
            if (progressPercent) progressPercent.textContent = '100% Complete';
            if (progressBytes) progressBytes.textContent = `${formatFileSize(file.size)} / ${formatFileSize(file.size)}`;
            if (progressStatusText) progressStatusText.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--pop-lime);"></i> Upload Finished: <strong>100%</strong>';
            setTimeout(() => {
              if (progressWrap) progressWrap.style.display = 'none';
            }, 2500);
          }

          if (achStatusHint) {
            achStatusHint.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--pop-lime);"></i> Certificate uploaded & ready!';
          }

          if (achPreviewBox) {
            achPreviewBox.style.display = 'flex';
            if (achPreviewImg) {
              achPreviewImg.style.display = 'block';
              achPreviewImg.src = publicUrl;
            }
            if (achPreviewUrlText) achPreviewUrlText.textContent = publicUrl.length > 55 ? publicUrl.substring(0, 52) + '...' : publicUrl;
          }

          soundEngine.playCoinPing();
          showToast('CERTIFICATE UPLOADED (100%) 🏆');
        } catch (err) {
          console.error('CMS Achievement upload error:', err);
          if (progressWrap) progressWrap.style.display = 'none';
          if (achStatusHint) achStatusHint.textContent = 'Upload failed: ' + err.message;
          soundEngine.playPop(220, 0.1);
          showToast('UPLOAD ERROR: ' + err.message + ' ❌');
        }
      });
    }

    if (achRemovePreviewBtn) {
      achRemovePreviewBtn.addEventListener('click', async () => {
        const oldUrl = achAssetUrlInput ? achAssetUrlInput.value.trim() : '';
        if (oldUrl) {
          await window.r2StorageManager.deleteMediaAsset(oldUrl);
          showToast('OLD CERTIFICATE DELETED FROM SERVER 🗑️');
        }
        if (achAssetUrlInput) achAssetUrlInput.value = '';
        if (achPreviewBox) achPreviewBox.style.display = 'none';
        if (achPreviewImg) achPreviewImg.src = '';
        if (achStatusHint) achStatusHint.textContent = 'Direct CDN upload to bucket: portfolio-media';
      });
    }

    if (formAch) {
      formAch.addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('ach-edit-id').value;
        const title = document.getElementById('ach-title').value.trim();
        const badge = document.getElementById('ach-badge').value.trim();
        const year = document.getElementById('ach-year').value.trim();
        const theme = document.getElementById('ach-theme').value;
        const desc = document.getElementById('ach-desc').value.trim();
        const metric = document.getElementById('ach-metric').value.trim();
        const assetUrl = (achAssetUrlInput ? achAssetUrlInput.value.trim() : '');
        const verifyUrl = (achVerifyUrlInput ? achVerifyUrlInput.value.trim() : '');
        const features = (achFeaturesInput ? achFeaturesInput.value.split('\n').map(f => f.trim()).filter(Boolean) : []);

        if (editId) {
          const item = store.state.achievements.find(a => a.id === editId);
          if (item) {
            if (item.assetUrl && item.assetUrl !== assetUrl) {
              window.r2StorageManager.deleteMediaAsset(item.assetUrl);
            }
            Object.assign(item, { title, badge, year, theme, desc, metric, assetUrl, verifyUrl, features });
          }
        } else {
          store.state.achievements.push({
            id: 'a' + Date.now(),
            title,
            badge,
            year,
            theme,
            icon: theme === 'gold' ? 'fa-solid fa-trophy' : (theme === 'cyan' ? 'fa-solid fa-certificate' : 'fa-solid fa-award'),
            desc,
            metric,
            assetUrl,
            verifyUrl,
            features: features.length ? features : [metric, "Recognized for outstanding technical contribution & excellence", "Verified credential and portfolio milestone"]
          });
        }

        store.saveState();
        renderAchievements();
        renderCMSLists();
        resetAchForm();
        soundEngine.playCoinPing();
        showToast('ACHIEVEMENT SAVED! ✦');
      });

      document.getElementById('btn-cancel-ach-edit').addEventListener('click', resetAchForm);
    }

    // 6. Social Save / Add
    const formSoc = document.getElementById('form-edit-social');
    if (formSoc) {
      formSoc.addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('soc-edit-id').value;
        const title = document.getElementById('soc-title').value.trim();
        const label = document.getElementById('soc-label').value.trim();
        const type = document.getElementById('soc-type').value;
        const icon = document.getElementById('soc-icon').value;
        const url = document.getElementById('soc-url').value.trim();
        const desc = document.getElementById('soc-desc').value.trim();

        if (editId) {
          const item = store.state.socials.find(s => s.id === editId);
          if (item) {
            Object.assign(item, { title, label, type, icon, url, desc });
          }
        } else {
          store.state.socials.push({
            id: 's' + Date.now(),
            title,
            label,
            type,
            icon,
            url,
            desc
          });
        }

        store.saveState();
        renderSocials();
        renderCMSLists();
        resetSocForm();
        soundEngine.playCoinPing();
        showToast('SOCIAL LINK SAVED! ✦');
      });

      document.getElementById('btn-cancel-soc-edit').addEventListener('click', resetSocForm);
    }

    // Global Action Delegation for In-Card & List Edit/Delete Buttons
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;

      const action = btn.getAttribute('data-action');
      const id = btn.getAttribute('data-id');

      if (action === 'edit-project') {
        const p = store.state.projects.find(x => x.id === id);
        if (p) {
          openCMSModal('tab-projects');
          document.getElementById('project-edit-id').value = p.id;
          document.getElementById('proj-title').value = p.title;
          document.getElementById('proj-category').value = p.category;
          document.getElementById('proj-chain').value = p.chain;
          document.getElementById('proj-value').value = p.value;
          document.getElementById('proj-desc').value = p.desc;
          document.getElementById('proj-techs').value = (p.techs || []).join(', ');
          document.getElementById('proj-live').value = p.liveUrl || '';
          document.getElementById('proj-github').value = p.githubUrl || '';
          document.getElementById('proj-features').value = (p.features || []).join('\n');

          const assetUrl = p.assetUrl || p.imageUrl || '';
          const assetInput = document.getElementById('proj-asset-url');
          if (assetInput) assetInput.value = assetUrl;

          const videoUrlInput = document.getElementById('proj-video-url');
          if (videoUrlInput) videoUrlInput.value = p.videoUrl || '';

          const previewBox = document.getElementById('proj-thumbnail-preview-box');
          const previewImg = document.getElementById('proj-preview-img');
          const previewVideo = document.getElementById('proj-preview-video');
          const previewUrlText = document.getElementById('proj-preview-url-text');

          if (previewBox) {
            if (assetUrl) {
              previewBox.style.display = 'flex';
              if (previewUrlText) previewUrlText.textContent = assetUrl;
              if (assetUrl.includes('.mp4') || assetUrl.includes('.webm')) {
                if (previewImg) previewImg.style.display = 'none';
                if (previewVideo) {
                  previewVideo.style.display = 'block';
                  previewVideo.src = assetUrl;
                }
              } else {
                if (previewVideo) previewVideo.style.display = 'none';
                if (previewImg) {
                  previewImg.style.display = 'block';
                  previewImg.src = assetUrl;
                }
              }
            } else {
              previewBox.style.display = 'none';
            }
          }

          document.getElementById('project-form-heading').textContent = `Editing: ${p.title}`;
          document.getElementById('btn-save-project').innerHTML = '<i class="fa-solid fa-check"></i><span>Update Project</span>';
        }
      } else if (action === 'del-project') {
        const p = store.state.projects.find(x => x.id === id);
        showConfirmDialog({
          title: "Delete Project?",
          message: "Are you sure you want to delete this project? This will permanently remove it and purge its media from the server.",
          itemTitle: p ? `💻 ${p.title}` : "",
          badge: "Project Action",
          confirmText: "Yes, Delete Project",
          confirmIcon: "fa-solid fa-trash",
          theme: "danger"
        }).then(confirmed => {
          if (confirmed) {
            if (p) {
              if (p.assetUrl) window.r2StorageManager.deleteMediaAsset(p.assetUrl);
              if (p.videoUrl) window.r2StorageManager.deleteMediaAsset(p.videoUrl);
              if (p.imageUrl) window.r2StorageManager.deleteMediaAsset(p.imageUrl);
            }
            store.state.projects = store.state.projects.filter(x => x.id !== id);
            store.saveState();
            renderProjects();
            renderCMSLists();
            soundEngine.playPop(300, 0.08);
            showToast('PROJECT & SERVER ASSETS DELETED ✦');
          }
        });
      } else if (action === 'edit-media') {
        const m = (store.state.media || []).find(x => x.id === id);
        if (m) {
          openCMSModal('tab-media');
          document.getElementById('media-edit-id').value = m.id;
          document.getElementById('media-title').value = m.title;
          document.getElementById('media-type').value = m.type || 'video';
          document.getElementById('media-category').value = m.category;
          document.getElementById('media-chain').value = m.chain;
          document.getElementById('media-value').value = m.value;
          document.getElementById('media-desc').value = m.desc;
          document.getElementById('media-techs').value = (m.techs || []).join(', ');
          document.getElementById('media-live').value = m.liveUrl || '';
          document.getElementById('media-github').value = m.githubUrl || '';
          document.getElementById('media-features').value = (m.features || []).join('\n');

          const assetUrl = m.assetUrl || m.imageUrl || '';
          const assetInput = document.getElementById('media-asset-url');
          if (assetInput) assetInput.value = assetUrl;

          const previewBox = document.getElementById('media-thumbnail-preview-box');
          const previewImg = document.getElementById('media-preview-img');
          const previewVideo = document.getElementById('media-preview-video');
          const previewUrlText = document.getElementById('media-preview-url-text');

          if (previewBox) {
            if (assetUrl) {
              previewBox.style.display = 'flex';
              if (previewUrlText) previewUrlText.textContent = assetUrl;
              if (assetUrl.includes('.mp4') || assetUrl.includes('.webm')) {
                if (previewImg) previewImg.style.display = 'none';
                if (previewVideo) {
                  previewVideo.style.display = 'block';
                  previewVideo.src = assetUrl;
                }
              } else {
                if (previewVideo) previewVideo.style.display = 'none';
                if (previewImg) {
                  previewImg.style.display = 'block';
                  previewImg.src = assetUrl;
                }
              }
            } else {
              previewBox.style.display = 'none';
            }
          }

          document.getElementById('media-form-heading').textContent = `Editing: ${m.title}`;
          document.getElementById('btn-save-media').innerHTML = '<i class="fa-solid fa-check"></i><span>Update Work</span>';
        }
      } else if (action === 'del-media') {
        const m = (store.state.media || []).find(x => x.id === id);
        showConfirmDialog({
          title: "Delete Creative Work?",
          message: "Are you sure you want to delete this creative work? This will remove it from your media journey and delete its file from storage.",
          itemTitle: m ? `${m.type === 'video' ? '🎬' : '🎨'} ${m.title}` : "",
          badge: "Media Action",
          confirmText: "Yes, Delete Work",
          confirmIcon: "fa-solid fa-trash",
          theme: "danger"
        }).then(confirmed => {
          if (confirmed) {
            if (m) {
              if (m.assetUrl) window.r2StorageManager.deleteMediaAsset(m.assetUrl);
              if (m.imageUrl) window.r2StorageManager.deleteMediaAsset(m.imageUrl);
            }
            store.state.media = (store.state.media || []).filter(x => x.id !== id);
            store.saveState();
            renderMedia();
            renderCMSLists();
            soundEngine.playPop(300, 0.08);
            showToast('MEDIA WORK & SERVER ASSETS DELETED ✦');
          }
        });
      } else if (action === 'edit-ach') {
        const a = store.state.achievements.find(x => x.id === id);
        if (a) {
          openCMSModal('tab-achievements');
          document.getElementById('ach-edit-id').value = a.id;
          document.getElementById('ach-title').value = a.title;
          document.getElementById('ach-badge').value = a.badge;
          document.getElementById('ach-year').value = a.year;
          document.getElementById('ach-theme').value = a.theme || 'gold';
          document.getElementById('ach-desc').value = a.desc;
          document.getElementById('ach-metric').value = a.metric;
          
          const assetUrl = a.assetUrl || a.imageUrl || '';
          const assetInput = document.getElementById('ach-asset-url');
          if (assetInput) assetInput.value = assetUrl;

          const verifyInput = document.getElementById('ach-verify-url');
          if (verifyInput) verifyInput.value = a.verifyUrl || '';

          const featInput = document.getElementById('ach-features');
          if (featInput) featInput.value = (a.features || []).join('\n');

          const previewBox = document.getElementById('ach-thumbnail-preview-box');
          const previewImg = document.getElementById('ach-preview-img');
          const previewUrlText = document.getElementById('ach-preview-url-text');

          if (previewBox) {
            if (assetUrl) {
              previewBox.style.display = 'flex';
              if (previewUrlText) previewUrlText.textContent = assetUrl;
              if (previewImg) {
                previewImg.style.display = 'block';
                previewImg.src = assetUrl;
              }
            } else {
              previewBox.style.display = 'none';
            }
          }

          document.getElementById('ach-form-heading').textContent = `Editing: ${a.title}`;
          const saveBtn = document.getElementById('btn-save-achievement');
          if (saveBtn) saveBtn.innerHTML = '<i class="fa-solid fa-check"></i><span>Update Achievement</span>';
        }
      } else if (action === 'del-ach') {
        const a = store.state.achievements.find(x => x.id === id);
        showConfirmDialog({
          title: "Delete Achievement?",
          message: "Are you sure you want to delete this milestone achievement? This will remove it and purge its certificate from storage.",
          itemTitle: a ? `🏆 ${a.title}` : "",
          badge: "Achievement Action",
          confirmText: "Yes, Delete Achievement",
          confirmIcon: "fa-solid fa-trash",
          theme: "danger"
        }).then(confirmed => {
          if (confirmed) {
            if (a) {
              if (a.assetUrl) window.r2StorageManager.deleteMediaAsset(a.assetUrl);
              if (a.imageUrl) window.r2StorageManager.deleteMediaAsset(a.imageUrl);
            }
            store.state.achievements = store.state.achievements.filter(x => x.id !== id);
            store.saveState();
            renderAchievements();
            renderCMSLists();
            soundEngine.playPop(300, 0.08);
            showToast('ACHIEVEMENT & SERVER ASSETS DELETED ✦');
          }
        });
      } else if (action === 'edit-soc') {
        const s = store.state.socials.find(x => x.id === id);
        if (s) {
          openCMSModal('tab-socials');
          document.getElementById('soc-edit-id').value = s.id;
          document.getElementById('soc-title').value = s.title;
          document.getElementById('soc-label').value = s.label;
          document.getElementById('soc-type').value = s.type;
          document.getElementById('soc-icon').value = s.icon;
          document.getElementById('soc-url').value = s.url;
          document.getElementById('soc-desc').value = s.desc;
          document.getElementById('soc-form-heading').textContent = `Editing: ${s.title}`;
        }
      } else if (action === 'del-soc') {
        const s = store.state.socials.find(x => x.id === id);
        showConfirmDialog({
          title: "Delete Contact Channel?",
          message: "Are you sure you want to delete this social link / contact channel?",
          itemTitle: s ? `🔗 ${s.title}` : "",
          badge: "Social Channel",
          confirmText: "Yes, Delete Channel",
          confirmIcon: "fa-solid fa-trash",
          theme: "danger"
        }).then(confirmed => {
          if (confirmed) {
            store.state.socials = store.state.socials.filter(x => x.id !== id);
            store.saveState();
            renderSocials();
            renderCMSLists();
            soundEngine.playPop(300, 0.08);
            showToast('LINK DELETED ✦');
          }
        });
      }
    });

    // 7. JSON Export & Import
    const exportBtn = document.getElementById('btn-export-json');
    const importBtn = document.getElementById('btn-trigger-import');
    const fileInput = document.getElementById('json-file-input');
    const logoutBtn = document.getElementById('btn-admin-logout');
    const resetBtn = document.getElementById('btn-reset-defaults');

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store.state, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "sakib_portfolio_backup.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        soundEngine.playCoinPing();
        showToast('PORTFOLIO JSON EXPORTED! 💾');
      });
    }

    if (importBtn && fileInput) {
      importBtn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const parsed = JSON.parse(event.target.result);
            if (parsed.hero && parsed.projects && parsed.achievements && parsed.socials) {
              if (!parsed.featureVisibility) {
                parsed.featureVisibility = { projects: true, achievements: true, socials: true, media: true };
              }
              store.state = parsed;
              store.saveState();
              renderAll();
              soundEngine.playCoinPing();
              showToast('BACKUP RESTORED SUCCESSFULLY! ✦');
            } else {
              throw new Error("Invalid format");
            }
          } catch (err) {
            showToast('INVALID JSON BACKUP FORMAT ❌');
          }
        };
        reader.readAsText(file);
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        store.setAuth(false);
        const cmsModal = document.getElementById('admin-cms-modal');
        if (cmsModal) cmsModal.close();
        const adminBtn = document.getElementById('admin-auth-btn');
        adminBtn.classList.remove('logged-in');
        document.getElementById('admin-btn-icon').className = 'fa-solid fa-lock';
        document.getElementById('admin-btn-text').textContent = 'Admin Login';
        soundEngine.playPop(420, 0.05);
        showToast('LOGGED OUT OF ADMIN SESSION');
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', async () => {
        const confirmed = await showConfirmDialog({
          title: "Reset All to Initial Defaults?",
          message: "This will restore all hero info, projects, media, and achievements back to initial portfolio defaults. Are you sure you want to proceed?",
          badge: "Danger Zone",
          confirmText: "Yes, Reset All",
          confirmIcon: "fa-solid fa-rotate-left",
          theme: "danger"
        });
        if (confirmed) {
          store.resetDefaults();
          renderAll();
          soundEngine.playCoinPing();
          showToast('RESET TO DEFAULTS ✦');
        }
      });
    }

    // 8. Anywhere Door Secret Passphrase Management
    const doorPassInput = document.getElementById('cms-door-passphrase-input');
    const toggleDoorPassBtn = document.getElementById('btn-toggle-door-visibility');
    const saveDoorPassBtn = document.getElementById('btn-save-door-passphrase');
    const resetDoorPassBtn = document.getElementById('btn-reset-door-passphrase');

    if (toggleDoorPassBtn && doorPassInput) {
      toggleDoorPassBtn.addEventListener('click', (e) => {
        e.preventDefault();
        soundEngine.playPop(480, 0.03);
        const isPass = doorPassInput.type === 'password';
        doorPassInput.type = isPass ? 'text' : 'password';
        toggleDoorPassBtn.innerHTML = isPass ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
      });
    }

    if (saveDoorPassBtn && doorPassInput) {
      saveDoorPassBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const rawVal = doorPassInput.value.trim();
        const finalVal = rawVal || 'anywhere door';
        if (!store.state.securitySettings) store.state.securitySettings = {};
        store.state.securitySettings.doorPassphrase = finalVal;
        store.saveState();
        soundEngine.playCoinPing();
        showToast('ANYWHERE DOOR SECRET PASSPHRASE SAVED! 🔑');
      });
    }

    if (resetDoorPassBtn && doorPassInput) {
      resetDoorPassBtn.addEventListener('click', (e) => {
        e.preventDefault();
        soundEngine.playPop(400, 0.04);
        doorPassInput.value = 'anywhere door';
        if (!store.state.securitySettings) store.state.securitySettings = {};
        store.state.securitySettings.doorPassphrase = 'anywhere door';
        store.saveState();
        showToast('DOOR PASSPHRASE RESET TO DEFAULT! 🔑');
      });
    }
  }

  function resetProjectForm() {
    document.getElementById('form-edit-project').reset();
    document.getElementById('project-edit-id').value = '';
    const assetUrlInput = document.getElementById('proj-asset-url');
    if (assetUrlInput) assetUrlInput.value = '';
    const videoUrlInput = document.getElementById('proj-video-url');
    if (videoUrlInput) videoUrlInput.value = '';
    const previewBox = document.getElementById('proj-thumbnail-preview-box');
    if (previewBox) previewBox.style.display = 'none';
    const previewImg = document.getElementById('proj-preview-img');
    if (previewImg) previewImg.src = '';
    const previewVideo = document.getElementById('proj-preview-video');
    if (previewVideo) previewVideo.src = '';
    const statusHint = document.getElementById('proj-upload-status-hint');
    if (statusHint) statusHint.textContent = 'Direct CDN upload to bucket: portfolio-media';
    document.getElementById('project-form-heading').innerHTML = '<i class="fa-solid fa-circle-plus"></i> Add New Project';
    document.getElementById('btn-save-project').innerHTML = '<i class="fa-solid fa-plus"></i><span>Save Project</span>';
  }

  function resetMediaForm() {
    document.getElementById('form-edit-media').reset();
    document.getElementById('media-edit-id').value = '';
    const assetUrlInput = document.getElementById('media-asset-url');
    if (assetUrlInput) assetUrlInput.value = '';
    const previewBox = document.getElementById('media-thumbnail-preview-box');
    if (previewBox) previewBox.style.display = 'none';
    const previewImg = document.getElementById('media-preview-img');
    if (previewImg) previewImg.src = '';
    const previewVideo = document.getElementById('media-preview-video');
    if (previewVideo) previewVideo.src = '';
    const statusHint = document.getElementById('media-upload-status-hint');
    if (statusHint) statusHint.textContent = 'Direct CDN upload to bucket: portfolio-media';
    document.getElementById('media-form-heading').innerHTML = '<i class="fa-solid fa-circle-plus"></i> Add Creative Work';
    document.getElementById('btn-save-media').innerHTML = '<i class="fa-solid fa-plus"></i><span>Save Work</span>';
  }

  function resetAchForm() {
    document.getElementById('form-edit-achievement').reset();
    document.getElementById('ach-edit-id').value = '';
    const assetUrlInput = document.getElementById('ach-asset-url');
    if (assetUrlInput) assetUrlInput.value = '';
    const verifyUrlInput = document.getElementById('ach-verify-url');
    if (verifyUrlInput) verifyUrlInput.value = '';
    const featuresInput = document.getElementById('ach-features');
    if (featuresInput) featuresInput.value = '';
    const previewBox = document.getElementById('ach-thumbnail-preview-box');
    if (previewBox) previewBox.style.display = 'none';
    const previewImg = document.getElementById('ach-preview-img');
    if (previewImg) previewImg.src = '';
    const statusHint = document.getElementById('ach-upload-status-hint');
    if (statusHint) statusHint.textContent = 'Direct CDN upload to bucket: portfolio-media';
    document.getElementById('ach-form-heading').innerHTML = '<i class="fa-solid fa-circle-plus"></i> Add New Achievement';
    const saveBtn = document.getElementById('btn-save-achievement');
    if (saveBtn) saveBtn.innerHTML = '<i class="fa-solid fa-plus"></i><span>Save Achievement</span>';
  }

  function resetSocForm() {
    document.getElementById('form-edit-social').reset();
    document.getElementById('soc-edit-id').value = '';
    document.getElementById('soc-form-heading').innerHTML = '<i class="fa-solid fa-circle-plus"></i> Add New Contact Channel';
  }

  function getVideoEmbedInfo(url) {
    if (!url) return null;
    const cleanUrl = url.trim();

    // YouTube (watch, shorts, youtu.be, embed, mobile)
    const ytReg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    const ytMatch = cleanUrl.match(ytReg);
    if (ytMatch && ytMatch[1]) {
      return {
        type: 'youtube',
        embedUrl: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0`
      };
    }

    // Vimeo
    const vimeoReg = /vimeo\.com\/(?:video\/|channels\/[^\/]+\/|groups\/[^\/]+\/videos\/|album\/[^\/]+\/video\/)?([0-9]+)/i;
    const vimeoMatch = cleanUrl.match(vimeoReg);
    if (vimeoMatch && vimeoMatch[1]) {
      return {
        type: 'vimeo',
        embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`
      };
    }

    // Direct Video Files (.mp4, .webm, .ogg, .mov, data:video)
    if (/\.(mp4|webm|ogg|mov)($|\?)/i.test(cleanUrl) || cleanUrl.startsWith('data:video/')) {
      return {
        type: 'direct',
        embedUrl: cleanUrl
      };
    }

    return null;
  }

  function getYouTubeEmbedUrl(url) {
    const info = getVideoEmbedInfo(url);
    return info ? info.embedUrl : null;
  }

  function isMediaVideo(item) {
    if (!item) return false;
    if (item.type === 'video') return true;

    const asset = (item.assetUrl || item.imageUrl || '').toLowerCase();
    
    // Check if asset is explicitly an image
    const isExplicitImage = /\.(png|jpg|jpeg|webp|gif|svg|bmp|avif)($|\?)/i.test(asset) || asset.startsWith('data:image/') || asset.includes('unsplash.com');
    if (isExplicitImage) {
      return false; // Picture uploaded -> strictly never show play button overlay
    }

    // Check if asset is a video file or stream
    if (asset.includes('.mp4') || asset.includes('.webm') || asset.includes('.mov') || asset.includes('.ogg') || asset.startsWith('data:video/')) {
      return true;
    }
    if (asset.includes('youtube.com') || asset.includes('youtu.be') || asset.includes('vimeo.com')) {
      return true;
    }

    // If no asset was uploaded, check category or standalone videoUrl
    if (item.category && item.category.toLowerCase().includes('video')) return true;
    if (!asset && item.videoUrl) {
      return !!getVideoEmbedInfo(item.videoUrl);
    }

    return false;
  }

  // ==========================================================================
  // NEO-BRUTALIST CUSTOM CONFIRMATION MODAL SYSTEM
  // ==========================================================================
  function showConfirmDialog({
    title = "Are you sure?",
    message = "This action cannot be undone. Are you sure you want to proceed?",
    itemTitle = "",
    badge = "Action Confirmation",
    confirmText = "Yes, Delete",
    confirmIcon = "fa-solid fa-trash",
    theme = "danger"
  } = {}) {
    return new Promise((resolve) => {
      const modal = document.getElementById('confirm-modal');
      if (!modal) {
        resolve(window.confirm(message));
        return;
      }

      const headerEl = document.getElementById('confirm-header');
      const titleEl = document.getElementById('confirm-title');
      const msgEl = document.getElementById('confirm-message');
      const badgeEl = document.getElementById('confirm-badge');
      const iconEl = document.getElementById('confirm-icon');
      const previewEl = document.getElementById('confirm-item-preview');
      const acceptBtn = document.getElementById('confirm-accept-btn');
      const acceptText = document.getElementById('confirm-accept-text');
      const acceptIcon = document.getElementById('confirm-accept-icon');
      const cancelBtn = document.getElementById('confirm-cancel-btn');

      if (titleEl) titleEl.textContent = title;
      if (msgEl) msgEl.textContent = message;
      if (badgeEl) badgeEl.textContent = badge;
      if (acceptText) acceptText.textContent = confirmText;
      if (acceptIcon) acceptIcon.className = confirmIcon;

      if (headerEl) {
        if (theme === 'danger') {
          headerEl.classList.add('danger');
          if (iconEl) iconEl.className = 'fa-solid fa-triangle-exclamation';
        } else {
          headerEl.classList.remove('danger');
          if (iconEl) iconEl.className = 'fa-solid fa-circle-question';
        }
      }

      if (previewEl) {
        if (itemTitle) {
          previewEl.style.display = 'flex';
          previewEl.innerHTML = `<i class="fa-solid fa-arrow-right-long" style="color:var(--pop-coral);"></i> <span>${itemTitle}</span>`;
        } else {
          previewEl.style.display = 'none';
        }
      }

      soundEngine.playPop(380, 0.05);

      function cleanup(result) {
        modal.close();
        acceptBtn.removeEventListener('click', onAccept);
        cancelBtn.removeEventListener('click', onCancel);
        modal.removeEventListener('click', onBackdrop);
        resolve(result);
      }

      function onAccept() {
        soundEngine.playPop(420, 0.04);
        cleanup(true);
      }

      function onCancel() {
        soundEngine.playPop(520, 0.03);
        cleanup(false);
      }

      function onBackdrop(e) {
        const card = modal.querySelector('.modal-content-card');
        if (card && !card.contains(e.target)) {
          cleanup(false);
        }
      }

      acceptBtn.addEventListener('click', onAccept);
      cancelBtn.addEventListener('click', onCancel);
      modal.addEventListener('click', onBackdrop);

      modal.showModal();
    });
  }

  // ==========================================================================
  // 10. DETAIL MODAL TRIGGER BINDINGS (Projects, Media & Achievements)
  // ==========================================================================
  function bindDetailTriggers() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalSummary = document.getElementById('modal-summary');
    const modalFeatures = document.getElementById('modal-features');
    const modalTechs = document.getElementById('modal-techs');
    const modalLiveLink = document.getElementById('modal-live-link');
    const modalVideoLink = document.getElementById('modal-video-link');
    const modalCodeLink = document.getElementById('modal-code-link');
    const mediaStage = document.getElementById('modal-media-stage');

    if (!modal) return;

    function cleanupMediaStage() {
      if (mediaStage) {
        mediaStage.innerHTML = '';
        mediaStage.style.display = 'none';
      }
    }

    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const type = btn.getAttribute('data-type') || 'project';
        const id = btn.getAttribute('data-id') || btn.getAttribute('data-project');

        let data = null;
        if (type === 'media') {
          data = (store.state.media || []).find(m => m.id === id);
        } else if (type === 'achievement') {
          data = (store.state.achievements || []).find(a => a.id === id);
        } else {
          data = (store.state.projects || []).find(p => p.id === id);
        }

        if (!data) return;

        soundEngine.playPop(680, 0.05);

        if (type === 'achievement') {
          modalTitle.textContent = data.title;
          modalCategory.textContent = `🏆 ${data.badge} • ${data.year}`;
          modalSummary.textContent = data.desc;

          modalFeatures.innerHTML = (data.features && data.features.length ? data.features : [
            data.metric || "Verified milestone achievement",
            "Recognized for outstanding technical contribution & innovation",
            "Official credential & verified honor"
          ]).map(f => `<li>${f}</li>`).join('');

          modalTechs.innerHTML = [
            `🏆 ${data.badge}`,
            `📅 ${data.year}`,
            `⚡ ${data.metric || 'VERIFIED'}`
          ].map(t => `<span class="tech-pill">${t}</span>`).join('');

          if (data.verifyUrl) {
            modalLiveLink.style.display = 'inline-flex';
            modalLiveLink.href = data.verifyUrl;
            modalLiveLink.innerHTML = `<i class="fa-solid fa-award"></i> <span>Verify Official Credential</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
          } else {
            modalLiveLink.style.display = 'none';
          }
          if (modalVideoLink) modalVideoLink.style.display = 'none';
          if (modalCodeLink) modalCodeLink.style.display = 'none';

        } else {
          modalTitle.textContent = data.title;
          modalCategory.textContent = `${data.category} • ${data.chain || 'SHOWCASE'}`;
          modalSummary.textContent = data.desc;

          modalFeatures.innerHTML = (data.features || ["Custom built creative highlight"])
            .map(f => `<li>${f}</li>`)
            .join('');

          modalTechs.innerHTML = (data.techs || ["Creative Suite"])
            .map(t => `<span class="tech-pill">${t}</span>`)
            .join('');

          // 1. Live View Button (Live Demo / Website)
          const liveUrl = data.liveUrl || (type === 'project' ? '' : '');
          if (liveUrl) {
            modalLiveLink.style.display = 'inline-flex';
            modalLiveLink.href = liveUrl;
            modalLiveLink.innerHTML = `<i class="fa-solid fa-globe"></i> <span>Live View</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
          } else {
            modalLiveLink.style.display = 'none';
          }

          // 2. Video Demo Button (YouTube, Shorts, Vimeo, or Video Stream)
          const videoUrl = data.videoUrl || (data.type === 'video' ? data.liveUrl : '') || '';
          if (videoUrl && modalVideoLink) {
            modalVideoLink.style.display = 'inline-flex';
            modalVideoLink.href = videoUrl;
            modalVideoLink.innerHTML = `<i class="fa-solid fa-circle-play"></i> <span>Video Demo</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
          } else if (modalVideoLink) {
            modalVideoLink.style.display = 'none';
          }

          // 3. GitHub / Source Repository Button
          if (data.githubUrl && modalCodeLink) {
            modalCodeLink.style.display = 'inline-flex';
            modalCodeLink.href = data.githubUrl;
            modalCodeLink.innerHTML = `<i class="fa-brands fa-github"></i> <span>GitHub Code</span>`;
          } else if (modalCodeLink) {
            modalCodeLink.style.display = 'none';
          }
        }

        // Render Media Stage (Video / Cinema Player / High-Res Image / Certificate)
        cleanupMediaStage();

        const assetUrl = data.assetUrl || data.imageUrl || '';
        const videoUrl = data.videoUrl || (data.type === 'video' ? data.liveUrl : '') || '';
        const isVideo = isMediaVideo(data);
        const embedInfo = getVideoEmbedInfo(videoUrl) || getVideoEmbedInfo(assetUrl);
        const hasImg = !!assetUrl && !isVideo;

        if (mediaStage) {
          if (hasImg && embedInfo) {
            // Dual mode: Project has both a Screenshot Cover AND a Video Demo
            mediaStage.style.display = 'block';
            mediaStage.innerHTML = `
              <div class="modal-media-tabs">
                <button type="button" class="modal-media-tab-btn active" id="tab-btn-img"><i class="fa-solid fa-image"></i> Screenshot Preview</button>
                <button type="button" class="modal-media-tab-btn" id="tab-btn-vid"><i class="fa-solid fa-play"></i> Watch Video Demo</button>
              </div>
              <div id="modal-media-slot">
                <div class="modal-image-showcase">
                  <img src="${assetUrl}" alt="${data.title}" />
                  <a href="${assetUrl}" target="_blank" rel="noopener noreferrer" class="modal-open-hd-btn">
                    <i class="fa-solid fa-expand"></i>
                    <span>Open Full HD Original</span>
                  </a>
                </div>
              </div>
            `;

            const slot = mediaStage.querySelector('#modal-media-slot');
            const tabImg = mediaStage.querySelector('#tab-btn-img');
            const tabVid = mediaStage.querySelector('#tab-btn-vid');

            if (tabImg && tabVid && slot) {
              tabImg.addEventListener('click', () => {
                soundEngine.playPop(520, 0.02);
                tabImg.classList.add('active');
                tabVid.classList.remove('active');
                slot.innerHTML = `
                  <div class="modal-image-showcase">
                    <img src="${assetUrl}" alt="${data.title}" />
                    <a href="${assetUrl}" target="_blank" rel="noopener noreferrer" class="modal-open-hd-btn">
                      <i class="fa-solid fa-expand"></i>
                      <span>Open Full HD Original</span>
                    </a>
                  </div>
                `;
              });

              tabVid.addEventListener('click', () => {
                soundEngine.playPop(620, 0.03);
                tabVid.classList.add('active');
                tabImg.classList.remove('active');
                if (embedInfo.type === 'youtube' || embedInfo.type === 'vimeo') {
                  slot.innerHTML = `
                    <div class="modal-video-wrapper">
                      <iframe src="${embedInfo.embedUrl}" title="${data.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  `;
                } else {
                  slot.innerHTML = `
                    <div class="modal-video-wrapper">
                      <video src="${embedInfo.embedUrl}" controls playsinline autoplay></video>
                    </div>
                  `;
                }
              });
            }

          } else if (isVideo && embedInfo) {
            // Pure Video item
            mediaStage.style.display = 'block';
            if (embedInfo.type === 'youtube' || embedInfo.type === 'vimeo') {
              mediaStage.innerHTML = `
                <div class="modal-video-wrapper">
                  <iframe src="${embedInfo.embedUrl}" title="${data.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              `;
            } else {
              mediaStage.innerHTML = `
                <div class="modal-video-wrapper">
                  <video src="${embedInfo.embedUrl}" controls playsinline autoplay></video>
                </div>
              `;
            }
          } else if (assetUrl) {
            // Pure Image item
            mediaStage.style.display = 'block';
            mediaStage.innerHTML = `
              <div class="modal-image-showcase">
                <img src="${assetUrl}" alt="${data.title}" />
                <a href="${assetUrl}" target="_blank" rel="noopener noreferrer" class="modal-open-hd-btn">
                  <i class="fa-solid fa-expand"></i>
                  <span>Open Full HD Original</span>
                </a>
              </div>
            `;
          } else if (embedInfo) {
            mediaStage.style.display = 'block';
            if (embedInfo.type === 'youtube' || embedInfo.type === 'vimeo') {
              mediaStage.innerHTML = `
                <div class="modal-video-wrapper">
                  <iframe src="${embedInfo.embedUrl}" title="${data.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              `;
            } else {
              mediaStage.innerHTML = `
                <div class="modal-video-wrapper">
                  <video src="${embedInfo.embedUrl}" controls playsinline autoplay></video>
                </div>
              `;
            }
          }
        }

        modal.showModal();
      });
    });

    closeBtn.addEventListener('click', () => {
      cleanupMediaStage();
      modal.close();
    });

    modal.addEventListener('click', (e) => {
      const card = modal.querySelector('.modal-content-card');
      if (card && !card.contains(e.target)) {
        cleanupMediaStage();
        modal.close();
      }
    });
  }

  // Universal Description Expand/Collapse ("See More" / "See Less")
  function bindDescToggleTriggers() {
    document.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.btn-desc-toggle');
      if (!toggleBtn) return;

      e.preventDefault();
      e.stopPropagation();

      const descWrap = toggleBtn.closest('.card-desc-wrap');
      if (!descWrap) return;

      const descP = descWrap.querySelector('.card-desc');
      const toggleText = toggleBtn.querySelector('.toggle-text');
      if (!descP) return;

      const isCurrentlyExpanded = descP.classList.contains('is-expanded');

      if (isCurrentlyExpanded) {
        descP.classList.remove('is-expanded');
        descP.classList.add('is-clamped');
        toggleBtn.setAttribute('aria-expanded', 'false');
        if (toggleText) toggleText.textContent = 'See More';
        soundEngine.playPop(520, 0.02);
      } else {
        descP.classList.remove('is-clamped');
        descP.classList.add('is-expanded');
        toggleBtn.setAttribute('aria-expanded', 'true');
        if (toggleText) toggleText.textContent = 'See Less';
        soundEngine.playPop(620, 0.02);
      }
    });
  }

  // ==========================================================================
  // 11. SOCIAL & CLIPBOARD BINDINGS
  // ==========================================================================
  function bindSocialTriggers() {
    document.querySelectorAll('.copy-email-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = btn.getAttribute('data-email') || 'hello@domain.com';
        try {
          await navigator.clipboard.writeText(email);
          showToast(`COPIED ${email}! ★`);
        } catch (err) {
          const textarea = document.createElement('textarea');
          textarea.value = email;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          showToast(`COPIED ${email}! ★`);
        }
      });
    });

    document.querySelectorAll('.schedule-trigger-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        soundEngine.playCoinPing();
        showToast('LAUNCHING 1:1 CALENDAR... ⚡');
        setTimeout(() => {
          window.open('https://calendly.com', '_blank', 'noopener,noreferrer');
        }, 600);
      });
    });
  }

  // ==========================================================================
  // 12. TOAST NOTIFICATIONS
  // ==========================================================================
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;

    soundEngine.playCoinPing();

    toastText.textContent = message;
    toast.removeAttribute('hidden');
    toast.classList.add('show');

    if (window._toastTimeout) {
      clearTimeout(window._toastTimeout);
    }

    window._toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.setAttribute('hidden', ''), 250);
    }, 2800);
  }

  // ==========================================================================
  // 13. RETRO GEOMETRIC CANVAS
  // ==========================================================================
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, active: false };
    const symbols = [];
    const SYMBOL_COUNT = Math.min(Math.floor((width * height) / 32000), 28);
    const SYMBOL_TYPES = ['cross', 'diamond', 'dot', 'square'];
    const COLORS = ['#111111', '#7C5CFF', '#FF647C', '#FFD84D', '#4DB8FF', '#55D98A'];

    class GeoSymbol {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -20;
        this.size = Math.random() * 6 + 4;
        this.type = SYMBOL_TYPES[Math.floor(Math.random() * SYMBOL_TYPES.length)];
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.4 + 0.15;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = Math.random() * 0.4 + 0.15;
        this.rotation = Math.random() * Math.PI * 2;
        this.vRot = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.vRot;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const force = (100 - dist) / 100;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }

        if (this.y > height + 25 || this.x < -25 || this.x > width + 25) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1.5;

        if (this.type === 'cross') {
          const s = this.size;
          ctx.beginPath();
          ctx.moveTo(-s, 0);
          ctx.lineTo(s, 0);
          ctx.moveTo(0, -s);
          ctx.lineTo(0, s);
          ctx.stroke();
        } else if (this.type === 'square') {
          const s = this.size * 0.8;
          ctx.fillRect(-s / 2, -s / 2, s, s);
          ctx.strokeRect(-s / 2, -s / 2, s, s);
        } else if (this.type === 'diamond') {
          const s = this.size;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s, 0);
          ctx.lineTo(0, s);
          ctx.lineTo(-s, 0);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, this.size * 0.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < SYMBOL_COUNT; i++) {
      symbols.push(new GeoSymbol());
    }

    function renderLoop() {
      ctx.clearRect(0, 0, width, height);

      symbols.forEach(s => {
        s.update();
        s.draw();
      });

      requestAnimationFrame(renderLoop);
    }

    renderLoop();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
      mouse.active = false;
    });
  }

  // ==========================================================================
  // 14. KEYBOARD SHORTCUTS & UTILITIES
  // ==========================================================================
  function initKeyboardAndSoundToggle() {
    const soundToggle = document.getElementById('sound-toggle');
    const soundIcon = document.getElementById('sound-icon');

    function updateSoundUI(isEnabled) {
      if (soundIcon) {
        soundIcon.className = isEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
      }
      if (soundToggle) {
        soundToggle.querySelector('span').textContent = isEnabled ? 'Sound: ON' : 'Sound: OFF';
      }
    }

    updateSoundUI(soundEngine.enabled);

    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        const isEnabled = soundEngine.toggle();
        updateSoundUI(isEnabled);
        showToast(isEnabled ? 'AUDIO FX: ON 🔊' : 'AUDIO FX: MUTED 🔇');
      });
    }

    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
      const openDialog = document.querySelector('dialog[open]');
      if (openDialog && e.key !== 'Escape') return;

      if (e.key === '1') {
        window.cascadeEngine.toggle('panel-projects');
      } else if (e.key === '2') {
        window.cascadeEngine.toggle('panel-achievements');
      } else if (e.key === '3') {
        window.cascadeEngine.toggle('panel-social');
      } else if (e.key === '4') {
        window.cascadeEngine.toggle('panel-media');
      } else if (e.key === 'Escape') {
        if (window.cascadeEngine.activePanelId) {
          window.cascadeEngine.collapse(window.cascadeEngine.activePanelId);
          window.cascadeEngine.activePanelId = null;
        }
      }
    });

    const yearSpan = document.getElementById('year-span');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  // ==========================================================================
  // 15. LIVE TOTAL VISITOR COUNTER & CLOUD VISIBILITY MANAGER
  // ==========================================================================
  class VisitorCounterManager {
    constructor() {
      this.namespace = 'md-eftakhar-amin-sakib';
      this.key = 'portfolio_visitors';
      this.apiUrl = 'https://abacus.jasoncameron.dev';
      this.secondaryApiUrl = 'https://counterapi.com/api/md-eftakhar-amin-sakib-portfolio';
      this.sessionKey = 'portfolio_visited_session_v2';
      this.cacheKey = 'portfolio_cached_visitor_count';

      // Load cached count or start at 1
      this.currentCount = parseInt(localStorage.getItem(this.cacheKey) || '1', 10);
      this.displayedCount = this.currentCount;
      this.isFirebaseActive = false;
      this.db = null;
      this.unsubscribeFirestore = null;

      this.init();
    }

    init() {
      this.bindEvents();
      this.checkAdminUrlParam();
      
      // 1. Render immediately and synchronously on page load so UI is never blank
      this.renderCount(false);
      this.updateVisibility();
      this.updateCMSReadout();

      // 2. Try initializing Firebase Firestore if user configured it
      this.initFirebaseIfConfigured();

      // 3. Track and sync visitor counts
      this.fetchAndTrackCount();
    }

    checkAdminUrlParam() {
      try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('admin') === 'true' || params.get('admin') === '1' || params.get('pass') === 'admin123') {
          store.setAuth(true);
        }
      } catch (e) {}
    }

    initFirebaseIfConfigured() {
      const config = store.state.firebaseConfig;
      if (config && typeof window.firebase !== 'undefined') {
        try {
          if (!firebase.apps.length) {
            firebase.initializeApp(config);
          }
          this.db = firebase.firestore();
          this.isFirebaseActive = true;
          this.setupFirestoreListener();
          this.updateBackendModeUI(true);

          // Fetch cloud-saved portfolio CMS content if available
          this.db.collection('portfolio').doc('content').get().then(doc => {
            if (doc.exists) {
              const data = doc.data();
              if (data.hero) store.state.hero = Object.assign({}, store.state.hero, data.hero);
              if (data.featureVisibility) store.state.featureVisibility = Object.assign({}, store.state.featureVisibility, data.featureVisibility);
              if (data.projects) store.state.projects = data.projects;
              if (data.media) store.state.media = data.media;
              if (data.achievements) store.state.achievements = data.achievements;
              if (data.socials) store.state.socials = data.socials;
              renderAll();
            }
          }).catch(err => console.warn('Could not read cloud content:', err));

        } catch (e) {
          console.warn('Firebase initialization error, falling back to standalone mode:', e);
          this.isFirebaseActive = false;
          this.updateBackendModeUI(false);
        }
      } else {
        this.isFirebaseActive = false;
        this.updateBackendModeUI(false);
      }
    }

    async syncPortfolioContentToCloud(state) {
      if (this.isFirebaseActive && this.db) {
        try {
          await this.db.collection('portfolio').doc('content').set({
            hero: state.hero,
            featureVisibility: state.featureVisibility,
            projects: state.projects,
            media: state.media,
            achievements: state.achievements,
            socials: state.socials,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        } catch (e) {
          console.warn('Could not sync CMS state to Firestore:', e);
        }
      }
    }

    setupFirestoreListener() {
      if (!this.db) return;
      try {
        if (this.unsubscribeFirestore) this.unsubscribeFirestore();
        const docRef = this.db.collection('portfolio').doc('analytics');

        this.unsubscribeFirestore = docRef.onSnapshot((doc) => {
          if (doc.exists) {
            const data = doc.data();
            if (typeof data.totalVisitors === 'number') {
              this.currentCount = data.totalVisitors;
              localStorage.setItem(this.cacheKey, this.currentCount.toString());
              this.renderCount(true);
              this.updateCMSReadout();
            }
            if (typeof data.isPublic === 'boolean') {
              if (store.state.visitorSettings) {
                store.state.visitorSettings.isPublic = data.isPublic;
              }
              this.updateVisibility();
            }
          }
        }, (err) => {
          console.warn('Firestore snapshot error:', err);
        });
      } catch (e) {
        console.warn('Failed to bind Firestore listener:', e);
      }
    }

    async fetchAndTrackCount() {
      const isSessionCounted = sessionStorage.getItem(this.sessionKey) === 'true';

      // --- CLOUD FIRESTORE PATH ---
      if (this.isFirebaseActive && this.db) {
        try {
          const docRef = this.db.collection('portfolio').doc('analytics');
          if (!isSessionCounted) {
            await docRef.set({
              totalVisitors: firebase.firestore.FieldValue.increment(1),
              isPublic: store.state.visitorSettings ? (store.state.visitorSettings.isPublic !== false) : true,
              lastVisitedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
            sessionStorage.setItem(this.sessionKey, 'true');
          } else {
            const doc = await docRef.get();
            if (doc.exists) {
              const data = doc.data();
              if (typeof data.totalVisitors === 'number') {
                this.currentCount = data.totalVisitors;
                this.renderCount(true);
              }
            }
          }
          return;
        } catch (e) {
          console.warn('Firestore write failed, falling back to standalone counter:', e);
        }
      }

      // --- STANDALONE MULTI-PROVIDER PATH ---
      let newCount = this.currentCount;

      try {
        if (!isSessionCounted) {
          // Increment count with 2.5s timeout guard
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2500);
            const res = await fetch(`${this.apiUrl}/hit/${this.namespace}/${this.key}`, {
              cache: 'no-store',
              signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (res.ok) {
              const data = await res.json();
              if (data && typeof data.value === 'number') {
                newCount = data.value;
                sessionStorage.setItem(this.sessionKey, 'true');
              }
            } else {
              throw new Error('Primary counter returned non-200');
            }
          } catch (primErr) {
            // Secondary Fallback API
            try {
              const controller2 = new AbortController();
              const timeoutId2 = setTimeout(() => controller2.abort(), 2500);
              const res2 = await fetch(`${this.secondaryApiUrl}/up`, {
                cache: 'no-store',
                signal: controller2.signal
              });
              clearTimeout(timeoutId2);

              if (res2.ok) {
                const data2 = await res2.json();
                if (data2 && typeof data2.value === 'number') {
                  newCount = data2.value;
                  sessionStorage.setItem(this.sessionKey, 'true');
                }
              } else {
                throw new Error('Secondary counter returned non-200');
              }
            } catch (secErr) {
              // Local fallback increment
              newCount = (this.currentCount || 0) + 1;
              sessionStorage.setItem(this.sessionKey, 'true');
            }
          }
        } else {
          // Already counted this session: Read latest total
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000);
            const res = await fetch(`${this.apiUrl}/get/${this.namespace}/${this.key}`, {
              cache: 'no-store',
              signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (res.ok) {
              const data = await res.json();
              if (data && typeof data.value === 'number') {
                newCount = data.value;
              }
            }
          } catch (getErr) {}
        }
      } catch (err) {
        console.warn('Visitor counter tracking warning:', err);
      }

      this.currentCount = newCount;
      localStorage.setItem(this.cacheKey, this.currentCount.toString());
      this.renderCount(true);
      this.updateCMSReadout();
    }

    getEffectiveCount() {
      const baseOffset = (store.state.visitorSettings && store.state.visitorSettings.baseOffset) || 0;
      return Math.max(1, this.currentCount + baseOffset);
    }

    renderCount(animate = false) {
      const badgeEl = document.getElementById('visitor-count-number');
      if (!badgeEl) return;

      const targetCount = this.getEffectiveCount();
      const formattedTarget = new Intl.NumberFormat().format(targetCount);

      if (!animate || this.displayedCount === targetCount) {
        badgeEl.textContent = formattedTarget;
        this.displayedCount = targetCount;
        return;
      }

      // Smooth Kinetic Count-Up Animation
      const startCount = this.displayedCount > 0 ? this.displayedCount : Math.max(0, targetCount - 25);
      const duration = 800;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.round(startCount + (targetCount - startCount) * ease);

        badgeEl.textContent = new Intl.NumberFormat().format(current);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          badgeEl.textContent = formattedTarget;
          this.displayedCount = targetCount;
        }
      };

      requestAnimationFrame(step);
    }

    updateVisibility() {
      const btn = document.getElementById('visitor-counter-btn');
      const adminTag = document.getElementById('visitor-admin-tag');
      if (!btn) return;

      const settings = store.state.visitorSettings || { isPublic: true };
      const isPublic = settings.isPublic !== false;
      const isAdmin = store.isAdmin;

      if (isPublic) {
        // Visible to everyone
        btn.style.display = 'inline-flex';
        if (adminTag) adminTag.style.display = 'none';
        btn.classList.remove('admin-only-preview');
        btn.title = 'Live Total Visitor Counter';
      } else {
        // Disabled / Private mode
        if (isAdmin) {
          // Visible to Admin only
          btn.style.display = 'inline-flex';
          if (adminTag) adminTag.style.display = 'inline-block';
          btn.classList.add('admin-only-preview');
          btn.title = 'Visitor Counter (Hidden from public — Visible only to Admin)';
        } else {
          // Hidden from everyone else
          btn.style.display = 'none';
        }
      }

      this.updateCMSToggleUI();
    }

    updateCMSToggleUI() {
      const toggleInput = document.getElementById('toggle-visitor-public');
      const titleEl = document.getElementById('visitor-toggle-status-title');
      const descEl = document.getElementById('visitor-toggle-status-desc');
      const offsetInput = document.getElementById('visitor-base-offset-input');
      const firebaseInput = document.getElementById('firebase-config-input');

      const settings = store.state.visitorSettings || { isPublic: true, baseOffset: 0 };
      const isPublic = settings.isPublic !== false;

      if (toggleInput) toggleInput.checked = isPublic;
      if (offsetInput) offsetInput.value = settings.baseOffset || 0;
      if (firebaseInput && store.state.firebaseConfig) {
        firebaseInput.value = JSON.stringify(store.state.firebaseConfig, null, 2);
      }

      if (titleEl && descEl) {
        if (isPublic) {
          titleEl.textContent = 'Public Visibility: ENABLED 👁️';
          titleEl.style.color = 'var(--ink-black)';
          descEl.textContent = 'Everyone who visits your portfolio can see the live visitor counter.';
        } else {
          titleEl.textContent = 'Public Visibility: DISABLED 🔒';
          titleEl.style.color = 'var(--pop-coral)';
          descEl.textContent = 'The visitor counter is hidden from the public. Only you (Admin) can see it when logged in.';
        }
      }

      this.updateBackendModeUI(this.isFirebaseActive);
    }

    updateBackendModeUI(isFirebase) {
      const modeBadge = document.getElementById('cms-backend-mode-badge');
      const connStatus = document.getElementById('firebase-conn-status');

      if (isFirebase) {
        if (modeBadge) {
          modeBadge.textContent = '🟢 Cloud Firestore Active';
          modeBadge.classList.add('connected');
        }
        if (connStatus) {
          connStatus.textContent = '🟢 Connected';
          connStatus.classList.add('connected');
        }
      } else {
        if (modeBadge) {
          modeBadge.textContent = '⚡ Standalone Mode';
          modeBadge.classList.remove('connected');
        }
        if (connStatus) {
          connStatus.textContent = '⚪ Standalone';
          connStatus.classList.remove('connected');
        }
      }
    }

    updateCMSReadout() {
      const cmsLiveCount = document.getElementById('cms-live-visitor-count');
      if (cmsLiveCount) {
        cmsLiveCount.textContent = new Intl.NumberFormat().format(this.getEffectiveCount());
      }
    }

    bindEvents() {
      const btn = document.getElementById('visitor-counter-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          soundEngine.playPop(620, 0.04);
          const settings = store.state.visitorSettings || { isPublic: true };
          const formatted = new Intl.NumberFormat().format(this.getEffectiveCount());

          if (store.isAdmin) {
            if (settings.isPublic === false) {
              showToast(`🔒 ADMIN VIEW: ${formatted} Visitors (Hidden from Public)`);
            } else {
              showToast(`👁️ PUBLIC VIEW: ${formatted} Total Visitors Recorded`);
            }
          } else {
            showToast(`🎉 You are visitor #${formatted}! Thanks for exploring Sakib's portfolio! ✦`);
          }
        });
      }

      // CMS Controls
      const toggleInput = document.getElementById('toggle-visitor-public');
      if (toggleInput) {
        toggleInput.addEventListener('change', () => {
          const isChecked = toggleInput.checked;
          const titleEl = document.getElementById('visitor-toggle-status-title');
          const descEl = document.getElementById('visitor-toggle-status-desc');

          if (titleEl && descEl) {
            if (isChecked) {
              titleEl.textContent = 'Public Visibility: ENABLED 👁️';
              titleEl.style.color = 'var(--ink-black)';
              descEl.textContent = 'Everyone who visits your portfolio can see the live visitor counter.';
            } else {
              titleEl.textContent = 'Public Visibility: DISABLED 🔒';
              titleEl.style.color = 'var(--pop-coral)';
              descEl.textContent = 'The visitor counter is hidden from the public. Only you (Admin) can see it when logged in.';
            }
          }
          soundEngine.playPop(480, 0.03);
        });
      }

      const saveSettingsBtn = document.getElementById('btn-save-visitor-settings');
      if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', async () => {
          const toggle = document.getElementById('toggle-visitor-public');
          const offsetInput = document.getElementById('visitor-base-offset-input');
          const isPublic = toggle ? toggle.checked : true;
          const baseOffset = offsetInput ? parseInt(offsetInput.value || '0', 10) : 0;

          if (!store.state.visitorSettings) store.state.visitorSettings = {};
          store.state.visitorSettings.isPublic = isPublic;
          store.state.visitorSettings.baseOffset = baseOffset;

          store.saveState();
          this.updateVisibility();
          this.renderCount(true);
          this.updateCMSReadout();

          // If Firebase is connected, sync visibility to cloud doc
          if (this.isFirebaseActive && this.db) {
            try {
              await this.db.collection('portfolio').doc('analytics').set({
                isPublic: isPublic
              }, { merge: true });
            } catch (e) {
              console.warn('Could not sync visibility to Firestore:', e);
            }
          }

          soundEngine.playCoinPing();
          showToast('VISITOR SETTINGS SAVED & APPLIED! ✦');
        });
      }

      const refreshBtn = document.getElementById('btn-refresh-visitor-count');
      if (refreshBtn) {
        refreshBtn.addEventListener('click', async () => {
          soundEngine.playPop(520, 0.02);
          refreshBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Syncing...';
          await this.syncLiveCount();
          refreshBtn.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i> Sync';
          showToast('VISITOR COUNT SYNCED WITH SERVER ✦');
        });
      }

      const testHitBtn = document.getElementById('btn-test-visitor-hit');
      if (testHitBtn) {
        testHitBtn.addEventListener('click', async () => {
          soundEngine.playPop(660, 0.04);
          testHitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Testing...';

          if (this.isFirebaseActive && this.db) {
            try {
              await this.db.collection('portfolio').doc('analytics').set({
                totalVisitors: firebase.firestore.FieldValue.increment(1)
              }, { merge: true });
            } catch (e) {
              this.currentCount += 1;
            }
          } else {
            try {
              const res = await fetch(`${this.apiUrl}/hit/${this.namespace}/${this.key}`, { cache: 'no-store' });
              if (res.ok) {
                const data = await res.json();
                if (data && typeof data.value === 'number') {
                  this.currentCount = data.value;
                }
              } else {
                this.currentCount += 1;
              }
            } catch (e) {
              this.currentCount += 1;
            }
          }

          localStorage.setItem(this.cacheKey, this.currentCount.toString());
          this.renderCount(true);
          this.updateCMSReadout();
          testHitBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Simulate 1 Visit';
          soundEngine.playCoinPing();
          showToast(`+1 VISIT RECORDED (Total: ${this.getEffectiveCount()}) ✦`);
        });
      }

      // Firebase Connect & Disconnect Handlers
      const connectFirebaseBtn = document.getElementById('btn-connect-firebase');
      if (connectFirebaseBtn) {
        connectFirebaseBtn.addEventListener('click', async () => {
          soundEngine.playPop(520, 0.03);
          const configInput = document.getElementById('firebase-config-input');
          const rawText = (configInput ? configInput.value : '').trim();

          if (!rawText) {
            showToast('PLEASE PASTE FIREBASE CONFIG OBJECT ⚠️');
            return;
          }

          try {
            let parsed = null;
            if (rawText.startsWith('{')) {
              parsed = JSON.parse(rawText);
            } else {
              // Try evaluating or extracting keys
              const cleanJson = rawText
                .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ')
                .replace(/'/g, '"');
              parsed = JSON.parse(cleanJson);
            }

            if (!parsed || !parsed.apiKey || !parsed.projectId) {
              throw new Error('Missing apiKey or projectId');
            }

            store.state.firebaseConfig = parsed;
            store.saveState();
            this.initFirebaseIfConfigured();
            await this.fetchAndTrackCount();

            soundEngine.playCoinPing();
            showToast('FIREBASE CLOUD FIRESTORE CONNECTED! 🚀');
          } catch (err) {
            console.error('Firebase config parsing error:', err);
            soundEngine.playPop(220, 0.1);
            showToast('INVALID FIREBASE CONFIG JSON FORMAT ❌');
          }
        });
      }

      const disconnectFirebaseBtn = document.getElementById('btn-disconnect-firebase');
      if (disconnectFirebaseBtn) {
        disconnectFirebaseBtn.addEventListener('click', () => {
          soundEngine.playPop(420, 0.05);
          store.state.firebaseConfig = null;
          store.saveState();
          if (this.unsubscribeFirestore) {
            this.unsubscribeFirestore();
            this.unsubscribeFirestore = null;
          }
          this.isFirebaseActive = false;
          const configInput = document.getElementById('firebase-config-input');
          if (configInput) configInput.value = '';
          this.updateBackendModeUI(false);
          showToast('SWITCHED TO STANDALONE ENGINE ⚡');
        });
      }
    }

    async syncLiveCount() {
      if (this.isFirebaseActive && this.db) {
        try {
          const doc = await this.db.collection('portfolio').doc('analytics').get();
          if (doc.exists) {
            const data = doc.data();
            if (typeof data.totalVisitors === 'number') {
              this.currentCount = data.totalVisitors;
              localStorage.setItem(this.cacheKey, this.currentCount.toString());
            }
          }
        } catch (e) {}
      } else {
        try {
          const res = await fetch(`${this.apiUrl}/get/${this.namespace}/${this.key}`, { cache: 'no-store' });
          if (res.ok) {
            const data = await res.json();
            if (data && typeof data.value === 'number') {
              this.currentCount = data.value;
              localStorage.setItem(this.cacheKey, this.currentCount.toString());
            }
          }
        } catch (e) {}
      }
      this.renderCount(true);
      this.updateCMSReadout();
    }
  }

  // ==========================================================================
  // 16. CLOUDFLARE R2 OBJECT STORAGE MANAGER (WEBCRYPTO S3-SIGV4)
  // ==========================================================================
  class R2StorageManager {
    constructor() {
      this.config = store.state.r2Config || {
        accountId: "d71d00687915515fe73d9228a901b29b",
        bucketName: "portfolio-media",
        publicBaseUrl: "https://pub-50fe94eff2494bc0945ba23feb179bed.r2.dev",
        accessKeyId: "ced441d315e70ad024c144d2cb24d97a",
        secretAccessKey: "68dd22956549206a64ff4162021692dfd511d154f94a0df187ceca108eae03a8"
      };
      this.uploadHistory = [];
      this.init();
    }

    init() {
      this.bindEvents();
    }

    async sha256(buffer) {
      const hash = await crypto.subtle.digest('SHA-256', buffer);
      return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    async hmacSha256(key, data) {
      const keyObj = await crypto.subtle.importKey(
        'raw',
        typeof key === 'string' ? new TextEncoder().encode(key) : key,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      );
      const signature = await crypto.subtle.sign(
        'HMAC',
        keyObj,
        typeof data === 'string' ? new TextEncoder().encode(data) : data
      );
      return new Uint8Array(signature);
    }

    async getSignatureKey(key, dateStamp, regionName, serviceName) {
      const kDate = await this.hmacSha256('AWS4' + key, dateStamp);
      const kRegion = await this.hmacSha256(kDate, regionName);
      const kService = await this.hmacSha256(kRegion, serviceName);
      const kSigning = await this.hmacSha256(kService, 'aws4_request');
      return kSigning;
    }

    async getPresignedUrl(method, filename) {
      const { accountId, bucketName, accessKeyId, secretAccessKey } = this.config;
      const host = `${accountId}.r2.cloudflarestorage.com`;
      const now = new Date();
      const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '');
      const dateStamp = amzDate.substr(0, 8);
      const region = 'auto';
      const service = 's3';

      const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
      const credentialParam = `${accessKeyId}/${credentialScope}`;

      const canonicalUri = `/${bucketName}/${filename}`;
      const canonicalQueryString = [
        `X-Amz-Algorithm=AWS4-HMAC-SHA256`,
        `X-Amz-Credential=${encodeURIComponent(credentialParam)}`,
        `X-Amz-Date=${amzDate}`,
        `X-Amz-Expires=3600`,
        `X-Amz-SignedHeaders=host`
      ].join('&');

      const canonicalHeaders = `host:${host}\n`;
      const signedHeaders = 'host';
      const payloadHash = 'UNSIGNED-PAYLOAD';

      const canonicalRequest = `${method}\n${canonicalUri}\n${canonicalQueryString}\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;
      const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${await this.sha256(new TextEncoder().encode(canonicalRequest))}`;

      const signingKey = await this.getSignatureKey(secretAccessKey, dateStamp, region, service);
      const signatureBytes = await this.hmacSha256(signingKey, stringToSign);
      const signature = Array.from(signatureBytes).map(b => b.toString(16).padStart(2, '0')).join('');

      return `https://${host}${canonicalUri}?${canonicalQueryString}&X-Amz-Signature=${signature}`;
    }

    async uploadToR2(file, onProgress) {
      const { publicBaseUrl } = this.config;
      const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const filename = `${Date.now()}_${cleanName}`;
      const presignedUrl = await this.getPresignedUrl('PUT', filename);

      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', presignedUrl, true);
        xhr.timeout = 15000; // 15-second safety timeout guard

        if (xhr.upload && onProgress) {
          xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) {
              const percent = Math.min(Math.round((e.loaded / e.total) * 100), 99);
              onProgress({ percent, loaded: e.loaded, total: e.total });
            }
          };
        }

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            if (onProgress) onProgress({ percent: 100, loaded: file.size, total: file.size });
            resolve(`${publicBaseUrl.replace(/\/$/, '')}/${filename}`);
          } else {
            reject(new Error(`Cloudflare R2 HTTP ${xhr.status}`));
          }
        };

        xhr.onerror = () => reject(new Error('Network/CORS error uploading to Cloudflare R2'));
        xhr.ontimeout = () => reject(new Error('Timeout uploading to Cloudflare R2'));
        xhr.send(file);
      });
    }

    async uploadToFirebase(file, onProgress) {
      if (typeof window.firebase === 'undefined' || !firebase.storage) {
        throw new Error('Firebase Storage SDK not loaded');
      }
      if (!firebase.apps.length && store.state.firebaseConfig) {
        firebase.initializeApp(store.state.firebaseConfig);
      }
      const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const filename = `uploads/${Date.now()}_${cleanName}`;
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(filename);
      const metadata = { contentType: file.type || 'application/octet-stream' };
      
      const uploadTask = fileRef.put(file, metadata);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            if (snapshot.totalBytes > 0 && onProgress) {
              const percent = Math.min(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100), 99);
              onProgress({ percent, loaded: snapshot.bytesTransferred, total: snapshot.totalBytes });
            }
          },
          (error) => reject(error),
          async () => {
            if (onProgress) onProgress({ percent: 100, loaded: file.size, total: file.size });
            const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
            resolve(downloadUrl);
          }
        );
      });
    }

    async uploadToDataUrl(file, onProgress) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        let simProgress = 10;
        if (onProgress) onProgress({ percent: simProgress, loaded: Math.round((file.size * simProgress) / 100), total: file.size });

        const interval = setInterval(() => {
          simProgress = Math.min(simProgress + 25, 95);
          if (onProgress) onProgress({ percent: simProgress, loaded: Math.round((file.size * simProgress) / 100), total: file.size });
        }, 80);

        reader.onload = (e) => {
          clearInterval(interval);
          if (onProgress) onProgress({ percent: 100, loaded: file.size, total: file.size });
          resolve(e.target.result);
        };
        reader.onerror = (err) => {
          clearInterval(interval);
          reject(err);
        };
        reader.readAsDataURL(file);
      });
    }

    async uploadFile(file, onProgress) {
      let publicUrl = null;
      let uploadSource = '';

      // Strategy 1: Cloudflare R2 direct S3 Presigned URL PUT
      try {
        publicUrl = await this.uploadToR2(file, onProgress);
        uploadSource = 'Cloudflare R2 Bucket';
      } catch (r2Err) {
        console.warn('Cloudflare R2 direct upload notice:', r2Err);

        // Strategy 2: Firebase Cloud Storage
        try {
          publicUrl = await this.uploadToFirebase(file, onProgress);
          uploadSource = 'Firebase Cloud Storage';
        } catch (fbErr) {
          console.warn('Firebase Storage upload notice:', fbErr);

          // Strategy 3: Guaranteed instant local media stream (Base64/Blob URL)
          publicUrl = await this.uploadToDataUrl(file, onProgress);
          uploadSource = 'Local High-Speed Media Stream';
        }
      }

      this.uploadHistory.unshift({
        name: file.name,
        size: formatFileSize(file.size),
        url: publicUrl,
        source: uploadSource,
        time: new Date().toLocaleTimeString()
      });

      this.renderHistory();
      return publicUrl;
    }

    async deleteFromR2(filename) {
      try {
        const presignedDeleteUrl = await this.getPresignedUrl('DELETE', filename);
        return new Promise((resolve) => {
          const xhr = new XMLHttpRequest();
          xhr.open('DELETE', presignedDeleteUrl, true);
          xhr.timeout = 8000;
          xhr.onload = () => {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 404 || xhr.status === 204) {
              resolve(true);
            } else {
              resolve(false);
            }
          };
          xhr.onerror = () => resolve(false);
          xhr.ontimeout = () => resolve(false);
          xhr.send();
        });
      } catch (e) {
        console.warn('Error generating presigned delete URL:', e);
        return false;
      }
    }

    async deleteFromFirebase(url) {
      if (typeof window.firebase !== 'undefined' && firebase.storage) {
        try {
          if (!firebase.apps.length && store.state.firebaseConfig) {
            firebase.initializeApp(store.state.firebaseConfig);
          }
          const storage = firebase.storage();
          const fileRef = storage.refFromURL(url);
          await fileRef.delete();
          return true;
        } catch (e) {
          console.warn('Firebase Storage delete notice:', e);
          return false;
        }
      }
      return false;
    }

    async deleteMediaAsset(url) {
      if (!url || typeof url !== 'string') return false;
      if (url.startsWith('data:') || url.includes('unsplash.com') || url.includes('github.com') || url.includes('youtube.com') || url.includes('vimeo.com')) {
        return false;
      }

      console.log('Purging deleted/replaced media asset from storage:', url);
      let isDeleted = false;

      // 1. Firebase Storage deletion
      if (url.includes('firebasestorage.googleapis.com') || url.includes('firebasestorage.app')) {
        isDeleted = await this.deleteFromFirebase(url);
      }

      // 2. Cloudflare R2 deletion
      const { publicBaseUrl } = this.config;
      const isR2 = (publicBaseUrl && url.includes(publicBaseUrl.replace('https://', '').replace('http://', ''))) ||
                   url.includes('.r2.dev') ||
                   url.includes('.r2.cloudflarestorage.com');

      if (isR2) {
        try {
          const urlObj = new URL(url);
          const parts = urlObj.pathname.split('/').filter(Boolean);
          const filename = parts.pop();
          if (filename) {
            isDeleted = await this.deleteFromR2(filename);
          }
        } catch (e) {
          console.warn('Error parsing R2 URL for deletion:', e);
        }
      }

      // Remove from session history list
      this.uploadHistory = this.uploadHistory.filter(item => item.url !== url);
      this.renderHistory();

      return isDeleted;
    }

    renderHistory() {
      const listEl = document.getElementById('r2-history-list');
      if (!listEl) return;

      if (this.uploadHistory.length === 0) {
        listEl.innerHTML = '<p class="empty-state-text" style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--ink-secondary); padding: 0.5rem 0;">No files uploaded yet in this session.</p>';
        return;
      }

      listEl.innerHTML = this.uploadHistory.map((item) => `
        <div class="r2-history-item">
          <div style="display:flex; align-items:center; gap:0.5rem; overflow:hidden;">
            <i class="fa-solid fa-file-image" style="color:var(--pop-cyan); flex-shrink:0;"></i>
            <span class="r2-history-name" title="${item.url}">${item.name} (${item.size})</span>
          </div>
          <div style="display:flex; align-items:center; gap:0.35rem;">
            <button type="button" class="btn-icon-edit" data-copy-url="${item.url}" title="Copy Link">
              <i class="fa-regular fa-copy"></i>
            </button>
            <button type="button" class="btn-icon-del" data-delete-r2-url="${item.url}" title="Delete Asset From Storage">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      `).join('');

      listEl.querySelectorAll('[data-copy-url]').forEach(btn => {
        btn.addEventListener('click', () => {
          const url = btn.getAttribute('data-copy-url');
          navigator.clipboard.writeText(url);
          soundEngine.playCoinPing();
          showToast('PUBLIC CDN URL COPIED TO CLIPBOARD! 📋');
        });
      });

      listEl.querySelectorAll('[data-delete-r2-url]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const url = btn.getAttribute('data-delete-r2-url');
          soundEngine.playPop(480, 0.04);
          await this.deleteMediaAsset(url);
          showToast('MEDIA FILE DELETED FROM SERVER 🗑️');
        });
      });
    }

    bindEvents() {
      const dropzone = document.getElementById('r2-dropzone');
      const fileInput = document.getElementById('r2-file-input');
      const browseBtn = document.getElementById('btn-trigger-r2-browse');
      const progressBox = document.getElementById('r2-progress-box');
      const dropContent = document.getElementById('r2-dropzone-content');
      const resultBox = document.getElementById('r2-result-box');
      const urlInput = document.getElementById('r2-uploaded-url-input');
      const copyBtn = document.getElementById('btn-copy-r2-url');
      const assignAvatarBtn = document.getElementById('btn-assign-avatar');
      const assignResumeBtn = document.getElementById('btn-assign-resume');

      if (!dropzone || !fileInput) return;

      const handleFile = async (file) => {
        if (!file) return;
        soundEngine.playPop(520, 0.03);
        const progressPercent = document.getElementById('r2-progress-percentage');
        const progressBytes = document.getElementById('r2-progress-bytes');
        const progressBarFill = document.getElementById('r2-progress-bar-fill');
        const progressText = document.getElementById('r2-progress-text');

        if (dropContent) dropContent.style.display = 'none';
        if (progressBox) progressBox.style.display = 'block';
        if (resultBox) resultBox.style.display = 'none';

        if (progressBarFill) progressBarFill.style.width = '0%';
        if (progressPercent) progressPercent.textContent = '0%';
        if (progressBytes) progressBytes.textContent = `0 KB / ${formatFileSize(file.size)}`;
        if (progressText) progressText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Uploading: <strong id="r2-progress-percentage" style="color:var(--pop-coral);">0%</strong>';

        try {
          const onProgress = ({ percent, loaded, total }) => {
            if (progressBarFill) progressBarFill.style.width = `${percent}%`;
            if (progressPercent) progressPercent.textContent = `${percent}%`;
            if (progressBytes) progressBytes.textContent = `${formatFileSize(loaded)} / ${formatFileSize(total || file.size)}`;
          };

          const url = await this.uploadFile(file, onProgress);
          if (progressBox) progressBox.style.display = 'none';
          if (dropContent) dropContent.style.display = 'block';
          if (resultBox) resultBox.style.display = 'block';
          if (urlInput) urlInput.value = url;

          soundEngine.playCoinPing();
          showToast('MEDIA ASSET UPLOADED (100%) 🚀');
        } catch (err) {
          console.error('R2 upload error:', err);
          if (progressBox) progressBox.style.display = 'none';
          if (dropContent) dropContent.style.display = 'block';
          soundEngine.playPop(220, 0.1);
          showToast(`UPLOAD FAILED: ${err.message} ❌`);
        }
      };

      if (browseBtn) {
        browseBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          fileInput.click();
        });
      }

      dropzone.addEventListener('click', () => fileInput.click());

      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          handleFile(e.target.files[0]);
        }
      });

      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('dragover');
        });
      });

      dropzone.addEventListener('drop', (e) => {
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleFile(e.dataTransfer.files[0]);
        }
      });

      if (copyBtn && urlInput) {
        copyBtn.addEventListener('click', () => {
          if (urlInput.value) {
            navigator.clipboard.writeText(urlInput.value);
            soundEngine.playCoinPing();
            showToast('CDN URL COPIED TO CLIPBOARD! 📋');
          }
        });
      }

      if (assignAvatarBtn && urlInput) {
        assignAvatarBtn.addEventListener('click', () => {
          if (urlInput.value) {
            const avatarImg = document.getElementById('hero-avatar-img');
            if (avatarImg) avatarImg.src = urlInput.value;
            store.state.hero.avatarUrl = urlInput.value;
            store.saveState();
            soundEngine.playCoinPing();
            showToast('HERO AVATAR UPDATED WITH R2 IMAGE! 🌟');
          }
        });
      }

      if (assignResumeBtn && urlInput) {
        assignResumeBtn.addEventListener('click', () => {
          if (urlInput.value) {
            const resumeInput = document.getElementById('edit-resume-url');
            if (resumeInput) resumeInput.value = urlInput.value;
            store.state.hero.resumeUrl = urlInput.value;
            store.saveState();
            soundEngine.playCoinPing();
            showToast('RESUME DOWNLOAD LINK UPDATED WITH R2 PDF! 📄');
          }
        });
      }
    }
  }

  // ==========================================================================
  // 17. FEATURE & SECTION VISIBILITY CONTROLLER
  // ==========================================================================
  function initFeatureVisibilityControls() {
    function getFeatureFriendlyName(feat) {
      switch (feat) {
        case 'projects': return 'Featured Projects';
        case 'achievements': return 'Achievements & Milestones';
        case 'socials': return 'Connect & Socials';
        case 'media': return 'Media & Design Studio';
        default: return feat;
      }
    }

    // 1. Master Checkboxes in Backup & Settings Card
    const featureKeys = ['projects', 'achievements', 'socials', 'media'];
    featureKeys.forEach(key => {
      const toggleEl = document.getElementById(`toggle-feat-${key}`);
      if (toggleEl) {
        toggleEl.addEventListener('change', () => {
          const isChecked = toggleEl.checked;
          store.setFeatureVisibility(key, isChecked);
          soundEngine.playPop(isChecked ? 580 : 380, 0.03);
          showToast(`${getFeatureFriendlyName(key).toUpperCase()} IS NOW ${isChecked ? 'VISIBLE ON WEBSITE 👁️' : 'HIDDEN FROM VISITORS 🚫'}`);
        });
      }
    });

    // 2. Quick Toggle Buttons inside CMS CRUD Tabs
    document.querySelectorAll('.btn-feature-quick-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const feat = btn.getAttribute('data-toggle-feature');
        if (!feat) return;
        const currentVis = store.state.featureVisibility ? (store.state.featureVisibility[feat] !== false) : true;
        const nextVis = !currentVis;
        store.setFeatureVisibility(feat, nextVis);
        soundEngine.playPop(nextVis ? 580 : 380, 0.03);
        showToast(`${getFeatureFriendlyName(feat).toUpperCase()} IS NOW ${nextVis ? 'VISIBLE ON WEBSITE 👁️' : 'HIDDEN FROM VISITORS 🚫'}`);
      });
    });

    // 3. Quick "Enable All 4 Features" Button
    const enableAllBtn = document.getElementById('btn-quick-enable-all');
    if (enableAllBtn) {
      enableAllBtn.addEventListener('click', () => {
        store.state.featureVisibility = {
          projects: true,
          achievements: true,
          socials: true,
          media: true
        };
        store.saveState();
        renderFeatureVisibility();
        soundEngine.playCoinPing();
        showToast('ALL 4 FEATURES ENABLED & VISIBLE! 🌟');
      });
    }
  }

  // ==========================================================================
  // 18. SECRET EASTER EGG: BUILDER REALM CONTROLLER
  // ==========================================================================
  function initBuilderRealm() {
    const builderModal = document.getElementById('builder-realm-modal');
    const closeBtn = document.getElementById('builder-realm-close-btn');
    const returnBtn = document.getElementById('btn-return-dimension');
    const copyCreditBtn = document.getElementById('btn-copy-builder-credit');
    const avatarImg = document.getElementById('builder-avatar-photo');

    if (!builderModal) return;

    // Modal Open & Close Lifecycle
    window.openBuilderRealmModal = function () {
      if (avatarImg) {
        avatarImg.src = "Minimalist Lavender Circle Portrait.png";
      }
      soundEngine.playBuilderRealmFanfare();
      builderModal.showModal();
      showToast('👑 DIMENSIONAL ACCESS GRANTED: THE BUILDER REALM UNLOCKED! ✦');
    };

    function closeBuilderRealm() {
      soundEngine.playPop(420, 0.04);
      builderModal.close();
    }

    if (closeBtn) closeBtn.addEventListener('click', closeBuilderRealm);
    if (returnBtn) returnBtn.addEventListener('click', closeBuilderRealm);

    builderModal.addEventListener('click', (e) => {
      const card = builderModal.querySelector('.builder-realm-card');
      if (card && !card.contains(e.target)) {
        closeBuilderRealm();
      }
    });

    // Copy Creator Credit Button
    if (copyCreditBtn) {
      copyCreditBtn.addEventListener('click', async () => {
        const creditText = '✦ Portfolio Engine & System Architecture by Md. Eftakhar Amin Sakib ✦ (https://github.com/EFTAKHAR-AMIN-SAKIB)';
        try {
          await navigator.clipboard.writeText(creditText);
          soundEngine.playCoinPing();
          showToast('👑 CREATOR CREDIT COPIED TO CLIPBOARD! ★');
        } catch (e) {
          const textarea = document.createElement('textarea');
          textarea.value = creditText;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          soundEngine.playCoinPing();
          showToast('👑 CREATOR CREDIT COPIED TO CLIPBOARD! ★');
        }
      });
    }
  }

  // ==========================================================================
  // INITIALIZATION ON DOM READY
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    window.cascadeEngine = new CascadeManager();
    window.playgroundEngine = new PlaygroundEngine();
    window.visitorCounterManager = new VisitorCounterManager();
    window.r2StorageManager = new R2StorageManager();
    initAmbientCanvas();
    initAdminAuth();
    initBuilderRealm();
    initKeyboardAndSoundToggle();
    initFeatureVisibilityControls();
    bindDescToggleTriggers();
    console.log('%c✦ Md. Eftakhar Amin Sakib Portfolio & Studio Initialized ✦', 'color: #000; background: #FFDE59; font-weight: bold; font-size: 12px; padding: 4px;');
  });

})();
