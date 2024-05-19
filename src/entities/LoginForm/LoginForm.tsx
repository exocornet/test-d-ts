'use client';

import { FormEvent } from 'react';
import './LoginForm.scss';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ROUTER_PATHS } from '../../shared/constants/routes';

export function LoginForm() {
	const router = useRouter();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const response = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false,
		});
		if (!response?.error) {
			router.push(ROUTER_PATHS.ROOT);
			router.refresh();
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="register-form">
				<h2>Авторизация</h2>
				<p>Почта - test@mail.ru</p>
				<p>Пароль - 123</p>
				<input name="email" type="text" />
				<input name="password" type="password" />
				<button type="submit" className="register-button">
					Войти
				</button>
			</form>
		</div>
	);
}
