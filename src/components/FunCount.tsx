import React, { useState } from 'react';

export default function FunCount() {
	const [count, setCount] = useState(0);
	const increaseCount = () => {
		setCount(count + 1);
	};
	const decreaseCount = () => {
		setCount(count - 1);
	};
	return (
		<>
			<button onClick={increaseCount}>click +</button>
			<span> {count} </span>
			<button onClick={decreaseCount}> - click </button>
		</>
	);
}
