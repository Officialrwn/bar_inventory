import { BoxItem } from './styles'

const BoxItems = ({item, index}: any) => (
	<BoxItem $index={index}>{item[index]}</BoxItem>
)

export default BoxItems