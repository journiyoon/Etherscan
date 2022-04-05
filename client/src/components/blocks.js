import React, { useState, useEffect } from "react";
import axios from "axios";

function Block({ blockInfo }) {
	return (
		<div>
			<p>{blockInfo.number}</p>
			<p>{blockInfo.timestamp}</p>
			<p>{blockInfo.miner}</p>
			<p>{blockInfo.transactions[0]}</p>
		</div>
	);
}

export default Block;
