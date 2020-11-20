/*
 * @Author: your name
 * @Date: 2020-11-20 14:27:05
 * @LastEditTime: 2020-11-20 14:40:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\处理一下临时数据.js
 */
var arr1 = [
  "Ag",
  "Bg",
  "Dg",
  "Mg",
  "Ng",
  "Qg",
  "Rg",
  "Tg",
  "Ug",
  "Vg",
  "a",
  "ad",
  "an",
  "b",
  "c",
  "d",
  "dc",
  "df",
  "e",
  "f",
  "h",
  "i",
  "ia",
  "ib",
  "id",
  "im",
  "in",
  "iv",
  "j",
  "jb",
  "jd",
  "jm",
  "jn",
  "jv",
  "k",
  "kn",
  "kv",
  "l",
  "la",
  "lb",
  "ld",
  "lm",
  "ln",
  "lv",
  "m",
  "mq",
  "n",
  "nr",
  "nrf",
  "nrg",
  "ns",
  "nt",
  "nx",
  "nz",
  "o",
  "p",
  "q",
  "qb",
  "qc",
  "qd",
  "qe",
  "qj",
  "ql",
  "qr",
  "qt",
  "qv",
  "qz",
  "r",
  "rr",
  "ry",
  "ryw",
  "rz",
  "rzw",
  "s",
  "t",
  "tt",
  "u",
  "v",
  "vd",
  "vi",
  "vl",
  "vn",
  "vq",
  "vt",
  "vu",
  "vx",
  "w",
  "y",
  "z"
];
var arr2 = [
  "形语素",
  "区别语素",
  "副语素",
  "数语素",
  "名语素",
  "量语素",
  "代语素",
  "时语素",
  "助语素",
  "动语素",
  "形容词",
  "副形词",
  "名形词",
  "区别词",
  "连词",
  "副词",
  "程度副词",
  "否定副词",
  "叹词",
  "方位词",
  "前接成分",
  "成语",
  "形容词功能成语",
  "区别词功能成语",
  "副词功能成语",
  "数词功能成语",
  "名词功能成语",
  "动词功能成语",
  "简称略语",
  "区别词功能简称",
  "副词功能简称",
  "数词功能简称",
  "名词功能简称",
  "动词功能简称",
  "后接成分",
  "名词性后接成分",
  "动词性后接成分",
  "习用语",
  "形容词功能习用",
  "区别词功能成语",
  "副词功能习用语",
  "数词功能习用语",
  "名词功能习用语",
  "动词功能习用语",
  "数词",
  "数量词",
  "名词",
  "人名",
  "姓",
  "名",
  "地名",
  "机构团体",
  "非汉字串",
  "其他专名",
  "拟声词",
  "介词",
  "量词",
  "不定量词",
  "成形量词",
  "度量词",
  "个体量词",
  "集体量词",
  "倍率量词",
  "容器量词",
  "时量词",
  "动量词",
  "种类量词",
  "代词",
  "人称代词",
  "疑问代词",
  "谓词性疑问代词",
  "指示代词",
  "谓词性指示代词",
  "处所词",
  "时间词",
  "专名时间词",
  "助词",
  "动词",
  "副动词",
  "不及物动词",
  "联系动词",
  "名动词",
  "趋向动词",
  "及物动词",
  "助动词",
  "形式动词",
  "标点符号",
  "语气词",
  "状态词"
];
let arr3 = [];
for (let i = 0; i < arr1.length; i++) {
  let obj = {
    1: arr1[i],
    2: arr2[i]
  };
  arr3.push(obj);
}
console.log(JSON.stringify(arr3));
console.log(arr1.length);
