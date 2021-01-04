# [@atlc/hibp](https://www.npmjs.com/package/@atlc/hibp)

Simple and lightweight NPM module requiring 0 dependencies. Checks your password against the HaveIBeenPwned password API to check for known matches in plaintext breaches. Returns a promise that resolves with an object with an `isPwned` status and the amount of breaches detected, if any. Comes with typings by default.

Sample usage:

```js
const validate = require('@atlc/hibp');

// Just generated from password manager, please do not use this now-public password :)
const goodPass = await validate('O1J*%pmXsGn^*sdP45ro12cZ5p@E$53Umu#d*^CjOvm');
const badPass = await validate('hunter2');

console.log(goodPass);  // { isPwned: false, breaches: 0 }
console.log(badPass);   // { isPwned: true, breaches: 17491 }
```