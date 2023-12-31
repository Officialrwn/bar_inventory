import { StringKeyObject } from '../../types/types'
import { Main, NavLink, NavIcon } from './styles'

type RouteType = {
	route: StringKeyObject<string>
}

const SideBarItem: React.FC<RouteType> = ({route}) => {
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