const core = require("@actions/core");
const github = require("@actions/github");

const sealed = require("./sealed-secrets.js");
const k8s = require("./k8s.js");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  // Test
  let arr = [];
  for (let val of sealed()) {
    arr.push(k8s(val, "foo"));
  }
  let secrets = JSON.stringify(arr);
  secrets = secrets.replace(/\\n/g, "");
  core.setOutput("array", secrets);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
