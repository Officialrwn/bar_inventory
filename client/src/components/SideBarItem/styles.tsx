import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	align-items: center;
	padding-left: 2vw;
	margin-top: -3vh;
	color: #C8C3C3;
`;

const NavLink = styled.p`
	font-size: 2.5vh;
	font-weight: bold;
	padding-left: 0.5vw;
`;

const NavIcon = styled.img`
	max-width: 10%;
	max-height: 35%;
	margin-top: 0.2vh;
`;

export { 
	Main,
	NavLink,
	NavIcon
}