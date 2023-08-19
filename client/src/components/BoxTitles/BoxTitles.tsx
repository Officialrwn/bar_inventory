import { StringKeyObject } from '../../types/types'
import { Title } from './styles'

type BoxTitlesType = {
	title: StringKeyObject<string>,
	index: number
}

const BoxTitles = ({title, index}: BoxTitlesType) => (
		<Title $index={index}>
			{ title.name !== '-' ? title.name : '' }<br/>
			{ title.unit ? `(${title.unit})` : ''}
		</Title>
	)

export default BoxTitles