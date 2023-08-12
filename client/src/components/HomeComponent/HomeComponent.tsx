import { StringKeyObject } from '../../types/types';
import { Main } from './styles';

const HomeComponent = ({title}: StringKeyObject<string>) => {
	return (
		<Main>
			<p>{title}</p>
		</Main>
	)
}

export default HomeComponent