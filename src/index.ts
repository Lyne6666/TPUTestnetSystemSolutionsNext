// src/index.ts
/**
 * Main entry point for TPUTestnetSystemSolutionsNext
 */

import { TPUTestnetSystemSolutionsNext } from './tputestnetsystemsolutionsnext';
import minimist from 'minimist';

/**
 * Define the command-line arguments interface
 */
interface Args {
    /**
     * Enable verbose mode for more detailed output
     */
    verbose?: boolean;
    /**
     * Path to input file
     */
    input?: string;
    /**
     * Path to output file
     */
    output?: string;
}

/**
 * Parse command-line arguments
 */
const args: Args = minimist(process.argv.slice(2), {
    boolean: ['verbose'],
    alias: {
        v: 'verbose',
        i: 'input',
        o: 'output'
    }
});

/**
 * Create a new instance of TPUTestnetSystemSolutionsNext with parsed arguments
 */
const app = new TPUTestnetSystemSolutionsNext({
    verbose: args.verbose
});

/**
 * Execute the application and handle any errors that may occur
 */
app.execute()
    .then(() => {
        process.exit(0); // Exit with code 0 if execution is successful
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });