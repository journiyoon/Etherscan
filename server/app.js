const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const Web3 = require("web3");
const index = require("./index.js");

/* function getWeb3() {
	const web3 = new Web3(
		new Web3.providers.HttpProvider("http://127.0.0.1:7545")
	);
	return web3;
}

async function getAccounts() {
	try {
		const accounts = await getWeb3().eth.getAccounts();
		console.log(accounts);
		return accounts;
	} catch (e) {
		console.log(e);
		return e;
	}
}

app.get("/", (req, res) => {
	getAccounts().then((accounts) => {
		res.send(accounts);
	});
}); */
app.use(cors());

app.use("/", index);

app.listen(port, () => {
	console.log("Listening......");
});
