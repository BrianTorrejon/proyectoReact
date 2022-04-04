import React from "react";
import { Drawer } from "@mui/material";
import { ListItem, List, ListItemIcon } from "@mui/material";
import Botones from "./Buttoms.js";


const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor="right" open={openDrawer}>
      <List>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
          <Botones Name="Home" />
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
          <Botones Name="Categorias" SubMenu={["Guitarras/Bajos","Baterias","Piano/Teclado", "Violines", "Parlantes", "Microfonos", "Auriculares" ]}/>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
          <Botones Name="Nosotros" />
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
          <Botones Name="Mi Cuenta" SubMenu={["Entrar","Abrir Cuenta Nueva"]}/>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
          <Botones Name="Preguntas Frecuentes" />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default DrawerComponent;