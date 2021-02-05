window.addEventListener('DOMContentLoaded', function () {
  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥

  console.log(document.querySelector('div'))
  console.log(document.querySelector('div div'))
  console.log(document.querySelector('.fun-times'))
  let funTimes = document.querySelector('.fun-times')
  console.log(funTimes)
  funTimes.innerHTML = "Crazy Times!"

  let favoriteInput = document.querySelector('#favorite-thing')
  console.log(favoriteInput)
  console.log(favoriteInput.value)

  let movieList = document.querySelector('.movies-to-watch')
  console.log(movieList)
  
  //movieList.innerHTML = "Starr Cars!"

  movieList.insertAdjacentHTML('beforeend', `<li>Star Wars!</li>`)
  movieList.insertAdjacentHTML('afterend', `<li>Random Wars!</li>`)
  
  console.log(document.querySelector('#grogu'))

  console.log(document.querySelector('#grogu').classList)

  //document.querySelector('#grogu').classList.remove('border-pink-500')

  //document.querySelector('#grogu').classList.add('border-purple-500')


  







  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
})
