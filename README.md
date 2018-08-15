# link-white-list
[![npm package](https://nodei.co/npm/link-white-list.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/link-white-list/)

[![build status](https://travis-ci.org/maqing01/link-white-list.svg?branch=master)](https://travis-ci.org/maqing01/link-white-list)
[![devDependency](https://img.shields.io/david/dev/maqing01/link-white-list.svg)](https://nodei.co/npm/link-white-list/)
[![npm version](https://img.shields.io/npm/v/link-white-list.svg)](https://nodei.co/npm/link-white-list/)
[![npm](https://img.shields.io/npm/l/link-white-list.svg)](https://nodei.co/npm/link-white-list/)

## url白名单校验
* 针对用户提供项目合法url白名单，校验url合法性
* url合法则返回`url`，否则返回`false`

```javascript
    var ourLink = require("link-white-list");

    var whiteList = ["*.test1.com", "test2.com"];
    var url = "https://test.test1.com/hello/world";

    url = ourLink(url, whiteList);
    url = url ? url : ""; // https://test.test1.com/hello/world
```
