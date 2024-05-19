'use client';

import { FormEvent } from 'react';
import './RegisterForm.scss';

export function RegisterForm() {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const response = await fetch('api/auth/register', {
			method: 'POST',
			body: JSON.stringify({
				email: formData.get('email'),
				password: formData.get('password'),
			}),
		});
		/* eslint-disable no-console*/
		console.log({ response });
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="register-form">
				<h2>Регистрация</h2>
				<input name="email" type="text" />
				<input name="password" type="password" />
				<button type="submit" className="register-button">
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
}
