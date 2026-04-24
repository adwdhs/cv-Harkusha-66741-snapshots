document.addEventListener("DOMContentLoaded", function () {

    async function loadData() {
      try {
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error('Error when fetching data.json');

        const data = await response.json();
     
        const skillsList = document.getElementById('skills-list');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

     
        const eduList = document.getElementById('education-list');
        data.education.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item;
            eduList.appendChild(li);
        });

        const charList = document.getElementById('characteristics-list');
        data.characteristics.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          charList.appendChild(li);
        });


        const projList = document.getElementById('projects-list');
        data.projects.forEach(project => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${project.title}:</strong> ${project.description}`;
          projList.appendChild(li);
        });

    
        const expList = document.getElementById('experience-list');

        const mainLi = document.createElement('li');
        mainLi.innerHTML = `<strong>${data.experience.role}</strong> – ${data.experience.type}`;

        const subUl = document.createElement('ul');

        data.experience.details.forEach(detail => {
          const subLi = document.createElement('li');
          subLi.textContent = detail;
          subUl.appendChild(subLi);
        });

        mainLi.appendChild(subUl);
        expList.appendChild(mainLi);

      } catch (error) {
        console.error(error);
      }
    }

    loadData();

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
