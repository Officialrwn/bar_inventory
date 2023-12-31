import BoxComponent from '../../components/BoxComponent/BoxComponent'
import { Main } from './styles'
import { tapInventory, bottleInventory } from '../../data/constants'

const InventoryPage: React.FC = () => (
	<Main>
		<BoxComponent category={tapInventory}/>
		<BoxComponent category={bottleInventory}/>
	</Main>
)

export default InventoryPage