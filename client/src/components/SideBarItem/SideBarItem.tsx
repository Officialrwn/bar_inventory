import { Main, NavLink, NavIcon } from './styles'
import { PageContext, PageContextType } from '../../pageContext';
import { useContext } from 'react';

const SideBarItem = ({title}: any) => {
	const imglink = `/assets/images/${title?.toLowerCase()}.png`
	const route = title == '/' ? 'Home' : `/${title.replace(/\s/g, '')}`;
	const { setPage } = useContext(PageContext) as PageContextType;
	return	(
		<Main>
			<NavIcon src={imglink} alt={title}/>
			<NavLink onClick={() => { setPage(title) }} to={route}>{title}</NavLink>
		</Main>
		)
	}
export default SideBarItem