document.addEventListener('DOMContentLoaded',  () => {

//card options

const cardArray = [
  {
  name: 'rose',
  img: 'assets/images/rose.png'
  },
  {
  name: 'rose',
  img: 'assets/images/rose.png'
  },
  {
  name: 'bunny',
  img: 'assets/images/bunny.png'
  },
  {
  name: 'bunny',
  img: 'assets/images/bunny.png'
  },
  {
  name: 'cake',
  img: 'assets/images/cake.png'
  },
  {
  name: 'cake',
  img: 'assets/images/cake.png'
  },
  {
  name: 'tophat',
  img: 'assets/images/tophat.png'
  },
  {
  name: 'tophat',
  img: 'assets/images/tophat.png'
  },
  {
  name: 'beach',
  img: 'assets/images/beach.png'
  },
  {
  name: 'beach',
  img: 'assets/images/beach.png'
  },
  {
  name: 'drum',
  img: 'assets/images/drum.png'
  },
  {
  name: 'drum',
  img: 'assets/images/drum.png'
  },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create board


function createBoard()
    {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'assets/images/hex.png')
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
    document.getElementById('winAudio').play()
    Swal.fire({
      title: 'You found a match!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    cards[optionOneId].setAttribute('src', 'assets/images/blank.png')
    cards[optionTwoId].setAttribute('src', 'assets/images/blank.png')
    cardsWon.push(cardsChosen)
  }
  else {
    cards[optionOneId].setAttribute('src', 'assets/images/hex.png')
    cards[optionTwoId].setAttribute('src', 'assets/images/hex.png')
    document.getElementById('failAudio').play()
    Swal.fire({
      title: 'Sorry, try again!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  cardsChosen = []
  cardsChosenId = []
  var finalmessage = document.getElementById("result")
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    document.getElementById('completeAudio').play()
    resultDisplay.textContent = 'Congratulations! You found them all!'
    document.getElementById("score").style.visibility="hidden";
    document.getElementById("finalmessage").appendChild(finalmessage);
    Swal.fire({
      title: 'Lets play again!',
      backdrop: `
          rgba(255,192,203,0.4)
          url("assets/images/final.gif")
          center right
          no-repeat
        `,
    })
    setTimeout("location.reload(true);", 10000);
  }
}

//card flip

function flipcard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 300)
  }
}


createBoard()

// timer button click handling

var timesClicked = 0;

$("#btn").click(function() {
      timesClicked++;

      if (timesClicked%2==0) {
          clearInterval(interval);
          $("#btn").html("Start Timer");
      } else {
          updateTimer();
          $("#btn").html("Stop Timer");
      }
  })


// timer button


const startingMinutes = 1;
var time = startingMinutes * 60;
const timerEl = document.getElementById('timer')
var interval = []

function updateTimer() {
  interval = setInterval(function (){

  const minutes = Math.floor(time / 60);
  var seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  timerEl.innerHTML = minutes+":"+seconds;
  time--;
  time = time < 0 ? 0 : time;
  }, 1000);
}




// page navigation

window.onbeforeunload = function(userNav) {
  userNav.returnValue = "Are you sure you want to leave?";
};

})
