import React, { useState } from "react";
import { AppBar, Toolbar, Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import "./Nav.css";
import LogoyMarca from "./LogoyMarca.js";
import IconosNav from "./IconosNav.js";
import Botones from "./Buttoms.js";
import DrawerComponent from "./Iconbutton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";


function Nav() {
  const [openDrawer, setOpenDrawer] = useState(true); //

  //Theme instance
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(matches);
  console.log(matches);
  return (
    <AppBar className="Navbar">
      <Toolbar>
        {/* Logo y Marca */}
        <LogoyMarca />
        {/* Drop Dows */}
        {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}> 
        <Botones Name="Home" />
        <Botones Name="Categorias" SubMenu={["Guitarras/Bajos","Baterias","Piano/Teclado", "Violines", "Parlantes", "Microfonos", "Auriculares" ]}/>
        <Botones Name="Nosotros" />
        <Botones Name="Mi Cuenta" SubMenu={["Entrar","Abrir Cuenta Nueva"]}/>
        <Botones Name="Preguntas Frecuentes" />
        </Box>
       )}
        {/* iconos */}
        {matches ? (
          <IconButton color="inherit" onClick={() => setOpenDrawer(true)}>
            <MenuRoundedIcon />
          </IconButton>
        ) : (
        <IconosNav />
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
