/**
 * Creates a hard link from `/config/env.${argument}.ts` to `/config/env.ts`.
 */

import fs from 'fs';

const [envName] = process.argv.slice(2);

const DEFAULT_ENV_NAME = 'development';

function linkEnv(parentDir: string) {
  const envPath = `${parentDir}/env.${envName || DEFAULT_ENV_NAME}.ts`;
  const linkPath = `${parentDir}/env.ts`;

  if (fs.existsSync(linkPath)) {
    fs.unlinkSync(linkPath);
  }
  if (fs.existsSync(envPath)) {
    fs.linkSync(envPath, linkPath);
  }
}

linkEnv('./config');
linkEnv('./server/config');
