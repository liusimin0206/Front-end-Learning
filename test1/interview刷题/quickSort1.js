var testArr = [5, 2, 7, 4, 8, 1, -1, 7, 3];
function dividing(arr, left = 0, right) {
  let standard = left;
  let index = left + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[standard]) {
      exchange(arr, i, index);
      index++;
    }
  }
  exchange(arr, index - 1, standard);
  return index - 1;
}

function quickSort(arr, left = 0, right) {
  if (typeof right !== "number") {
    right = arr.length - 1;
  }
  if (left < right) {
    let mark = dividing(arr, left, right);
    quickSort(arr, left, mark - 1);
    quickSort(arr, mark + 1, right);
  }
}

function exchange(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
quickSort(testArr);
console.log(testArr);
