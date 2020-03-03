import { films } from '../data/films.js'
import { people } from '../data/people.js'
import { starships } from '../data/starships.js'

const greetingDiv = document.querySelector('.greeting')
const maleButton = document.querySelector('#maleButton')
const femaleButton = document.querySelector('#femaleButton')
const otherButton = document.querySelector('#otherButton')

const otherCharacters = people.filter(person => {
    if (person.gender === "hermaphrodite" 
    || person.gender === "n/a"
    || person.gender === "none") {
        return person
    }
})

//console.log(otherCharacters.length)

maleButton.addEventListener("click", (event) => {
    populateDOM(people.filter(person => person.gender === "male"))

})

femaleButton.addEventListener("click", (event) => {
    populateDOM(people.filter(person => person.gender === "female"))

})

otherButton.addEventListener("click", (event) => {
    populateDOM(otherCharacters)

})
//"url": "https://swapi.co/api/people/10/"
function getCharNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end -2 
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

//getCharNumber("https://swapi.co/api/people/10/")

function populateDOM(characters) {
    characters.forEach(person => {
   //need to extract the number from the person.url property
    let charNum = getCharNumber(person.url)
    let anchorWrap = document.createElement('a')
    anchorWrap.href = '#'

    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    
    imageItem.addEventListener('error', (event) => {
        //console.log(`${event.type}: Loading image\n`)
        //console.log(event)
        imageItem.hidden = true
        //imageItem.src = '../images/uvu-logo.jpg'
    });

    // add some ways to handle user clicks on the image
    imageItem.addEventListener("click", (event) => {
        console.log(event)
    }) 
    anchorWrap.appendChild(imageItem)
    greetingDiv.appendChild(anchorWrap)
   
})
}
