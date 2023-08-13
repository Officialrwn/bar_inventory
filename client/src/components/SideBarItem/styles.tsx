import styled from 'styled-components'
import { Link } from "react-router-dom";

const Main = styled.div`
	display: flex;
	align-items: center;
	padding-left: 1.5vw;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: #C8C3C3;
	font-size: 3.5vh;
	padding-left: 0.5vw;
`;

const NavIcon = styled.img`
	max-width: 20%;
	max-height: 55%;
	margin-top: 0.2vh;
`;

export { 
	Main,
	NavLink,
	NavIcon
}