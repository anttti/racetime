// const ROOT = "http://laptimes.tammerforce.com";
const ROOT = "http://localhost:3000";

export default {
    contests: () => `${ROOT}/v1/contest`,
    contest: id => `${ROOT}/v1/contest/${id}`,
    entry: contestId => `${ROOT}/v1/submit/${contestId}`
};
