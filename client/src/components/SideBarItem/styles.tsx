import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	align-items: center;
	padding-left: 2.5vw;
	color: #C8C3C3;
`;

const NavLink = styled.p`
	font-size: 2.5vh;
	font-weight: bold;
	padding-left: 0.5vw;
`;

const NavIcon = styled.img`
	width: 10%;
	height: 40%;
`;

export { 
	Main,
	NavLink,
	NavIcon
}