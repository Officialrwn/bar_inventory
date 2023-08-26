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
	max-height: 60%;
	padding-left: 1vw;
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