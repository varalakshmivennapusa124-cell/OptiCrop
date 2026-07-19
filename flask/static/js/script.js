// =======================================
// OptiCrop Professional JavaScript
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🌱 OptiCrop Loaded Successfully");

    // ===========================
    // Sticky Navbar Shadow
    // ===========================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";

        } else {

            navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";

        }

    });


    // ===========================
    // Fade Animation
    // ===========================

    const cards = document.querySelectorAll(
        ".card, .about-card, .tech-card, .stat-box, .predict-card, .objective-box"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.7s ease";

        observer.observe(card);

    });


    // ===========================
    // Input Focus Effect
    // ===========================

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {

        input.addEventListener("focus", () => {

            input.style.transform = "scale(1.02)";

        });

        input.addEventListener("blur", () => {

            input.style.transform = "scale(1)";

        });

    });


    // ===========================
    // Form Validation
    // ===========================

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            let valid = true;

            inputs.forEach(input => {

                if (input.value.trim() === "") {

                    valid = false;

                    input.style.border = "2px solid red";

                } else {

                    input.style.border = "2px solid #4CAF50";

                }

            });

            if (!valid) {

                e.preventDefault();

                alert("Please fill all required fields.");

            }

        });

    }


    // ===========================
    // Number Validation
    // ===========================

    inputs.forEach(input => {

        input.addEventListener("input", function () {

            if (this.value < 0) {

                this.value = "";

            }

        });

    });


    // ===========================
    // Button Hover Animation
    // ===========================

    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-3px) scale(1.03)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0) scale(1)";

        });

    });


    // ===========================
    // Smooth Scroll
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ===========================
    // Typing Effect
    // ===========================

    const heroTitle = document.querySelector(".hero h1");

    if (heroTitle) {

        const text = heroTitle.textContent;

        heroTitle.textContent = "";

        let i = 0;

        function typing() {
if (i < text.length) {

                heroTitle.textContent += text.charAt(i);

                i++;

                setTimeout(typing, 40);

            }

        }

        typing();

    }


    // ===========================
    // Welcome Message
    // ===========================

    setTimeout(() => {

        console.log("🚀 AI Crop Recommendation System Ready");

    }, 1000);

});
