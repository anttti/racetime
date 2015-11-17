let ROOT;
if (__DEV__) {
    ROOT = "http://localhost:3000";
} else {
    ROOT = "http://laptimes.tammerforce.com";
}

export default {
    leaderboards: () => `${ROOT}/v1/leaderboard`,
    leaderboard: id => `${ROOT}/v1/leaderboard/${id}`,
    entry: leaderboardId => `${ROOT}/v1/submit/${leaderboardId}`
};
