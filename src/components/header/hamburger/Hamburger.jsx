import React, { useState } from "react";
import { IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Hamburger() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };
  return (
    <>
        <IconButton onClick={toggleMenu}>
        <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu} variant="temporary" PaperProps={{ style: { width: "100%" } }}>
        <IconButton onClick={handleCloseMenu} style={{ position: 'absolute', right: 0, zIndex: '999' }}>
            <CloseIcon />
        </IconButton>
        <List>
            <ListItem>
                <ListItemText primary="Category 1" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Category 2" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Category 3" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Category 4" />
            </ListItem>
        </List>
        </Drawer>
    </>
  )
}

export default Hamburger;