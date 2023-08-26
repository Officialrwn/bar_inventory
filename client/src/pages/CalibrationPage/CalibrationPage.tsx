import BoxComponent from '../../components/BoxComponent/BoxComponent'
import { Main } from './styles'
import { tapInventory, bottleInventory } from '../../data/constants'

const CalibrationPage: React.FC = () => (
	<Main>
		<BoxComponent category={tapInventory}/>
		<BoxComponent category={bottleInventory}/>
	</Main>
)

export default CalibrationPage