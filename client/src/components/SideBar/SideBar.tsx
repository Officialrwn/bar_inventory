import { Main } from './styles';
import { NavLinks } from '../../data/constants';
import SideBarItem from '../SideBarItem/SideBarItem';

const SideBar = () => {
	return (
		<Main>
			{ NavLinks.map((link: string) => {
				return <SideBarItem key={link} title={link} />;
			})}
		</Main>
	)
}

export default SideBar