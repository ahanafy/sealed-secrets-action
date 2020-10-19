module.exports = function createK8sSecret(name, data) {
  const { execSync } = require("child_process");

  function run(cwd, command) {
    return execSync(command, { cwd, encoding: "utf8" });
  }

  function createSecret(cwd) {
    return run(
      cwd,
      "kubectl create secret generic " + name + " --from-literal=key1=supersecret --dry-run=client -ojson"
    );
  }

  var secret = createSecret();

  return secret;
};
