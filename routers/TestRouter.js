const express = require("express");

const router = express.Router();

router.get("/:id/show", function(req, res){
    res.cookie("hello", "value", {
        httpOnly: true,
    });
    res.cookie("hello2", "value2", {
        httpOnly: false,
    });
    res.send(`show show way! ${req.params.id}`);
});

router.get("/:id/can", function(req, res){
    res.cookie("hello", "value", {
        httpOnly: true,
    });
    res.cookie("hello2", "value2", {
        httpOnly: false,
    });
    res.send(`can can need! ${req.params.id}`);
});

module.exports = router;