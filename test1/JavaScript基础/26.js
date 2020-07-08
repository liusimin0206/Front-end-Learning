var foo = 123;
class Print {
  constructor() {
    this.foo = 234;
    console.log(foo);
  }
}
new Print();
