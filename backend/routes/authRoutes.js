const express = require("express");
const { register, login } = require("../controllers/authControllers");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/get",(req,res)=>{
    res.json("Success")
})

module.exports = router;