let name = document.getElementById('name'),
    age = document.getElementById('age'),
    valider = document.getElementById('valider')

valider.addEventListener('click', () => {
    const player = { 
        name : name.value,
        age : age.value
    }
    console.log(player)
    localStorage.setItem('player', JSON.stringify(player))
    document.location.href="compte.html"
})