const numbers = document.querySelectorAll('.numbers')
const mainDisplay = document.querySelector('#display')
const secDisplay = document.getElementById('display2')
const resulDisplay = document.getElementById('display3')
const dot = document.querySelector('.dot')
const operations = document.querySelectorAll('.operations')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')
const memory = document.querySelector('.memory')

let memDisplay1 = ''
let memDisplay2 = ''
let result = 0
let alreadyDot = false
var lastDigit = ''

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !alreadyDot) {
            alreadyDot=true
        } else if (e.target.innerText === '.' && alreadyDot) {
            return}
        if (mainDisplay.innerText == result) {
            memDisplay1 = ''
        }
        memDisplay1 += e.target.innerText
        mainDisplay.innerText = memDisplay1
    })
})

operations.forEach(symbol => {
    symbol.addEventListener('click', (e) => {
        lastDigit = memDisplay1[memDisplay1.length-1]
        if (lastDigit === '+' || lastDigit === '-' || lastDigit === '/' || lastDigit === '*' ) {return}
        memDisplay1 += e.target.innerText
        mainDisplay.innerText = memDisplay1
        alreadyDot = false
    })
})

equal.addEventListener('click', () => {
    if (mainDisplay.innerText == result) {return}
    memDisplay2 = memDisplay1
    secDisplay.innerText = memDisplay2
    result = eval(memDisplay2)
    memDisplay1 = result
    mainDisplay.innerText = result
    resulDisplay.innerText = result

})

clear.addEventListener('click', () => {
    memDisplay1 = ''
    memDisplay2 = ''
    mainDisplay.innerText = 0
    secDisplay.innerText = 0
    resulDisplay.innerText = 0
})

del.addEventListener('click', () => {
    memDisplay1 = memDisplay1.slice(0, -1)
    mainDisplay.innerText = memDisplay1
})

memory.addEventListener('click', () => {
    lastDigit = memDisplay1[memDisplay1.length-1]
    if (lastDigit === '+' || lastDigit === '-' || lastDigit === '/' || lastDigit === '*' ) {
    memDisplay1 += result
    mainDisplay.innerText = memDisplay1
    }
})

