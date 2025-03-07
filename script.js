let input = document.getElementById('input-number')
let showExpression = document.getElementById('res')

let array = ['']
function clickNumber(value) {
    array[array.length - 1] += value
    input.value = array[array.length - 1]
    console.log(array)
}

function addition() {
    if (array[array.length - 1] == "") {
        array[array.length - 1] = ""
    } else {
        array.push('+', '')
        console.log(array)
    }
}
function subtraction() {
    if (array[array.length - 1] == "") {
        array[array.length - 1] = ""
    } else {
        array.push('-', '')
        console.log(array)
    }
}
function multiplication() {
    if (array[array.length - 1] == "") {
        array[array.length - 1] = ""
    } else {
    array.push('*', '')
    console.log(array)
    }
}
function division() {
    if (array[array.length - 1] == "") {
        array[array.length - 1] = ""
    } else {
    array.push('/', '')

    console.log(array)
    }
}

function deleteC() {
    input.value = '0'
    let filter = array.filter(array => array == '')
    array = filter
    array.push("")
    showCalcule('')
    console.log(array)
}

function percentage() {
    if (array[array.length - 1] == "") {
        array[array.length - 1] = ""
    } else {
    array.push('/', '100')
    input.value += '%'

    console.log(array)
    console.log('value ',input.value)
    }
}

function operation() {
    const initialValue = ''
    const result = array.reduce((acumulator, currentValue) => acumulator + currentValue, initialValue)
    let evalOperation = eval(result).toString()

    input.value = evalOperation
    console.log('result', result)
    let cleanArray = array.filter(array => array == '')
    array = cleanArray
    array.push(evalOperation)

    if (evalOperation == '0') {
        let cleanArray = array.filter(array => array == '')
        array = cleanArray
        array.push('')
    }

    console.log(array)
    showCalcule(result)

}

function showCalcule(expression) {
    showExpression.innerHTML = expression
}