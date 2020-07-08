function numToCN(num) {
  var numToString = num.toString();
  var numObjectArray = [];
  var result = "";
  var temp = "";
  for (let i = 0; i < numToString.length; i++) {
    if (numToString[i] == "0") {
      continue;
    }
    numObjectArray.push(singleNum(numToString[i], i, numToString.length));
  }
  for (let i = 0; i < numObjectArray.length - 1; i++) {
    if (numObjectArray[i + 1].wei == 4) {
      continue;
    }
    if (numObjectArray[i].wei - numObjectArray[i + 1].wei > 1) {
      numObjectArray[i].weiToCN += "零";
    }
  }
  for (let i = 0; i < numObjectArray.length; i++) {
    temp += numObjectArray[i].numToCN;
    temp += numObjectArray[i].weiToCN;
  }
  temp = temp.split("万");
  if (temp.length == 1) {
    result = temp.join("");
    return result;
  }
  temp[temp.length - 2] += "万";
  result = temp.join("");
  return result;
}

function singleNum(singleNum, index, length) {
  return {
    wei: length - index,
    num: singleNum,
    numToCN: singleNumToCN(singleNum),
    weiToCN: weiToCN(length - index)
  };
}

function singleNumToCN(singleNum) {
  let CN;
  switch (singleNum) {
    case "0":
      CN = "零";
      break;
    case "1":
      CN = "一";
      break;
    case "2":
      CN = "二";
      break;
    case "3":
      CN = "三";
      break;
    case "4":
      CN = "四";
      break;
    case "5":
      CN = "五";
      break;
    case "6":
      CN = "六";
      break;
    case "7":
      CN = "七";
      break;
    case "8":
      CN = "八";
      break;
    case "9":
      CN = "九";
      break;
  }
  return CN;
}

function weiToCN(wei) {
  let CN;
  switch (wei) {
    case 1:
      CN = "";
      break;
    case 2:
      CN = "十";
      break;
    case 3:
      CN = "百";
      break;
    case 4:
      CN = "千";
      break;
    case 5:
      CN = "万";
      break;
    case 6:
      CN = "十万";
      break;
    case 7:
      CN = "百万";
      break;
    case 8:
      CN = "千万";
      break;
    case 9:
      CN = "亿";
      break;
  }
  return CN;
}
console.log(numToCN(987654321));
