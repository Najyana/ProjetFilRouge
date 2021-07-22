//prénom
let player = localStorage.getItem('player')
player = JSON.parse(player)

document.getElementById("profil").innerHTML = `
    <h2 class="prenom">${player.name}</h2>
`

//parties niveau 1
let recapPartie = JSON.parse(localStorage.getItem('parties'))
let totalScorePartie = JSON.parse(localStorage.getItem('totalScore'))
let showRecap = recapPartie.map(partie => {
    return `<br> ${partie.date} nombre de fautes : ${partie.tentative}. <br> Ton score est de `
})
if(totalScorePartie >= 0){
    document.getElementById('showScore').innerHTML = showRecap[0] + totalScorePartie
} else {
    document.getElementById('showScore').innerHTML = showRecap[0] + "0"
}


//parties niveau 2
let recapPartie2 = JSON.parse(localStorage.getItem('parties2'))
let totalScorePartie2 = JSON.parse(localStorage.getItem('totalScore2'))
let showRecap2 = recapPartie2.map(partie2 => {
    return `<br> ${partie2.date} nombre de fautes : ${partie2.tentative2}. <br> Ton score est de `
})
if(totalScorePartie2 >= 0){
    document.getElementById('showScore2').innerHTML = showRecap2[0] + totalScorePartie2
} else {
    document.getElementById('showScore2').innerHTML = showRecap2[0] + "0"
}
