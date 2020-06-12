import ps from 'child_process';
import { realpathSync, readFileSync } from 'fs';
import chalk from 'chalk';

// Ignored paths can be added here.
const IGNORED_PATHS = [];

function getOutput(command: string) {
  const output = ps.execSync(command).toString();
  return output
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);
}

const FORBIDDEN_STRING = 'DO NOT ' + 'COMMIT';

function check(path: string, ignoredPaths: Set<string>) {
  const absolutePath = realpathSync(path);
  if (ignoredPaths.has(absolutePath)) {
    return true;
  }
  const content = readFileSync(path);
  const lines = content.toString().split('\n');
  let returnValue = true;
  let lineNumber = 1;
  for (const line of lines) {
    if (line.includes(FORBIDDEN_STRING)) {
      console.error(
        chalk.red(
          `"${FORBIDDEN_STRING}" found on line ${lineNumber} of ${path}:`
        )
      );
      console.error(line);
      returnValue = false;
    }
    lineNumber++;
  }
  return returnValue;
}

function main() {
  const stagedFiles = getOutput('git diff --name-only --cached');
  const ignoredPaths = new Set(IGNORED_PATHS.map((path) => realpathSync(path)));
  let exitCode = 0;
  for (const path of stagedFiles) {
    if (!check(path, ignoredPaths)) exitCode = 1;
  }
  process.exit(exitCode);
}

main();
