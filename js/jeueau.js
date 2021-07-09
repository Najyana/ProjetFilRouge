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
        console.log("green divs" + event.target.id)
    }
    else{
        document.getElementById(data).setAttribute('class', 'red')
        console.log("red divs" + event.target.id)
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
        console.log("green divl" + event.target.id)
    }
    else{
        document.getElementById(data).setAttribute('class', 'red')
        console.log("red divl" + event.target.id)
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
        console.log("green divg" + event.target.id)
    }
    else{
        document.getElementById(data).setAttribute('class', 'red')
        console.log("red divg" + event.target.id)
    }
}