import _ from "lodash";
import chai from "chai";
const should = chai.should();
const expect = chai.expect;

import Time from "../js/utils/time.js";

describe("Time", () => {
    it("should stringify time", () => {
        expect(Time.toString(75023)).to.equal("01:15.023");
        expect(Time.toString(75123)).to.equal("01:15.123");
        expect(Time.toString(7)).to.equal("00:00.007");
    });

    it("should validate time", () => {
        expect(Time.isValid("1")).to.equal(true);
        expect(Time.isValid("123456")).to.equal(true);
        expect(Time.isValid("a123456")).to.equal(false);
        expect(Time.isValid("a")).to.equal(false);
        expect(Time.isValid("0")).to.equal(false);
        expect(Time.isValid("")).to.equal(false);
    });

    it("should parse time from string", () => {
        expect(Time.fromString("1")).to.equal(1);
        expect(Time.fromString("10")).to.equal(10);
        expect(Time.fromString("100")).to.equal(100);
        expect(Time.fromString("1000")).to.equal(1000);
        expect(Time.fromString("11000")).to.equal(11000);
        expect(Time.fromString("111000")).to.equal(71000);
        expect(Time.fromString("1000000")).to.equal(600000);
    });

    it("should parse & stringify time", () => {
        expect(Time.toString(Time.fromString("1212121"))).to.equal("12:12.121");
        expect(Time.toString(Time.fromString("1"))).to.equal("00:00.001");
        expect(Time.toString(Time.fromString("123"))).to.equal("00:00.123");
        expect(Time.toString(Time.fromString("12345"))).to.equal("00:12.345");
        expect(Time.toString(Time.fromString("1234567"))).to.equal("12:34.567");
    })
});
