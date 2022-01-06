let strs = "ADDA 2".split(' ');
function getTimes(strs) {
    let str = strs[0];
    let m = Number(strs[1]);
    let len = str.length;
    let preSum = new Array(len).fill(0);
    for (let i = 2; i <= len; i++) {
        let t1 = Number(str[i-1].charCodeAt()-'A'.charCodeAt());
        let t2= Number(str[i-2].charCodeAt()-'A'.charCodeAt());
        let min = Math.min(Math.abs(t1-t2),Math.abs(t2-t1));
        preSum[i] = preSum[i-1]+min;
    }
    let res = preSum[len];
    for (let i = m; i <= len; i++) {
        let l = i-m;
        res = Math.min(res,(preSum[len]-preSum[i])+preSum[l]+m);
    }

    return res+len;
}
let ans =getTimes(strs);
console.log(ans);