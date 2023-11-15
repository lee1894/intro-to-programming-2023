let today = new Date(2023, 11, 11);
let thisYear = today.getFullYear();

let copyright = document.createElement("p");
copyright.innerText = "Emily Haag 2023";
let footer = document.querySelector("#leefooter")
footer.appendChild(copyright);

let skills = ["Python", "Javascript", "HTML"];

let skillsSection = document.querySelector("#skills")

let skillsList = skillsSection.querySelector("#skillsList");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = (skills[i]);
    skillsList.appendChild(skill);
};

