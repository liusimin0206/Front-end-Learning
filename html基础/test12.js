function digitalRoot(num) {
    do {
        num = sum(num)
    }
    while (num > 10)
    return num
}
console.log(digitalRoot(493193));

function sum(num) {
    let sum = 0
    for (let i of String(num)) {
        sum += Number(i)
    }
    return sum
}