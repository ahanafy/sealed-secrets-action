const sealed = require("./sealed-secrets.js");
const k8s = require("./k8s.js");

for (let val of sealed()) {
  console.log(k8s(val, "foo"));
}


