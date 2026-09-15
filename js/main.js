// main.js - Core interactive logic for Eslam Adel Portfolio

document.addEventListener("DOMContentLoaded", () => {
  // State management
  let currentLang = localStorage.getItem("portfolio_lang") || "ar";
  let currentTheme = localStorage.getItem("portfolio_theme") || "dark";
  let currentFilter = "all";
  let typingTimer = null;

  // DOM Elements
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById("theme-toggle");
  const langToggleBtn = document.getElementById("lang-toggle");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const projectsGrid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const contactForm = document.getElementById("contact-form");
  const formToast = document.getElementById("form-toast");
  const backToTopBtn = document.getElementById("back-to-top");
  const dynamicRoleElement = document.getElementById("dynamic-role");

  // ==========================================
  // 1. Theme Management (Dark / Light)
  // ==========================================
  function applyTheme(theme) {
    currentTheme = theme;
    htmlElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);

    const themeIcon = themeToggleBtn.querySelector("i");
    if (theme === "light") {
      themeIcon.className = "fa-solid fa-sun";
      themeToggleBtn.setAttribute("title", currentLang === "ar" ? "الوضع الليلي" : "Dark Mode");
    } else {
      themeIcon.className = "fa-solid fa-moon";
      themeToggleBtn.setAttribute("title", currentLang === "ar" ? "الوضع النهاري" : "Light Mode");
    }
  }

  themeToggleBtn.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  // ==========================================
  // 2. Bilingual & Translation System (AR / EN)
  // ==========================================
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolio_lang", lang);

    const isAr = lang === "ar";
    htmlElement.setAttribute("lang", lang);
    htmlElement.setAttribute("dir", isAr ? "rtl" : "ltr");

    // Update Lang button text
    const langLabel = langToggleBtn.querySelector(".lang-label");
    langLabel.textContent = isAr ? "English" : "العربية";

    // Update data translations
    const d = portfolioData[lang];

    // Page title
    document.title = d.meta.title;

    // Navigation
    document.getElementById("nav-brand-text").textContent = d.nav.brand;
    document.getElementById("nav-link-home").textContent = d.nav.home;
    document.getElementById("nav-link-about").textContent = d.nav.about;
    document.getElementById("nav-link-skills").textContent = d.nav.skills;
    document.getElementById("nav-link-services").textContent = d.nav.services;
    document.getElementById("nav-link-projects").textContent = d.nav.projects;
    document.getElementById("nav-link-contact").textContent = d.nav.contact;
    document.getElementById("nav-cv-btn").textContent = d.nav.cvBtn;

    // Hero Section
    document.getElementById("hero-badge-text").textContent = isAr ? "متاح للمشاريع الجديدة" : "Available for New Projects";
    document.getElementById("hero-greeting").textContent = d.hero.greeting;
    document.getElementById("hero-name").textContent = d.hero.name;
    document.getElementById("hero-desc").textContent = d.hero.description;
    document.getElementById("hero-hire-btn").innerHTML = `<span>${d.hero.hireMe}</span> <i class="fa-solid fa-paper-plane"></i>`;
    document.getElementById("hero-work-btn").innerHTML = `<span>${d.hero.viewWork}</span> <i class="fa-solid fa-arrow-down"></i>`;
    document.getElementById("hero-stat-years").textContent = d.hero.experienceYears;
    document.getElementById("hero-stat-desc").textContent = d.hero.experienceText;

    // About Section
    document.getElementById("about-badge").textContent = d.about.badge;
    document.getElementById("about-title").textContent = d.about.title;
    document.getElementById("about-p1").textContent = d.about.p1;
    document.getElementById("about-p2").textContent = d.about.p2;

    // About Info List
    const infoContainer = document.getElementById("about-info-list");
    infoContainer.innerHTML = d.about.infoList.map(item => `
      <div class="info-item">
        <span class="info-label">${item.label}</span>
        <span class="info-val">${item.val}</span>
      </div>
    `).join("");

    // About Stats Grid
    const statsContainer = document.getElementById("about-stats-grid");
    statsContainer.innerHTML = d.about.stats.map(s => `
      <div class="stat-card">
        <div class="stat-card-count">${s.count}</div>
        <div class="stat-card-label">${s.label}</div>
      </div>
    `).join("");

    // Skills Section
    document.getElementById("skills-badge").textContent = d.skills.badge;
    document.getElementById("skills-title").textContent = d.skills.title;
    document.getElementById("skills-frontend-title").innerHTML = `<i class="fa-solid fa-laptop-code"></i> ${d.skills.frontendTitle}`;
    document.getElementById("skills-tools-title").innerHTML = `<i class="fa-solid fa-screwdriver-wrench"></i> ${d.skills.toolsTitle}`;
    document.getElementById("skills-soft-title").innerHTML = `<i class="fa-solid fa-users"></i> ${d.skills.softSkillsTitle}`;

    // Services Section
    document.getElementById("services-badge").textContent = d.services.badge;
    document.getElementById("services-title").textContent = d.services.title;
    renderServices(d.services.items);

    // Projects Section
    document.getElementById("projects-badge").textContent = d.projects.badge;
    document.getElementById("projects-title").textContent = d.projects.title;
    document.getElementById("filter-btn-all").textContent = d.projects.filters.all;
    document.getElementById("filter-btn-web").textContent = d.projects.filters.web;
    document.getElementById("filter-btn-app").textContent = d.projects.filters.app;
    document.getElementById("filter-btn-ui").textContent = d.projects.filters.ui;
    renderProjects(currentFilter);

    // Contact Section
    document.getElementById("contact-badge").textContent = d.contact.badge;
    document.getElementById("contact-title").textContent = d.contact.title;
    document.getElementById("contact-subtitle").textContent = d.contact.subtitle;
    document.getElementById("contact-info-title").textContent = d.contact.infoTitle;
    document.getElementById("contact-lbl-email").textContent = d.contact.emailLabel;
    document.getElementById("contact-val-email").textContent = d.contact.emailVal;
    document.getElementById("contact-lbl-phone").textContent = d.contact.phoneLabel;
    document.getElementById("contact-val-phone").textContent = d.contact.phoneVal;
    document.getElementById("contact-lbl-location").textContent = d.contact.locationLabel;
    document.getElementById("contact-val-location").textContent = d.contact.locationVal;
    document.getElementById("contact-social-title").textContent = d.contact.socialTitle;

    // Contact Form Placeholders & Labels
    document.getElementById("lbl-form-name").textContent = d.contact.formName;
    document.getElementById("input-name").placeholder = isAr ? "مثال: محمد أحمد" : "e.g. John Doe";
    document.getElementById("lbl-form-email").textContent = d.contact.formEmail;
    document.getElementById("lbl-form-subject").textContent = d.contact.formSubject;
    document.getElementById("input-subject").placeholder = isAr ? "مثال: طلب تطوير موقع ويب" : "e.g. Website development inquiry";
    document.getElementById("lbl-form-msg").textContent = d.contact.formMessage;
    document.getElementById("input-msg").placeholder = isAr ? "اكتب تفاصيل مشروعك هنا..." : "Tell me more about your requirements...";
    document.getElementById("btn-send-msg").innerHTML = `<span>${d.contact.sendBtn}</span> <i class="fa-solid fa-paper-plane"></i>`;
    formToast.textContent = d.contact.successMsg;

    // Footer
    document.getElementById("footer-rights").textContent = d.footer.rights;
    document.getElementById("footer-made-with").textContent = d.footer.madeWith;

    // Restart typewriter with current language roles
    initTypewriter(d.hero.roles);

    // Re-render skills
    renderSkills();
  }

  langToggleBtn.addEventListener("click", () => {
    applyLanguage(currentLang === "ar" ? "en" : "ar");
  });

  // ==========================================
  // 3. Typewriter Effect
  // ==========================================
  function initTypewriter(roles) {
    if (typingTimer) clearTimeout(typingTimer);
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        dynamicRoleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        dynamicRoleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400; // Pause before typing next
      }

      typingTimer = setTimeout(type, speed);
    }

    type();
  }

  // ==========================================
  // 4. Skills Rendering
  // ==========================================
  function renderSkills() {
    const frontendGrid = document.getElementById("skills-frontend-grid");
    const toolsGrid = document.getElementById("skills-tools-grid");
    const softGrid = document.getElementById("skills-soft-grid");

    const categories = {
      frontend: frontendGrid,
      tools: toolsGrid,
      soft: softGrid
    };

    portfolioData.skillsData.forEach(group => {
      const targetElement = categories[group.category];
      if (!targetElement) return;

      targetElement.innerHTML = group.items.map(skill => `
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-info">
              <div class="skill-icon" style="color: ${skill.color}">
                <i class="${skill.icon}"></i>
              </div>
              <span class="skill-name">${skill.name}</span>
            </div>
            <span class="skill-pct">${skill.level}%</span>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-bar" style="width: ${skill.level}%;"></div>
          </div>
        </div>
      `).join("");
    });
  }

  // ==========================================
  // 5. Services Rendering
  // ==========================================
  function renderServices(items) {
    const servicesGrid = document.getElementById("services-grid");
    servicesGrid.innerHTML = items.map(srv => `
      <div class="service-card">
        <div class="service-icon-box">
          <i class="fa-solid ${srv.icon}"></i>
        </div>
        <h3 class="service-title">${srv.title}</h3>
        <p class="service-desc">${srv.desc}</p>
      </div>
    `).join("");
  }

  // ==========================================
  // 6. Projects Rendering & Filtering
  // ==========================================
  function renderProjects(filter = "all") {
    currentFilter = filter;
    const allProjects = portfolioData[currentLang].projects.items;
    const filtered = filter === "all" 
      ? allProjects 
      : allProjects.filter(p => p.category === filter);

    const d = portfolioData[currentLang].projects;

    projectsGrid.innerHTML = filtered.map(proj => `
      <div class="project-card" data-category="${proj.category}">
        <div class="project-image-wrapper">
          <img src="${proj.image}" alt="${proj.title}" class="project-image" loading="lazy">
          <div class="project-overlay">
            <a href="${proj.demoUrl}" target="_blank" class="overlay-btn" title="${d.viewProject}">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a href="${proj.codeUrl}" target="_blank" class="overlay-btn" title="${d.viewCode}">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.desc}</p>
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
          </div>
          <div class="project-actions">
            <a href="${proj.demoUrl}" target="_blank" class="project-action-link">
              <span>${d.viewProject}</span>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a href="${proj.codeUrl}" target="_blank" class="project-action-link">
              <span>${d.viewCode}</span>
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    `).join("");
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filterValue = btn.getAttribute("data-filter");
      renderProjects(filterValue);
    });
  });

  // ==========================================
  // 7. Navigation & Scroll Interactions
  // ==========================================
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    // Sticky navbar effect
    if (scrollPos > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Back to top button
    if (scrollPos > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }

    // Active nav link spy
    const sections = document.querySelectorAll("section[id]");
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Mobile menu toggle
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    const icon = hamburgerBtn.querySelector("i");
    if (navMenu.classList.contains("open")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });

  // Close mobile menu on nav link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      hamburgerBtn.querySelector("i").className = "fa-solid fa-bars";
    });
  });

  // Back to top click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // ==========================================
  // 8. Contact Form Handling
  // ==========================================
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalContent = submitBtn.innerHTML;

    // Simulate sending state
    submitBtn.innerHTML = `<span>${currentLang === "ar" ? "جارٍ الإرسال..." : "Sending..."}</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalContent;
      submitBtn.disabled = false;
      contactForm.reset();

      // Show toast
      formToast.classList.add("show");
      setTimeout(() => {
        formToast.classList.remove("show");
      }, 5000);
    }, 1000);
  });

  // ==========================================
  // 9. Initial Boot
  // ==========================================
  applyTheme(currentTheme);
  applyLanguage(currentLang);
});
