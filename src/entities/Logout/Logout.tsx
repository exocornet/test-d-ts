'use client';
import './Logout.scss';
import { signOut } from 'next-auth/react';

export function Logout() {
	return (
		<button className="logout" onClick={() => signOut()}>
			Выйти
		</button>
	);
}
