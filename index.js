const fs = require("fs");
const path = require("path");
const { coder } = require("./caesarStream.js");

const { pipeline } = require("stream");
const caesarCipher = require("./caesarCipher");

const commands = require("./commander");
const { action, shift, input, output } = commands.opts();

const readStream = input
  ? fs.createReadStream(path.join(__dirname, input))
  : process.stdin;

const writeStream = output
  ? fs.createWriteStream(path.join(__dirname, output), { flags: "a" })
  : process.stdout;

pipeline(readStream, coder, writeStream, (err) => {
  if (err) {
    console.error("Pipeline failed.", err);
  }
})