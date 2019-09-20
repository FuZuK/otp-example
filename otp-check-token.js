const fs = require('fs');
const qrcode = require('qrcode');
const otplib = require('otplib');
const prompt = require('prompt');

const secret = fs.readFileSync('./secret.txt', { encoding : 'utf-8' });
const generated = otplib.authenticator.generate(secret);

prompt.get('token', (err, data) => {
    if (err) return;

    const { token } = data;
    const isValid = otplib.authenticator.check(token, secret);

    console.log({ secret, generated, token, isValid });
});
