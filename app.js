let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random()*11),
    guessesLeft = 3;

    console.log(winningNum);
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num');
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e) {
    if(e.target.className == 'play-again') {
        guessInput.value = '';
        window.location.reload();
        e.preventDefault();
    }
});

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        setTimeout(clearMessage, 3000);
    }else{
        if(guess === winningNum) {
            gameOver(true, `${winningNum} is correct!`)
        }else{
            guessesLeft = guessesLeft - 1;
            if(guessesLeft == 0) {
                gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
            }else{
                guessInput.value = '';
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'blue')
            }
        }     
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green': color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function clearMessage() {
    message.textContent = '';
}
