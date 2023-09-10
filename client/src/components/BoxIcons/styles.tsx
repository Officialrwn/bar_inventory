import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: white;
	min-height: 5vh;
	padding-left: 1vw;
	padding-right: 1vw;
`;

const Icon = styled.img`
	max-width: 3vh;
	margin-top: 0.2vh;
	padding-left: 1vh;
`;

export { 
	Main,
	Icon
}