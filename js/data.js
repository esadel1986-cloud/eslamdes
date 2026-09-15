// data.js - Bilingual content and portfolio configuration
const portfolioData = {
  ar: {
    meta: {
      title: "إسلام عادل | مطور واجهات ومصمم ويب",
      role: "مطور واجهات ومصمم ويب وتطبيقات",
      tagline: "أحول الأفكار إلى تجارب ويب تفاعلية ممتعة وعالية الأداء"
    },
    nav: {
      brand: "إسلام عادل",
      home: "الرئيسية",
      about: "من أنا",
      skills: "المهارات",
      services: "خدماتي",
      projects: "أعمالي",
      contact: "تواصل معي",
      cvBtn: "السيرة الذاتية"
    },
    hero: {
      greeting: "أهلاً بك، أنا",
      name: "إسلام عادل",
      roles: ["مطور واجهات ومواقع ويب", "مصمم واجهات المستخدم UI/UX", "مطور حلول برمجية تفاعلية"],
      description: "شغوف ببناء مواقع وتطبيقات ويب عصرية، سريعة، وسهلة الاستخدام تركز على أدق التفاصيل وتمنح المستخدمين تجربة استثنائية.",
      hireMe: "تواصل معي الآن",
      viewWork: "استكشف أعمالي",
      experienceYears: "+3",
      experienceText: "سنوات خبرة في تطوير الويب"
    },
    about: {
      badge: "نبذة عني",
      title: "من هو إسلام عادل؟",
      p1: "أنا مطور واجهات أمامية ومصمم ويب أمتلك شغفاً حقيقياً بتحويل التصاميم الرقمية المعقدة إلى كود برمجي نظيف وسلس ومتوافق مع جميع الشاشات والأجهزة.",
      p2: "أركز دائماً على تقديم حلول تجمع بين جمالية التصميم (UI) وتجربة المستخدم المريحة (UX) مع ضمان سرعة التحميل وتوافق معايير محركات البحث (SEO).",
      stats: [
        { count: "+25", label: "مشروع منجز بنجاح" },
        { count: "+15", label: "عميل سعيد ومستمر" },
        { count: "%100", label: "التزام بالمواعيد والجودة" },
        { count: "24/7", label: "دعم واستشارات فنية" }
      ],
      infoList: [
        { label: "الاسم:", val: "إسلام عادل" },
        { label: "المجال:", val: "تطوير وبرمجة المواقع" },
        { label: "الحالة:", val: "متاح للمشاريع الحرة والتوظيف" },
        { label: "الموقع:", val: "مصر / متاح للعمل عن بعد عالمياً" }
      ]
    },
    skills: {
      badge: "قدراتي وخبراتي",
      title: "المهارات والتقنيات التي أتقنها",
      frontendTitle: "تطوير الواجهات (Frontend)",
      toolsTitle: "الأدوات وبيئات العمل (Tools & Workflow)",
      softSkillsTitle: "المهارات الشخصية (Soft Skills)"
    },
    services: {
      badge: "ماذا أقدم؟",
      title: "خدمات مصممة لنجاح مشروعك",
      items: [
        {
          icon: "fa-code",
          title: "تطوير مواقع الويب المخصصة",
          desc: "بناء مواقع سريعة، آمنة ومصممة خصيصاً لتناسب احتياجات مشروعك وأعمالك بأحدث معايير الأمان والأداء."
        },
        {
          icon: "fa-mobile-screen-button",
          title: "تصميم متجاوب لجميع الشاشات",
          desc: "ضمان ظهور موقعك بأفضل شكل على شاشات الجوال، الأجهزة اللوحية، والشاشات الكبيرة بدون أي أخطاء."
        },
        {
          icon: "fa-wand-magic-sparkles",
          title: "تصميم واجهات المستخدم (UI/UX)",
          desc: "تصميم تجارب تفاعلية ومريحة للمستخدم تسهل التنقل وتزيد من معدلات التحويل ورضا الزوار."
        },
        {
          icon: "fa-gauge-high",
          title: "تسريع المواقع وتحسين SEO",
          desc: "تحسين سرعة استجابة الموقع، تقليل حجم الملفات، وتهيئة الصفحات لمحركات البحث للظهور في النتائج الأولى."
        },
        {
          icon: "fa-arrows-rotate",
          title: "صيانة وتحديث المواقع القائمة",
          desc: "إصلاح الأخطاء البرمجية، تحديث التصاميم القديمة، وإضافة ميزات جديدة للمواقع القائمة بسهولة."
        },
        {
          icon: "fa-headset",
          title: "استشارات تقنية ودعم فني",
          desc: "تقديم النصيحة التقنية الأفضل لاختيار الأدوات المناسبة لمشروعك مع دعم فني مستمر."
        }
      ]
    },
    projects: {
      badge: "معرض المشاريع",
      title: "أحدث الأعمال والمشاريع المنجزة",
      filters: {
        all: "الكل",
        web: "مواقع ويب",
        app: "تطبيقات ويب",
        ui: "تصميم واجهات"
      },
      items: [
        {
          id: 1,
          category: "web",
          title: "منصة تجارة إلكترونية عصرية",
          desc: "متجر إلكتروني متكامل يحتوي على سلة مشتريات تفاعلية، وتصفية للمنتجات، وبوابة دفع تجريبية مع تصميم جذاب وسريع.",
          image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80",
          tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
          demoUrl: "#",
          codeUrl: "#"
        },
        {
          id: 2,
          category: "app",
          title: "لوحة تحكم إحصائية تفاعلية",
          desc: "داشبورد احترافي لإدارة البيانات ورسم المخططات البيانية التفاعلية مع دعم الوضعين المظلم والفاتح وتصدير التقارير.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
          tags: ["JavaScript", "Charts", "Dashboard", "CSS Grid"],
          demoUrl: "#",
          codeUrl: "#"
        },
        {
          id: 3,
          category: "web",
          title: "موقع تعريفي لشركة تقنية",
          desc: "صفحة هبوط احترافية تمتاز بحركات بصرية ناعمة وسرعة تحميل فائقة ومتوافقة بنسبة 100% مع معايير السيو.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
          tags: ["HTML5", "CSS Animation", "UI/UX"],
          demoUrl: "#",
          codeUrl: "#"
        },
        {
          id: 4,
          category: "app",
          title: "تطبيق إدارة المهام والمشاريع",
          desc: "تطبيق ويب لتنظيم المهام اليومية مع إمكانية السحب والإفلات وتخزين البيانات محلياً وتنبيهات مواعيد التسليم.",
          image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80",
          tags: ["JavaScript", "LocalStorage", "Drag & Drop"],
          demoUrl: "#",
          codeUrl: "#"
        },
        {
          id: 5,
          category: "ui",
          title: "واجهة حجز فنادق ورحلات سياحية",
          desc: "تصميم واجهة مستخدم مبهجة مع نظام فلترة وبحث متقدم للرحلات والفنادق مع تجربة مستخدم سلسة للغاية.",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80",
          tags: ["UI/UX Design", "Figma", "CSS Modules"],
          demoUrl: "#",
          codeUrl: "#"
        },
        {
          id: 6,
          category: "web",
          title: "مدونة محتوى تقني متطورة",
          desc: "موقع مدونة يتيح قراءة المقالات مع دعم خاصية القراءة الليلية، والبحث اللحظي، ومشاركة التدوينات بسهولة.",
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
          tags: ["HTML5", "CSS3", "JavaScript"],
          demoUrl: "#",
          codeUrl: "#"
        }
      ],
      viewProject: "معاينة حية",
      viewCode: "الكود المصدري"
    },
    contact: {
      badge: "لنبدأ العمل معاً",
      title: "تواصل معي لمناقشة مشروعك القادم",
      subtitle: "هل لديك فكرة مشروع أو ترغب في تطوير موقعك الحالي؟ يسعدني التواصل معك في أي وقت!",
      infoTitle: "معلومات التواصل المباشر",
      emailLabel: "البريد الإلكتروني",
      emailVal: "eslam.adel.dev@gmail.com",
      phoneLabel: "الهاتف / واتساب",
      phoneVal: "+20 100 000 0000",
      locationLabel: "الموقع الجغرافي",
      locationVal: "مصر (متاح للعمل عن بُعد)",
      socialTitle: "تابعني على الشبكات",
      formName: "الاسم الكريم",
      formEmail: "البريد الإلكتروني",
      formSubject: "موضوع الرسالة",
      formMessage: "تفاصيل مشروعك أو رسالتك...",
      sendBtn: "إرسال الرسالة الآن",
      successMsg: "شكراً لك! تم إرسال رسالتك بنجاح وسأتواصل معك بأسرع وقت."
    },
    footer: {
      rights: "جميع الحقوق محفوظة © إسلام عادل",
      madeWith: "صُمم ونُفذ بإتقان وشغف عاليين"
    }
  },

  en: {
    meta: {
      title: "Eslam Adel | Frontend Developer & Web Designer",
      role: "Frontend Developer & Web/UI Specialist",
      tagline: "Transforming creative ideas into fast, responsive, and delightful web experiences."
    },
    nav: {
      brand: "Eslam Adel",
      home: "Home",
      about: "About",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      cvBtn: "Resume / CV"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Eslam Adel",
      roles: ["Frontend Web Developer", "UI/UX Designer", "Interactive Web Specialist"],
      description: "Passionate about crafting modern, ultra-fast, and user-friendly web applications with meticulous attention to detail and outstanding user experience.",
      hireMe: "Get in Touch",
      viewWork: "Explore My Work",
      experienceYears: "+3",
      experienceText: "Years of Professional Experience"
    },
    about: {
      badge: "About Me",
      title: "Who is Eslam Adel?",
      p1: "I am a dedicated Frontend Developer & Web Designer passionate about transforming complex designs into clean, performant code that works flawlessly across all devices and screen sizes.",
      p2: "My approach combines aesthetic user interfaces (UI) with effortless user experiences (UX), ensuring blazing-fast load speeds, accessibility, and search engine optimization (SEO).",
      stats: [
        { count: "+25", label: "Completed Projects" },
        { count: "+15", label: "Satisfied Clients" },
        { count: "100%", label: "Commitment & Quality" },
        { count: "24/7", label: "Tech Support & Advice" }
      ],
      infoList: [
        { label: "Name:", val: "Eslam Adel" },
        { label: "Specialty:", val: "Web Development & Design" },
        { label: "Status:", val: "Available for Freelance & Full-time" },
        { label: "Location:", val: "Egypt / Available Globally Remote" }
      ]
    },
    skills: {
      badge: "My Abilities",
      title: "Skills & Technologies I Master",
      frontendTitle: "Frontend Technologies",
      toolsTitle: "Tools & Development Workflow",
      softSkillsTitle: "Key Soft Skills"
    },
    services: {
      badge: "What I Offer",
      title: "Tailored Services for Your Success",
      items: [
        {
          icon: "fa-code",
          title: "Custom Web Development",
          desc: "Building fast, secure, and bespoke web solutions tailored to meet your business needs using modern best practices."
        },
        {
          icon: "fa-mobile-screen-button",
          title: "Fully Responsive Web Design",
          desc: "Ensuring your website adapts perfectly to mobile, tablet, and desktop screens with seamless layout flow."
        },
        {
          icon: "fa-wand-magic-sparkles",
          title: "UI/UX Interface Design",
          desc: "Crafting intuitive and engaging user journeys that simplify navigation, enhance retention, and boost conversions."
        },
        {
          icon: "fa-gauge-high",
          title: "Performance Tuning & SEO",
          desc: "Optimizing loading times, minimizing asset sizes, and aligning page structures with core search engine standards."
        },
        {
          icon: "fa-arrows-rotate",
          title: "Website Maintenance & Upgrades",
          desc: "Debugging issues, modernizing legacy layouts, and introducing new interactive features reliably."
        },
        {
          icon: "fa-headset",
          title: "Technical Consultation",
          desc: "Providing insightful guidance to pick the right technologies and architectures for your digital product."
        }
      ]
    },
    projects: {
      badge: "Portfolio Showcase",
      title: "Featured Works & Recent Projects",
      filters: {
        all: "All",
        web: "Websites",
        app: "Web Apps",
        ui: "UI/UX"
      },
      items: [
        {
          id: 1,
          category: "web",
          title: "Modern E-Commerce Platform",
          desc: "A feature-rich online shopping store featuring an interactive shopping cart, product filtering, and a sleek checkout flow.",
          image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80",
          tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
          demoUrl: "#",
          codeUrl: "#"
        },
        {
          id: 2,
          category: "app",
          title: "Interactive Analytics Dashboard",
          desc: "A clean dashboard for tracking live data, dynamic charts, dark/light themes, and automated report export tools.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
          tags: ["JavaScript", "Charts", "Dashboard", "CSS Grid"],
          demoUrl: "#",
          codeUrl: "#"
        },
        {
          id: 3,
          category: "web",
          title: "Tech Startup Landing Page",
          desc: "An engaging corporate landing page with smooth micro-animations, fast loading, and strict SEO compliance.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
          tags: ["HTML5", "CSS Animation", "UI/UX"],
          demoUrl: "#",
          codeUrl: "#"
        },
        {
          id: 4,
          category: "app",
          title: "Task & Project Management Tool",
          desc: "A web app to organize daily productivity with drag-and-drop boards, local storage persistence, and deadline alerts.",
          image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80",
          tags: ["JavaScript", "LocalStorage", "Drag & Drop"],
          demoUrl: "#",
          codeUrl: "#"
        },
        {
          id: 5,
          category: "ui",
          title: "Hotel & Flight Booking Interface",
          desc: "An intuitive travel booking UI featuring smart filtering, interactive date pickers, and pleasant visual feedback.",
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80",
          tags: ["UI/UX Design", "Figma", "CSS Modules"],
          demoUrl: "#",
          codeUrl: "#"
        },
        {
          id: 6,
          category: "web",
          title: "Modern Tech & Design Blog",
          desc: "A responsive content platform with instant keyword search, reading time indicators, and social sharing integration.",
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
          tags: ["HTML5", "CSS3", "JavaScript"],
          demoUrl: "#",
          codeUrl: "#"
        }
      ],
      viewProject: "Live Demo",
      viewCode: "Source Code"
    },
    contact: {
      badge: "Let's Collaborate",
      title: "Have a Project in Mind? Let's Talk!",
      subtitle: "Got an exciting project or want to level up your existing digital presence? I am always ready to help!",
      infoTitle: "Direct Contact Information",
      emailLabel: "Email Address",
      emailVal: "eslam.adel.dev@gmail.com",
      phoneLabel: "Phone / WhatsApp",
      phoneVal: "+20 100 000 0000",
      locationLabel: "Location",
      locationVal: "Egypt (Available Globally Remote)",
      socialTitle: "Connect on Social Media",
      formName: "Your Full Name",
      formEmail: "Your Email Address",
      formSubject: "Subject",
      formMessage: "Tell me about your project...",
      sendBtn: "Send Message Now",
      successMsg: "Thank you! Your message was delivered successfully. I'll get back to you shortly."
    },
    footer: {
      rights: "All Rights Reserved © Eslam Adel",
      madeWith: "Crafted with passion & precision"
    }
  },

  skillsData: [
    {
      category: "frontend",
      items: [
        { name: "HTML5 / Semantic Web", level: 95, icon: "fa-brands fa-html5", color: "#e34f26" },
        { name: "CSS3 / Modern Layouts (Grid/Flex)", level: 92, icon: "fa-brands fa-css3-alt", color: "#1572b6" },
        { name: "JavaScript (ES6+ / Async / DOM)", level: 88, icon: "fa-brands fa-js", color: "#f7df1e" },
        { name: "Responsive & Mobile-First Design", level: 95, icon: "fa-solid fa-mobile-screen", color: "#38bdf8" },
        { name: "Tailwind CSS / Bootstrap", level: 90, icon: "fa-brands fa-bootstrap", color: "#7952b3" },
        { name: "Web Performance & SEO", level: 85, icon: "fa-solid fa-bolt", color: "#f59e0b" }
      ]
    },
    {
      category: "tools",
      items: [
        { name: "Git & GitHub Version Control", level: 90, icon: "fa-brands fa-git-alt", color: "#f05032" },
        { name: "VS Code & Developer DevTools", level: 95, icon: "fa-solid fa-code", color: "#007acc" },
        { name: "Figma / UI Prototyping", level: 85, icon: "fa-brands fa-figma", color: "#f24e1e" },
        { name: "NPM / Webpack / Vite", level: 80, icon: "fa-brands fa-npm", color: "#cb3837" }
      ]
    },
    {
      category: "soft",
      items: [
        { name: "حل المشكلات والتفكير الإبداعي / Problem Solving", level: 92, icon: "fa-solid fa-lightbulb", color: "#10b981" },
        { name: "إدارة الوقت والالتزام بالمواعيد / Time Management", level: 96, icon: "fa-solid fa-clock", color: "#6366f1" },
        { name: "التواصل الفعال والعمل الجماعي / Communication", level: 94, icon: "fa-solid fa-comments", color: "#ec4899" }
      ]
    }
  ]
};
