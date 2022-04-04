import React, { useState } from "react";
import "./Nav.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import "./Nav.css";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";






function Botones( { Name, SubMenu }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
    const handleClose = () => {
        setAnchorEl(null)
    };

return(   
    <div>
       <Button
          id="demo-positioned-button"
          aria-controls= {open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableElevation
          variant="contained"
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          > {Name} </Button>
      <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      >
        {/* Drop Dows */}
        { SubMenu && SubMenu.map(Menu=>
          <MenuItem onClick={handleClose}>{Menu}</MenuItem>
          )}
    
                
      </Menu>
        
    </div>
  )
  

}

export default Botones;