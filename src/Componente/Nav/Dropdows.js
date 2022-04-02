import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./Nav.css";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledMenu = styled((props) => (
  <Menu
    anchorOrigin={{
      vertical: "buttom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "buttom",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: theme.spacing(1.5),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {},
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Dropdows() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container>
      <StyledMenu
        id="demo-positioned-menu"
        MenuListProps={{
          "aria-labelledby": "demo-positioned-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {/* Drop Dows */}
        <Grid container spacing={2} columns={48}>
          <Grid item xs={8}>
            <MenuItem onClick={handleClose}>Guitarras/Bajos</MenuItem>
            <MenuItem onClick={handleClose}>Baterias</MenuItem>
            <MenuItem onClick={handleClose}>Piano/Teclado</MenuItem>
            <MenuItem onClick={handleClose}>Violines</MenuItem>
            <MenuItem onClick={handleClose}>Parlantes</MenuItem>
            <MenuItem onClick={handleClose}>Microfonos</MenuItem>
            <MenuItem onClick={handleClose}>Auriculares</MenuItem>
          </Grid>
          <Grid item xs={12}>
            <MenuItem onClick={handleClose}>Historia</MenuItem>
            <MenuItem onClick={handleClose}>Contacto</MenuItem>
          </Grid>
          <Grid item xs={8}>
            <MenuItem onClick={handleClose}>Entrar</MenuItem>
            <MenuItem onClick={handleClose}>Abrir Cuenta Nueva</MenuItem>
          </Grid>
        </Grid>
      </StyledMenu>
    </Grid>
  );
}

export default Dropdows;
