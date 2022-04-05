import React, { useState, useEffect } from "react";
import axios from "axios";

function Transaction({ txInfo }) {
	return (
		<div>
			<p>{txInfo.blockNumber}</p>
			<p>{txInfo.hash}</p>
			<p>{txInfo.from}</p>
			<p>{txInfo.to}</p>
			<p>{txInfo.value}</p>
			<p>{txInfo.nonce}</p>
		</div>
	);
}

export default Transaction;
