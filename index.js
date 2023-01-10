
let number = 125;
console.log(typeof number);

let newNumber=number.toString();
console.log(typeof newNumber);

// console.log(typeof number)
// console.log(typeof newNumber);

function reverse(z) {
  let bag1 = "";
  let bag2 = "";
  for (let i = 0; i <= newNumber.length-1; i++) {
    bag1 = bag1 + newNumber[i];
  }

  for (let i = newNumber.length-1; i >= 0; i--) {
    bag2 = bag2 + newNumber[i];
  }
 


  if (bag1 === bag2) {
    console.log("Palindrome");
  } else {
    console.log("Not a palindrome");
  }
 
}
reverse(newNumber);
