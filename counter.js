const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file-based tasks')
    .version('0.8.0');

program.command('count')
    .description('Count the number of lines in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
                return;
            }
            const lines = data.split('\n').length;  // Correctly counting lines
            console.log(`There are ${lines-1} lines in ${file}`);
        });
    });

program.parse();
