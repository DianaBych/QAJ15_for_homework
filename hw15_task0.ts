// 0. Модифицировать функцию подсчета стоимости товаров из прошлого задания.Теперь для расчета стоимости, товары должны соответствовать хотя бы одному из условий:
// - товар в наличии
//     - стоимость товаров одного вида выше 500
// Пример входных данных:
// const products = [
//     { name: 'A', price: 100, quantity: 2, inStock: true },
//     { name: 'B', price: 40, quantity: 5, inStock: false },
//     { name: 'C', price: 10, quantity: 1, inStock: true },
//     { name: 'D', price: 200, quantity: 3, inStock: false }
// ];

const goods1 = {
  name: "Яблоки",
  price: 100,
  quantity: 6,
  inStock: true,
};

const goods2 = {
  name: "Апельсины",
  price: 100,
  quantity: 3,
  inStock: true,
};

const goods3 = {
  name: "Бананы",
  price: 200,
  quantity: 4,
  inStock: false,
};

function costAllGoods() {
  const priceGoods = [
    goods1.price * goods1.quantity,
    goods2.price * goods2.quantity,
    goods3.price * goods3.quantity,
  ];
  const allGoods = [goods1, goods2, goods3];
  console.log(
    `Стоимость за все ${goods1.name} = ${priceGoods[0]}, стоимость за все ${goods2.name} = ${priceGoods[1]}, стоимость за все ${goods3.name} = ${priceGoods[2]}`,
  );
  let sumGoods = 0;
  for (let i = 0; i < priceGoods.length; i++) {
    const goodsInStock = allGoods[i];
    const price = priceGoods[i];
    if (price !== undefined && price > 500 && goodsInStock.inStock) {
      sumGoods += price;
    }
    if (goodsInStock.inStock === false) {
      console.log(`Продукта ${allGoods[i].name} нет в наличии`);
    }
  }
  console.log(
    `Общая стоимость продуктов из корзины, соответствующих критериям: ${sumGoods}`,
  );
}
costAllGoods();
