let res = document.getElementById('input-number')


let array = ['']
function clickNumber(value) {


    
   array[array.length - 1] += value
   res.innerHTML =array[array.length -1]
   console.log(array)
    
}

function addition() {
    if(array[array.length- 1] == "") {
        array[array.length - 1] = ""
    } else {
    array.push('+','')
    console.log(array)
    }
}
function subtraction() {
    array.push('-','')
    console.log(array)

}
function multiplication() {
    array.push('*','')
    console.log(array)

}
function division() {
    array.push('/','')
    console.log(array)

}

function deleteC() {
    res.innerHTML = ''
   
    console.log(array)
   
}

function operation() {
    array[1]
    let operati = ''
    let lastIndex = array[array.length - 1]
    for(let i = 0; i < array.length; i++) {
        operati += array[i]
    }
    res.innerHTML = eval(operati)
    array.push(eval(operati).toString())
    console.log(array)
    let filter = array.filter(array => array != lastIndex) 
    console.log(filter)
    console.log(lastIndex)
    arra

}