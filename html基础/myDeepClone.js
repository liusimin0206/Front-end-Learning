var a = {
    a: {
        b: {
            c: 1, cc: [],fn:function(){}
        }
    }
}
function deepClone(obj) {
    if (!(obj instanceof Object)) {
        return obj
    }
    else {
        let newObj = {}
        if (obj instanceof Array) {
            newObj = []
        }
        else if (obj instanceof Function) {
            newObj = function () {
                return obj.apply(this, arguments)
            }
        } 
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = deepClone(obj[key])
            }
        }
        return newObj
    }
}
var aClone = deepClone(a);
console.log(a, aClone);