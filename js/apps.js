// initilize enemy health
let startHealth = 50;

// html elements
const attackBtn = document.getElementById("attackBtn");
const healthTxt = document.getElementById("health");
const lemonMan = document.getElementById("lemon");

//attack function
function attack(){
//miss precentage
if (Math.random() < 0.2){
    healthTxt.textContent = "Miss";
    return;
}
    const minDmg = 5;
    const maxDmg = 10;
    const totalDmg = Math.floor(Math.random() * (maxDmg - minDmg +1)) + minDmg;

    startHealth -= totalDmg;

//negative health prevention
    if(startHealth < 0){
        startHealth = 0;
    }

//death
    if (startHealth ===0){
    healthTxt.textContent = "Nightmare Defeated";
    }else{
    healthTxt.textContent = startHealth;
    }
}

//update health text
healthTxt.textContent = startHealth;

//trigger when attack button clicked
attackBtn.addEventListener('click', attack);

