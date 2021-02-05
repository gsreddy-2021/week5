function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

window.addEventListener('DOMContentLoaded', function () {


  // ⬇️ ⬇️ ⬇️ YOUR CODE GOES HERE ⬇️ ⬇️ ⬇️

  


  // 2. add event listener when user clicks "Roll"
  let button = document.querySelector('#roll-button')
  button.addEventListener('click', function(event) {
    event.preventDefault()

// 1. use final code from practice/1-dom.js to modify dice
    let die1 = getRandomInt(6)
    let die2 = getRandomInt(6)

    // 2. find the dice element
    let dice = document.querySelector('.dice')
    
    //3. replace the element's inner HTML with new html using the dice valued
    dice.innerHTML =  `
        <img src="../images/dice/${die1}.png" class="die w-1/2 md:w-1/6">
        <img src="../images/dice/${die2}.png" class="die w-1/2 md:w-1/6">
        `

  })

  // 3. on click event:


  //    a. get the user-entered player name from the input


  //    b. insert <li> with player name and dice total: `<li>______ rolled __</li>



  // ⬆️ ⬆️ ⬆️ YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE ⬆️ ⬆️ ⬆️
})
