// 1. Создайте функцию, которая будет принимать в себя массив значений и возвращать только те, в которых заданное(второй параметр, по умолчанию - 4) количество букв

function checkArray(words: string[], sizeword = 4) {
  //const result = [];
  const regular = /[а-яёa-z]/gi;



//   for (let i = 0; i < words.length; i++) {
//     if (words[i].match(regular)?.length === sizeword) {
//       result.push(words[i]);
//     }
//   }
 // return result;
 return words.filter( word => word.match(regular)?.length === sizeword )
}
console.log(
  checkArray(["дача", "дом", "цветок", "стол", "1234", "12ww", "dogs", "па11", "1stop"]),//["дача", "стол","dogs","1stop"]
);
// const regular = /[а-яёa-z]/gi;
// const letters = "Hello World";
// console.log(letters.match(regular));
// const oneObject = { 
//     id: {name: "key"}
// }
// console.log(oneObject.ids?.name);
