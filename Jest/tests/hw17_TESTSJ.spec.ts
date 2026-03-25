import { operation } from "../../hw14_task0.ts";

describe("Operation add", () => {
  describe("Valid tests", () => {
    let testCount = 0;

    beforeEach(() => {
      testCount++;
    });

    afterAll(() => {
      console.log(`Всего выполнено Valid tests в Operation add: ${testCount}`);
    });

    test("Positive numbers", () => {
      const sum = operation.add(2, 2);
      expect(sum).toBe(4);
    });
    test("Negative numbers", () => {
      const sum = operation.add(-2, -2);
      expect(sum).toBe(-4);
    });
    test("One positive and one negative", () => {
      const sum = operation.add(2, -2);
      expect(sum).toBe(0);
    });
    test("Fractial numbers", () => {
      const sum = operation.add(2.1, 2.9);
      expect(sum).toBe(5);
    });
    test("More than two numbers", () => {
      const sum = operation.add(1, 2, 3, 7);
      expect(sum).toBe(13);
    });
    test("Number plus zero", () => {
      const sum = operation.add(1, 0);
      expect(sum).toBe(1);
    });
    test("Large numbers", () => {
      const sum = operation.add(1e10, 3e10);
      expect(sum).toBe(4e10);
    });
    test("Small numbers", () => {
      const sum = operation.add(1e10, 3e10);
      expect(sum).toBe(4e10);
    });
    test("Transition to another category", () => {
      const sum = operation.add(999, 1);
      expect(sum).toBe(1000);
    });
  });

  describe("Invalid tests", () => {
    let testCount = 0;

    beforeEach(() => {
      testCount++;
    });

    afterAll(() => {
      console.log(
        `Всего выполнено Invalid tests в Operation add: ${testCount}`,
      );
    });
    test("One number", () => {
      const sum = operation.add(1);
      expect(sum).toBe(1);
    });
    test("Nothing", () => {
      const sum = operation.add();
      expect(sum).toBe(0);
    });
    test("NaN and number", () => {
      const sum = operation.add(NaN, 1);
      expect(sum).toBe(1);
    });
    test("String and number", () => {
      const sum = operation.add("345" as never, 1);
      expect(sum).toBe(1);
    });
  });
});

describe("Operation divide", () => {
  describe("Valid tests", () => {
    let testCount = 0;

    beforeEach(() => {
      testCount++;
    });

    afterAll(() => {
      console.log(
        `Всего выполнено Valid tests в Operation divide: ${testCount}`,
      );
    });

    test("Positive numbers", () => {
      const div = operation.divide(4, 2);
      expect(div).toBe(2);
    });
    test("Negative numbers", () => {
      const div = operation.divide(-2, -2);
      expect(div).toBe(1);
    });
    test("One positive and one negative", () => {
      const div = operation.divide(2, -2);
      expect(div).toBe(-1);
    });
    test("Fractial numbers", () => {
      const div = operation.divide(6.6, 2.2);
      expect(div).toBe(3);
    });
    test("Division of a whole by a fraction", () => {
      const div = operation.divide(5, 0.5);
      expect(div).toBe(10);
    });
    test("Division with the remainder", () => {
      const div = operation.divide(10, 3);
      expect(div).toBe(3.3333);
    });
  });

  describe("Invalid tests", () => {
    let testCount = 0;

    beforeEach(() => {
      testCount++;
    });

    afterAll(() => {
      console.log(
        `Всего выполнено Invalid tests в Operation divide: ${testCount}`,
      );
    });
    test("Number/zero", () => {
      expect(() => operation.divide(5, 0)).toThrow("Ошибка: деление на 0");
    });
  });
});
