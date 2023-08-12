import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	width: 80%;
	padding: 3.5vh;
	flex-direction: column;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20%;
	border-style: solid;
	margin-bottom: 3vh;
`

const Content = styled.div`
	display: flex;
	padding: 1.5vw 1.5vw 0 1.5vw;
	flex-wrap: wrap;
	justify-content: space-between;
	border-style: solid;
`

export { 
	Main,
	Header,
	Content
}