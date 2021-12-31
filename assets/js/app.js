document.addEventListener('DOMContentLoaded',  () => {

//card options

const cardArray = [
  {
  name: 'camera',
  img: 'assets/images/camera.png'
  },
  {
  name: 'camera',
  img: 'assets/images/camera.png'
  },
  {
  name: 'photos',
  img: 'assets/images/photos.png'
  },
  {
  name: 'photos',
  img: 'assets/images/photos.png'
  },
  {
  name: 'test',
  img: 'assets/images/test.png'
  },
  {
  name: 'test',
  img: 'assets/images/test.png'
  },
  {
  name: 'dog',
  img: 'assets/images/dog.jpg'
  },
  {
  name: 'dog',
  img: 'assets/images/dog.jpg'
  },
  {
  name: 'cat',
  img: 'assets/images/cat.jpg'
  },
  {
  name: 'cat',
  img: 'assets/images/cat.jpg'
  },
  {
  name: 'bird',
  img: 'assets/images/bird.jpg'
  },
  {
  name: 'bird',
  img: 'assets/images/bird.jpg'
  },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create board

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'assets/images/tile.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipcard)
    grid.appendChild(card)
  }
}

//check matches

function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]){
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'assets/images/blank.png')
    cards[optionTwoId].setAttribute('src', 'assets/images/blank.png')
    cardsWon.push(cardsChosen)
  }
  else {
    cards[optionOneId].setAttribute('src', 'assets/images/tile.png')
    cards[optionTwoId].setAttribute('src', 'assets/images/tile.png')
    alert('Sorry, try again')
  }

  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

//card flip

function flipcard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()


})
