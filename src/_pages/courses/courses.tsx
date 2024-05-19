import Link from 'next/link';
import { ROUTER_PATHS } from '../../shared/constants/routes';

async function getPosts() {
	const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10', {
		next: { revalidate: 10 },
	});
	return posts.json();
}

export default async function CoursesPage() {
	const arrCournse = [
		{ id: 1, name: 'Курс 1' },
		{ id: 2, name: 'Курс 2' },
		{ id: 3, name: 'Курс 3' },
		{ id: 4, name: 'Курс 4' },
	];

	const posts = await getPosts();

	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '0 auto', width: '600px' }}>
				{arrCournse.map((course) => (
					<div key={course.id} style={{ border: '1px solid black', marginTop: '10px', marginBottom: '10px' }}>
						<Link style={{ color: 'black', textDecoration: 'none' }} href={`${ROUTER_PATHS.COURSES}/${course.id}`}>
							{course.name}
						</Link>
					</div>
				))}
			</div>
			<h3 style={{ textAlign: 'center', fontSize: '20px', marginBottom: '10px' }}>Данные с JSONPLACEHOLDER</h3>
			<div style={{ width: '800px', margin: '0 auto 10px' }}>{JSON.stringify(posts)}</div>
		</>
	);
}
