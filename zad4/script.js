
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("theme-red");
    body.classList.toggle("theme-green");
}

function toggleContent() {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        if (sec.style.display === "none") {
            sec.style.display = "block";
        } else {
            sec.style.display = "none";
        }
    });
}

