# [@atlc/hibp](https://www.npmjs.com/package/@atlc/hibp)

Simple and lightweight NPM module requiring 0 dependencies. Checks your password against the HaveIBeenPwned password API to check for known matches in plaintext breaches. Returns a promise that resolves with an object with an `isPwned` status and the amount of breaches detected, if any. 

Sample usage:

```js
const validate = require('@atlc/hibp');

const badPass = 'hunter2';
const checkPass = await validate(badPass);

console.log(checkPass);
// { isPwned: true, breaches: 17491 }

if (checkPass.isPwned) {
  console.log(`Bad password! 😠😠😠`);
  console.log(`Located in ${checkPass.breaches.toLocaleString()} account breaches!`);
}
// "Bad password! 😠😠😠"
// "Located in 17,491 account breaches!"
```
