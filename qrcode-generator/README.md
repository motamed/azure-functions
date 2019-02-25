# QR Code Generator

This function generates QR code based on user input.


|              |            |
| ------------- |:-------------: |
| Framework     | Node 
| Language      | Javascript   |   
| Trigger Type | HTTP Trigger   |
---

#### NPM Dependencies
*   [qr-image](https://www.npmjs.com/package/qr-image)

#### Prerequisites

*   Create a file in the root directory of you function app called **package.json**
*   add **qr-image** as dependencies

>package.json
``` json
{
  "name": "QRGenPNG",
  "version": "1.0.0",
  "description": "Generate QR Code",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "motamed",
  "license": "MIT",
  "dependencies": {
    "qr-image": "3.2.0"
  }
}
```
---
#### Usage:
```http
https://<functionapp-url>/api/<function-name>
```
### GET
```
/?data={QRCode Data}
```

### POST
``` json
{
    "data":"{QRCode Data}"
}
```


