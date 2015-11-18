console.log("__DEV__:",__DEV__);
console.log("__PRODUCTION__:",__PRODUCTION__);
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
    entry: leaderboardId => `${ROOT}/v1/submit/${leaderboardId}`
};
