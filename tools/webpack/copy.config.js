const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = env =>
{
    env = env || {};
    return {
        name: "copy", mode: env.prod ? "production" : "development",
        entry: "./copy.js",
        output: {
            filename: 'copy-output.txt',
            path: path.resolve(__dirname, "..", "..", "")
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, "..", "..", "resources/js-custom/"),
                        to: path.resolve(__dirname, "..", "..", "resources/js/")
                    },
                    {
                        from: path.resolve(__dirname, "..", "..", "resources/scss-custom/"),
                        to: path.resolve(__dirname, "..", "..", "resources/scss/")
                    }
                ]
            })
        ]
    };
};
