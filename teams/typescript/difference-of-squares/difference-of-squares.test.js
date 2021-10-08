"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const difference_of_squares_1 = require("./difference-of-squares");
describe('Squares', () => {
    describe('up to 5', () => {
        const squares = new difference_of_squares_1.Squares(5);
        it('gets the square of sum', () => {
            expect(squares.squareOfSum).toBe(225);
        });
        it('gets the sum of squares', () => {
            expect(squares.sumOfSquares).toBe(55);
        });
        it('gets the difference', () => {
            expect(squares.difference).toBe(170);
        });
    });
    describe('up to 10', () => {
        const squares = new difference_of_squares_1.Squares(10);
        it('gets the square of sum', () => {
            expect(squares.squareOfSum).toBe(3025);
        });
        it('gets the sum of squares', () => {
            expect(squares.sumOfSquares).toBe(385);
        });
        it('gets the difference', () => {
            expect(squares.difference).toBe(2640);
        });
    });
    describe('up to 100', () => {
        const squares = new difference_of_squares_1.Squares(100);
        it('gets the square of sum', () => {
            expect(squares.squareOfSum).toBe(25502500);
        });
        it('gets the sum of squares', () => {
            expect(squares.sumOfSquares).toBe(338350);
        });
        it('gets the difference', () => {
            expect(squares.difference).toBe(25164150);
        });
    });
});
