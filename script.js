let input = document.getElementById('input-number')
let showExpression = document.getElementById('res')
let array = ['']

function clickNumber(value) {
    array[array.length - 1] += value
    input.value = array[array.length - 1]
    input.style.color = 'white'
    input.style.fontSize = '80px'
}
document.addEventListener('click', () => { // manipula o C resetando o valor do input
    array[0] != '' ? document.getElementById('AC').innerHTML = 'C' : document.getElementById('AC').innerHTML = 'AC'
})

function addition() {
    let lastElementArray = array[array.length - 1]
    lastElementArray == "" ? lastElementArray = "" : array.push('+', '')
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
    input.style.color = 'white'
    input.style.fontSize = '80px'
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
    } else {
        array[array.length - 1] = eval((`${lastElementArray} * (- 1)`).toString())
        input.value = array[array.length - 1]
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
    while (array.length > 1) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == "/") {
                let x = new Big(array[i - 1])
                let y = new Big(array[i + 1])
                if (y == 0) {
                    array = ['']
                    input.style.color = 'red'
                    input.style.fontSize = '30px'
                    input.value = "Can't divide by 0"
                    showCalcule('')
                    return
                }
                let resul = x.div(y)
                let remove = array.splice(i - 1, 3)
                array.splice(i - 1, 0, resul.toString())

            } if (array[i] == "*") {
                let x = new Big(array[i - 1])
                let y = new Big(array[i + 1])
                let resul = x.times(y)

                let remove = array.splice(i - 1, 3)
                array.splice(i - 1, 0, resul.toString())
            }
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] == "-") {
                let x = new Big(array[i - 1])
                let y = new Big(array[i + 1])
                let resul = x.minus(y)

                let remove = array.splice(i - 1, 3)
                array.splice(i - 1, 0, resul.toString())

            } if (array[i] == "+") {
                let x = new Big(array[i - 1])
                let y = new Big(array[i + 1])
                let resul = x.plus(y).toString()

                let remove = array.splice(i - 1, 3)
                array.splice(i - 1, 0, resul)
            }
        }
    }
    input.value = array
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

