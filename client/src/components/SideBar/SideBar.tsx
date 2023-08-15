import { Main } from './styles';
import { NavList } from '../../data/constants';
import SideBarItem from '../SideBarItem/SideBarItem';
import { NavListType } from '../../types/NavListType';

const SideBar = () => {
	return (
		<Main>
			{ NavList.map((link: NavListType) => {
				return <SideBarItem key={link.name} title={link.name} />;
			})}
		</Main>
	)
}

export default SideBar