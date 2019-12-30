function makeNumber(a) {
    let el = a;
    let numEl = '';
    for (let index in el) {
        if ( parseInt(el[index]) || el[index] === '0' ) {
            numEl += el[index];
        }
    }
    if (numEl === ''){
        return '';
    } else {
        return numEl;
    }
}
function countNumbers (numEl) {
    let numArr = makeNumber(numEl).split('');
    let counter = {};
    for (let i of numArr) {
        if (counter[i] === undefined) {
            counter[i] = 1;
        } else {
            counter[i] = counter[i]+1;
        }
    }
    console.log(counter);
}
countNumbers('jdj04606');