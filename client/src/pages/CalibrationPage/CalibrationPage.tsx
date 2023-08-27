import BoxComponent from '../../components/BoxComponent/BoxComponent'
import { Main } from './styles'
import { tapCalibration } from '../../data/constants'

const CalibrationPage: React.FC = () => (
	<Main>
		<BoxComponent category={tapCalibration}/>
	</Main>
)

export default CalibrationPage