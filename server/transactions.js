const express = require("express");
const router = express.Router();
const Web3 = require("web3");

router.get("/:txHash", async function (req, res) {
	const web3 = new Web3(
		new Web3.providers.HttpProvider("http://127.0.0.1:7545")
	);
	const txHash = req.params.txHash;
	const txInfo = await web3.eth.getTransaction(txHash);
	res.send({ data: txInfo });
});

module.exports = router;
