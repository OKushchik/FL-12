let prize = 100;
let prizeHight = 200;
let two = 2;
let three =3;
let nine = 9;
let thirteen = 13;
let minusOne = -1;
let hundred = 100;
let twoHundred = 200;
let start = confirm('Do you want to play a game');
if ( start === false) {
    alert('You did not became a billionaire but can')
} else {
    let began = true;
    while (began) {
        let random = Math.floor(Math.random() * nine);
        for (let i = 3; i > 0; i--) {
            let userNumber = +prompt('Choose a roulette pocket number from 0 to 8 ' +
                '\n Attempts left - ' + Number(i) +
                '\n Total prize - 0$' +
                '\n Possible prize on current attempt - ' + prize + '$');
            if (userNumber === random) {
                let decideHight = confirm('Congratulation, you won! Your prize is:' + prize + '$.' +
                    ' Do you want to continue?');
                if (decideHight === false) {
                    alert('Thank you for you participation. Your prize is ' + prize + '$');
                    began = false;
                    break
                } else {
                    let random = Math.floor(Math.random() * thirteen);
                    for (let k = 3; k > 0; k--) {
                        let userNumber = +prompt('Choose a roulette pocket number from 0 to 12 ' +
                            '\n Attempts left - ' + Number(k) +
                            '\n Total prize -' + prize + '$' +
                            '\n Possible prize on current attempt - ' + prizeHight + '$');
                        if (random === userNumber) {
                            alert('Congratulation, you won! Your prize is:' + (prize + prizeHight) + '$.');
                            let decideStart = confirm('Do you want to play again');
                            if (decideStart === true){
                                i = minusOne;
                                prize = hundred;
                                prizeHight = twoHundred;
                                break;
                            } else {
                                i = minusOne;
                                began = false;
                                break
                            }
                        } else if (k === 1){
                            alert('Thank you for you participation. Your prize is 0$');
                            let decideStart = confirm('Do you want to play again');
                            if (decideStart === true){
                                i = minusOne;
                                prize = hundred;
                                break;
                            } else {
                                i = minusOne;
                                began = false;
                                break
                            }
                        } else {
                            prizeHight = prizeHight / two;
                        }
                    }
                }
            } else {
                if (i === 1) {
                    alert('Thank you for you participation. Your prize is 0$');
                    let decideStart = confirm('Do you want to play again');
                    if (decideStart === true) {
                        i = three;
                        prize = hundred;
                        break
                    } else {
                        began = false;
                    }
                } else {
                    prize = prize / two;
                }
            }
        }
    }
}