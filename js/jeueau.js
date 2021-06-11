function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}

    function allowDrops(event) {
    event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
            if(event.target.classList.contains('dropins')){
                div.classList.add("green")
            }
            else{
                div.classList.add("red")
            }
    }

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
    
    function allowDropl(event) {
        event.preventDefault();
    }
    
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
            if(event.target.classList.contains('dropinl')){
                console.log('GG')
            }
    }

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
    
    function allowDropg(event) {
        event.preventDefault();
    }
    
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
            if(event.target.classList.contains('droping')){
                console.log('GG')
            }
    }