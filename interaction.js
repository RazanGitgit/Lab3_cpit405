
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");
    themeButton.textContent = isDark ? "Light Mode" : "Dark Mode";
});


const aboutButton = document.getElementById("about-toggle");
const aboutExtra = document.getElementById("about-extra");

aboutButton.addEventListener("click", function () {
    aboutExtra.hidden = !aboutExtra.hidden;

    aboutButton.textContent = aboutExtra.hidden ? "Show More" : "Show Less";
    aboutButton.setAttribute("aria-expanded", String(!aboutExtra.hidden));
});


const projects = [
    {
        title: "Service Order Management and Tracking System",
        description: "Developed a Java-based system enabling staff to manage service orders, update order statuses, send customer notifications, and collect post-service ratings.",
        category: "Programming",
        technologies: [
            "Java Programming",
            "Unit Testing",
            "Agile Methodology",
            "SDLC",
            "UML Diagrams"
        ]
    },
    {
        title: "VIP Barbershop Management System",
        description: "Designed a premium, user-centered digital experience for the barbershop service industry.",
        category: "Web",
        technologies: [
            "UX/UI Design",
            "System Analysis & Design",
            "UML Diagrams",
            "User-Centered Design"
        ]
    }
];

const projectList = document.getElementById("project-list");

function renderProjects(category) {
    projectList.innerHTML = "";

    const visibleProjects = projects.filter(function (project) {
        return category === "All" || project.category === category;
    });

    for (const project of visibleProjects) {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;
        card.appendChild(title);

        const description = document.createElement("p");
        description.textContent = project.description;
        card.appendChild(description);

        const skills = document.createElement("div");
        skills.className = "project-skills";

        for (const technology of project.technologies) {
            const tag = document.createElement("span");
            tag.textContent = technology;
            skills.appendChild(tag);
        }

        card.appendChild(skills);
        projectList.appendChild(card);
    }
}


const filterButtons = document.querySelectorAll(".project-filters button");
let selectedCategory = "All";

renderProjects(selectedCategory);

for (const button of filterButtons) {
    button.addEventListener("click", function () {
        selectedCategory = button.value;
        renderProjects(selectedCategory);

        for (const filterButton of filterButtons) {
            filterButton.setAttribute(
                "aria-pressed",
                String(filterButton === button)
            );
        }
    });
}


const printButton = document.getElementById("print-cv");

printButton.addEventListener("click", function () {
    window.print();
});

window.addEventListener("beforeprint", function () {
    renderProjects("All");
});

window.addEventListener("afterprint", function () {
    renderProjects(selectedCategory);
});