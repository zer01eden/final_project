import React, { useState } from 'react';

export default function FunCount() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>click</button>
			<span> click: {count} </span>
		</div>
	);
}
