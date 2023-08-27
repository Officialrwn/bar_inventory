import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	width: 100%;
	> * {
		&:first-child {
			flex: 3;
		}
		&:nth-child(4) {
			flex: 1;
		}
	}
	margin-bottom: 1vh;
`;

const ItemBox = styled.div`
	display: flex;
	flex-direction: column;
`

export { 
	Main,
	ItemBox,
}