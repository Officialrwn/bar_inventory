import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	width: 100%;
	> * {
		&:nth-child(6) {
			flex: 2;
		}
		&:last-child {
			flex: 1;
		}
	}
`;

const Title = styled.p<{ isFirst: boolean }>`
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
	${({ isFirst }) => 
		isFirst &&
		`
		padding-left: 1vw;
		padding-right: 2vw;
	`}
`

const ItemBox = styled.div`
	display: flex;
	flex-direction: column;

`

const Item = styled.div<{ isFirst: boolean }>`
	display: flex;
	justify-content: end;
	margin: 0;
	padding: 1vh 0.5vw 1vh 0;
	background-color: white;
	color: black;
	font-size: 1.7vw;
	line-height: 1;
	${({ isFirst }) => isFirst &&`
		justify-content: start;
		padding-left: 1vw;
	`}
`

export { 
	Main,
	Title,
	ItemBox,
	Item
}