import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	align-items: center;
	height: 12vh;
	background-color: #D7D7D7;
	color: black;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	line-height: 1;
	color: white;
	font-size: 3.5vh;
	min-width: 16%;
	height: 100%;
	background-color: #4C6085;
`;

const Content = styled.div`
	display: flex;
	width: 100vw;
	padding: 0 2vw 0 2vw;
	align-items: center;
	justify-content: space-between;
`;

const CurrentDate = styled.h1`
`

const Page = styled.h1`
	font-size: 2.8vw;
`

const Button = styled.h1`
	padding: 0.5vh 1vw 0.5vh 1vw;
	border-style: solid;
`;

export { 
	Main,
	Title,
	Content,
	CurrentDate,
	Page,
	Button
}