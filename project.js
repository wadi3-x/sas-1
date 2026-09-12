const prompt = require('prompt-sync')();
let found = false;
let depart = prompt("entrer la ville de départ:");
let arrivé = prompt("enter la ville de arrivé");
for(let i = 0 ; i < trips.length; i++){
if(trips[i].departure===depart&&trips[i].destination===arrivé){
    found=true;

     console.log("Trajet disponible !");
     console.log(`Prix : ${trips[i].price} DH`); 
    console.log(`${trips[i].departure} → ${trips[i].destination}`);
   console.log(`Places : ${trips[i].availableSeats}`);
}
}
if(found===false)
console.log("aucun trajet")