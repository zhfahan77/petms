const express = require("express")
bodyParser = require("body-parser")
ErrMsg = require("./api/utils/errmsg.js")

module.exports.ConfigApp = function(app) {

    function appUse(app, ...arg) {
        return app.use(arg)
    }

    return appUse(
        app,
        bodyParser.urlencoded({ extended: false }),
        bodyParser.json(),
        (req, res, next) => {
            res.setHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET");
            res.header("Access-Control-Allow-Origin", "http://" + req.headers.host);
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            let regex = /(\/api\/)/g; // pattern which checks for `/api/` in the URL
            if (regex.test(req.originalUrl)) { // if the URL contains the pattern, then `next()`
                next();
            } else { // if the URL does not contain `/api`:
                res.status(404).json(ErrMsg.DefaultRouteException)
            }
        }
    )
}