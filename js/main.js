//? Problem 1.1
// let userMessage = window.prompt('Enter a message')
// for (let i = 1; i <= 6; i++) {
//     document.write('<h' + i + '>' + userMessage + '</h' + i + '>')
// }


// let userNumber = null
// let sum = 0
// while (userNumber !== 0) {
//     userNumber = parseFloat(prompt('Enter a number'))
//     if (userNumber == 0) {
//         console.log("You've Entered 0!");
//     }
//     else if (userNumber != NaN) {
//         sum += userNumber
//         console.log(sum);
//         if (sum > 100) {
//             console.log("You've exceeded 100!");
//             break
//         }
//     }
// }


//? Problem 1.2
// let userNumber = null
// let sum = 0
// while (true) {
//     userNumber = parseFloat(window.prompt('Enter a number'))
//     if (userNumber == 0 || userNumber == 100) {
//         console.log('emshy yla etl3 brra');
//         break
//     } else if (userNumber == NaN) {
//         console.log('d55l rqm 3edel');
//         break
//     }
//     else {
//         sum += userNumber
//         console.log(sum);
//         if (sum > 100) {
//             console.log('exceeded');
//             break
//         }
//     }
// }

//? Problem 1.2 Another Solution

// let userNumber = parseFloat(prompt('Enter Your Number'))
// let sum = 0

// while ((userNumber != 0 && userNumber <= 100) && sum <= 100) {
//     sum += userNumber
//     if (sum <= 100) {
//         userNumber = parseFloat(prompt('Enter Your Number'))
//         console.log(sum);
//     }
//     else if (sum > 100) {
//         console.log("You've exceeded 100");
//         console.log('Total sum is ' + sum);
//     }
// }

// ------
// if (userNumber == 0 && userNumber <= 100) {
//     sum += userNumber
//     while (sum <= 100) {
//         userNumber = parseFloat(prompt('Enter Your Number'));
//         sum += userNumber;
//         console.log(sum);
//     }

// }
// else {
//     userNumber == 0 ? console.log('0') : console.log('more than 100');;
// }



let userNumber;
let totalSum = 0;

do {
    userNumber = parseFloat(prompt("Enter a number (0 to stop):"))

    if (userNumber !== 0) {
        totalSum += userNumber;
        console.log('Total sum is equal to ', totalSum);
    }

} while (userNumber !== 0 && totalSum <= 100);

if (totalSum > 100) {
    console.log("The sum has exceeded 100.");
}

console.log(`The total sum of the entered values is: ${totalSum}`);