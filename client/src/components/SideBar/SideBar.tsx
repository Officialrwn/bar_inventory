import { Main } from './styles';
import { NavList } from '../../data/constants';
import SideBarItem from '../SideBarItem/SideBarItem';

const SideBar: React.FC = () => (
	<Main>
		{ NavList.map((item: { name: string }) => {
			return <SideBarItem key={item.name} route={item} />;
		})}
	</Main>
)

export default SideBar