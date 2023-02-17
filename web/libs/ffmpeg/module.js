var ffmpeg = require("./src/ffmpeg");

module.exports.ffmpeg = ffmpeg

module.exports = {
    run: function () {
      console.log('Hello from js');
    },
    get: ()=>ffmpeg.getVersion(),
  };