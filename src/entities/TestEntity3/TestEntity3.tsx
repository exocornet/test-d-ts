'use client';

// async function getPosts() {
// 	const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	return posts.json();
// }

import { Input } from '../../shared/ui';
import { useState, KeyboardEvent } from 'react';

export function TestEntity3() {
	const [value, setValue] = useState('');
	const [text, setText] = useState('');

	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setText('Was pushed Enter...');
			setValue('');
		}
		if (e.key === 'Tab') {
			setText('Was pushed Tab...');
			setValue('');
		}
	};

	return (
		<div>
			<h1>text {text}</h1>
			<h1>value {value}</h1>
			<Input
				data={{ type: 'text', placeholder: 'Enter text...', value: value }}
				on={{
					onChange: (e) => setValue(e.target.value),
					onKeyDown: (e) => onKeyDownHandler(e),
				}}
			/>
		</div>
	);
}
