import _ from "lodash";
import Immutable from "immutable";
import chai from "chai";
const should = chai.should();
const expect = chai.expect;

import {
    REQUEST_CONTESTS,
    RECEIVE_CONTESTS,
    NEXT_CONTEST
} from "../js/constants/types";
import reducer from "../js/reducers/contests";

const defaultState = Immutable.fromJS({
    list: [],
    currentIndex: 0
});

const response = {
    "contests": [
        {
            "contestid": 2,
            "game": "Forza 4",
            "car": "Acura NSX 2005",
            "track": "Bernese Alps",
            "records": [
                {
                    "name": "Ralli-Pekka",
                    "time": 1000 * 123 + 365,
                    "date": 1447274887295
                },
                {
                    "name": "Ralli-Pekka",
                    "time": 1000 * 128 + 175,
                    "date": 1447310128435
                }
            ]
        },
        {
            "contestid": 6,
            "game": "Forza 4",
            "car": "Acura Integra Type-R 2001",
            "track": "Camino Viejo de Montserrat",
            "records": [
                {
                    "name": "Kankkusen Juha",
                    "time": 1000 * 123 + 365,
                    "date": 1447274887295
                },
                {
                    "name": "Ratti-Ripa",
                    "time": 1000 * 128 + 175,
                    "date": 1447310128435
                }
            ]
        }
    ]
};

describe("ContestList Reducer", () => {
    it("should add contest list", () => {
        const nextState = reducer(defaultState, {
            type: RECEIVE_CONTESTS,
            payload: response.contests
        });

        const nextStateInJS = nextState.toJS();

        expect(nextStateInJS).to.be.an("object");
        expect(nextStateInJS.list).to.have.length.of(2);
    });

    it("should rotate tracks", () => {
        let nextState = reducer(defaultState, {
            type: RECEIVE_CONTESTS,
            payload: response.contests
        });
        expect(nextState.toJS().currentIndex).to.equal(0);
        nextState = reducer(nextState, { type: NEXT_CONTEST });
        expect(nextState.toJS().currentIndex).to.equal(1);
        nextState = reducer(nextState, { type: NEXT_CONTEST });
        expect(nextState.toJS().currentIndex).to.equal(0);
    });
});
