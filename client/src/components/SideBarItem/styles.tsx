import styled from 'styled-components'
import { Link } from "react-router-dom";

const Main = styled.div`
	display: flex;
	align-items: center;
	padding-left: 2vw;
	color: #C8C3C3;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: #C8C3C3;
	font-size: 3vh;
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