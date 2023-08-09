import { Main, NavLink, NavIcon } from './styles'

const SideBarItem = ({title}: any) => (
	<Main>
		<NavIcon/>
		<NavLink>{title}</NavLink>
	</Main>
	)

export default SideBarItem