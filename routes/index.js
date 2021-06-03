var router = require("express").Router()
var userRoute = require('./users')(router)
const fs = require('fs');
router.get('/',(req,res)=>{res.sendFile('/Users/softedel/Desktop/ELMAKHLOUFI-Nodejs/elmakhloufi/public/index.html')})
;


// const html = fs.readFileSync('public');
// res.json({html: html.toString(), data: obj});
module.exports = router;