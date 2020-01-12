/////Task 1
function convert (...args){
   for (let i=0; i<args.length; i++){
       if (typeof args[i] === 'string') {
           args[i] = +args[i]
       } else if (typeof args[i] === 'number') {
           args[i] = args[i].toString();
       }
   }
   console.log(args);
}
convert('1', 2, 3, '4'); // [1, '2', '3', 4]
/////Task 2
function executeforEach(arr,callback){
    let newArr;
    for (let i=0; i < arr.length; i++){
        newArr = [];
        let newArrEl = callback(arr[i]);
        newArr.push(newArrEl);
    }
    console.log(newArr);
}
executeforEach([1,2,3], function(el) {
 console.log(el * 2) 
});
/////Task 3
function mapArray (arr,callback) {
    for (let i=0; i < arr.length; i++){
        if (typeof arr[i] === 'string') {
            arr[i] = +arr[i]
        }
    }
    let roots = arr.map(callback);
    console.log(roots);
}
mapArray([2, '5', 8], function(el) {
 return el + 3 
}); // returns [5, 8, 11]
/////Task 4
function filterArray (arr,callback){
    let roots = arr.filter(callback);
    console.log(roots);
}
filterArray([2, 5, 8], function(el) {
 return el % 2 === 0 
});// returns [2, 8]
/////Task 5
function flipOver (str){
    let arr = str.split('');
    let strReverse = arr.reverse();
    strReverse = strReverse.join('');
    console.log(strReverse);
}
flipOver('hey world'); // 'dlrow yeh'
/////Task 6
function makeListFromRange(arr) {
    let first = arr[0];
    let last = arr[1];
    let arrBlock = [];
    for (let i = first; i <= last; i++){
        arrBlock.push(i);
    }
    console.log(arrBlock);
}
makeListFromRange([2, 7]); // [2, 3, 4, 5, 6, 7]
/////Task 7
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys() {
    let actorName = [];
    for (let i = 0; i < actors.length; i++) {
            actorName[i]=actors[i].name;
    }
    console.log(actorName);
}
getArrayOfKeys(actors, name); // [‘tommy’, ‘lee’]
/////Task 8
function substitute (arr) {
    let roots = arr.map(function(el) {
 if (el<30) {
         el = '*';
        return el;
    } else {
        return el;
    }
    });
    console.log(roots);
}
substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']
/////Task 9
const date = new Date(2019, 0, 2);
function getPastDay (date,count){
    let day = date.getTime();
    let dayOne = 86400000;
    let countDay = dayOne*count;
    let chooseDayMs = day - countDay;
    let chooseDay = new Date();
    chooseDay.setTime(chooseDayMs);
    let dayNum = chooseDay.getDate();
    let dayMonth = chooseDay.getMonth();
    let month = [];
    month[0] = 'Jan';
    month[1] = 'Feb';
    month[2] = 'Mar';
    month[3] = 'Apr';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'Aug';
    month[8] = 'Sept';
    month[9] = 'Oct';
    month[10] = 'Nov';
    month[11] = 'Dec';
    dayMonth = month[dayMonth];
    let dayYear = chooseDay.getFullYear();
    console.log(dayNum +', ('+ dayNum + ' '+ dayMonth + ' '+ dayYear + ')');
}
getPastDay(date, 1); // 1, (1 Jan 2019)
getPastDay(date, 2); // 31, (31 Dec 2018)
getPastDay(date, 365); // 2, (2 Jan 2018)
/////Task 10
function formatDate(dat) {
    let dateDay = dat.getDate();
    let dateMonth = dat.getMonth();
    dateMonth = dateMonth+1;
    let dateYear = dat.getFullYear();
    let dateHours = dat.getHours();
    let dateMinutes = dat.getMinutes();
    let fullDate = dateYear + '/' + dateMonth + '/' + dateDay + ' ' + dateHours + ':' + dateMinutes;
    console.log(fullDate);
}
formatDate(new Date('6/15/2018 09:15:00')); // "2018/6/15 09:15"
formatDate(new Date()); // "2020/1/7 12:56" // gets current local time
