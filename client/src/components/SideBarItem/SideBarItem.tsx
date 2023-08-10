import { Main, NavLink, NavIcon } from './styles'
import { Route, Routes } from "react-router-dom";
import Inventory from '../../pages/Inventory/Inventory';

const SideBarItem = ({title}: any) => {
	const imglink = `/assets/images/${title?.toLowerCase()}.png`
	const route = () => {
		console.log("Route");
	}
	return	(
		<Main onClick={route}>
			<NavIcon src={imglink}/>
			{/* <Routes> */}
				{/* <Route path={`/inventory}`} element={<Inventory/>}/> */}
			{/* </Routes> */}
			<NavLink>{title}</NavLink>
		</Main>
		)
	}
export default SideBarItem