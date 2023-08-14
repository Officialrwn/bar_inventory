import { Main, Page, Line, Content } from './styles'
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { PageContext } from '../../context/pageContext';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import { NavList } from '../../data/constants';

const LayoutPage = () => {
	const [page, setPage] = useState('Home');
	const currentPage = useLocation().pathname;
	
	useEffect(() => {
		console.log(currentPage);
	});	 

	return	(
		<Main>
			<NavBar page={page}/>
			<Line/>
			<Page>
				<PageContext.Provider value={{ setPage }}>
					<SideBar />
				</PageContext.Provider>
				<Content>
					<Outlet/>
				</Content>
			</Page>
		</Main>
	)
}
export default LayoutPage