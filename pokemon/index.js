function getPokeData(url) {
    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data)
            //pokemonGrid.textContent = data.name
          })
      })
}

let pokemonGrid = document.querySelector('.pokemonGrid')

getPokeData('https://pokeapi.co/api/v2/pokemon/1/')

function populatePokeCards(pokeArray) {
    letPokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    letPokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener( 'click', () => card.pokeCard.toggle('is-flipped'))
    
        
    letPokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    pokeFront.textContent = 'front'
    letPokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    pokeBack.textContent = 'back'

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)

}


/* var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
}); */

{/* <div class="scene">
    <div class="card">
       <div class="card__face card__face--front">front</div>
          <div class="card__face card__face--back"><div><p>Hi,I'm here on the back</p></div></div>
          </div>
</div> */}