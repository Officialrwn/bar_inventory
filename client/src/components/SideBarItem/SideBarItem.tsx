import { Main, NavLink, NavIcon } from './styles'

const SideBarItem = ({title}: any) => {
	const imglink = `/assets/images/${title?.toLowerCase()}.png`
	const route = () => {
		console.log("Route");
	}
	return	(
		<Main onClick={route}>
			<NavIcon src={imglink}/>
			<NavLink>{title}</NavLink>
		</Main>
		)
	}
export default SideBarItem