module.exports = {
    mode: "development",
    entry: './module.js',
    resolve: {
        fallback: {
            "fs": false,
            "path": require.resolve("path-browserify"),
            "crypto": false
        },
    },
    output: {
        filename: 'ffmpeg_lib.js',
        libraryTarget: 'var',
        library: 'ffmpeg_js'
    }
};