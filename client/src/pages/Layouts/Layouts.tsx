import { Main, Page, Line } from './styles'
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from "react-router-dom";

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