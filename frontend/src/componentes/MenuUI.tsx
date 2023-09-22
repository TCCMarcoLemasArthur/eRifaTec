import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../estilos/menu.module.css';
import user from '../imagens/user.png'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from "@mui/material";
import HomeIcon from '@mui/material'


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

  const items = () => {
    return (
      <>
        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Início'} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
        <div className={styles.user_info}>
          <figure>
            <img src={user} alt="foto pequena do usuário" />
          </figure>
          <h4>Visitante</h4>
        </div>
        <div className={styles.menu_links}>
          <Link to={"/"}><i className="fa-solid fa-house"></i>Início</Link>
          <Link to={"#"}><i className="fa-solid fa-user"></i>Minha conta</Link>
          <Link to={"#"}><i className="fa-solid fa-clock-rotate-left"></i>Histórico de rifas</Link>
          <Link to={"#"}><i className="fa-solid fa-trophy"></i>Meus prêmios</Link>
          <h3>Gerenciar rifas</h3>
          <Link to={"/criar_rifa"}><i className="fa-solid fa-ticket"></i>Criar rifa</Link>
          <Link to={"#"}><i className="fa-solid fa-table-columns"></i>Painel de rifas</Link>
          <Link to={"#"}><i className="fa-solid fa-list"></i>Listar prêmios</Link>
          <h3>Suporte</h3>
          <Link to={"#"}><i className="fa-solid fa-circle-question"></i>Dúvidas</Link>
          <Link to={"#"}><i className="fa-solid fa-headset"></i>Central de atendimento</Link>
        </div>
        <div className={styles.menu_buttons}>
          <button onClick={toggleDrawer(false)}><Link to={"/login"}>Login</Link></button>
          <button onClick={toggleDrawer(false)}><Link to={"/cadastrar"}>Cadastrar</Link></button>
        </div>
      </>
    );
  }

  return (
    <>
      <Button 
        sx={{fontSize: 30, color: '#fff'}}
        onClick={toggleDrawer(true)}
      >
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Drawer
        anchor={'left'}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        {items()}
      </Drawer>
    </>
  );
}