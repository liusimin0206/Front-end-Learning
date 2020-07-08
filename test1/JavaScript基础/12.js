function fb(n) {
  if (n < 1) {
    return -1;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  return fb(n - 1) + fb(n - 2);
}
for (let i = 0; i < 14; i++) {
  console.log(fb(i));
}
