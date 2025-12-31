const os = require('os');
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

const ip = '192.168.1.12';
const port = 8086;
const url = `exp://${ip}:${port}`;

console.log(`Detected IP: ${ip}`);
console.log(`Expo URL: ${url}`);

QRCode.toString(url, { type: 'utf8' }, function (err, string) {
    if (err) throw err;
    console.log(string);
});

const outputDir = 'C:\\Users\\elbaroudi douae\\.gemini\\antigravity\\brain\\918d73e8-b85a-44dc-ba7f-77c09af904a3';
const outputPath = path.join(outputDir, 'expo_qr.png');

QRCode.toFile(outputPath, url, {
    color: {
        dark: '#000000',
        light: '#FFFFFF'
    },
    width: 400
}, function (err) {
    if (err) throw err;
    console.log(`QR code saved to ${outputPath}`);
});
