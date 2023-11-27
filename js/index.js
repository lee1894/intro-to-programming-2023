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

let messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener('submit', event => {
    event.preventDefault();
    let userName= event.target.usersName.value; 
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
   
    let messageSection =  document.querySelector("#messages");
   
    let newMessage= document.createElement("li");
   
    let blah  = "<a href=\'mailto:" + email + "\'>" + userName + "</a> Wrote: " + message + " ";
    console.log(blah)
    newMessage.innerHTML = blah;
    messageSection.appendChild(newMessage);
    
    
    let removeButton= document.createElement("button");
    removeButton.innerHTML = 'Remove';
    newMessage.appendChild(removeButton);
    let button1 = () => {
        let entry = removeButton.parentNode;
        entry.remove();
    }
  
    removeButton.addEventListener('click', button1);
    

    event.target.reset();
  });