function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
const listA = a[a.length-1];
const listB = b[b.length-1];
  // write your code here
  if (a[0] === b[0]){
    return true
  }else if (listA === listB) {
    return true
  }else {
    return false
  }
}

function endsMeet(values, n) {
  // write your code here
  let array = []

    if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
      return array;
    } else {
        if (n === 0) {
          return values;
        }

        for (let i = 0; i < n; i++) {
          if (values[i] !== undefined) {
            array.push(values[i])
          }
        }

        for (let i = n; i > 0; i--) {
          if (values[values.length - i] !== undefined) {
            array.push(values[values.length - i])
          }
        }
        return array;
    }
}

function difference(numbers) {
  // write your code here
  if (numbers == undefined || numbers < 1 || numbers.some(isNaN)) {
   return undefined;
 } else {

   let bigInteger = Math.max.apply(null, numbers)
   let smallInteger = Math.min.apply(null, numbers)

   let difference = bigInteger - smallInteger

   return difference
 }
}

function max(number) {
  // write your code here
  if (number == undefined || number <= 2 || number.some(isNaN)) {

    return undefined;

  } else if (number.length % 2 == 0) {

    return undefined;

  } else {
     let lastElement = number[number.length - 1]
     let middleElement = number[number.length - (Math.ceil(number.length / 2))]
     let firstElement = number[0]

     let array = [firstElement, middleElement, lastElement]

     let largestValue = Math.max.apply(null, array)

     return largestValue;
  }
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
