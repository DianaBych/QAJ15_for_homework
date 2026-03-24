import { operation } from "../../hw14_task0.js";
import { expect } from "chai";

describe("Operation add", () => {
  describe("Valid tests", () => {
    let testCount = 0;

    beforeEach(() => {
      testCount++;
    });

    after(() => {
      console.log(`Всего выполнено Valid tests в Operation add: ${testCount}`);
    });
    it("Positive numbers", () => {
      const sum = operation.add(2, 2);
      expect(sum).to.be.equal(4);
    });
    it("Negative numbers", () => {
      const sum = operation.add(-2, -2);
      expect(sum).to.be.equal(-4);
    });
    it("One positive and one negative", () => {
      const sum = operation.add(2, -2);
      expect(sum).to.be.equal(0);
    });
    it("Fractial numbers", () => {
      const sum = operation.add(2.1, 2.9);
      expect(sum).to.be.equal(5);
    });
    it("More than two numbers", () => {
      const sum = operation.add(1, 2, 3, 7);
      expect(sum).to.be.equal(13);
    });
    it("Number plus zero", () => {
      const sum = operation.add(1, 0);
      expect(sum).to.be.equal(1);
    });
    it("Large numbers", () => {
      const sum = operation.add(1e10, 3e10);
      expect(sum).to.be.equal(4e10);
    });
    it("Small numbers", () => {
      const sum = operation.add(1e10, 3e10);
      expect(sum).to.be.equal(4e10);
    });
    it("Transition to another category", () => {
      const sum = operation.add(999, 1);
      expect(sum).to.be.equal(1000);
    });
  });

  describe("Invalid tests", () => {
    let testCount = 0;

    beforeEach(() => {
      testCount++;
    });

    after(() => {
      console.log(
        `Всего выполнено Invalid tests в Operation add: ${testCount}`,
      );
    });

    it("One number", () => {
      const sum = operation.add(1);
      expect(sum).to.be.equal(1);
    });
    it("Nothing", () => {
      const sum = operation.add();
      expect(sum).to.be.equal(0);
    });
    it("NaN and number", () => {
      const sum = operation.add(NaN, 1);
      expect(sum).to.be.equal(1);
    });
    it("String and number", () => {
      const sum = operation.add("345" as never, 1);
      expect(sum).to.be.equal(1);
    });
  });
});

describe("Operation divide", () => {
  describe("Valid tests", () => {
    let testCount = 0;

    beforeEach(() => {
      testCount++;
    });

    after(() => {
      console.log(
        `Всего выполнено Valid tests в Operation divide: ${testCount}`,
      );
    });

    it("Positive numbers", () => {
      const div = operation.divide(4, 2);
      expect(div).to.be.equal(2);
    });
    it("Negative numbers", () => {
      const div = operation.divide(-2, -2);
      expect(div).to.be.equal(1);
    });
    it("One positive and one negative", () => {
      const div = operation.divide(2, -2);
      expect(div).to.be.equal(-1);
    });
    it("Fractial numbers", () => {
      const div = operation.divide(6.6, 2.2);
      expect(div).to.be.equal(3);
    });
    it("Division of a whole by a fraction", () => {
      const div = operation.divide(5, 0.5);
      expect(div).to.be.equal(10);
    });
    it("Division with the remainder", () => {
      const div = operation.divide(10, 3);
      expect(div).to.be.equal(3.3333);
    });
  });

  describe("Invalid tests", () => {
    let testCount = 0;

    beforeEach(() => {
      testCount++;
    });

    after(() => {
      console.log(
        `Всего выполнено Invalid tests в Operation divide: ${testCount}`,
      );
    });

    it("Number/zero", () => {
      expect(() => operation.divide(5, 0)).to.throw("Ошибка: деление на 0");
    });
  });
});
