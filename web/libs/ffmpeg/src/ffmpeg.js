export { getVersion }

const ffmpegConsole = require("ffmpeg.js");

async function getVersion() {
    let stdout = "";
    let stderr = "";
    ffmpegConsole({
        arguments: ["-version"],
        print: function (data) { stdout += data + "\n"; },
        printErr: function (data) { stderr += data + "\n"; },
        onExit: function (code) {
            console.log("Process exited with code " + code);
            console.log(stdout);
            console.log(stderr);
        },
    });
}
