let inp = document.getElementById("enterCard");
let btn = document.getElementById("btnAdd");
let val = '';
let res = '';
let chosenCard = '';
let cards = document.getElementById("cards");
let arrNum;
let onlyNum;
let arrNumber = [];

cards.onchange= function (){
  chosenCard = cards.value;
}

btn.addEventListener('click',  function () {
  describe("Cards", function() {
    if (chosenCard === ''){
      chosenCard = 'visa'
    }
    val = inp.value;
    switches();
    console.log(res)
    it('should ', function () {
      expect(res).toBe(true)
    });
  });
})


//////////////
function switches() {
  showOnlyNum();
  let fourLetters;
  let lengthArr = arrNumber.length;
  fourLetters = arrNumber.splice(0,4).join('');
  switch (chosenCard) {
    case 'visa':
      if (lengthArr === 12 && fourLetters === '4111') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'solo':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '6334') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'masterCard':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '5500') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'americanExpress':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '3400') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'carteBlanche':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '3000') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'discover':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '6011') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'dinersClub':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '3852') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'enRoute':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '2014') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'jsb':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '3530') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'switch':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '4903') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'laser':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '6304') {
        res = true;
      } else {
        res = false;
      }
      break;
    case 'spamNumber':
      fourLetters = val.split('').splice(0,4).join('');
      if (lengthArr === 12 && fourLetters === '5490') {
        res = true;
      } else {
        res = false;
      }
      break;
    default:
      res = false;
      break;
  }
}
///////////
function showOnlyNum() {
  arrNum = val.split('');
  onlyNum = arrNum.map((n)=>{
    n = Number(n);
    return n
  })
  for (let i = 0;i<onlyNum.length; i++){
    if (isNaN(onlyNum[i]) === false) {
      arrNumber.push(onlyNum[i])
    }
  }

}