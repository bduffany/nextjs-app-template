/**
 * Creates a hard link from `/config/env.${argument}.ts` to `/config/env.ts`.
 */

import fs from 'fs';

const [envName] = process.argv.slice(2);

const DEFAULT_ENV_NAME = 'development';

const ENV_PATH = `./config/env.${envName || DEFAULT_ENV_NAME}.ts`;
const LINK_PATH = './config/env.ts';

if (fs.existsSync(LINK_PATH)) {
  fs.unlinkSync(LINK_PATH);
}

fs.linkSync(ENV_PATH, LINK_PATH);
