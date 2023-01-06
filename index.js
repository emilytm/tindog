// Remember to import the data and Dog class!
import { dogs } from './data.js'
import { Dog } from './Dog.js'



let Teddy = new Dog(dogs.find(dog => dog.name === "Teddy"))
const likeButton = document.getElementById('like-button')
const dislikeButton = document.getElementById('dislike-button')

likeButton.addEventListener('click',likeDog)
dislikeButton.addEventListener('click', dislikeDog)

function likeDog(){
    let interactionBadge = document.getElementById('interaction-badge')
    interactionBadge.setAttribute('src','../images/badge-like.png')
    interactionBadge.classList.remove('hidden')
}

function dislikeDog(){
    let interactionBadge = document.getElementById('interaction-badge')
    interactionBadge.setAttribute('src','../images/badge-nope.png')
    interactionBadge.classList.remove('hidden')
}

//Display the first dog
//Handle the interaction
////If like, show like button and move image off to the right
    ////Show badge
    ////Translate off screen
    ////Mark dog as hasBeenSwiped
    ////Mark dog as hasBeenLiked
////If dislike, show dislike badge and move image off to the left
    ////Show badge
    ////Translate off screen
    ////Mark dog as hasBeenSwiped
////Show the next dog
    ////If there are more dogs in the array and the dogs 
    //      haven't been swiped, show the dog


function renderDog(Dog){
    const dogDisplaySection = document.getElementById('dog-display')
    dogDisplaySection.innerHTML = Dog.getDogHtml()
}

renderDog(Teddy)