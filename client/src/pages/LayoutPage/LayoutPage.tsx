import { Main, Page, Line, Content } from './styles'
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { PageContext } from '../../context/pageContext';
import { NavList } from '../../data/constants';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import { NavListType } from '../../types/NavListType';

const LayoutPage = () => {
	const [page, setPage] = useState('Home');
	const currentLocation = useLocation().pathname.toLowerCase();
	
	useEffect(() => {
		NavList.find((page: NavListType)=> {
			if (page.path === currentLocation)
				setPage(page.name);
		});
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