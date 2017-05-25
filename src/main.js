import "./css/main.css";
import "./css/main.less";
var greeter = require("./js/Greeter.js");
var test = require("./js/text.js");
document.getElementById('root').appendChild(greeter());
test();

