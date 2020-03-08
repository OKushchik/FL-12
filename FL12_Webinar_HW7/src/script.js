import Item from './item'
import './css/style.css'
import './css/scss.scss'
import './css/less.less'
import Stone from './img/stone_PNG13593.png'
import Scissors from './img/4715.600.png'
import Paper from './img/paper_sheet_PNG7250.png'
let random;
let win = 0;
let lose = 0;
document.querySelector('.win span').innerHTML = win;
document.querySelector('.lose span').innerHTML = lose;
document.querySelector('.res').onclick = function () {
    win = 0;
    lose = 0;
    document.querySelector('.win span').innerHTML = win;
    document.querySelector('.lose span').innerHTML = lose;
};

const rock = new Item('Rock',Stone,0);
const scissors = new Item('Scissors',Scissors,1);
const paper = new Item('Paper',Paper,2);
let block = document.querySelector('.block');
let out ='';
out = out + rock.draw();
out = out + scissors.draw();
out = out + paper.draw();
block.innerHTML = out;

let button = document.querySelectorAll('.click');
for (let i = 0; i<button.length; i++){
    button[i].onclick = function () {
        let result;
        let res;
        random = Math.floor(Math.random() * 3);
        if (random === 0) {
            if (button[i].getAttribute('data-num') === '0' ) {
                result = 'Equal,  Rock vs Rock';
                alert(result)
            } else if (button[i].getAttribute('data-num') === '1' ){
                res = 'lose';
                result = 'you lose, Scissors vs Rock';
                alert(result)
            } else {
                res = 'win';
                result = 'you win, Paper vs Rock';
                alert(result)
            }
        }
        if (random === 1) {
            if (button[i].getAttribute('data-num') === '0' ) {
                res = 'win';
                result = 'you win, Rock vs Scissors';
                alert(result)
            } else if (button[i].getAttribute('data-num') === '1' ){
                result = 'Equal, Scissors vs Scissors';
                alert(result)
            } else {
                res = 'lose';
                result = 'you lose, Paper vs Scissors ';
                alert(result)
            }
        }
        if (random === 2) {
            if (button[i].getAttribute('data-num') === '0' ) {
                res = 'lose';
                result = 'you lose, Rock vs Paper';
                alert(result)
            } else if (button[i].getAttribute('data-num') === '1' ){
                res = 'win';
                result = 'you win, Scissors vs Paper';
                alert(result)
            } else {
                result = 'equal, Paper vs Paper';
                alert(result)
            }
        }
        if (res === 'win') {
            win = win + 1;
            resultat();
            document.querySelector('.win span').innerHTML = win;
        }
        if (res === 'lose') {
            lose = lose + 1;
            resultat();
            document.querySelector('.lose span').innerHTML = lose;
        }
    }

}
document.querySelector('.reset').onclick = function () {
    win = 0;
    lose = 0;
}
 function resultat() {
     if(win === 3) {
         alert('YOU WIN');
         win = 0;
         lose = 0;
         document.querySelector('.win span').innerHTML = win;
         document.querySelector('.lose span').innerHTML = lose;
     }
     if(lose === 3) {
         alert('YOU LOSE');
         win = 0;
         lose = 0;
         document.querySelector('.win span').innerHTML = win;
         document.querySelector('.lose span').innerHTML = lose;
     }
 }