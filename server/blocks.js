const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

// latest 10 blocks
router.get("/", async function (req, res) {
	const amount = req.query.amount;
	const latestBlockNumber = await web3.eth.getBlockNumber();
	const blockArr = [];
	// const blockInfo = {};
	for (
		let i = latestBlockNumber;
		i > latestBlockNumber - amount && i >= 0;
		i--
	) {
		const { number, hash, miner, timestamp, transactions } =
			await web3.eth.getBlock(i);
		blockArr.push({
			number,
			hash,
			miner,
			timestamp,
			txLength: transactions.length,
		});
	}
	res.send({ data: blockArr });
});

// a block
router.get("/:blockNumber", async function (req, res) {
	const blockNumber = req.params.blockNumber;
	const blockInfo = await web3.eth.getBlock(blockNumber);
	res.send({ data: blockInfo });
});

module.exports = router;
