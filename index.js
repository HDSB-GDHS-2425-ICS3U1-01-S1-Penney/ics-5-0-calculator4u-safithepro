console.log("Calculator")

let operation = prompt("What operation will you use? +,-,/,*,")
let value1 = parseFloat(prompt("What is your first value?"))
let value2 = parseFloat(prompt("What is your second value?"))

 if (operation == "+") {
   
    console.log(value1 + value2) 
} else if (operation == "-"){
    
    console.log(value1 - value2)
} else if (operation =="/"){
    
    console.log(value1 / value2)
} else if (operation == "*"){
    console.log(value1 * value2)
}
