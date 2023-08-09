import styled from 'styled-components'

const Main = styled.div`
	display: flex;
	align-items: center;
	color: #C8C3C3;
	padding-left: 2vw;
`;

const NavLink = styled.p`
	font-size: 2.5vh;
	font-weight: bold;
	padding-left: 1vw;
	margin-top: 1vh;
	margin-bottom: 1vh;
`;

const NavIcon = styled.img`
	border-style: solid;
	width: 10%;
	height: 60%;
`;

export { 
	Main,
	NavLink,
	NavIcon
}