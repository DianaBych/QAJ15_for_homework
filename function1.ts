// 1. Создайте функцию, которая создает массив с 10 случайными числами и возвращает произведение 3 самых больших значений

function multiplicationNumbers(size: number = 10, maxValue: number = 30) {
  let arrayRandom = [];
  for (let i = 0; i < 10; i++) {
    arrayRandom.push(Math.round(Math.random() * maxValue)+1);
  }
  arrayRandom.sort((a, b) => b - a);
  const threeNumbers = arrayRandom.slice(0, 3);
  console.log(threeNumbers);
  let answer = 1;
  for (let num of threeNumbers) {
    answer *= num;
  }
  console.log(answer);
}
multiplicationNumbers();
