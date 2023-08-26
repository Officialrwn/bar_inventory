import { Main, Title, Content, CurrentDate, Page, Button } from './styles'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { PageContext } from '../../context/pageContext';
import { getCurrentDate } from '../../utils/getCurrentDate';
import { StringKeyObject } from '../../types/types';

const NavBar: React.FC = () => {
	const [currentDate, setCurrentDate] = useState(getCurrentDate());
	const { page } = useContext(PageContext) as StringKeyObject<string>;

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