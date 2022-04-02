import React, { useState } from "react";
import "./Nav.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Dropdows from "./Dropdows.js";







function Botones( { Name }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
    const handleClose = () => {
        setAnchorEl(null)
    };

const LinkButton = (props) =>
        <Button
          id="demo-positioned-button"
          aria-controls= {open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableElevation
          variant="contained"
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          {...props} />
return (
    <div>
        <LinkButton>
            {Name}
        </LinkButton>
        <Dropdows/>
    </div>
    );
}

export default Botones;