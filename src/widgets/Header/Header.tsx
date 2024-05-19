import './Header.scss';
import Link from 'next/link';
import { ROUTER_PATHS } from '../../shared/constants/routes';
import './Header.scss';
import Logo from './logo.svg';
import { Logout } from '../../entities';
import { getServerSession } from 'next-auth';

// import Logo2 from './youtube.svg?url';
// import Logo3 from './test.jpg';
// import Image from 'next/image';

export async function Header() {
	const session = await getServerSession();
	return (
		<header className="header">
			<nav className="navigation">
				<div className="in-nav">
					<Link className="link" href={ROUTER_PATHS.ROOT}>
						<Logo style={{ width: '30px', height: '30px' }} />
						{/*<Image src={Logo3} alt={'logo'} />*/}
					</Link>
					<Link className="link" href={ROUTER_PATHS.ABOUT}>
						О нас (Публично)
					</Link>
					<Link className="link" href={ROUTER_PATHS.COURSES}>
						Курсы (Защищено)
					</Link>
					<Link className="link" href={ROUTER_PATHS.POSTS}>
						Посты (Защищено)
					</Link>
				</div>
				{!!session && <Logout />}
				{!session && (
					<Link className="login" href={ROUTER_PATHS.LOGIN}>
						Войти
					</Link>
				)}
				{/*<Link className={styles.link} href={ROUTER_PATHS.REGISTER}>*/}
				{/*	Регистрация*/}
				{/*</Link>*/}
			</nav>
		</header>
	);
}
