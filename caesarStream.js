const { cipher } = require("./caesarCipher.js");

const stream = require("stream");
const coder = new stream.Transform({ objectMode: true });
const commands = require("./commander");
const { action, shift, input, output } = commands.opts();

coder._transform = function (chunk, encoding, done) {
  try {
    done(null, cipher(chunk.toString(), shift, action));
  } catch (e) {
    done(e);
  }
};

module.exports = { coder };
