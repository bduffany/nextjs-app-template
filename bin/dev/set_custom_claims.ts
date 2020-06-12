import prompt from 'prompt-promise';
import admin from 'server/services/firebase';

async function promptBoolean(question: string, defaultResponse = true) {
  const answer = (
    await prompt(`${question} ${defaultResponse ? '[Y/n]' : '[y/N]'}: `)
  )
    .trim()
    .toLowerCase();
  if (answer === '') {
    return defaultResponse;
  }
  return answer === 'y' || answer === 'yes';
}

async function getOrCreateUser(email: string) {
  try {
    return await admin.auth().getUserByEmail(email);
  } catch (e) {
    if (!(e.errorInfo && e.errorInfo.code === 'auth/user-not-found')) {
      throw e;
    }
  }

  console.log(`User ${email} does not exist.`);
  const create = await promptBoolean('Create?', /* default= */ false);
  if (!create) {
    process.exit(0);
  }
  const password = (await prompt(`Create password for ${email}: `)).trim();
  return await admin.auth().createUser({ email, password });
}

async function main() {
  const [email, claimsJson] = process.argv.slice(2);

  if (!email || !claimsJson) {
    console.error(`Usage: ${process.argv[1]} <email> <claimsJson>`);
    process.exit(0);
  }

  const claims = JSON.parse(claimsJson);
  const user = await getOrCreateUser(email);

  console.log(
    `Existing user claims: ${JSON.stringify(user.customClaims, null, 2)}`
  );

  const replaceClaims = await promptBoolean('Replace?');
  if (!replaceClaims) {
    process.exit(0);
  }

  await admin.auth().setCustomUserClaims(user.uid, claims);

  console.log('Done.');
}

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
