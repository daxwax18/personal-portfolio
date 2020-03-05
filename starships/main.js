import { starships } from '../data/starships.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

function populateDOM(starships) {
    starships.forEach(starship => {
    
    let anchorWrap = document.createElement('a')
    anchorWrap.href = '#'
    anchorWrap.addEventListener("click", (event) => {
        console.log(event)
    }) 
    
    let listItem = document.createElement('li')
    listItem.textContent = starship.name

    anchorWrap.appendChild(imageItem)
    navList.appendChild(anchorWrap)
    nav.appendChild(navList)
   })
}

populateNav(starships)