// // // ASSESSMENT 1: INTRO TO JAVASCRIPT
// // // Coding practical questions

// // // --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.
// const isB = (string) => {
//     for (let i = 0; i < string.length; i++) {
//         let letter = string[i]
//         if (letter === "B") {
//             return 'There is a B'
//         }
//         else {
//             return 'There is not a B'
//         }
//     }
// }

// const isB = (string) => {
//     let stringArray = string.split('')
//     if (stringArray.includes('B')) {
//         return 'There is a B'
//     }
//     else {
//         return 'There is not a B'
//     }
// }

const isB = (string) => {
    let stringArray = string.split('')
    return stringArray.includes('B') ? 'There is a B' : 'There is not a B'

}
console.log(isB(mantra));



// 1b. Write the code that determines if there is an 'x' in mantra.
// const isX = (string) => {
//     for (let i = 0; i < string.length; i++) {
//         let letter = string[i]
//         if (letter === "x") {
//             return 'There is an x'
//         }
//         else {
//             return 'There is not an x'
//         }
//     }
// }

const isX = (string) => {
    let stringArray = string.split('')
    return stringArray.includes('X') ? 'There is an X' : 'There is not an X'
}

console.log(isX(mantra))


// 1c. Write the code that determines if there is a 'v' in mantra.

// const isV = (string) => {
//     for (let i = 0; i < string.length; i++) {
//         let letter = string[i]
//         if (letter === "v") {
//             return 'There is a v'
//         }
//         else {
//             return 'There is not a v'
//         }
//     }
// }

const isV = (string) => {
    let stringArray = string.split('')
    return stringArray.includes('v') ? 'There is a v' : 'There is not a v'
}

console.log(isV(mantra));



// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

// const isLetter = (string, searchLetter) => {
//     string = string.toLowerCase()
//     for (let i = 0; i < string.length; i++) {
//         let currentLetter = string[i];
//         if (currentLetter === searchLetter) {
//             return `${searchLetter} is present in ${string}.`
//         }
//     }
//     return `${searchLetter} is not present in ${string}.`
// }


const letterExists = (string, letter) => {
    string = string.toLowerCase()
    letter = letter.toLowerCase()
    let stringArray = string.split('')
    return stringArray.includes(letter) ? `${letter} is present in ${string}` : `${letter} is not present in ${string}`

}

console.log(letterExists(mantra, 'o'));



// // ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

// const isLonger = (var1, var2) => {
//     if (var1.length > var2.length) {
//         return var1
//     }
//     else {
//         return var2
//     }
// }

const isLonger = (var1, var2) => {
    return var1.length > var2.length ? var1 : var2
}

console.log(isLonger(myDog, myCat))


// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

// const makeArray = (arg1, arg2) => {
//     return [arg1, arg2];
// }

const makeArray = (arg1, arg2) => [arg1, arg2]

console.log(makeArray(myDog, myCat))



// 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"

const makeLowercase = (var1, var2) => {
    return `${var1.toLowerCase()} ${var2.toLowerCase()}`
}

console.log(makeLowercase(myDog, myCat))




// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.


const logLetters = (message) => {
    for (let i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
}

logLetters(myMessage);




// 3b. Write the code that logs each letter of the message using map.

const mapLetters = (message) => {
    let lettersArray = message.split('')
    lettersArray.map(letter => console.log(letter))
}

mapLetters(myMessage)



// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

const stretchLogLetters = (message) => {
    let lettersArray = message.split('')
    while (lettersArray.length > 0) {
        console.log(lettersArray[0])
        lettersArray.shift();
    }
}

stretchLogLetters(myMessage)



// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

const superStretchLogLetters = (message) => {
    let lettersArray = message.split('')
    lettersArray.forEach(element => console.log(element))
}

superStretchLogLetters(myMessage)




// // ---------------------------- Consider the following variable:

 var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

const noVowels = (string) => {
    let stringArray = string.split('')
    let noVowelsArray = stringArray.filter(letter => letter !== 'a').filter(letter => letter !== 'e').filter(letter => letter !== 'i').filter(letter => letter !== 'o').filter(letter => letter !== 'u')
    return noVowelsArray.join('')
}

console.log(noVowels(testString))





// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.
let testArray = ['abcd', 'abcd']

const noVowelsStretch = (variable) => {
    if (typeof variable !== 'string') {
        return 'please enter a string'
    } else {
        let stringArray = variable.split('');
        let noVowelsArray = stringArray.filter(letter => letter !== 'a').filter(letter => letter !== 'e').filter(letter => letter !== 'i').filter(letter => letter !== 'o').filter(letter => letter !== 'u')
        return noVowelsArray.join('');
        
    }

}


console.log(noVowelsStretch(testArray))





// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// // 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

// const findCats = array => {
//     let catsArray = [];
//     for (let i = 0; i < array.length; i++) {
//         let animalObject = array[i]
//         if (animalObject.animal === 'cat') {
//             catsArray.push(animalObject);
//         }
//     }
//     return catsArray
// }

const findCats = array => {
    return array.filter(animalObject => animalObject.animal === 'cat')
}

console.log(findCats(toonimals))



//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"


const noCats = (array) => {
    let noCatsArray = array.filter(animalObject => animalObject.animal !== 'cat')
    return noCatsArray.forEach(element => console.log(element.name))
}

noCats(toonimals)



//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

const makeSentence = (array) => {
    array.forEach(animalObject => console.log(`${animalObject.name} is a ${animalObject.animal}`))
}

makeSentence(toonimals);