import { withAuth } from 'next-auth/middleware';

export default withAuth({
	// редирект к этой странице если роут защищенный
	pages: {
		signIn: '/login',
	},
});

export const config = {
	// Сюда вложить защищенные маршруты к которым нет доступа без авторизации ..
	matcher: ['/courses/:path*', '/posts'],
};
