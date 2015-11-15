import chai from "chai";
// const should = chai.should();
const expect = chai.expect;

import filterNames from "../js/utils/filterNames.js";

describe("filterNames", () => {
    it("should filter names", () => {
        const list = [
            "aaa",
            "abcd",
            "defg",
            "qwer",
            "53345e",
            "Abcd",
            "jhjhjAA"
        ];
        expect(filterNames(list, "a")).to.deep.equal(["aaa", "abcd", "Abcd", "jhjhjAA"]);
        expect(filterNames(list, "aa")).to.deep.equal(["aaa", "jhjhjAA"]);
        expect(filterNames(list, "aaa")).to.deep.equal(["aaa"]);
        expect(filterNames(list, "aaaa")).to.deep.equal([]);
        expect(filterNames(list, "b")).to.deep.equal(["abcd", "Abcd"]);
        expect(filterNames(list, "e")).to.deep.equal(["defg", "qwer", "53345e"]);
        expect(filterNames(list, "")).to.deep.equal([]);
        expect(filterNames(list)).to.deep.equal([]);
        expect(filterNames(undefined, "asdf")).to.deep.equal([]);
        expect(filterNames([], "")).to.deep.equal([]);
    });
});
