/*
 * @Author: liusimin
 * @Date: 2020-10-23 18:08:57
 * @LastEditors: your name
 * @LastEditTime: 2020-12-31 16:40:40
 * @Description: file content
 */
function jiaxiahua(str) {
  str=str.toLowerCase()
  return str.replace(/ /g, '_')
}
console.log(jiaxiahua('Intelligent Security'));
