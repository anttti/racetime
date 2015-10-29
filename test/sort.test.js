import _ from "lodash";
import chai from "chai";
const should = chai.should();
const expect = chai.expect;

import Sort from "../js/utils/sort.js";

describe("sorting", () => {
    it("should sort times", () => {
        const entries = [
            {"name":"eka","time":"03:00:00",".key":"-K1oNbvc2a4uVVGHMMer"},
            {"name":"toka","time":"02:00:00",".key":"-K1oNcbK22HyoSUM02jb"},
            {"name":"kiilaaja","time":"00:30:00",".key":"-K1oOL2HObb2GpTx7Wkw"}
        ];
        const expectedResult = ["kiilaaja","toka", "eka"];
        expect(_.pluck(Sort.desc(entries), "name")).to.deep.equal(expectedResult);
    });
});
