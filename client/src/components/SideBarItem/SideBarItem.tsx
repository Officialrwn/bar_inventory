import { Main, NavLink, NavIcon } from './styles'

const SideBarItem = ({title}: any) => {
	const imglink = `/assets/images/${title?.toLowerCase()}.png`
	console.log("imglink", imglink);
	return	(
		<Main>
			<NavIcon src={imglink}/>
			<NavLink>{title}</NavLink>
		</Main>
		)
	}
export default SideBarItem