import styled from 'styled-components'

const Title = styled.p<{ $index: number }>`
	display: flex;
	align-items: center;
	padding-left: 2.5vw;
	padding-right: 0.5vw;
	height: 8vh;
	margin: 0;
	background-color: #32322C;
	text-align: right;
	font-size: 1.6vw;
	line-height: 1;
	${({ $index }) => 
		($index === 0) &&
		`
		padding-left: 1vw;
		padding-right: 2vw;
	`}
`

export { 
	Title,
}