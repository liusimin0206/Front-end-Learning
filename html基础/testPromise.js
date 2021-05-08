var p = {
    then: (resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000);
    }
}
var p1 = new Promise(
    (resolve, reject) => {
        resolve(p)
    }
)
p1.then((res) => {
    console.log(res);
})