let input = document.getElementById('input-number')
let showExpression = document.getElementById('res')
let array = ['']


function clickNumber(value) {
    array[array.length - 1] += value
    input.value = array[array.length - 1]
    console.log(array)

    document.addEventListener('click', () => { // manipula o C resetando o valor do input
        array[0] != '' ? document.getElementById('AC').innerHTML = 'C' : document.getElementById('AC').innerHTML = 'AC'
    })
}

function addition() {
    let lastElementArray = array[array.length - 1]
    lastElementArray == "" ? lastElementArray = "" : array.push('+', '')
    console.log(array[1])

}
function subtraction() {
    input.value == '0' || array[array.length - 1] != "" ? array.push('-', '') : console.log(array)
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
}

function plusMinus() {
    let lastElementArray = array[array.length - 1]
    if (Math.sign(lastElementArray) == -1 || Math.sign(array[array.length - 3]) == -1) {
        array[array.length - 1] = eval((`${lastElementArray} * (- 1)`).toString())
        input.value = array[array.length - 1]
        console.log('pstv', lastElementArray)
        console.log(array[array.length - 3])
    } else {
        array[array.length - 1] = eval((`${lastElementArray} * (- 1)`).toString())
        input.value = array[array.length - 1]
        console.log('pstv', lastElementArray)
    }
}

function percentage() {
    if (array[array.length - 1] == "") {
        array[array.length - 1] = ""
    } else {
        let percentageResult = (array[array.length - 1] / 100).toString()
        array[array.length - 1] = percentageResult
        input.value = percentageResult
    }
}

function operation() {
    console.log(array)
    for(let i = 0; i < array.length; i++) {
        if(array[i] == "/" || array[i] == "*") {
            let x = new Big(array[i-1])
            let y = new Big(array[i+1])
            let resul = x.div(y)

            console.log("res",array[i-1], array[i], array[i+1])
            console.log(array[i])
            let remove = array.splice(i-1,3)
            console.log(remove)
            console.log("resul", resul.toString())
            array.splice(i-1, 0, resul.toString())
        }
        else if(array[i] == "*") {
            let x = new Big(array[i-1])
            let y = new Big(array[i+1])
            let resul = x.times(y)

            console.log("res",array[i-1], array[i], array[i+1])
            console.log(array[i])
            let remove = array.splice(i-1,3)
            console.log(remove)
            console.log("resul", resul.toString())
            array.splice(i-1, 0, resul.toString())
        }
        else if(array[i] == "-") {
            let x = new Big(array[i-1])
            let y = new Big(array[i+1])
            let resul = x.minus(y)

            console.log("res",array[i-1], array[i], array[i+1])
            console.log(array[i])
            let remove = array.splice(i-1,3)
            console.log(remove)
            console.log("resul", resul.toString())
            array.splice(i-1, 0, resul.toString())
        }
        else if(array[i] == "+") {
            let x = new Big(array[i-1])
            let y = new Big(array[i+1])
            let resul = x.plus(y)

            console.log("res",array[i-1], array[i], array[i+1])
            console.log(array[i])
            let remove = array.splice(i-1,3)
            console.log(remove)
            console.log("resul", resul.toString())
            array.splice(i-1, 0, resul.toString())
            console.log(resul.toString())
    
        }
    } 
    console.log(array)
    
    const initialValue = ''
    const result = array.reduce((acumulator, currentValue) => acumulator + currentValue, initialValue)
    input.value = result
    let cleanArray = array.filter(array => array == '')
    array = cleanArray
    array.push(array)

    if (array == '0') {
        let cleanArray = array.filter(array => array == '')
        array = cleanArray
        array.push('')
    }
    showCalcule(result)
}

function showCalcule(expression) { showExpression.innerHTML = expression }


// Prevent keyboard on mobile
input.addEventListener("keydown", (e) => {
    e.preventDefault(); // Prevent default focus behavior
});
input.addEventListener("focus", (e) => {
    e.preventDefault(); // Prevent default focus behavior
});

