import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  div {
    display: flex;
    justify-content: space-between;
    font-size:1.8rem
  } 
`;

const TitleSpan = styled.span`
  margin: auto;
`

const StyledButton = styled(Button)`
  margin-right: auto;
  font-size:1.8rem;
  .MuiButton-label {
    font-size:1.3rem;
    color: white;
  }
`

const Header = (props) => {
  console.log(props);
  return(
  <StyledAppBar position="static" elevation={0}>
    <Toolbar>
      <TitleSpan>
        All My Handles
      </TitleSpan>
      <Link to="/login">
      <StyledButton  color="inherit">Login / Signup</StyledButton>
      </Link>
    </Toolbar>
  </StyledAppBar>
  );
};

export default Header;