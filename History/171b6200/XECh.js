//////////////////////////////   inspired by "Dev ed"  /////////////////////////

const game = ()=>{
  let pScore = 0
  let cScore = 0
  
  // start game
  const startGame = ()=>{
    const playBtn = document.querySelector(".intro button")
    const introScreen = document.querySelector(".intro")
    const match = document.querySelector(".match")
    const hands = document.querySelectorAll(".hands img")

    // repeating the animation after clicking everytime on the btn  
    // || at last ||
    hands.forEach((hand)=>{
      hand.addEventListener("animationend", (e)=>{
        // after the animation ends...
        e.target.style.animation = ""
        // ...clear the animation and then whenever we click again it adds the animation again 
      })
    })
    
    playBtn.addEventListener("click", ()=>{
      introScreen.classList.add("fadeOut")
      match.classList.add("fadeIn")
    })
  }
  startGame();
  
  //play match 
  const playMatch = ()=>{
    const options = document.querySelectorAll(".options button")
    const playerHand = document.querySelector(".player-hand")
    const computerHand = document.querySelector(".computer-hand")

    // computer options 
    const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

    // computer selecting random option
    options.forEach((option)=>{
      option.addEventListener("click", (e)=>{
        const playerChoice = e.target.innerText
        const computerNumber = Math.floor(Math.random()*3)
        const computerChoice = computerOptions[computerNumber]
        
        playerHand.src = "./images/rock.png"
        computerHand.src = "./images/rock.png"

        setTimeout(()=>{  // update images after some time
          // updating images
          playerHand.src = `./images/${playerChoice}.png`
          computerHand.src = `./images/${computerChoice}.png`
          
          comparing(playerChoice, computerChoice)
        }, 2000)

        // adding animation to the imgs
        playerHand.style.animation = "pAnimation 2s ease"
        computerHand.style.animation = "cAnimation 2s ease"

      })
    })
  }
  playMatch();
  
  // comparing the options of p & c 
  const comparing = (playerChoice, computerChoice)=>{
    const result = document.querySelector("h4")

    // checking for a tie 
    if (playerChoice === computerChoice) {
      result.innerText = "It is a tie"
      return
    }

    // checking for a ROCK 
    if(playerChoice === "ROCK"){
      if(computerChoice === "SCISSORS"){
        result.innerText = "Player Wins"
        pScore++
        score()
        return
      }else{
        result.innerText = "Computer Wins"
        cScore++
        score()
        return
      }
    }

    // checking for a PAPER
    if(playerChoice === "PAPER"){
      if(computerChoice === "SCISSORS"){
        result.innerText = "Computer Wins"
        cScore++
        score()
        return
      }else{
        result.innerText = "Player Wins"
        pScore++
        score()
        return
      }
    }

    // checking for a SCISSORS 
    if(playerChoice === "SCISSORS"){
      if(computerChoice === "ROCK"){
        result.innerText = "Computer Wins"
        cScore++
        score()
        return
      }else{
        result.innerText = "Player Wins"
        pScore++
        score()
        return
      }
    }
  }

  // score 
  const score = ()=>{
    const playerScore = document.querySelector(".player-score p")
    const computerScore = document.querySelector(".computer-score p")
    playerScore.innerText = pScore
    computerScore.innerText = cScore
  }
}

game()