function isBigger(a,b) {
    return a>b;
}
isBigger(5, -1);

function isSmaller(a,b) {
    let reUse = isBigger(a,b);
    if (reUse === true) {
        console.log(false);
    } else {
        console.log(true);
    }
}
isSmaller(5,-1);

// function isBigger(a,b) {
//     return a>b;
// }
// function  isSmaller(a, b) {
//     return !isBigger(a, b)
// }
//
// isSmaller(5,-1);