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

const Title = styled.p<{ $index: number }>`
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
	${({ $index }) => 
		($index == 0) &&
		`
		padding-left: 1vw;
		padding-right: 2vw;
	`}
`

const ItemBox = styled.div`
	display: flex;
	flex-direction: column;

`

const Item = styled.div<{ $index: number }>`
	display: flex;
	justify-content: end;
	align-items: center;
	flex-wrap: wrap;
	margin: 0;
	min-height: 3vh;
	padding: 1vh 0.5vw 1vh 0;
	background-color: white;
	color: black;
	font-size: 1.4vw;
	line-height: 1;
	${({ $index }) => $index == 0 &&`
		justify-content: start;
		padding-left: 1vw;
	`}
`

const IconBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: white;
	min-height: 5vh;
`

const Icon = styled.img`
	max-width: 30%;
	margin-top: 0.2vh;
`;

export { 
	Main,
	Title,
	ItemBox,
	Item,
	IconBox,
	Icon
}