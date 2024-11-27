function GetJSON() {
    return fetch("../data/data.json")
    .then((response) => response.json())
    .then((names) => {
      console.log(names);
      return names;
    });
}

GetJSON();

let lastFive = ["First", "last", "csEmail", "email"];

let changeBtn = document.getElementById("changeBtn");
let namePlace1 = document.getElementById("namePlace1");
let namePlace2 = document.getElementById("namePlace2");
let namePlace3 = document.getElementById("namePlace3");
let namePlace4 = document.getElementById("namePlace4");
let lastFiveText = document.getElementById("lastFiveText");

changeBtn.addEventListener("click", () => {
    // let data = GetJSON();
    GetJSON().then(data => {
        console.log(data.names);
        
        let randomIndex = Math.floor(Math.random() * data.names.length);
        let randomItem = data.names[randomIndex];
        namePlace1.textContent = randomItem.firstName; 
        namePlace2.textContent = randomItem.lastName;
        namePlace3.textContent = randomItem.codeStackEmail;
        namePlace4.textContent = randomItem.email;
        lastFiveText.textContent = randomItem;

        lastFiveText.join(data.names[randomIndex]);
    
        if( lastFiveText.length == 5){
            lastFiveText.shift();
        }
    });

});
