document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.toggle("open");
            hamburger.classList.toggle("open");
        });
    }

    // Fade-in Section Observer
    const sections = document.querySelectorAll(".fade-in-section");
    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.2 });

        sections.forEach(section => observer.observe(section));
    }

    // Submit Button Interaction
    document.body.addEventListener("click", function (e) {
        if (e.target.closest("#submit-button")) {
            e.preventDefault();
            const button = e.target.closest("#submit-button");
            const btnText = button.querySelector("#btnText");

            if (btnText) {
                btnText.innerHTML = "Thanks";
                button.classList.add("active");
            }
        }
    });
});
