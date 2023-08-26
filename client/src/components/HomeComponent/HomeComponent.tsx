import { StringKeyObject } from '../../types/types';
import { Main } from './styles';

const HomeComponent: React.FC<StringKeyObject<string>> = ({title}) => (
	<Main>
		<p>{title}</p>
	</Main>
)

export default HomeComponent