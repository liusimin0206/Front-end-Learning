/*
 * @Author: liusimin
 * @Date: 2021-04-12 15:02:53
 * @LastEditors: your name
 * @LastEditTime: 2021-04-14 16:11:18
 * @Description: file content
 */

let obj = {
    a: "a",
    b: 'b'
}

function observable(obj) {
    if (typeof obj === 'object' && obj) {
        Object.keys(obj).forEach((key) => {
            let val = obj[key]
            let dep = new Dep()
            Object.defineProperty(obj, key, {
                get() {
                    dep.depend()
                    console.log(`get key${key}`)
                    return val
                },
                set(newVal) {
                    console.log(`set key${key}`)
                    val = newVal
                    dep.notify()
                }
            })
        })
    }
}
observable(obj)
// 订阅器
let Dep = class Dep {
    constructor() {
        this.subs = new Set()
    }
    depend() {
        if (activeUpdata) {
            this.subs.add(activeUpdata)
        }
    }
    notify() {
        this.subs.forEach(sub => {
            sub()
        })
    }
}
let activeUpdata
function autorun(update) {
    function warppedUpdate() {
        activeUpdata = warppedUpdate
        update()
        activeUpdata = null
    }
    warppedUpdate()
}

let dom
autorun(() => {
    dom = obj.a
})