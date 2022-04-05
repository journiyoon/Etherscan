import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
import Account from "./components/accounts";
import Block from "./components/blocks";
import Transaction from "./components/transactions";
import { FaSearchengin } from "react-icons/fa";

function App() {
	const [block, setBlock] = useState([]);
	const [account, setAccount] = useState(undefined);
	const [blockInfo, setBlockInfo] = useState(undefined);
	const [txInfo, setTxInfo] = useState(undefined);
	const inputEl = useRef(null);

	function search() {
		const inputLength = inputEl.current.value.length;
		if (inputLength < 42) {
			// block
			axios
				.get(`http://localhost:8080/blocks/${inputEl.current.value}`)
				.then((res) => {
					setBlockInfo(res.data.data);
					setAccount(undefined);
					setTxInfo(undefined);
					// console.log(res);
				});
		} else if (inputLength === 42) {
			// account
			axios
				.get(`http://localhost:8080/accounts?account=${inputEl.current.value}`)
				.then((res) => {
					setAccount({
						address: inputEl.current.value,
						balance: res.data.balance,
					});
					setBlockInfo(undefined);
					setTxInfo(undefined);
					// console.log(account);
				});
		} else if (inputLength === 66) {
			// txHash
			axios
				.get(`http://localhost:8080/transactions/${inputEl.current.value}`)
				.then((res) => {
					setTxInfo(res.data.data);
					// console.log(res.data);
					setBlockInfo(undefined);
					setAccount(undefined);
				});
		}
		setBlock([]);
	}

	useEffect(() => {
		axios.get("http://localhost:8080/blocks?amount=10").then((res) => {
			setBlock(res.data.data);
			console.log(res.data.data);
		});
	}, []);

	return (
		<div className="App">
			<div>
				<input
					placeholder="Search by Address / Txn Hash / Block"
					ref={inputEl}
				></input>
				<button onClick={search}>
					<FaSearchengin />
				</button>
			</div>
			{account !== undefined ? <Account account={account} /> : null}
			{blockInfo !== undefined ? <Block blockInfo={blockInfo} /> : null}
			{txInfo !== undefined ? <Transaction txInfo={txInfo} /> : null}
			<div>
				{block.map((block) => (
					<div>
						<p>{block.miner}</p>
						<p>{block.number}</p>
						<p>{block.timestamp}</p>
						<p>{block.txLength}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
