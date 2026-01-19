function myProjects() {
    addProjectToList("Project1", "Used XYZ Bla Bla Bla fsgdfhsdushduisdhsuidhvsdusddvsdv gfwdfgqfg hhk", ".", "repoLink", "liveLink");
    addProjectToList("Project2", "Used XYZ", ".", "repoLink", "liveLink");
    addProjectToList("Project1", "Used XYZ", ".", "repoLink", "liveLink");
addProjectToList("Project2", "Used XYZ", ".", "repoLink", "liveLink");
}

const containor = document.querySelector(".containor");

function Project(title, description, image, repo, live) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.repo = repo;
    this.live = live;
}

const projectList = [];

function addProjectToList(title, description, image, repo, live) {
    const project = new Project(title, description, image, repo, live);
    projectList.push(project);
}

function display() {
    containor.textContent = "";
    projectList.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.classList.add("image");
        image.src = project.image;

        const title = document.createElement("h2");
        title.classList.add("title");
        title.textContent = project.title;

        const description = document.createElement("div");
        description.classList.add("description");
        description.textContent = project.description;

        const repoBtn = document.createElement("button");
        repoBtn.classList.add("repo");
        repoBtn.textContent = "View Code";

        const liveLinkBtn = document.createElement("button");
        liveLinkBtn.classList.add("live");
        liveLinkBtn.textContent = "Live Preview";

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(repoBtn);
        card.appendChild(liveLinkBtn);

        containor.appendChild(card);
    })
}

myProjects();
display();
