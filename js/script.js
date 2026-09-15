// script.js - Core interactive logic for Islam Adel Portfolio

document.addEventListener("DOMContentLoaded", () => {
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById("theme-toggle");
    const hamburgerBtn = document.getElementById("hamburger");
    const navLinksContainer = document.getElementById("nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navbar = document.getElementById("navbar");
    const contactForm = document.getElementById("contact-form");
    const formToast = document.getElementById("form-toast");
    const backToTopBtn = document.getElementById("back-to-top");

    // ==========================================
    // 1. Theme Toggle (Dark / Light)
    // ==========================================
    let currentTheme = localStorage.getItem("portfolio_theme") || "dark";

    function applyTheme(theme) {
        currentTheme = theme;
        htmlElement.setAttribute("data-theme", theme);
        localStorage.setItem("portfolio_theme", theme);
    }

    applyTheme(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            applyTheme(currentTheme === "dark" ? "light" : "dark");
        });
    }

    // ==========================================
    // 2. Mobile Hamburger Menu
    // ==========================================
    if (hamburgerBtn && navLinksContainer) {
        hamburgerBtn.addEventListener("click", () => {
            navLinksContainer.classList.toggle("open");
            const icon = hamburgerBtn.querySelector("i");
            if (navLinksContainer.classList.contains("open")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });

        // Close menu when clicking any link
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navLinksContainer.classList.remove("open");
                hamburgerBtn.querySelector("i").className = "fa-solid fa-bars";
            });
        });
    }

    // ==========================================
    // 3. Navbar Scroll & Active Link Spy
    // ==========================================
    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY;

        // Sticky Navbar effect
        if (navbar) {
            if (scrollPos > 60) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }

        // Active link spy
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

    // ==========================================
    // 4. Smooth Back to Top
    // ==========================================
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // ==========================================
    // 5. Contact Form Simulation
    // ==========================================
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalContent = submitBtn.innerHTML;

            submitBtn.innerHTML = `<span>جارٍ الإرسال...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                contactForm.reset();

                if (formToast) {
                    formToast.textContent = "شكرًا لتواصلك معنا! تم استلام رسالتك بنجاح وسنتواصل معك قريبًا.";
                    formToast.classList.add("show");

                    setTimeout(() => {
                        formToast.classList.remove("show");
                    }, 5000);
                }
            }, 1000);
        });
    }

    // ==========================================
    // 6. Pause other videos when one plays
    // ==========================================
    const allVideos = document.querySelectorAll(".portfolio-video");
    allVideos.forEach(video => {
        video.addEventListener("play", () => {
            allVideos.forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });
    });
});
