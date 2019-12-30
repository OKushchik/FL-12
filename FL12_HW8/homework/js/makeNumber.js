function makeNumber(a) {
    let el = a;
    let numEl = '';
    for (let index in el) {
        if ( parseInt(el[index]) ) {
            numEl += el[index];
        }
    }
    if (numEl === ''){
        console.log('');
    } else {
        console.log(numEl);
    }
}
makeNumber('erer384jjjfd123'); //=>384123
makeNumber('123098h76gfdd'); //=>12309876
makeNumber('ijifjgdj'); //=> should return empty string ->''
