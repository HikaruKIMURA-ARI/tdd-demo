import { expect, test, describe } from "bun:test";
import { FizzBuzz } from "./fizzbuzz.ts";

describe("FizzBuzz", () => {
  const fizzbuzz = new FizzBuzz();
  describe("convert メソッドは、数を文字列に変換する", () => {
    describe("3の倍数を渡すとFizzを返す", () => {
      test("3を渡すとFizzを返す", () => {
        // act
        const result = fizzbuzz.convert(3);
        // assert
        expect(result).toBe("Fizz");
      });
    });

    describe("5の倍数を渡すとBuzzを返す", () => {
      test("5を渡すとBuzzを返す", () => {
        // act
        const result = fizzbuzz.convert(5);
        // assert
        expect(result).toBe("Buzz");
      });
    });

    describe("3と5の倍数を渡すとFizzBuzzを返す", () => {
      test("15を渡すとFizzBuzzを返す", () => {
        // act
        const result = fizzbuzz.convert(15);
        // assert
        expect(result).toBe("FizzBuzz");
      });
    });

    describe("それ以外の場合は数を文字列に変換する", () => {
      test("1を渡すと1を返す", () => {
        // act
        const result = fizzbuzz.convert(1);
        // assert
        expect(result).toBe("1");
      });
    });
  });
});
