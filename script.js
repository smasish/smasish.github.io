document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const link = document.querySelector(`nav ul li a[href="#${section.id}"]`);
        link.addEventListener("click", function(event) {
            event.preventDefault();
            navigateToSection(section.id);
        });
    });

    function navigateToSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    // Show the initial section (home)
    navigateToSection("home");
});
