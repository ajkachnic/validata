import { expect } from "chai";
import "mocha";

import { isEmail, isUrl, isHex, isIp, isPhone, isEmpty, fitsMax, fitsMin } from "../index";

describe("Distinct functions", () => {
  describe("#isEmail()", function () {
    it("should return false when the value is not an email", () => {
      let result = isEmail("not email");
      expect(result).to.equal(false);
    });
    it("should return true when the value is a valid email", () => {
      let result = isEmail("name@google.com");
      expect(result).to.equal(true);
    });
  });
  describe("#isUrl()", function () {
    it("should return false when the value is not an url", () => {
      let result = isUrl("google .com");
      expect(result).to.equal(false);
    });
    it("should return true when the value is a valid url", () => {
      let result = isUrl("google.com");
      expect(result).to.equal(true);
    });
  });
  describe("#isHex()", function () {
    it("should return false when the value is not an hex", () => {
      let result = isHex("#ak120a");
      expect(result).to.equal(false);
    });
    it("should return true when the value is a valid hex", () => {
      let result = isHex("#10f50a");
      expect(result).to.equal(true);
    });
    it("should return true when the value is a shortened hex", () => {
      let result = isHex("#10f");
      expect(result).to.equal(true);
    });
  });
  describe("#isIp()", function () {
    it("should return false when the value is not an ipv4", () => {
      let result = isIp("0.0.0");
      expect(result).to.equal(false);
    });
    it("should return true when the value is a valid ipv4", () => {
      let result = isIp("72.7.2.10");
      expect(result).to.equal(true);
    });
  });
  describe("#isPhone()", function () {
    it("should return false when the value is not a phone number", () => {
      let result = isPhone("+1 (123)-456-789");
      expect(result).to.equal(false);
    });
    it("should return true when the value is a valid phone number", () => {
      let result = isPhone("+1 (123)-456-7890");
      expect(result).to.equal(true);
    });
    it("should return true for many formats", () => {
      let result = isPhone("(123)-456-7890");
      expect(result).to.equal(true);
    });
    it("should return true for many formats", () => {
      let result = isPhone("123-456-7890");
      expect(result).to.equal(true);
    });
    it("should return true for many formats", () => {
      let result = isPhone("123.456.7890");
      expect(result).to.equal(true);
    });
    it("should return true for many formats", () => {
      let result = isPhone("+1 123.456.7890");
      expect(result).to.equal(true);
    });
  });
  describe("#isEmpty()", function () {
    it("should return false when the value isn't empty", () => {
      let result = isEmpty("not empty");
      expect(result).to.equal(false);
    });
    it("should return true when the value is empty", () => {
      let result = isEmpty("");
      expect(result).to.equal(true);
    });
  });
  describe("#fitsMax()", function () {
    it("should return false when the value is larger than the max", () => {
      let result = fitsMax("not empty", 5);
      expect(result).to.equal(false);
    });
    it("should return true when the value is within the max", () => {
      let result = fitsMax("fits", 5);
      expect(result).to.equal(true);
    });
  });
});
