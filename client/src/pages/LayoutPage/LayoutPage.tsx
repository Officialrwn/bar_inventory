import { Main, Page, Line, Content } from './styles'
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { PageContext } from '../../context/pageContext';
import { NavList } from '../../data/constants';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';

const LayoutPage: React.FC = () => {
	const [page, setPage] = useState<string>('Home');
	const currentLocation = useLocation().pathname.toLowerCase();

	useEffect(() => {
		const newLocation = NavList.find((page) => page.path === currentLocation)
		if (newLocation) {
			setPage(newLocation.name);
		}
	},[currentLocation]);	

	return	(
		<Main>
			<PageContext.Provider value={{ page }}>
				<NavBar/>
				<Line/>
				<Page>
					<SideBar />
					<Content>
						<Outlet/>
					</Content>
				</Page>
			</PageContext.Provider>
		</Main>
	)
}
export default LayoutPage