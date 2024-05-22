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


let userNumber = null
let sum = 0
while (true) {
    userNumber = parseFloat(window.prompt('Enter a number'))
    if (userNumber == 0 || userNumber == 100) {
        console.log('emshy yla etl3 brra');
        break
    } else if (userNumber == NaN) {
        console.log('d55l rqm 3edel');
        break
    }
    else {
        sum += userNumber
        console.log(sum);
        if(sum>100){
            console.log('exceeded');
            break
        }
    }
}
