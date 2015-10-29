import moment from "moment";

const Sort = {
    desc: entries => {
        return entries
            .map(entry => {
                return {
                    key: entry[".key"],
                    name: entry.name,
                    time: moment(entry.time, "mm:ss:SS")
                };
            })
            .sort((a, b) => a.time.valueOf() > b.time.valueOf())
            .slice(0, 10);
    }
};

export default Sort;
