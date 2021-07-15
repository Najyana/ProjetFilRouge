//declarer score
let tentative = 0,
    score = JSON.parse(localStorage.getItem('parties')),
    scorePartie = document.getElementById('score')
score = []
let winPts = 3
let totalScore = parseInt(localStorage.getItem('totalScore'))

//afficher date fr
const currentTime = new Date();
const currentTimeLocal = currentTime.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
})

//debut des fonctions de drop
function allowDrop(event) {
    event.preventDefault();
}
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    let data = event.dataTransfer.getData("Text");
    console.log(data)
}

//Fonction pour les solides
function allowDrops(event) {
    event.preventDefault();
}
function drops(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    console.log(data)
    event.target.appendChild(document.getElementById(data));
    if(event.target.id  == document.getElementById(data).getAttribute('data-divs')){
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).setAttribute('class', 'green')
        console.log('Good !')
        totalScore += winPts;
    
        localStorage.setItem('totalScore', JSON.stringify(totalScore))
        score.unshift({date: currentTimeLocal, tentative: tentative})
        console.log(currentTimeLocal)
        localStorage.setItem('parties', JSON.stringify(score))
    }
    else{
        document.getElementById(data).setAttribute('class', 'red')
        tentative += 1
        winPts -= 1
        console.log('Recommence !')
    }
}

//Fonction pour les liquides
function allowDropl(event) {
    event.preventDefault();
}
function dropl(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    console.log(data)
    event.target.appendChild(document.getElementById(data));
    if(event.target.id  == document.getElementById(data).getAttribute('data-divl')){
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).setAttribute('class', 'green')
        console.log('Good !')
        totalScore += winPts;
    
        localStorage.setItem('totalScore', JSON.stringify(totalScore))
        score.unshift({date: currentTimeLocal, tentative: tentative})
        console.log(currentTimeLocal)
        localStorage.setItem('parties', JSON.stringify(score))
    }
    else{
        document.getElementById(data).setAttribute('class', 'red')
        tentative += 1
        winPts -= 1
        console.log('Recommence !')
    }
}

//Fonction pour le gaz
function allowDropg(event) {
    event.preventDefault();
}
function dropg(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    console.log(data)
    event.target.appendChild(document.getElementById(data));
    if(event.target.id  == document.getElementById(data).getAttribute('data-divg')){
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).setAttribute('class', 'green')
        console.log('Good !')
        totalScore += winPts;
    
    }
    else{
        document.getElementById(data).setAttribute('class', 'red')
        tentative += 1
        winPts -= 1
        console.log('Recommence !')
        localStorage.setItem('totalScore', JSON.stringify(totalScore))
        score.unshift({date: currentTimeLocal, tentative: tentative})
        console.log(currentTimeLocal)
        localStorage.setItem('parties', JSON.stringify(score))
    }
}


const button = document.querySelector('button')

button.addEventListener('click', () =>{
    if ( confirm( 'Bravo! Tu as terminer ce niveau. Clique sur "OK" pour passer à la suite ou sur "Annuler" pour rejouer ce niveau.' ) ) {
        document.location.href="cycleeau.html"
    } else {
        document.location.reload();
    }
    
})