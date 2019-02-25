module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var qr = require('qr-image');
    

    if (req.query.data || (req.body && req.body.data)) {
        var png_string = qr.imageSync((req.query.data||req.body.data), { type: 'png', size:7, margin:1, ec_level:'Q' });
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: png_string
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a data on the query string or in the request body to generate the QRCode i.e: GET https://<URL>/?data=awesome or POST { \"data\":\"awesome\" )"
        };
    }
};