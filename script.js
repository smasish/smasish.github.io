document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            navigateToSection(targetId);
        });
    });

    function navigateToSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    // Show the initial section (home)
    navigateToSection("home");
});
