import { Main, Title, Content, CurrentDate, Page, Button } from './styles'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { PageContext } from '../../context/pageContext';
import { PageContextType } from '../../types/PageContextType';
import { getCurrentDate } from '../../utils/getCurrentDate';

const NavBar: React.FC = () => {
	const [currentDate, setCurrentDate] = useState(getCurrentDate());
	const { page } = useContext(PageContext) as PageContextType;

	useEffect(() => {
		const dayInMs = 1000 * 60 * 60 * 24;
		setInterval(() => setCurrentDate(getCurrentDate), dayInMs);
	}, []);

	return (
		<Main>
			<Title>
				INVENTORY<br/>SYSTEM
			</Title>
			<Content>
				<CurrentDate>{currentDate}</CurrentDate>
				<Page>{ page ?? "Page name" }</Page>
				<Button>Login</Button>
			</Content>
		</Main>
		)
	}
export default NavBar