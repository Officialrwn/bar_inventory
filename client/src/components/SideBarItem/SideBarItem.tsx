import { Main, NavLink, NavIcon } from './styles'
import { PageContext } from '../../context/pageContext';
import { useContext } from 'react';
import { StringKeyObject } from '../../types/types';
import { PageContextType } from '../../types/PageContextType';

const SideBarItem = ({title}: StringKeyObject<string>) => {
	const imglink = require(`../../assets/images/${title?.toLowerCase()}.png`)
	const route = title == '/' ? 'Home' : `/${title.replace(/\s/g, '')}`;
	const { setPage } = useContext(PageContext) as PageContextType;

	return	(
		<Main>
			<NavIcon src={imglink} alt={title}/>
			<NavLink onClick={() => {setPage(title)}} to={route}>
				{title}
			</NavLink>
		</Main>
	)
}
export default SideBarItem