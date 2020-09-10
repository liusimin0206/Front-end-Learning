var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  // 通信成功时，状态值为4
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function(e) {
  console.error(xhr.statusText);
};
xhr.open("GET", "/endpoint", true);
xhr.send(null);
