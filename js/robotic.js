document.addEventListener("scroll", function () {
    const items = document.querySelectorAll(".timeline-item");
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add("visible");
        } else {
            item.classList.remove("visible");
        }
    });
});

// Add the animation in CSS
.timeline-item {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out;
}
.timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
}
