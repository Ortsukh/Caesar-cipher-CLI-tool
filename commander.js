const fs = require("fs");
const { program } = require("commander");

program
  .storeOptionsAsProperties(false)
  .requiredOption("-a, --action [type],", "an action encode/decode")
  .requiredOption("-s, --shift <number>", "a shift")
  .option("-i, --input <filename>", "an input file")
  .option("-o, --output <filename>", "an output file");

program.parse(process.argv);

const { action, shift, output } = program.opts();

if (action !== "decode" && action !== "encode") {
  process.stderr.write("Invalid argument --action\n");
  process.on("exit", () => {
    const exit = process.exit;
    exit(1);
  });
}

if (!Number.isInteger(+shift)) {
  process.stderr.write("Invalid argument --shift\n");
  process.exit(1);
}
fs.stat(`${output}`, (err) => {
  return err === null
    ? (program.correctWay = true)
    : process.on("exit", () => {
        program.correctWay = false;
      });
});

module.exports = program;
