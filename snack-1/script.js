let bici1 = {
    "colore": "rosso",
    "peso": 10,
}

let bici2 = {
    "colore": "nero",
    "peso": 15,
    "prezzo": 300,
}

let bici3 = {
    "colore": "giallo",
    "peso": 8,
}

let bici4 = {
    "colore": "rosa",
    "peso": 9,
}

let bici5 = {
    "colore": "azzurro",
    "peso": 12,
}



let biciclette = [
    bici1,
    bici2,
    bici3,
    bici4,
    bici5,
]


console.log(biciclette);

let lightestBike = biciclette[0]

for (let i = 0; i < biciclette.length; i++){
    if (biciclette[i].peso < lightestBike.peso){
        lightestBike = biciclette[i]
    } 
    
} 
console.log(lightestBike)