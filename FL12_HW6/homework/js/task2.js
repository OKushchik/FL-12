let a = Number(prompt('Please enter A side',''));
let b = Number(prompt('Please enter B side',''));
let c = Number(prompt('Please enter C side',''));
if ( a + b <= c || b + c <= a || c + a <= b || a <= 0 || b <= 0 || b <= 0 ||
    isNaN(a) || isNaN(b) || isNaN(c) ){
    console.log("Triangle doesn't exist");
} else if (a === b && b !== c || b === c && a !== c || a === c && b !== c) {
    console.log('Isosceles triangle');
} else if (a === b && b === c){
    console.log('Equilateral triangle');
} else {
    console.log('Scalene triangle');
}
