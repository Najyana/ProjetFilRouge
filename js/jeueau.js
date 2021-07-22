//declarer score
let tentative = 0,
    score = JSON.parse(localStorage.getItem('parties')),
    scorePartie = document.getElementById('score')
score = []
let winPts = 2
let totalScore = parseInt(localStorage.getItem('totalScore'))
totalScore= 0

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
    let data = event.dataTransfer.getData("Text"),
    data2 = event.dataTransfer.getData("Text")
    console.log(data)
    event.target.appendChild(document.getElementById(data));
    if(/*event.target.id*/ document.getElementById(data2).getAttribute('data-targets')  == document.getElementById(data).getAttribute('data-divs')){
        document.getElementById(data).setAttribute('class', 'red')
        tentative += 1
        winPts -= 1
        console.log('Recommence !')
    }
    else{
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).setAttribute('class', 'green')
        console.log('Good !')
        totalScore += winPts;
    
        localStorage.setItem('totalScore', JSON.stringify(totalScore))
        score.unshift({date: currentTimeLocal, tentative: tentative})
        console.log(currentTimeLocal)
        localStorage.setItem('parties', JSON.stringify(score))
    }
}

//Fonction pour les liquides
function allowDropl(event) {
    event.preventDefault();
}
function dropl(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text"),
    data2 = event.dataTransfer.getData("Text")
    console.log(data)
    event.target.appendChild(document.getElementById(data));
    if(/*event.target.id*/ document.getElementById(data2).getAttribute('data-targetl')  == document.getElementById(data).getAttribute('data-divl')){
        document.getElementById(data).setAttribute('class', 'red')
        tentative += 1
        winPts -= 1
        console.log('Recommence !')
    }
    else{
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).setAttribute('class', 'green')
        console.log('Good !')
        totalScore += winPts;
    
        localStorage.setItem('totalScore', JSON.stringify(totalScore))
        score.unshift({date: currentTimeLocal, tentative: tentative})
        console.log(currentTimeLocal)
        localStorage.setItem('parties', JSON.stringify(score))
    }
}

//Fonction pour le gaz
function allowDropg(event) {
    event.preventDefault();
}
function dropg(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text"),
        data2 = event.dataTransfer.getData("Text")
    console.log(data)
    event.target.appendChild(document.getElementById(data));
    if(/*event.target.id*/ document.getElementById(data2).getAttribute('data-targetg')  == document.getElementById(data).getAttribute('data-divg')){
        document.getElementById(data).setAttribute('class', 'red')
        tentative += 1
        winPts -= 1
        console.log('Recommence !')
    }
    else{
        
        event.target.appendChild(document.getElementById(data))
        document.getElementById(data).setAttribute('class', 'green')
        console.log('Good !')
        totalScore += winPts;
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

/*function hasClass(element, clsName) {
	return(' ' + element.className + ' ').indexOf(' ' + clsName + ' ') > -1;
}
let getTestId = ''
let checkRedClass = false;

button.addEventListener('click', () =>{
for(let i = 1; i < 9; i++) {
	getTestId = document.getElementById('div' + [i])
	console.log(getTestId)
	if(getTestId.classList.contains('red')) {
		console.log('good')
        checkRedClass = true
	} else {
		console.log('concombre')
	}
}*/


    /*for(let i = 0; i < 9; i++) {
        getTestId = document.getElementById('div' + [i])
        console.log(getTestId)
        if(getTestId.classList.contains('red')) {
            checkRedClass = true
            console.log('dzf')
            /*if ( confirm( 'Dommage ! Recommence le niveau pour passer au suivant !!' ) ) {
                document.location.reload();
            } else {
                document.location.reload();
            }
        };
    }*/
    /*if(checkRedClass) {
        console.log('next')
        if ( confirm( 'Bravo! Tu as terminer ce niveau. Clique sur "OK" pour passer à la suite ou sur "Annuler" pour rejouer ce niveau.' ) ) {
            document.location.href="cycleeau.html"
        } else {
            document.location.reload();
        }
    }
})*/