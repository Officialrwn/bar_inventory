import styled from 'styled-components'

const BoxItem = styled.div<{ $index: number }>`
	display: flex;
	justify-content: end;
	align-items: center;
	flex-wrap: wrap;
	margin: 0;
	min-height: 3vh;
	padding: 1vh 0.5vw 1vh 0;
	background-color: white;
	color: black;
	font-size: 1.4vw;
	line-height: 1;
	${({ $index }) => $index === 0 &&`
		justify-content: start;
		padding-left: 1vw;
	`}
`

export { 
	BoxItem
}