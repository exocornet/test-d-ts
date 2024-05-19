import './index.scss';

{
	/*TODO: ВНЕДРИТЬ КАК НА МАРГУЛАНЕ*/
}
export default function IndexPage() {
	// # ЛОГИКА СТРАНИЦЫ # //
	// const { data } = props;
	// const ProrivPage: any = PageData(props);

	// # ВЕРСТКА СТРАНИЦЫ # //

	return (
		<>
			<main>
				<h2
					style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', fontSize: '50px' }}
				>
					Главная страница
				</h2>
				<h1 style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}>
					Шаблон Next JS 14
				</h1>
				{/*{data.components.map((dataComponent, idx) => {*/}
				{/*	if (NAME_SECTIONS[`${dataComponent.component as keyof typeof NAME_SECTIONS}`]) {*/}
				{/*		return APPEND_SECTION(*/}
				{/*			ProrivPage,*/}
				{/*			dataComponent.component as keyof typeof NAME_SECTIONS,*/}
				{/*			idx,*/}
				{/*			dataComponent.component + idx*/}
				{/*		);*/}
				{/*	}*/}
				{/*})}*/}
				<div className="block">
					<h2>Развитие</h2>
					<p>
						Товарищи! новая модель организационной деятельности позволяет выполнять важные задания по разработке
						направлений прогрессивного развития. Таким образом постоянное информационно-пропагандистское обеспечение
						нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития.
						Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет
						за собой процесс внедрения и модернизации систем массового участия. Повседневная практика показывает, что
						укрепление и развитие структуры представляет собой интересный эксперимент проверки форм развития.
					</p>
				</div>
				<div className="block">
					<h2>Обучение</h2>
					<p>
						Таким образом рамки и место обучения кадров позволяет оценить значение системы обучения кадров,
						соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что реализация намеченных
						плановых заданий в значительной степени обуславливает создание форм развития.
					</p>
				</div>
				<div className="block">
					<h2>Маркетинг</h2>
					<p>
						Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности обеспечивает
						широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий.
						Равным образом рамки и место обучения кадров способствует подготовки и реализации позиций, занимаемых
						участниками в отношении поставленных задач. Не следует, однако забывать, что дальнейшее развитие различных
						форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров,
						соответствует насущным потребностям. Равным образом укрепление и развитие структуры представляет собой
						интересный эксперимент проверки существенных финансовых и административных условий.
					</p>
				</div>
				<div className="block">
					<h2>Стратегия</h2>
					<p>
						Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
						осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в
						домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст
						генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст
						более привлекательным и живым для визуально-слухового восприятия. По своей сути рыбатекст является
						альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать
						рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и
						придаст неповторимый колорит советских времен.
					</p>
				</div>
				<div className="block">
					<h2>Преимущества</h2>
					<p>
						Идейные соображения высшего порядка, а также консультация с широким активом способствует подготовки и
						реализации дальнейших направлений развития. Товарищи! реализация намеченных плановых заданий влечет за собой
						процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же
						постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа
						соответствующий условий активизации.
					</p>
				</div>
				<div className="block">
					<h2>Ключевые особенности</h2>
					<p>
						Таким образом новая модель организационной деятельности способствует подготовки и реализации направлений
						прогрессивного развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей
						активности позволяет выполнять важные задания по разработке соответствующий условий активизации.
					</p>
				</div>
			</main>
		</>
	);
}

// # ЗАПРОС ДАННЫХ СТРАНИЦЫ # //
// export async function getServerSideProps() {
// 	return RequestFetchPage('proriv', ProrivBackendDataJSON);
// }
