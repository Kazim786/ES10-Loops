const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let greatest = 0
  for (let i = 0; i < arr.length; i++) {
    if (greatest < arr[i]) {
      greatest = arr[i]
    } 
    return console.log( ` This is the highest ${greatest}`);
  }
}
console.log(biggestNumberInArray(array));




function biggestNumberInArray2(arr) {

}

function biggestNumberInArray3(arr) {

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
// amazonBasket = {
//   glasses: 1,
//   books: 2,
//   floss: 100
// }

// function checkBasket(basket, lookingFor) {

// }


const amazonBaskettt = {
  glasses: 1,
  books: 2,
  floss: 100
}


//In parameter you put in the basket that you want to check and the item that you are looking for
function checkBasket(basket, lookingFor){
//The item in the for in loop takes the value of each item in the basket and the if statement compares them to the lookingFor string that you passed in
  for(item in basket){
    if(item === lookingFor){
      console.log(`${lookingFor} is in your basket`)
    } else{
      console.log(`${lookingFor} does not exist in your basket`)
    }
  }}
  checkBasket(amazonBaskettt, jewelry)