import _ from "lodash";
import chai from "chai";
const should = chai.should();
const expect = chai.expect;

import parseTime from "../js/utils/parseTime.js";

describe("parsing", () => {
    it("should parse time", () => {
        const result = parseTime(75023);
        expect(result).to.equal("01:15.23");
    });
});
