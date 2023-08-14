import { Main, Page, Line, Content } from './styles'
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { PageContext } from '../../context/pageContext';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';


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
				<Content>
					<Outlet/>
				</Content>
			</Page>
		</Main>
	)
}
export default LayoutPage