const fs = require('fs');
const otplib = require('otplib');
const prompt = require('prompt');
const qrcode = require('qrcode-terminal');

const user = '';
const service = '';
const secret = otplib.authenticator.generateSecret();

const otpauth = otplib.authenticator.keyuri(encodeURIComponent(user), encodeURIComponent(service), secret);

qrcode.generate(otpauth, { small : true }, function (qrcode) {
	console.log(secret);
	console.log(qrcode);

	fs.writeFileSync('./secret.txt', secret);
});
