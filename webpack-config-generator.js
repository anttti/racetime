import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default function(options) {
    const plugins = [
        new ExtractTextPlugin("styles.css", {
            allChunks: true
        })
    ].concat(options.plugins);

    const common = {
        entry: "./js/index.js",
        output: {
            path: __dirname + "/build",
            filename: "bundle.js"
        },
        module: {
            loaders: [
                { test: /\.js$/, loaders: options.jsLoaders, exclude: /node_modules/ },
                { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader") }
            ]
        },
        plugins: plugins
    };

    const config = Object.assign(common, options.extends);

    return config;
}
