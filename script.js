import { skills, projects } from "./data.js";

/* Skills */
const skillList = document.querySelector(".skill-list");

function displaySkills() {
  skillList.innerHTML = "";
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillList.appendChild(li);
  });
}

/* Projects */
const container = document.querySelector(".container");

function displayProjects() {
  container.innerHTML = "";

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
      <div class="card-actions">
        <a href="${project.repo}" target="_blank">Code</a>
        <a href="${project.live}" target="_blank">Live</a>
      </div>
    `;

    container.appendChild(card);
  });
}

/* Type Name in first load */
const nameSpan = document.getElementById("name");
const fullName = nameSpan.textContent;
let index = 0;

function typeName() {
  if (index === 0) nameSpan.textContent = "";

  if (index < fullName.length) {
    nameSpan.textContent += fullName.charAt(index);
    index++;
    setTimeout(typeName, 50); // fast, subtle
  }
}

typeName();
displaySkills();
displayProjects();
