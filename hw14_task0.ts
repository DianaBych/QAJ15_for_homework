// 0. Реализовать класс калькулятор, с минимум следующими методами: сложение, вычитание, умножение, деление. Эта задача нам пригодится впоследствии

class calculator {
  add(...a: number[]) {
    return a.reduce((acc, current) => acc + current, 0);
  }

  subtract(a: number, b: number) {
    return a - b;
  }

  multiply(...a: number[]) {
    const defolt = a.length === 0 ? 0 : 1;
    return a.reduce((acc, current) => acc * current, defolt);
  }

  divide(a: number, b: number) {
    if (b === 0) {
      throw Error("Ошибка: деление на 0");
    }
    return a / b;
  }
}
export const operation = new calculator();

console.log(operation.add(6, 3)); //9
console.log(operation.subtract(6, 3)); //3
console.log(operation.multiply(6, 3)); //18
console.log(operation.divide(6, 3)); //2
