const express = require("express");
const router = express.Router();
const con = require("../control/con");

router.get('/',con.getAll);
router.get("/:id",con.getUserInfo);
router.post("/",con.addUser);
router.delete("/:id",con.deleteUser);
router.put("/:id",con.updateUser);

module.exports = router;