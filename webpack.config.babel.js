import webpack from "webpack";

export default require("./webpack-config-generator")({
    jsLoaders: ["babel"],
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    extends: {
        devtool: "source-map",
        devServer: {
            historyApiFallback: true,
            inline: true,
            progress: true
        }
    }
});
