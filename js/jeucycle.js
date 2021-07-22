//declarer score
let tentative2 = 0,
    score2 = JSON.parse(localStorage.getItem('parties2')),
    scorePartie2 = document.getElementById('score2')
score2 = []
let winPts2 = 1
let totalScore2 = parseInt(localStorage.getItem('totalScore2'))
totalScore2= 0

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

//Fonction pour evaporation
function allowDrope(event) {
    event.preventDefault();
}
function drope(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    console.log(data)
    event.target.appendChild(document.getElementById(data));
    if(event.target.id  == document.getElementById(data).getAttribute('data-div3')){
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).setAttribute('class', 'green')
        console.log('Good !')
        tentative2 += 1
        totalScore2 += winPts2;
    
        localStorage.setItem('totalScore2', JSON.stringify(totalScore2))
        score2.unshift({date: currentTimeLocal, tentative2: tentative2})
        console.log(currentTimeLocal)
        localStorage.setItem('parties2', JSON.stringify(score2))
    }
    else{
        document.getElementById(data).setAttribute('class', 'red')
        tentative2 += 1
        winPts2 -= 1
        console.log('Recommence !')
    }
}

//Fonction pour ruissellement
function allowDropr(event) {
    event.preventDefault();
}
function dropr(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    console.log(data)
    event.target.appendChild(document.getElementById(data));
    if(event.target.id  == document.getElementById(data).getAttribute('data-div4')){
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).setAttribute('class', 'green')
        console.log('Good !')
        tentative2 += 1
        totalScore2 += winPts2;
    
        localStorage.setItem('totalScore2', JSON.stringify(totalScore2))
        score2.unshift({date: currentTimeLocal, tentative2: tentative2})
        console.log(currentTimeLocal)
        localStorage.setItem('parties2', JSON.stringify(score2))
    }
    else{
        document.getElementById(data).setAttribute('class', 'red')
        tentative2 += 1
        winPts2 -= 1
        console.log('Recommence !')
    }
}

//Fonction pour condensation
function allowDropc(event) {
    event.preventDefault();
}
function dropc(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    console.log(data)
    event.target.appendChild(document.getElementById(data));
    if(event.target.id  == document.getElementById(data).getAttribute('data-div1')){
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).setAttribute('class', 'green')
        console.log('Good !')
        tentative2 += 1
        totalScore2 += winPts2;
    
        localStorage.setItem('totalScore2', JSON.stringify(totalScore2))
        score2.unshift({date: currentTimeLocal, tentative2: tentative2})
        console.log(currentTimeLocal)
        localStorage.setItem('parties2', JSON.stringify(score2))
    }
    else{
        document.getElementById(data).setAttribute('class', 'red')
        tentative2 += 1
        winPts2 -= 1
        scorePartie2.innerHTML = `Nombre de tentative ${tentative2}`
        console.log('Recommence !')
    }
}

//Fonction pour precipitations
function allowDropp(event) {
    event.preventDefault();
}
function dropp(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    console.log(data)
    event.target.appendChild(document.getElementById(data));
    if(event.target.id  == document.getElementById(data).getAttribute('data-div2')){
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).setAttribute('class', 'green')
        console.log('Good !')
        tentative2 += 1
        totalScore2 += winPts2;
    
        localStorage.setItem('totalScore2', JSON.stringify(totalScore2))
        score2.unshift({date: currentTimeLocal, tentative2: tentative2})
        console.log(currentTimeLocal)
        localStorage.setItem('parties2', JSON.stringify(score2))
    }
    else{
        document.getElementById(data).setAttribute('class', 'red')
        tentative2 += 1
        winPts2 -= 1
        console.log('Recommence !')
    }
}


const button = document.querySelector('button')

button.addEventListener('click', () =>{
    if ( confirm( 'Bravo! Tu as terminer le dernier niveau. Clique sur "OK" pour retourner sur ton profil ou sur "Annuler" pour rejouer ce niveau.' ) ) {
        document.location.href="compte.html"
    } else {
        document.location.reload();
    }
    
})

/*function hasClass(element, clsName) {
	return(' ' + element.className + ' ').indexOf(' ' + clsName + ' ') > -1;
}
let getTestId = ''
let checkRedClass = false;

button.addEventListener('click', () =>{
    for(let i = 0; i < 5; i++) {
        getTestId = document.querySelectorAll('.div' + i)
        console.log(getTestId)
        if(hasClass(getTestId, 'red')) {
            checkRedClass = true
            if ( confirm( 'Dommage ! Recommence le niveau pour passer au suivant !!' ) ) {
                document.location.reload();
            } else {
                document.location.reload();
            }
        };
    }
    if(checkRedClass) {
        console.log('next')
        if ( confirm( 'Bravo! Tu as terminer ce niveau. Clique sur "OK" pour passer à la suite ou sur "Annuler" pour rejouer ce niveau.' ) ) {
            document.location.href="cycleeau.html"
        } else {
            document.location.reload();
        }
    }
})*/