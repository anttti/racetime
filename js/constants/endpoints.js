const ROOT = "http://localhost:3000";

export default {
    trackList: () => `${ROOT}/v1/track`,
    track: id => `${ROOT}/v1/track/${id}`
};
