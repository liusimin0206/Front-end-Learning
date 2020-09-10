var tempArr = [5, 2, 7, 4, 8, 1, 7, 3];
function quickSort(arr, left, right) {
  var len = arr.length;
  if (typeof left !== "number") {
    left = 0;
  }
  if (typeof right !== "number") {
    right = len - 1;
  }
  if (left < right) {
    var dividingLine = partition(arr, left, right);
    quickSort(arr, left, dividingLine - 1);
    quickSort(arr, dividingLine + 1, right);
  }
  return;
}

function partition(arr, left, right) {
  var pivot = left;
  var index = left + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      exchange(arr, index, i);
      index++;
    }
  }
  exchange(arr, index - 1, pivot);
  return index - 1;
}

function exchange(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
quickSort(tempArr);
console.log(tempArr);
