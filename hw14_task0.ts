// 0. Реализовать класс калькулятор, с минимум следующими методами: сложение, вычитание, умножение, деление. Эта задача нам пригодится впоследствии

class calculator {
  result: number;

  constructor() {
    this.result = 0;
  }

  add(a: number, b: number) {
    this.result = a + b;
    return this.result;
  }

  subtract(a: number, b: number) {
    this.result = a - b;
    return this.result;
  }

  multiply(a: number, b: number) {
    this.result = a * b;
    return this.result;
  }

  divide(a: number, b: number) {
    if (!(b === 0)) {
      this.result = a / b;
      return this.result;
    }
    throw new Error("Ошибка: деление на 0");
  }
}
const operation = new calculator();

console.log(operation.add(6, 3)); //9
console.log(operation.subtract(6, 3)); //3
console.log(operation.multiply(6, 3)); //18
console.log(operation.divide(6, 0)); //2
