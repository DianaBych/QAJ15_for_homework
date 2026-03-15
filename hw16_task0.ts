// 0. У нас поменялись требования к паролю. Юзерам выслана ссылка на смену пароля. Теперь когда они зайдут к нам на сайт, мы должны проверить, что их новый пароль соответствует следующим требованиям:
//      - минимум 8 символов                            | латинские буквы, максимум 15
//      - минимум одна заглавная буква      
//      - минимум одна цифра
//      - минимум один специальный символ из набора     | ^!@_$&*()-+


// а. Создайте функцию, которая будет принимать на вход строку (пароль) и возвращать true, если пароль соответствует требованиям и false, если не соответствует.  

function checkPasswordA(password: string) {
  if (password.length < 8 || password.length > 15) {
    return false;
  }

  if (!/[A-Z]/g.test(password)) {
    return false;
  }

  if (!/[0-9]/g.test(password)) {
    return false;
  }

  if (!/[!^@_$&*()+-]/g.test(password)) {
    return false;
  }

  if (/[А-Яа-яЁё]/g.test(password)) {
    return false;
  }
  return true;
}
console.log(checkPasswordA("12d1+42333"));


// б. Нашим аналитикам интересно, какие цифры чаще всего используются юзерами в паролях. модифицируйте функцию так, чтобы она вместо булевого значения возвращала объект по следующим примерам: 
//   input: 'Password123!' -> output: { isValid: true, digits: [1, 2, 3] }
//   input: 'myC00!Pa55w0rd' -> output: { isValid: true, digits: [0, 0, 5, 5, 0] }

function checkPasswordB(password: string) {

const digits = [];
for (let i = 0; i < password.length; i++) {
  const num = password[i];
  if (/[0-9]/g.test(num)) {
    digits.push(Number(num));
  }
}

  if (password.length < 8 || password.length > 15) {
    return { isValid: false, digits };
  }

  if (!/[A-Z]/g.test(password)) {
    return { isValid: false, digits };
  }

  if (!/[0-9]/g.test(password)) {
    return { isValid: false, digits };
  }

  if (!/[!^@_$&*()+-]/g.test(password)) {
    return { isValid: false, digits };
  }

  if (/[А-Яа-яЁё]/g.test(password)) {
    return { isValid: false, digits };
  }
  return { isValid: true, digits };

}

console.log(checkPasswordB("12d1+42333"));



