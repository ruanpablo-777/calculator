let input = document.getElementById('input-number')
let showExpression = document.getElementById('res')
let array = ['']

function clickNumber(value) {
    
    array[array.length - 1] += value
    input.value = array[array.length - 1]
    console.log(array)
    console.log()
    document.addEventListener('click', () => {
        array[0] != ''? document.getElementById('AC').innerHTML = 'C' : document.getElementById('AC').innerHTML = 'AC'

    })

}

function addition() {
    let lastElementArray = array[array.length - 1]
    lastElementArray == "" ? lastElementArray = "" : array.push('+', '') 
}
function subtraction() {
    input.value == '0' || array[array.length - 1] != "" ?array.push('-', '') : console.log(array)
}

function multiplication() {
    array[array.length - 1] == "" ? array[array.length - 1] = "" : array.push('*', '')
    
}
function division() {
    array[array.length - 1] == "" ? array[array.length - 1] = "" : array.push('/', '')
}

function deleteC() {
    input.value = '0'
    let filter = array.filter(array => array == '')
    array = filter
    array.push("")
    showCalcule('')
    console.log(array)
}

function plusMinus() {
    let lastElementArray = array[array.length - 1]
    if (Math.sign(lastElementArray) == -1 || Math.sign( array[array.length - 3]) == -1) {
        array[array.length - 1] = eval((`${lastElementArray} * (- 1)`).toString())
        input.value = array[array.length - 1]
        console.log('pstv',lastElementArray)
        console.log(array[array.length - 3])
    } else {
        array[array.length - 1] = eval((`${lastElementArray} * (- 1)`).toString())
        input.value = array[array.length - 1]
        console.log('pstv',lastElementArray)
    }
}

function percentage() {
    if (array[array.length - 1] == "") {
        array[array.length - 1] = ""
    } else {
        let percentageResult = (array[array.length - 1] / 100).toString()
        array[array.length - 1] = percentageResult
        input.value = percentageResult
        console.log('perce', (array[array.length - 1] / 100).toFixed(1))

        console.log(array)
        console.log('value ', input.value)
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

document.addEventListener('keydown', (e) => {
   e.preventDefault()
    
})



