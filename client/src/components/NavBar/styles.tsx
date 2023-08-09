import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	align-items: center;
	height: 12vh;
	background-color: #D7D7D7;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	line-height: 1;
	color: white;
	font-family: "Inria-sans Bold";
	font-size: 3.5vh;
	min-width: 18%;
	height: 100%;
	background-color: #4C6085;
`;

const Content = styled.div`
	display: flex;
	width: 100vw;
	padding-left: 1vw;
	padding-right: 1vw;
	align-items: center;
	justify-content: space-between;
`;

const Date = styled.h2`
	display: flex;
`

const Page = styled.h1`
	display: flex;
	justify-self: center;
`

export { 
	Main,
	Title,
	Content
}