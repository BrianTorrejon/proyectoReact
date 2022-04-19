import React from "react";
import { Drawer } from "@mui/material";
import { ListItem, List, ListItemIcon } from "@mui/material";
import Botones from "./Buttoms.js";


const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor="right" open={openDrawer}>
      <List>
        <ListItem divider button onClick={() => setOpenDrawer(true)}>
          <ListItemIcon>
          <Botones Name="Home" SubMenu={["Home"]} url="/" />
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(true)}>
          <ListItemIcon>
          <Botones Name="Categorias" SubMenu={["Guitarras/Bajos","Baterias","Piano/Teclado", "Violines", "Parlantes", "Microfonos", "Auriculares" ]} url="/PaginaInstrumentos"/>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(true)}>
          <ListItemIcon>
          <Botones Name="Nosotros" />
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(true)}>
          <ListItemIcon>
          <Botones Name="Mi Cuenta" SubMenu={["Entrar","Abrir Cuenta Nueva"]} url="/"/>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(true)}>
          <ListItemIcon>
          <Botones Name="Preguntas Frecuentes" />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default DrawerComponent;