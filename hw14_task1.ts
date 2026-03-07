// 1. Создайте функцию, которая будет принимать в себя массив значений и возвращать только те, в которых заданное(второй параметр, по умолчанию - 4) количество букв

function checkArray(words: string[], sizeword = 4) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length === sizeword && /^[а-яА-ЯёЁa-zA-Z]+$/.test(words[i])) {
      result.push(words[i]);
    }
  }
  return result;
}
console.log(
  checkArray(["дача", "дом", "цветок", "стол", "1234", "12ww", "dogs", "па11"]),
);
