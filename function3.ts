// 3. Создать функцию которая будет принимать входящее значение и добавлять к нему слово "супер"

function addSuper(text: string) {
  if (text == "") {
    console.log("Суперкотик");
  } else if (/^[а-яА-ЯёЁ]+$/.test(text)) {
    console.log(`Супер ${text}`);
  } else if (/^[a-zA-Z]+$/.test(text)) {
    console.log(`Super ${text}`);
  } else {
    console.log("Текст должен быть без пробелов, цифр и спецсимволов");
  }
}
addSuper("dog ");
