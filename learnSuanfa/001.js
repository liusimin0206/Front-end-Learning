var a = [1, 2, 3];

sum1 = (a, b) => a + b ;

function sum(a) {
    if (a.length == 0) {
        return 0;
    }
    else if (a.length == 1) {
        return a[0];
    }
    else return a[0] + (+sum(a.slice(1)));
}
console.log(sum1(1,2))

console.log(sum(a));
