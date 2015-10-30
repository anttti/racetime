import Time from "./time";

const Sort = {
    desc: entries => {
        return entries
            .sort((a, b) => a.time > b.time)
            .slice(0, 10)
            .map(entry => {
                return {
                    key: entry[".key"],
                    name: entry.name,
                    time: Time.toString(entry.time)
                };
            });
    }
};

export default Sort;
