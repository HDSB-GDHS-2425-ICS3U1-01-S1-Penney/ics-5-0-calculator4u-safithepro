// Safeer Ahmed 
// Date: September 16, 2024
// Safeer's Calculator

console.log("Calculator")
let operation = prompt("What operation will you use? +,-,/,*, square, square root, unit converter")
if (operation == "square") {
    let squared = parseFloat(prompt("What number do you want squared?"))
    console.log(squared * squared);
} else if (operation == "square root") {
    let nsr = parseFloat(prompt("What number do you want rooted?"))
    console.log(Math.sqrt(nsr))
}
if (operation == "unit converter") {

    // Variables represneting quanity of number, unit amount in, and what to convert to
    let unitAmount = parseFloat(prompt("What is the quanitiy of your number?"))
    let unitIn = prompt("What is your amount in? (mm, cm, m, km)")
    let unitInto = prompt("What do you want to cover to? (mm, cm, m, km)");

    // Various unit conversions with cm, m, km and mm
    if (unitIn == "mm" && unitInto == "cm") {
        console.log(unitAmount / 10)
    } else if (unitIn == "mm" && unitInto == "m") {
        console.log(unitAmount / 1000)
    } else if (unitIn == "mm" && unitInto == "km") {
        console.log(unitAmount / 1000000)
        if (unitIn == "cm" && unitInto == "m") {
            console.log(unitAmount / 100)
        }
    } else if (unitIn == "cm" && unitInto == "km") {
        console.log(unitAmount / 100000)
    } else if (unitIn == "cm" && unitInto == "mm") {
        console.log(unitAmount * 10)
        if (unitIn == "km" && unitInto == "m") {
            console.log(unitAmount * 1000)
        }
    } else if (unitIn == "km" && unitInto == "cm") {
        console.log(unitAmount * 100000)
    } else if (unitIn == "km" && unitInto == "mm") {
        console.log(unitAmount * 1000000)
        if (unitIn == "m" && unitInto == "mm") {
            console.log(unitAmount * 1000)
        }
    } else if (unitIn == "m" && unitInto == "cm") {
        console.log(unitAmount * 100)
    } else if (unitIn == "m" && unitInto == "km") {
        console.log(unitAmount / 1000)

    }

} else {
    // Operations +,-,/,* and asking the first and second value
    let value1 = parseFloat(prompt("What is your first value?"))
    let value2 = parseFloat(prompt("What is your second value?"))
    if (operation == "+") {
        console.log(value1 + value2);
    } else if (operation == "-") {
        console.log(value1 - value2);
    } else if (operation == "/") {
        console.log(value1 / value2);
    } else if (operation == "*") {
        console.log(value1 * value2);
    }
}
