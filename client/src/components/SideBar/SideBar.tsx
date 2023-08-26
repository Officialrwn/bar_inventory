import { Main } from './styles';
import { NavList } from '../../data/constants';
import { NavListType } from '../../types/NavListType';
import SideBarItem from '../SideBarItem/SideBarItem';

const SideBar: React.FC = () => (
	<Main>
		{ NavList.map((item: NavListType) => {
			return <SideBarItem key={item.name} route={item} />;
		})}
	</Main>
)

export default SideBar