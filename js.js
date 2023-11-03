//Firday: 3rd Highest Number in Array
//Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

// creat a fun with name findThirdHighest and accept one parameter
// use Number.NEGATIVE_INFINITY method to initiallize the first and second and third variables  the the lowest values comparing with input numbers
//for loop to loop through the array and initialize the first, second and third variables depending on our input values
// need if to check if input number is greater than first var then make it as the first heighest num
//else if statment to check if the number is greater than second and smaller than first to make it in the second position
// else statemnet , if input number is smaller than second and first and greater than third then make it the third one
// after checking all the numbers in array return the third number 
//call the function and store it in a var


function findThirdHighest(arr) {
    
    let first = Number.NEGATIVE_INFINITY; // Initialize with the smallest possible value
    let second = Number.NEGATIVE_INFINITY;
    let third = Number.NEGATIVE_INFINITY;
  
    for (let num of arr) {
      if (num > first) {
        third = second;
        second = first;
        first = num;
      } else if (num > second && num < first) {
        third = second;
        second = num;
      } else if (num > third && num < second) {
        third = num;
        
      }
    }
  
    return third;
    
  }
  
  const numbers = [10, 20, 5, 40, 30, 50];
  const thirdHighestN = findThirdHighest(numbers);
  
  console.log("Third Highest:", thirdHighestN);


// Another solution using bubble sorting and defined and last third heighest number:
// define an array of numbers
// creat a for loop to loop through the whole array's numbers
// creat another for loop thatloop and swap the numbers to sort the array from min to max
// creat an if statment to swap 
// creat a var max and give it an intial value arr[i]
// refer the next element to be the previous one if the if condition is true
// refer the previous to be the next if the if is true
// print the new arr
// print the third heighest num 
  let arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
    for (let pass = 0; pass <arr.length ; pass++) {
    for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // Swap arr[i] and arr[i + 1]
      const max = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = max;  }
    } 
}

    console.log(arr)
    const thirdHighest = arr[arr.length - 3];
    console.log("Third Highest Number:", thirdHighest);

    