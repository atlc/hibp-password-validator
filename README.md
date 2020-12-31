# @atlc/hibp

Lightweight NPM module requiring 0 dependencies. Checks your password against the HaveIBeenPwned password API to check for matches in breaches. Returns a promise that resolves with an object with an 'isPwned' status and the amount of breaches detected, if any.


Sample usage:

```js
const validation = await validate('hunter2');
console.log(JSON.stringify(validation)); // {"isPwned":true,"breaches":17491}

if (validation.isPwned) {
  res.status(403).json({ breachNotification: `Bad password! 😠😠😠 That has been found in ${validation.breaches.toLocaleString()} account breaches!` });
}
```
