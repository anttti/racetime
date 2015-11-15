// const ROOT = "http://laptimes.tammerforce.com";
const ROOT = "http://localhost:3000";

export default {
    leaderboards: () => `${ROOT}/v1/leaderboard`,
    leaderboard: id => `${ROOT}/v1/leaderboard/${id}`,
    entry: leaderboardId => `${ROOT}/v1/submit/${leaderboardId}`
};
