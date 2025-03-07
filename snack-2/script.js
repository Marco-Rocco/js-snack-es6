let squadre = [
    {
        'nome': 'napoli',
        'punti-fatti': 0,
        'falli-subiti': 0,
    },
    {
        'nome': 'roma',
        'punti-fatti': 0,
        'falli-subiti': 0,
    },
    {
        'nome': 'juve',
        'punti-fatti': 0,
        'falli-subiti': 0,
    },
    {
        'nome': 'milan',
        'punti-fatti': 0,
        'falli-subiti': 0,
    },
    {
        'nome': 'inter',
        'punti-fatti': 0,
        'falli-subiti': 0,
    },
]

for (let i = 0; i < squadre.length; i ++){
     squadre[i]["punti-fatti"] = Math.floor(Math.random() * 100);
     squadre[i]["falli-subiti"] = Math.floor(Math.random() * 100);
}

console.log(squadre)