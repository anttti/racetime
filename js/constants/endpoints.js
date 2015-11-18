let ROOT;
if (__DEV__) {
    ROOT = "http://localhost:3000";
} else {
    ROOT = "http://laptimes.tammerforce.com";
}
console.log("Root URL set to", ROOT);

export default {
    leaderboards: () => `${ROOT}/v1/leaderboard`,
    leaderboard: id => `${ROOT}/v1/leaderboard/${id}`,
    players: () => `${ROOT}/v1/player`,
    entry: () => `${ROOT}/v1/record`
};
