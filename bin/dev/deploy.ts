import { exec } from 'child_process';
import chalk from 'chalk';
import isWindows from 'is-windows';

const [
  branchToMerge = 'master',
  branchToPush = 'production',
] = process.argv.slice(2);

const run = async (
  command: string,
  { showCommand = true, acceptStderr = false } = {}
): Promise<string> => {
  if (showCommand) {
    console.log(chalk.whiteBright(`${command}`));
  }
  return new Promise((accept) => {
    exec(command, undefined, (error, stdout, stderr) => {
      if (error) {
        console.log('Error! Exiting.');
        console.error(stderr);
        process.exit(1);
      }
      if (acceptStderr) {
        accept(stderr.toString('utf-8'));
      } else {
        accept(stdout.toString('utf-8'));
      }
    });
  });
};

async function mergeAndPushReleaseBranch() {
  const osSuffix = isWindows() ? ':win' : '';

  await run(`git checkout -B "${branchToPush}"`);
  const mergeOutput = await run(`git merge "${branchToMerge}"`);
  if (mergeOutput.trim() === 'Already up to date.') {
    console.error(
      chalk.yellow(
        `# Note: Local branch "${branchToPush}" is already up to date.`
      )
    );
  }

  console.log(chalk.cyan('# Test: project builds successfully'));
  await run(`npm run build${osSuffix}`);
  console.log(chalk.greenBright('# [ PASS ]'));

  console.log(chalk.cyan('# Test: all unit tests pass'));
  await run(`npm run test`);
  console.log(chalk.greenBright('# [ PASS ]'));

  const pushOutput = await run(`git push origin "${branchToPush}"`, {
    acceptStderr: true,
  });
  if (pushOutput.trim() === 'Everything up-to-date') {
    console.error(chalk.yellow('# Note: No new changes pushed.'));
  }
}

async function main() {
  const originalBranch = (
    await run('git rev-parse --abbrev-ref HEAD', { showCommand: false })
  ).trim();
  try {
    await mergeAndPushReleaseBranch();
  } finally {
    console.log(chalk.gray('# Checking out original branch'));
    await run(`git checkout ${originalBranch}`);
  }
  console.log(chalk.gray('# Done.'));
}

main();
