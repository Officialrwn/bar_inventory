import { Main, NavLink, NavIcon } from './styles'
import { Link } from "react-router-dom";

const SideBarItem = ({title}: any) => {
	const imglink = `/assets/images/${title?.toLowerCase()}.png`
	const route = `/${title.replace(/\s/g, '')}`;
	return	(
		<Main>
			<NavIcon src={imglink}/>
			<NavLink to={route}>{title}</NavLink>
		</Main>
		)
	}
export default SideBarItem