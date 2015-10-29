const Sort = {
    desc: entries => {
        return entries
            .sort((a, b) => a.time > b.time)
            .slice(0, 10)
            .map(entry => {
                return {
                    key: entry[".key"],
                    name: entry.name,
                    time: entry.time
                };
            });
    }
};

export default Sort;
