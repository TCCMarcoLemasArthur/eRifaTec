import React, { useState } from "react";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function MenuUI() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Drawer
        anchor={'left'}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <h1>Hello World</h1>
      </Drawer>
    </>
  );
}