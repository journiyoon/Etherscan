import React, { useState, useEffect } from "react";
import axios from "axios";

function Account({ account }) {
	return (
		<div>
			<p>{account.address}</p>
			<p>{account.balance}</p>
		</div>
	);
}

export default Account;
