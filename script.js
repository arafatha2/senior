// Fade-in animation trigger on scroll
const elements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
    let windowHeight = window.innerHeight;

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;

        if (position < windowHeight - 80) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

// Smooth scroll for internal links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Optional: Print resume button logic (if you add a print button)
const printBtn = document.getElementById("printResume");
if (printBtn) {
    printBtn.addEventListener("click", () => {
        window.print();
    });
}
