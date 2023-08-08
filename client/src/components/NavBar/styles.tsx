import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	width: 100vw;
	align-items: center;
	background-color: #D7D7D7;
`;

const Title = styled.h1`
	display: flex;
	min-width: 14vw;
	text-align: center;
	background-color: #D7D7D7;
	padding-left: 1vw;
	padding-right: 1vw;
`;

const Content = styled.div`
	display: flex;
	width: 100vw;
	padding-left: 1vw;
	padding-right: 1vw;
	border-left: solid;
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