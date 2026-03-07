// 0. Создайте функцию для эмуляции броска кубика.На входе - колчество граней. На выходе - результат броска.Реализация должна работать только со следующим количеством граней(но в будущем должно быть легко расширить этот набор): 2, 4, 6, 8, 10, 12, 20, 100

function diceRoll(sides: number) {
  const numberOfSides = [2, 4, 6, 8, 10, 12, 20, 100];
  if (!numberOfSides.includes(sides)) {
    throw new Error("Данное количество граней функция не принимает");
  }
  const resultDice = Math.floor(Math.random() * sides) + 1;
  return resultDice;
}
console.log(diceRoll(6));