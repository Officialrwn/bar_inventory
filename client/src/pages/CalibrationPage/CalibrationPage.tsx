import BoxComponent from '../../components/BoxComponent/BoxComponent'
import { Main } from './styles'
import { tapCalibration, bottleCalibration, liqeurCalibration, wineCalibration, miscCalibration } from '../../data/calibration-products'

const CalibrationPage: React.FC = () => (
	<Main>
		<BoxComponent category={tapCalibration}/>
		<BoxComponent category={bottleCalibration}/>
		<BoxComponent category={liqeurCalibration}/>
		<BoxComponent category={wineCalibration}/>
		<BoxComponent category={miscCalibration}/>
	</Main>
)

export default CalibrationPage