# validata
![npm](https://img.shields.io/npm/v/@ajkachnic/validata?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/min/@ajkachnic/validata?style=for-the-badge)
> A flexible input validator written in typescript

## Installation
```sh
npm install --save @ajkachnic/validata
```
## Usage
You can use validata in a few different ways

```javascript
// With ES6 Modules
import { isEmail } from 'validata';

console.log(isEmail('name@website.com'));
```

```javascript
// With ES6 Modules with a config
import validate from 'validata';

let result = validate('name@website.com', {
  isEmail: true
});

console.log(result);
```
```javascript
// With Require Modules
var validata = require('validata');

console.log(validate.isEmail('name@website.com'));
```
```javascript
// With Require Modules with a config
var validata = require('validata').default;

var result = validate('name@website.com', {
  isEmail: true
});

console.log(result);
```

## API
The following functions are exported from validata


```
isEmail(value) - Returns if an email is valid
isUrl(value) - Returns if a URL is valid
isHex(value) - Returns if a hex code is valid
isIp(value) - Returns if an IP Address (V4) is valid
isEmpty(value) - Returns if a string is empty

fitsMax(value, max) - Returns if a strings length is less than or equal to the max parameter
fitsMin(value, min) - Returns if a strings length is greater than or equal to the min parameter
```

The config object has these options. You can pass multiple parameters

*Note: The function returns false once one of the options is false*
```
isEmail
isUrl
isHex
isIp
isEmpty
max
min
```
