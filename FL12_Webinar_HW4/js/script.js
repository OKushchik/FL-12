// Task-1
const array = [1,2,3,4,56,7,8,76,5,241,5,356,567,2];
let maxElement = (arr) => {
    return  Math.max(...arr);
};
console.log(maxElement(array));

// Task-2
const array = [1,2,3];
const copiedArray = [...array];
console.log(array,copiedArray);
console.log(array===copiedArray);

// Task-3
let uniq = 0;
function addUniqueId (obj) {
    uniq ++;
    return {
        obj,
        id: Symbol(uniq)
    }

}
console.log(addUniqueId({name: 123}));
console.log(addUniqueId({name: 245}));

// Task-4
const oldObj = {name: 'Someone', details:{id:1, age:11, university:'UNI'}};
let regroupObject = (oldObj) => {
    let newObj = {
        university:oldObj.details.university,
        user: {
            age:oldObj.details.age,
            firstName:oldObj.name,
            id:oldObj.details.id
        }
    };
    return newObj;
};
console.log(regroupObject(oldObj));

// Task-5
const array = [1,1,23,3,4,5,6,5,4,23,2,1,1,1,1,1];
 let findUniqueElements = (array) => {
     let newArr = [ ...new Set(array) ];
     return newArr;
 };
console.log(findUniqueElements(array));

// Task-6
const phoneNumber = '0123456789';
let newPhoneNumber = phoneNumber;
let hideNumber = (phoneNumber) => {
    for (let i = 0; i<phoneNumber.length-4; i++){
        newPhoneNumber = newPhoneNumber.replace(newPhoneNumber[i], '*');
    }
    return newPhoneNumber
};
console.log(phoneNumber);
console.log(hideNumber(newPhoneNumber));

// Task-7
const error = () => { throw Error('Missing property') };
const add = (a,b) => {
    if (a === undefined || b === undefined) {
        error();
    } else {
        let res = a + b;
        return res;
    }

};
console.log(add (1,3));

// Task-8
let url = "https://jsonplaceholder.typicode.com/users";
function sendRequest() {
   return fetch(url)
        .then(response => response.json())
        .then(result => {
            result.sort();
            for (let i = 0; i<result.length; i++){
                console.log (result[i].name);
            }
        })
        .catch(err => console.log(`ERROR!!!: ${err}`))
}
console.log(sendRequest());

// Task-9
async function fetchAsync() {
    try {
        let request = await fetch("https://jsonplaceholder.typicode.com/users");
        let result = await request.json();
        result.sort();
        for (let i = 0; i<result.length; i++){
                console.log (result[i].name);
            }
    }
    catch (err) {
        console.log(`ERROR!!!: ${err}`);
    }
}
console.log (fetchAsync());
