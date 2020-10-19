module.exports = function getSealedSecrets() {
  const SECRETS_CONTEXT =
    process.env.SECRETS_CONTEXT ||
    '{"GITHUB_TOKEN": "***","SECRET3": "***","SEALED_FOO": "***","SEALED_BAR": "***","SECRET2": "***","SECRET1": "***"}';

  let jobj = JSON.parse(SECRETS_CONTEXT);

  // Object.filter = (obj, predicate) =>
  //   Object.fromEntries(Object.entries(obj).filter(predicate));

  // let filtered = Object.filter(JSON.parse(SECRETS_CONTEXT), ([name, value]) =>
  //   name.startsWith("SEALED")
  // );


 let filtered = Object.keys(jobj).filter((value) => value.startsWith("SEALED"))

  return filtered;
};
