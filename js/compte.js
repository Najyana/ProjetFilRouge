//prénom
let player = localStorage.getItem('player')
player = JSON.parse(player)

document.getElementById("profil").innerHTML = `
    <h2 class="prenom">${player.name}</h2>
`

//parties niveau 1
let recapPartie = JSON.parse(localStorage.getItem('parties'))

let showRecap = recapPartie.map(partie => {
    return `<br> ${partie.date} nbr de tentative ${partie.tentative}`
})
document.getElementById('showScore').innerHTML = showRecap.join('')


//parties niveau 2
let recapPartie2 = JSON.parse(localStorage.getItem('parties2'))

let showRecap2 = recapPartie2.map(partie2 => {
    return `<br> ${partie2.date} nbr de tentative ${partie2.tentative2}`
})
document.getElementById('showScore2').innerHTML = showRecap2.join('')

