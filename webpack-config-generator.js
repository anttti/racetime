import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const generator = options => {
    const common = {
        entry: "./js/index.jsx",
        output: {
            path: __dirname + "/build",
            publicPath: "/",
            filename: "bundle.js"
        },
        module: {
            loaders: [
                { test: /\.(js|jsx)$/, loaders: options.jsLoaders, exclude: /node_modules/ },
                { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader") },
                { test: /\.(jpg|png)$/, loader: "file-loader" }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: [
            new ExtractTextPlugin("styles.css", { allChunks: true })
        ].concat(options.plugins)
    };

    return Object.assign(common, options.extends);
};

export default generator;
