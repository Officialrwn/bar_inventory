import styled from 'styled-components'

const Main = styled.div`
`;

const TitleHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border-style: solid;
	padding-right: 6vw;
	height: 112px;
	background-color: #32322C;
	> * {
		&:first-child {
		padding-right: 3vw;
	}
`

const Title = styled.p`
	padding: 0 0 0 1vw;
	text-align: right;
	font-size: 1.7vw;
	line-height: 1;
`

const ItemBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	border-style: solid;
	padding-right: 6vw;
	color: black;
	height: 100px;
	> * {
		&:first-child {
		padding-right: 3vw;
	}
`

const Item = styled.p`
	padding: 0 0 0 1vw;
	text-align: right;
	font-size: 1.7vw;
	line-height: 1;
`

export { 
	Main,
	TitleHeader,
	Title,
	ItemBox,
	Item
}