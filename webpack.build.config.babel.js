import webpack from "webpack";

export default require("./webpack-config-generator")({
    jsLoaders: ["babel"],
    plugins: [],
    extends: {}
});
