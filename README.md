# link-white-list

* url白名单校验
* 针对用户提供项目合法url白名单，校验url合法性
* url合法则返回`url`，否则返回`false`

```javascript
    var ourLink = require("link-white-list");

    var whiteList = ["*.test1.com", "test2.com"];
    var url = "https://test.test1.com/hello/world";

    url = ourLink(url, whiteList);
    url = url ? url : ""; // https://test.test1.com/hello/world
```
