var arr = [5, 2, 7, 4, 8, 1, 7, 3];
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        exchange(arr, j, j + 1);
      }
    }
  }
}
function exchange(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
bubbleSort(arr);
console.log(arr);
