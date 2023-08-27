import { StringKeyObject } from '../../types/types';
import { Main } from './styles';

const HomeComponent: React.FC<StringKeyObject<string>> = ({title}) => (
	<Main>{title}</Main>
)

export default HomeComponent