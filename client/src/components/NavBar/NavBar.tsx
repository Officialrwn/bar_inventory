import { Main, Title, Content, CurrentDate, Page, Button } from './styles'
import { useEffect, useState } from 'react';

const NavBar = ({ page }: any) => {
	const getCurrentDate = () => {
		const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
		return new Date().toLocaleString("fi-FI", options).toLocaleUpperCase();
	}

	const [currentDate, setCurrentDate] = useState(getCurrentDate());
	useEffect(() => {
		const dayInMs = 1000 * 60 * 60 * 24;
		setInterval(() => setCurrentDate(getCurrentDate), dayInMs);
	}, []);
	return (
		<Main>
			<Title>
				INVENTORY<br/>
				SYSTEM
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