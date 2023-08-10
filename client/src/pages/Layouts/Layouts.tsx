import { Main, Page, Line } from './styles'
import { Outlet } from "react-router-dom";
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';

const Layouts = () => (
	<Main>
		<NavBar/>
		<Line/>
		<Page>
			<SideBar/>
			<Outlet/>
		</Page>
	</Main>
	)

export default Layouts