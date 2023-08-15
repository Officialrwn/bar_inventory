import { Main, NavLink, NavIcon } from './styles'

const SideBarItem = ({route}: any) => {
	const imglink = require(`../../assets/images/${route.name?.toLowerCase()}.png`)

	return	(
		<Main>
			<NavIcon src={imglink} alt={route.name}/>
			<NavLink to={route.path}>
				{route.name}
			</NavLink>
		</Main>
	)
}

export default SideBarItem