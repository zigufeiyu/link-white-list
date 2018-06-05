var ourLink = require("../dist/index");

var whiteList = ["test1.com", "test2.com"];
var url = "https://test1.com/hello/world";

url = ourLink(url, whiteList);
url = url ? url : "";

console.log(url);