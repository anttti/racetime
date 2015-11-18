import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const generator = options => {
    const common = {
        entry: "./js/index.jsx",
        output: {
            path: __dirname + "/build", // eslint-disable-line
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
            extensions: ["", ".js", ".jsx"],
            alias: {
                /* eslint-disable */
                actions: path.join(__dirname, "js/actions"),
                components: path.join(__dirname, "js/components"),
                constants: path.join(__dirname, "js/constants"),
                containers: path.join(__dirname, "js/containers"),
                reducers: path.join(__dirname, "js/reducers"),
                utils: path.join(__dirname, "js/utils"),
                scss: path.join(__dirname, "scss")
                /* eslint-enable */
            }
        },
        plugins: [
            new ExtractTextPlugin("styles.css", { allChunks: true }),
            new HtmlWebpackPlugin({
                title: "Tammerforce Lap Times",
                template: "index.html.template",
                inject: "body"
            }),
            new webpack.DefinePlugin({
                __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "false")),
                __PRODUCTION__: JSON.stringify(JSON.parse(process.env.BUILD_PRODUCTION || "false"))
            })
        ].concat(options.plugins)
    };

    return Object.assign(common, options.extends);
};

export default generator;
