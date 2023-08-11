import { Main, Page, Line } from './styles'
import { Outlet } from "react-router-dom";
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import { useState } from 'react';
import { PageContext } from '../../context/pageContext';


const LayoutPage = () => {
	const [page, setPage] = useState('Home');
	
	return	(
		<Main>
			<NavBar page={page}/>
			<Line/>
			<Page>
				<PageContext.Provider value={{ setPage }}>
					<SideBar />
				</PageContext.Provider>
				<Outlet/>
			</Page>
		</Main>
		)
	}
export default LayoutPage