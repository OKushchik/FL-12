let a = prompt('Введите число А');
let b = prompt('Введите число B');
let c = prompt('Введите число C');
 if (isNaN(+a) === true || Number.isNaN(+b) === true || Number.isNaN(+c) === true) {
     console.log('Enter a number please');
 } else if ( a === '0'){
     console.log('A cant be 0');
 } else {
    let d = b*b-4*a*c;
     if (d<0){
         console.log('net kornej');
     } else if (b === '0' && c === '0') {
         console.log('x=0');
     } else if ( d>0) {
         let x1 = (-b + Math.sqrt(d))/2*a;
         let x2 = (-b - Math.sqrt(d))/2*a;
         console.log('X1='+x1+' X2='+x2) ;
     }
 }