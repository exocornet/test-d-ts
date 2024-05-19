'use client';

import { MY_VARIABLE, MY_API_URL } from '../../shared/constants/env';
import { Button } from '../../shared/ui';
import Cookies from 'js-cookie';
import { useState } from 'react';
import './TestEntity.scss';

export function TestEntity() {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		Cookies.set('name', 'cookie-name');
		setCount((prevState) => prevState + 1);
	};

	return (
		<div>
			<div className="env">
				<h2>
					ENV Variable <b>{MY_VARIABLE}</b>
				</h2>
				<h2>API_URL: {MY_API_URL}</h2>
			</div>
			<div className="score">
				<Button data={{ text: 'Счетчик' }} opt={{ disabled: true, isActive: true }} on={{ onClick: handleClick }} />
				<h2>{count}</h2>
			</div>
		</div>
	);
}
