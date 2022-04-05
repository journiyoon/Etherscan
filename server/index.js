const express = require("express");
const router = express.Router();
const accounts = require("./accounts.js");
const blocks = require("./blocks.js");
const transactions = require("./transactions.js");

router.use("/accounts", accounts);
router.use("/blocks", blocks);
router.use("/transactions", transactions);

module.exports = router;
