/* ------------ Dependecies ------------*/
import React, { useContext } from "react";

/* ------------ Material UI ------------*/
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import SearchIcon from "@mui/icons-material/Search";
import MUISwitch from "../Switch/SwitchMood";

/* ------------ Context ------------*/
import { ThemeContext } from "../../Context/ThemeContex";
import { LanguageContext } from "../../Context/LanguageContext";

/* ------------ Styled Components ------------*/
const Search = styled("div")(({ theme, color }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  color: color,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


/* ------------ Words ------------*/

const words = {
  english:{

      search: 'Search', 

  },
  french:{
      
    search: 'chercher', 
     
  },
  spanish:{
    search: 'Buscar', 
  }
}


/* ------------ Components ------------*/

export default function Navbar() {

  /* ------------ Context ------------*/
  const { darkMode, handleMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const {search} = words[language]
  return (
    
  
        <Box sx={{ flexGrow: 1 }}>

          <AppBar position="static" color={darkMode ? 'default' : 'primary'}>

            <Toolbar>
            
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <GTranslateIcon />
              </IconButton>

              <Typography
                variant="h6"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                App Login
              </Typography>

              <MUISwitch onChange={handleMode}/>

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder={`${search}...`}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

            </Toolbar>

          </AppBar>

        </Box>
  );
}
