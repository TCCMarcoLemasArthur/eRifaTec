import React, { useState } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

import usuario from '../assets/imagens/usuario.png';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import TableChartIcon from '@mui/icons-material/TableChart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import HelpIcon from '@mui/icons-material/Help';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';

interface Props{
  anchor?: 'left' | 'right'
}

export default function Menu({ anchor }: Props) {
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

  interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
  }
  
  const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
    itemProps,
    ref,
  ) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
  });
  
  function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to } = props;
  
    return (
      <li>
        <ListItem sx={{color: "#fff"}} component={Link} to={to}>
          {icon ? <ListItemIcon sx={{color: "#fff"}}>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  const items = () => {
    return (
      <>
        <Stack direction="row" spacing={2} sx={{
          bgcolor: 'background.dark',
          maxWidth: 350,
          p: 2
        }}>
          <Avatar sx={{width: 56, height: 56}} src={usuario} alt="usuario" />
          <Stack>
            <Typography sx={{fontSize: 18, color: 'primary.light'}}>
              Bem Vindo(a),
            </Typography>
            <Typography sx={{fontSize: 18, fontWeight: "bold", color: 'white'}}>
              Usuário
            </Typography>
          </Stack>
        </Stack>
        <Box sx={{
          width: '100%', 
          maxWidth: 350, 
          color: '#fff', 
          bgcolor: 'background.light',
          p: 1
        }}>
          <Button sx={{fontWeight: 'bold'}}>
            <Link to={'/cadastrar'}>Cadastrar</Link>
          </Button>
          <Button sx={{fontWeight: 'bold'}}>
            <Link to={'/login'}>Entrar</Link>
          </Button>
          <List>
            <ListItemLink to="/" primary="Início" icon={<HomeIcon />} />
            <ListItemLink to="#" primary="Minha conta" icon={<PersonIcon />} />
            <ListItemLink to="#" primary="Histórico de rifas" icon={<HistoryIcon />} />
            <ListItemLink to="#" primary="Meus prêmios" icon={<EmojiEventsIcon />} />
          </List>
          <Divider />
          <Typography sx={{fontWeight: "bold"}}>Gerenciar rifas</Typography>
          <List>
            <ListItemLink to="/criar_rifa" primary="Criar rifa" icon={<LocalActivityIcon />} />
            <ListItemLink to="#" primary="Painel de rifas" icon={<TableChartIcon />} />
            <ListItemLink to="#" primary="Listar prêmios" icon={<FormatListBulletedIcon />} />
          </List>
          <Divider />
          <Typography sx={{fontWeight: "bold"}}>Suporte</Typography>
          <List>
            <ListItemLink to="#" primary="Dúvidas" icon={<HelpIcon />} />
            <ListItemLink to="#" primary="Central de atendimento" icon={<SupportAgentIcon />} />
            <ListItemLink to="#" primary="Contatos" icon={<EmailIcon />} />
          </List>
        </Box>
      </>
    );
  }

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
      >
        <MenuIcon fontSize="large" sx={{color: "#fff"}}/>
      </IconButton>
      <Drawer
        anchor={anchor}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        {items()}
      </Drawer>
    </>
  );
}