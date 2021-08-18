const array = ['Rock', 'Paper', 'Scissors']
let computer_score = 0;
let player_score = 0;
const random  = Math.floor(Math.random() * array.length);
console.log(random);
const computerPlay = () => {
  let computerCoose = array[random];
  return computerCoose;
}

console.log(computerPlay());

const play_game = () => {
  const user_input = prompt("Select one of the options: \n Rock  Paper  Scissors");
  const modify  = user_input.trim();
  const universal = modify[0].toUpperCase() + modify.slice(1).toLocaleLowerCase()
  console.log(universal);
  if ((universal == 'Rock') || (universal == 'Paper') || (universal == 'Scissors')) {
  
  let computer_input = computerPlay();
  if (universal == 'Rock' && computer_input == 'Paper') {
    alert("You Lose Game! Paper beats Rock");
    computer_score += 1;
  }else if (universal == 'Paper' && computer_input == "Scissors") {
    alert("You Lose Game! Scissors beats Paper");
    computer_score += 1;
  } else if (universal == 'Scissors' && computer_input == 'Rock') {
    alert("You Lose Game! Rock beats Scissors");
    computer_score += 1;
  }else if(computer_input == 'Rock' && universal == 'Paper') {
    alert("You Won Game! Paper beats Rock");
    player_score += 1;
  }else if (computer_input == 'Paper' && universal == "Scissors") {
    alert("You Won Game! Scissors beats Paper");
    player_score += 1;
  } else if (computer_input == 'Scissors' && universal == 'Rock') {
    alert("You Won Game! Rock beats Scissors");
    player_score += 1;
  } else {
    alert("You are equal!")
  }
} else {
  alert("Enter valid input!")
  play_game();
}
};

const game = () => {
  let i = 0;
  while (i < 5) {
    play_game();
    i+=1;
  }
  
  if (computer_score > player_score) {
    alert(`Compuet won : ${computer_score}:${player_score}`)
  } else if (computer_score < player_score) {
    alert(`You Won: ${player_score}:${computer_score}`)
  } else {
    alert("You have been equal!!!");
  }
}
game();