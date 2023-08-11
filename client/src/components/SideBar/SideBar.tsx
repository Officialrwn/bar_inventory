import { Main } from './styles';
import SideBarItem from '../SideBarItem/SideBarItem';

const SideBar = () => {
	const NavLinks = [
		'Dashboard',
		'Home',
		'Daily Report',
		'Calibration',
		'Inventory',
		'Sales Report',
		'Settings'
	]
	return (
		<Main>
			{ NavLinks.map((link: string) => {
				return <SideBarItem key={link} title={link} />;
			})}
		</Main>
	)
}

export default SideBar