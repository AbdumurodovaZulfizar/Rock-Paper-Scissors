const array = ['Rock', 'Paper', 'Scissors']
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
let computer_score = 0;
let player_score = 0;


const computerPlay = () => {
  const random  = Math.floor(Math.random() * array.length);
  console.log(random);
  let computerCoose = array[random];
  return computerCoose;
}

const getChoise = (button) => {

  const userChoise = button
  // button.preventDefault();
  let computerChoise = computerPlay();
  playRound(userChoise, computerChoise);
  
};


const playRound = (button, computer_input) => {
  if (button == 'Rock' && computer_input == 'Paper') {
    console.log("You Lose Game! Paper beats Rock");
    // computer_score += 1;
  }else if (button == 'Paper' && computer_input == "Scissors") {
    console.log("You Lose Game! Scissors beats Paper");
    // computer_score += 1;
  } else if (button == 'Scissors' && computer_input == 'Rock') {
    console.log("You Lose Game! Rock beats Scissors");
    // computer_score += 1;
  }else if(computer_input == 'Rock' && button == 'Paper') {
    console.log("You Won Game! Paper beats Rock");
    // player_score += 1;
  }else if (computer_input == 'Paper' && button == "Scissors") {
    console.log("You Won Game! Scissors beats Paper");
    // player_score += 1;
  } else if (computer_input == 'Scissors' && button == 'Rock') {
    console.log("You Won Game! Rock beats Scissors");
    // player_score += 1;
  } else {
    console.log("You are equal!")
  }
}


rockBtn.addEventListener('click', () => getChoise('Rock'));
paperBtn.addEventListener('click', () => getChoise('Paper'));
scissorsBtn.addEventListener('click', () => getChoise('Scissors'));


// const game = () => {
//   let i = 0;
//   while (i < 5) {
//     play_game();
//     i+=1;
//   }
  
//   if (computer_score > player_score) {
//     alert(`Compuet won : ${computer_score}:${player_score}`)
//   } else if (computer_score < player_score) {
//     alert(`You Won: ${player_score}:${computer_score}`)
//   } else {
//     alert("You have been equal!!!");
//   }
// }
// game();