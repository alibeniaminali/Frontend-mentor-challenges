import data from './data.json' assert { type: 'json' }

function init() {
  const summaryContent = document.querySelector('.summary__content')
  const summaryContainer = document.querySelector('.summary__container')
  const button = document.createElement('button')
  const testScore = document.querySelector('.result__display > h1')
  const scoreArr = []

  button.classList.add('button')
  summaryContainer.appendChild(button).innerHTML = 'Continue'

  // The code creates an empty 'view' string and iterates over the 'data' array, generating the HTML content for each 'item' and appending it to the 'view' string using string concatenation. Finally, after the loop, the entire 'view' string is set as the 'innerHTML' of the 'summaryContent' element. This means that the entire HTML content is built in memory before being added to the DOM. This reduces the number of DOM modifications
  // TODO: Add each result to the DOM 
  let view = ''
  data.forEach((item) => {
    scoreArr.push(item.score)
    const div = `
    <div class="${item.category.toLocaleLowerCase()} summary__item ">
      <div class="${item.category.toLocaleLowerCase()}__description summary__description">
        <img src="${item.icon}" alt="${item.category} icon" />
        <h3>${item.category}</h3>
      </div>
      <div class="summary__scores">
        <span>${item.score}</span>/
        <span>100</span>
      </div>
    </div>
    `
    view += div
  })

  summaryContent.innerHTML += view

  // TODO: End of adding each result to the DOM 

  // TODO: Calculate the average score depending on the length of the array
  // Add (+) all the scores and divide (/) the total by the number of scores
  // console.log(scoreArr.length)
  const total = scoreArr.reduce((acc, curr) => acc + curr, 0) / scoreArr.length
  // console.log(total)
  testScore.innerHTML = Math.round(total)
  // console.log(testScore.innerHTML)
}

window.addEventListener('DOMContentLoaded', init)
