/*
 * @Author: liusimin
 * @Date: 2021-04-09 12:19:02
 * @LastEditors: your name
 * @LastEditTime: 2021-04-23 17:38:16
 * @Description: file content
 */
// 利用 WeakMap 解决循环引用
let map = new WeakMap()
function deepClone(obj) {
    if (obj instanceof Object) {
      
        let newObj
        if (obj instanceof Array) {
            newObj = []
        } else if (obj instanceof Function) {
            newObj = function () {
                return obj.apply(this, arguments)
            }
        } else if (obj instanceof RegExp) {
            // 拼接正则
            newobj = new RegExp(obj.source, obj.flags)
        } else if (obj instanceof Date) {
            newobj = new Date(obj)
        } else {
            newObj = {}
        }
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = deepClone(obj[key])
            }
        }
        return newObj
    }
    return obj
}