import _ from "lodash";

const filterNames = (list, str) => {
    if (!_.isArray(list) || !_.isString(str) || str.trim().length === 0) {
        return [];
    }

    const trimmedString = str.trim().toLowerCase();

    return list.filter(entry => {
        return entry.toLowerCase().indexOf(trimmedString) >= 0;
    });
};

export default filterNames;
