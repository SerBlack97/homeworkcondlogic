// initilize enemy health
let startHealth = 100;

//attack function
function attack(){
    const minDmg = 5;
    const maxDmg = 10;
    const totalDmg = Math.floor(Math.random() * (maxDmg - minDmg +1))

    startHealth -= totalDmg;

    if(startHealth < 0){
        startHealth = 0;
    }
}

