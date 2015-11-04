import Immutable from "immutable";
// Configuration for redux-logger (automatically unwrap Immutable stuff)

export default {
    collapsed: true,
    transformer: state => {
        let newState = {};
        for (let i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
                newState[i] = state[i].toJS();
            } else {
                newState[i] = state[i];
            }
        }
        return newState;
    }
};
