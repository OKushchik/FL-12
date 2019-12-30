function getMin (a,b,c) {
    let arr = [a,b,c];
    let arrMin = arr[0];
    for (let i=1; i<arr.length; i++){
        if (arr[i] < arrMin) {
            arrMin = arr[i];
        }
    }
    console.log(arrMin);
}
getMin(3, 0, -3);