import webpack from "webpack";
import generator from "./webpack-config-generator";

export default generator({
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
