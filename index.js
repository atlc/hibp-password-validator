const crypto = require('crypto');
const https = require('https');

const validate = (password) => {
    return new Promise((resolve, reject) => {

        // Exposed plaintext passwords are hashed as SHA-1 per the maintainer of HIBP
        const shasum = crypto.createHash('sha1');
        shasum.update(password);
        const hashedPass = shasum.digest('hex');

        // Pass the API the first 5 characters of the resulting hash, and it returns a list of 
        // ALL hashes that begin with those 5 characters, with those characters truncated
        https.get(`https://api.pwnedpasswords.com/range/${hashedPass.slice(0, 5)}`, async (res) => {
            // If there's an API error, reject with the API's status code
            if (res.statusCode >= 300 || res.statusCode < 200) return reject(`Status code: ${res.statusCode}`);

            let matchesList = [];
            res.on('data', chunk => matchesList.push(chunk));
            res.on('end', () => {
                matchesList = matchesList.toString('utf-8');
                const matchesArray = matchesList.split('\r\n');

                const hashPrefixMatchString = hashedPass.slice(5, hashedPass.length).toUpperCase();
                const matchIndex = matchesArray.findIndex(hash => hash.includes(hashPrefixMatchString));

                if (matchIndex !== -1) {
                    const matchInstances = Number(matchesArray[matchIndex].split(':')[1]);
                    resolve({ isPwned: true, breaches: matchInstances });
                } else {
                    resolve({ isPwned: false, breaches: 0 });
                }
            })
        })
        .on('error', e => reject(e));
    })
}

export default validate;