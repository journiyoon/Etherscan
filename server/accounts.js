const express = require("express");
const router = express.Router();
const Web3 = require("web3");

/* router.get("/:account", function (req, res) {
	const web3 = new Web3(
		new Web3.providers.HttpProvider("http://127.0.0.1:7545")
	);
	console.log(req.params);

	res.send("getAccounts");
}); */

router.get("/", async function (req, res) {
	const account = req.query.account;
	const web3 = new Web3(
		new Web3.providers.HttpProvider("http://127.0.0.1:7545")
	);
	const balance = await web3.eth.getBalance(account);
	console.log(`balance: ${balance}`);
	console.log(req.query);

	res.send({ balance }); // key = varname, key를 안써도됨
});

module.exports = router;
