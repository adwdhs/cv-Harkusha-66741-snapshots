
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!firstName || !lastName || !email || !message) {
            alert("Wszystkie pola są wymagane!");
            return;
        }
        if (/\d/.test(firstName) || /\d/.test(lastName)) {
            alert("Imię i nazwisko nie mogą zawierać cyfr!");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            alert("Niepoprawny email!");
            return;
        }

        alert("Wysłano pomyślnie!");
    });
  

});


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

