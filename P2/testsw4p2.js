// JavaScript source code
const chai = window.chai;
const expect = chai.expect;

//Duplicate Nums Test 1
describe("Duplicate numbers", function () {
    it("should return 1", function () {
        amountDupNums([50, 10, 20, 33, 4, 60, 88, 7, 9, 10]);
        expect(1, chai.counter);
    });
});

//Duplicate Nums Test 2
describe("Duplicate numbers", function () {
    it("should return 2", function () {
        amountDupNums([50, 10, 20, 33, 4, 60, 88, 4, 9, 10]);
        expect(2, chai.counter);
    });
});

//Duplicate Nums Test 3
describe("Duplicate numbers", function () {
    it("should return 4", function () {
        amountDupNums([50, 10, 20, 10, 4, 50, 4, 7, 20, 10]);
        expect(4, chai.counter);
    });
});