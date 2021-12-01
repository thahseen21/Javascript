// Our functions here{
function exclamationMarks(words) {
    return words.map(word => word.replace('.', '!!!'))
}

function upperFirstChar(words) {
    return words.map(word => {
        return `${word[0].toUpperCase()}${word.substr(1)}`
    })
}

function words(text) {
    return String(text)
        .toLowerCase()
        .split(/\s/)
}

function shortUpper(words) {
    return words.map(word => {
        if (word.length < 5) {
            return word.toUpperCase()
        } else {
            return word
        }
    })
}

function createText(array) {
    return array.join(' ')
}

//}
function compose(...fns) {
    return function composed(value) {
        let listOfFunctions = fns.slice()
        while (listOfFunctions.length > 0) {
            value = listOfFunctions.pop()(value)
        }

        return value
    }
}

const text = 'Hello! My name is Damien and I love Javascript. Make potato exciting.'

const upperLessThan5 = compose(createText, shortUpper, words)
const compose3 = upperLessThan5(text)

const exclamationFirstCharUpper = compose(createText, upperFirstChar, exclamationMarks, words)
const compose4 = exclamationFirstCharUpper(text)

const compose5 = compose(createText, upperFirstChar, shortUpper, exclamationMarks, words)('hey my name thahseen and just now i got vaccinated ..thank you for listening')

console.log(compose3)
console.log(compose4)
console.log(exclamationFirstCharUpper)
console.log(compose5)

