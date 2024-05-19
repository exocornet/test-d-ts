import { Text } from '../../shared/ui';

interface PageProps {
	params: {
		courseId: string;
	};
}

export default function CoursePage({ params }: PageProps) {
	return (
		<>
			<h3 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>
				Курс № {params.courseId}
			</h3>
			<div style={{ border: '1px solid black', margin: '10px auto 10px', width: '600px', padding: '10px' }}>
				<span> Курс {params.courseId}</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, est. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Dolores, est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
					est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, est. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Dolores, est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
					est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, est.
				</p>
				<Text text="Текст"></Text>
				{/*<Button type="button" text="Купить" />*/}
			</div>
		</>
	);
}
