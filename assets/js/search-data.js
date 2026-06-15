// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-modeling-and-output-feedback-control-design-of-a-corexy-system-with-tua-a-tamba-presented-at-ieee-fortei-icee-2024",
          title: '📄 Modeling and Output Feedback Control Design of a CoreXY System with Tua...',
          description: "",
          section: "News",},{id: "news-distributed-perception-aware-safe-leader-follower-system-via-control-barrier-methods-with-tony-tran-miao-pan-lei-fan-qin-lin-and-bin-hu-presented-at-ieee-icra-2025",
          title: '🤖 Distributed Perception Aware Safe Leader Follower System via Control Barrier Methods with...',
          description: "",
          section: "News",},{id: "news-toward-embedded-llm-guided-navigation-and-object-detection-for-aerial-robots-with-bin-hu-presented-at-icra-2025-late-breaking-session",
          title: '🛸 Toward Embedded LLM-Guided Navigation and Object Detection for Aerial Robots with Bin...',
          description: "",
          section: "News",},{id: "news-a-high-fidelity-3d-simulation-environment-for-multi-aircraft-operations-with-timothy-bautista-fengyu-wang-and-colleagues-accepted-at-aiaa-scitech-2026",
          title: '📄 A High-Fidelity 3D Simulation Environment for Multi-Aircraft Operations with Timothy Bautista, Fengyu...',
          description: "",
          section: "News",},{id: "news-️-a-human-interactive-auto-planner-for-scalable-m-n-operation-simulation-with-bin-hu-presented-at-nasa-nra-year-2-rice-university-university-of-houston-amp-amp-baylor-university",
          title: '🛩️ A Human-Interactive Auto Planner for Scalable m:N Operation Simulation with Bin Hu...',
          description: "",
          section: "News",},{id: "news-new-preprint-formation-aware-adaptive-conformalized-perception-for-safe-leader-follower-multi-robot-systems-with-bin-hu-is-now-on-arxiv",
          title: '📄 New preprint: Formation-Aware Adaptive Conformalized Perception for Safe Leader-Follower Multi-Robot Systems with...',
          description: "",
          section: "News",},{id: "news-new-preprint-xiyolo-energy-aware-object-detection-via-iterative-architecture-search-and-scaling-with-tony-tran-and-bin-hu-is-now-on-arxiv",
          title: '📄 New preprint: XiYOLO: Energy-Aware Object Detection via Iterative Architecture Search and Scaling...',
          description: "",
          section: "News",},{id: "news-new-preprint-distributed-3d-leader-follower-formation-control-with-field-of-view-safety-via-control-barrier-functions-with-immanuel-r-santjoko-miao-pan-and-bin-hu-is-now-on-arxiv",
          title: '📄 New preprint: Distributed 3D Leader-Follower Formation Control with Field-of-View Safety via Control...',
          description: "",
          section: "News",},{id: "projects-perception-aware-leader-follower-control",
          title: 'Perception-Aware Leader-Follower Control',
          description: "Distributed Perception Aware Safe Leader Follower System via Control Barrier Methods",
          section: "Projects",handler: () => {
              window.location.href = "/projects/icra2025_cbf/";
            },},{id: "projects-llm-guided-aerial-navigation",
          title: 'LLM-Guided Aerial Navigation',
          description: "Toward Embedded LLM-Guided Navigation and Object Detection for Aerial Robots",
          section: "Projects",handler: () => {
              window.location.href = "/projects/icra2025_llm/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%72%73%75%67%61%6E%64@%63%6F%75%67%61%72%6E%65%74.%75%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RichieRyu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/richie-ryulie-585609237", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=_Af9568AAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
