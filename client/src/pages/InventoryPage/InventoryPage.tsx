import BoxComponent from '../../components/BoxComponent/BoxComponent'
import { Main } from './styles'
import { tapInventoryHeader } from '../../data/constants'

const InventoryPage: React.FC = () => (
	<Main>
		<BoxComponent category={tapInventoryHeader}/>
	</Main>
)

export default InventoryPage