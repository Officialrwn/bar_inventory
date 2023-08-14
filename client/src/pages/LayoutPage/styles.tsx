import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #D7D7D7;
`;

const Page = styled.div`
	display: flex;
	min-height: 0;
`;

const Line = styled.div`
	border-style: solid;
	border-color: white;
`;

const Content = styled.span`
	overflow-y: auto;
	padding: 2vw 1vw 2vw 1vw;
	flex: 1;
`

export { 
	Main,
	Page,
	Line,
	Content
}