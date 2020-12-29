'use strict';
document.querySelector('.check').addEventListener('click', logClick)

let secret = Math.trunc((Math.random() * 20) + 1)
let score = 20
let highscore = 0


function logClick() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    if (score === 0) {
        document.querySelector('.message').textContent = 'Game over'
    }
    else {
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number!'
        } else if (guess === secret) {
            document.querySelector('.message').textContent = 'Good Job!'
            score++
            document.querySelector('.score').textContent = score
            document.querySelector('body').style.backgroundColor = 'green'
            document.querySelector('.number').textContent = secret;
            document.querySelector('.number').style.width = '30rem'

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore
            }
        } else if (guess > secret) {
            document.querySelector('.message').textContent = 'Too High!'
            score--
            document.querySelector('.score').textContent = score
        } else if (guess < secret) {
            document.querySelector('.message').textContent = 'Too Low!'
            score--
            document.querySelector('.score').textContent = score
        }
    }
}

document.querySelector('.again').addEventListener('click', reset)

function reset() {
    score = 20
    secret = Math.trunc((Math.random() * 20) + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?'

}