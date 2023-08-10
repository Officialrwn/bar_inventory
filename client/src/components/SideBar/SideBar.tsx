import { Main } from './styles'
import SideBarItem from '../SideBarItem/SideBarItem'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const SideBar = () => {
	const NavLinks = [
		'Dashboard',
		'Home',
		'Daily Report',
		'Calibration',
		'Inventory',
		'Sales Report',
		'Settings'
	]
	return (
	<Main>
		{/* <BrowserRouter> */}
			{ NavLinks.map((link) => {
				return <SideBarItem key={link} title={link}/>;
			})}
		{/* </BrowserRouter> */}
	</Main>
	)
}

export default SideBar