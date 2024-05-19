import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
	pages: {
		signIn: '/login',
	},
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials) {
				const user = { id: 'myId', email: 'test@mail.ru', password: '123' };
				// TODO проверка что credentials есть в бд на беке
				if (user.email === credentials?.email && user?.password === credentials?.password) {
					user.password = '';
					return user;
				} else return null;
			},
		}),
	],
});

export { handler as GET, handler as POST };
