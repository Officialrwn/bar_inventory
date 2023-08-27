import { Main } from './styles';
import { NavList } from '../../data/constants';
import SideBarItem from '../SideBarItem/SideBarItem';

const SideBar: React.FC = () => {
	const sideBarComponents = NavList.map((item) => (
		<SideBarItem key={item.name} route={item} />
	))
	return (
		<Main>
			{sideBarComponents}
		</Main>
	)
}

export default SideBar