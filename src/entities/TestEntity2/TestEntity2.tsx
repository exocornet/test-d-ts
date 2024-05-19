'use client';

import { useEffect, useState } from 'react';
import './TestEntity2.scss';

export function TestEntity2() {
	// hook useState
	const [count, setCount] = useState(0);
	const [state, setState] = useState('');

	const clickHandler = () => {
		setCount((prevState) => prevState + 1);
	};

	// hook useEffect

	useEffect(() => {
		setState('World');
	}, [count]);

	return (
		<div>
			<h1>Count: {count}</h1>
			<h1>State: {state}</h1>
			<button onClick={clickHandler}>UpperCount</button>
		</div>
	);
}
