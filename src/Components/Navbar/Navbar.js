/* ------------ Dependecies ------------*/
import React from "react";
// import AppBar from '@mui/material/AppBar';
// import Typography from '@mui/material/Typography';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';
// import Switch from '@mui/material/Switch';
// import { withStyles } from "@mui/material";
import styled from '@emotion/styled'

const Button = styled.button`
  color: ${props => (props.primary ? 'hotpink' : 'turquoise')};
`
const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column'
  }))
/* ------------ Component ------------*/

const Navbar = () => {

    /* ------------ Render ------------*/

    return(

        <Container column>
            <Button>This is a regular button.</Button>
            <Button primary>This is a primary button.</Button>
        </Container>
    )


}

export default Navbar;