import { Main } from './styles';
import { NavList } from '../../data/constants';
import SideBarItem from '../SideBarItem/SideBarItem';

const SideBar = () => {
	return (
		<Main>
			{ NavList.map((link: { name: string, path: string }) => {
				return <SideBarItem key={link.name} title={link.name} />;
			})}
		</Main>
	)
}

export default SideBar