export function setCookie(name: string, value: string | number, options: Record<string, unknown> = {}) {
	options = {
		path: '/',
		// при необходимости добавьте другие значения по умолчанию
		...options,
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

	for (const optionKey in options) {
		updatedCookie += `; ${optionKey}`;
		const optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += `=${optionValue}`;
		}
	}

	updatedCookie += 'HttpOnly; Secure;';
	document.cookie = updatedCookie;
}
// Пример использования:
// setCookie('user', 'John', {secure: true, 'max-age': 3600});

export function getCookie(name: string) {
	const matches = document.cookie.match(
		/* eslint-disable-next-line */
		new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
	);
	return matches ? decodeURIComponent(matches[1]) : null;
}

export function deleteCookie(name: string) {
	setCookie(name, '', {
		'max-age': -1,
	});
}
