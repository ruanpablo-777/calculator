let res = document.getElementById('input-number')

let array = ['']
function clickNumber(value) {
    array[array.length - 1] += value
    res.innerHTML = array[array.length - 1]
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
    array.push('*', '')
    console.log(array)
}
function division() {
    array.push('/', '')
    console.log(array)
}

function deleteC() {
    res.innerHTML = ''
    let filter = array.filter(array => array == '')
    array = filter
    array.push("")
    console.log(array)
}

function operation() {
    const initialValue = ''
    const result = array.reduce((acumulator, currentValue) => acumulator + currentValue, initialValue)
    let evalOperation = eval(result).toString()

    res.innerHTML = evalOperation
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


}