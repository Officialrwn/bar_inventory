import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	align-items: center;
`;

const IconBox = styled.div`
	display: flex;
	align-items: center;
	min-height: 5vh;
`

const Icon = styled.img`
	max-height: 3.5vh;
	padding-left: 1vw;
	padding-top: 0.1vh;
`;

const IconDesc = styled.p`
	font-size: 1.5vw;
	color: black;
	margin: 0;
`

export { 
	Main,
	Icon,
	IconDesc,
	IconBox
}