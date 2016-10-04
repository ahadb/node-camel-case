# node-camel-case
A node module to camel case any string — /ie: `camelCase`

##Overview

Use this module when you need to convert a string to camel case in your project

##Installing 

```javascript
npm i node-camel-case --save-dev
```

##Usage

Simply require the `node-camel-case` module. The export function can be used in any module you desire:

```javascript
const camelCase = require('node-camel-case');

camelCase('String to camel case');
camelCase('String to camel Case');
camelCase('string to Camel Case');
camelCase('string to CamelCase');
camelCase('string-to CamelCase');

//==> all ouptput stringToCamelCase

```

##TODO

---

##Tests

`npm test`

Also supports the `standards` JavaScript library, configure as follows:

```JSON
"standard": {
    "ignore": [
      "/test/test.js",
      "app.js"
    ]
  }
```

```javascript
// wip
```

##Related Modules

* [node-range](https://github.com/ahadb/node-range)
* [first-of-array](https://github.com/ahadb/first-of-array)
* [last-of-array](https://github.com/ahadb/last-of-array)
* [node-camel-case](https://github.com/ahadb/node-camel-case)

##Contributing

Feel free to file an issue or bug.


