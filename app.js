import data from './data.json' assert { type: 'json' }

function init() {
  const summaryContent = document.querySelector('.summary__content')
  const summaryContainer = document.querySelector('.summary__container')
  const button = document.createElement('button')
  const testScore = document.querySelector('.result__display > h1')
  const scoreArr = []

  button.classList.add('button')
  summaryContainer.appendChild(button).innerHTML = 'Continue'

  data.forEach((item) => {
    scoreArr.push(item.score)
    const div = `
    <div class="${item.category.toLocaleLowerCase()} summary__item ">
      <div class="${item.category.toLocaleLowerCase()}__description summary__description">
        <img src="${item.icon}" alt="${
      item.category
    } icon" />
        <h3>${item.category}</h3>
      </div>
      <div class="summary__scores">
        <span>${item.score}</span>/
        <span>100</span>
      </div>
    </div>
    `
    summaryContent.innerHTML += div
  })

  // console.log(scoreArr.length)
  const total = scoreArr.reduce((acc, curr) => acc + curr, 0) / 4
  testScore.innerHTML = Math.floor(total)
  // console.log(testScore.innerHTML)

}

window.addEventListener('DOMContentLoaded', init)
