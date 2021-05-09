# Caesar-cipher-CLI-tool
## Run app

1. Install dependencies

        npm install

2. To run script
 -Options:
    
       -a, --action [type],     an action encode/decode
       -s, --shift <number>     a shift
       -i, --input <filename>   an input file
       -o, --output <filename>  an output file
       
        node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
        node index.js  --action encode --shift 7 --input plain.txt --output encoded.txt
        node index.js  --action decode --shift 7 --input decoded.txt --output plain.txt

## Description

[Here](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/caesar-cipher-cli-tool.md)
