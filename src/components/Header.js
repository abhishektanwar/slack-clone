import React from 'react'
import styled from 'styled-components'
import { Avatar } from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
const Header = () => {
	return (
		<HeaderContainer>
			{/* header left */}
				<HeaderLeft>
				<HeaderAvatar 
					onClick={()=>console.log("clicked aga")} //home click
				/>
				<AccessTimeIcon />
				</HeaderLeft>
				{/* header middle */}
				<HeaderSearch>
					<SearchIcon />
					<input type="text" placeholder="Search" />
				</HeaderSearch>
				{/* header right */}
				<HeaderRight>
					<HelpOutlineIcon />
				</HeaderRight>
		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.div`
	display: flex;
	position: fixed;
	justify-content: space-between;
	background-color: var(--slack-color);
	align-items: center;
	padding: 10px 0;
	color:white;
	width: 100%;

`;

const HeaderLeft = styled.div`
	display: flex;
	flex:0.3;
	align-items: center;
	/* justify-content: space-between; */
	margin-left: 20px;

	> .MuiSvgIcon-root{
		margin-left: auto;
		margin-right: 20px;
	}

`;

const HeaderAvatar = styled(Avatar)`
	cursor: pointer;

	:hover{
		opacity: 0.8;
	}
`;

const HeaderSearch = styled.div`
	flex:0.4;
	opacity:1;
	border-radius: 6px;
	border: 1px solid grey;
	text-align:center;
	background-color: #421f44;
	display: flex;
	padding:0 50px;
	color: grey; 

	>input{
		background-color: transparent;
		border: none;
		text-align:center;
		min-width: 30vw ;
		outline: 0;
		color: white;
	}
`;

const HeaderRight = styled.div`
	flex:0.3;
	display: flex;
	justify-content: flex-end;

	> .MuiSvgIcon-root{
		margin-left: auto;
		margin-right: 20px;
	}
`;