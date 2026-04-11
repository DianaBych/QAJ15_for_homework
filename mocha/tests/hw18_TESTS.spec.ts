import superagent from "superagent";
import { expect } from "chai";

const BASE_URL = "https://api.restful-api.dev";
const API_KEY = "f41c1a14-9a1b-4a08-9ba1-899117464e83";

describe("Метод GET", () => {
  describe("Получение всех объектов", () => {
    it("Получение статуса 200 при выполнении запроса", async () => {
      const res = await superagent
        .get(`${BASE_URL}/collections/products/objects`)
        .set("x-api-key", API_KEY);
      expect(res.status).to.equal(200);
    });

    it("Получение всех объектов", async () => {
      const expected_res_objects = [
        {
          id: "1",
          name: "Google Pixel 6 Pro",
          data: {
            color: "Cloudy White",
            capacity: "128 GB",
          },
        },
        {
          id: "2",
          name: "Apple iPhone 12 Mini, 256GB, Blue",
          data: null,
        },
        {
          id: "3",
          name: "Apple iPhone 12 Pro Max",
          data: {
            color: "Cloudy White",
            "capacity GB": 512,
          },
        },
        {
          id: "4",
          name: "Apple iPhone 11, 64GB",
          data: {
            price: 389.99,
            color: "Purple",
          },
        },
        {
          id: "5",
          name: "Samsung Galaxy Z Fold2",
          data: {
            price: 689.99,
            color: "Brown",
          },
        },
        {
          id: "6",
          name: "Apple AirPods",
          data: {
            generation: "3rd",
            price: 120,
          },
        },
        {
          id: "7",
          name: "Apple MacBook Pro 16",
          data: {
            year: 2019,
            price: 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
          },
        },
        {
          id: "8",
          name: "Apple Watch Series 8",
          data: {
            "Strap Colour": "Elderberry",
            "Case Size": "41mm",
          },
        },
        {
          id: "9",
          name: "Beats Studio3 Wireless",
          data: {
            Color: "Red",
            Description:
              "High-performance wireless noise cancelling headphones",
          },
        },
        {
          id: "10",
          name: "Apple iPad Mini 5th Gen",
          data: {
            Capacity: "64 GB",
            "Screen size": 7.9,
          },
        },
        {
          id: "11",
          name: "Apple iPad Mini 5th Gen",
          data: {
            Capacity: "254 GB",
            "Screen size": 7.9,
          },
        },
        {
          id: "12",
          name: "Apple iPad Air",
          data: {
            Generation: "4th",
            Price: "419.99",
            Capacity: "64 GB",
          },
        },
        {
          id: "13",
          name: "Apple iPad Air",
          data: {
            Generation: "4th",
            Price: "519.99",
            Capacity: "256 GB",
          },
        },
      ];

      const res = await superagent.get(`${BASE_URL}/objects`);
      expect(res.body).to.deep.equal(expected_res_objects);
    });
  });

  describe("Получение определенного объекта", () => {
    it("Получение конкретного валидного объекта c id = 2", async () => {
      const res = await superagent.get(`${BASE_URL}/objects/2`);
      expect(res.body).to.have.property("id", "2");
    });

    it("Получение НЕвалидного объекта c id = 1000", async () => {
      try {
        await superagent.get(`${BASE_URL}/objects/1000`);
        throw new Error("Ожидалась ошибка 404, но запрос прошел");
      } catch (err: any) {
        expect(err.status).to.equal(404);
      }
    });
  });
});

describe("Метод POST", () => {
  it("Добавление конкретного валидного объекта", async () => {
    const res = await superagent.post(`${BASE_URL}/objects`).send({
      name: "Apple MacBook Pro 160",
      data: {
        year: 2019,
        price: 2049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        color: "silver",
      },
    });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("name", "Apple MacBook Pro 160");
    expect(res.body).to.have.property("id");

    await superagent.delete(`${BASE_URL}/objects/${res.body.id}`);
  });
});

describe("Метод PUT", () => {
  it("Обновление созданного объекта через PUT", async () => {
    const createRes = await superagent.post(`${BASE_URL}/objects`).send({
      name: "Test Object for PUT",
      data: {
        year: 2020,
        price: 999.99,
        model: "Test Model",
      },
    });

    const testObjectId = createRes.body.id;

    const updateRes = await superagent
      .put(`${BASE_URL}/objects/${testObjectId}`)
      .send({
        name: "Updated Test Object",
        data: {
          year: 2024,
          price: 1499.99,
          model: "Updated Model",
          newFeature: "Added",
        },
      });

    expect(updateRes.status).to.equal(200);
    expect(updateRes.body).to.have.property("id", testObjectId);
    expect(updateRes.body).to.have.property("name", "Updated Test Object");
    expect(updateRes.body.data).to.have.property("year", 2024);
    expect(updateRes.body.data).to.have.property("price", 1499.99);
    expect(updateRes.body.data).to.have.property("newFeature", "Added");

    await superagent.delete(`${BASE_URL}/objects/${testObjectId}`);
  });
});

describe("Метод PATCH", () => {
  it("Частичное обновление созданного объекта через PATCH (замена data)", async () => {
    const createRes = await superagent.post(`${BASE_URL}/objects`).send({
      name: "Test Object for PATCH",
      data: {
        price: 500,
        color: "Red",
        size: "M",
      },
    });

    const testObjectId = createRes.body.id;

    const patchRes = await superagent
      .patch(`${BASE_URL}/objects/${testObjectId}`)
      .send({
        data: {
          price: 750,
          color: "Blue",
        },
      });

    expect(patchRes.status).to.equal(200);
    expect(patchRes.body).to.have.property("id", testObjectId);
    expect(patchRes.body.data).to.deep.equal({
      price: 750,
      color: "Blue",
    });

    await superagent.delete(`${BASE_URL}/objects/${testObjectId}`);
  });

  it("Проверка, что PATCH полностью заменил data", async () => {
    const createRes = await superagent.post(`${BASE_URL}/objects`).send({
      name: "Test Object for PATCH Verification",
      data: {
        price: 500,
        color: "Red",
        size: "M",
        inStock: true,
      },
    });

    const testObjectId = createRes.body.id;

    await superagent.patch(`${BASE_URL}/objects/${testObjectId}`).send({
      data: {
        price: 750,
        color: "Blue",
      },
    });

    const getRes = await superagent.get(`${BASE_URL}/objects/${testObjectId}`);

    expect(getRes.body.data).to.deep.equal({
      price: 750,
      color: "Blue",
    });

    expect(getRes.body.data).to.not.have.property("size");
    expect(getRes.body.data).to.not.have.property("inStock");

    await superagent.delete(`${BASE_URL}/objects/${testObjectId}`);
  });
});

describe("Метод DELETE", () => {
  it("Удаление созданного объекта", async () => {
    const createRes = await superagent.post(`${BASE_URL}/objects`).send({
      name: "Test Object for Deletion",
      data: {
        price: 999.99,
        description: "This object will be deleted",
      },
    });

    const testObjectId = createRes.body.id;

    const deleteRes = await superagent.delete(
      `${BASE_URL}/objects/${testObjectId}`,
    );
    expect(deleteRes.status).to.equal(200);
    expect(deleteRes.body).to.have.property("message");
  });

  it("Проверка, что объект действительно удален", async () => {
    const createRes = await superagent.post(`${BASE_URL}/objects`).send({
      name: "Test Object for Deletion Verification",
      data: {
        price: 888.88,
        description: "This object will be deleted and verified",
      },
    });

    const testObjectId = createRes.body.id;

    await superagent.delete(`${BASE_URL}/objects/${testObjectId}`);

    try {
      await superagent.get(`${BASE_URL}/objects/${testObjectId}`);
      throw new Error("Ожидалась ошибка 404, но объект существует");
    } catch (err: any) {
      expect(err.status).to.equal(404);
    }
  });
});
