// 2. Создайте функцию для подсчета стоимости товаров в корзине. На входе функция принимает массив объектов со свойстами name, price, quantity

const goods1 = {
  name: "Яблоки",
  price: 3,
  quantity: 2,
};

const goods2 = {
  name: "Апельсины",
  price: 4,
  quantity: 3,
};

const goods3 = {
  name: "Бананы",
  price: 2,
  quantity: 4,
};

function costAllGoods() {
  const priceGoods = [
    goods1.price * goods1.quantity,
    goods2.price * goods2.quantity,
    goods3.price * goods3.quantity,
  ];
  console.log(
    `Стоимость за все ${goods1.name} = ${priceGoods[0]}, стоимость за все ${goods2.name} = ${priceGoods[1]}, стоимость за все ${goods3.name} = ${priceGoods[2]}`,
  );
  let sumGoods = 0;
  for (let i = 0; i < priceGoods.length; i++) {
    const price = priceGoods[i];
    if (price !== undefined) {
      sumGoods += price;
    }
  }
  console.log(`Общая стоимость за все продукты из корзины: ${sumGoods}`);
}
costAllGoods();
