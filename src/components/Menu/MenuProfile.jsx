import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../../assets/styles/components/Header.scss';

export default function MenuProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    localStorage.removeItem('token');
    window.location.href = '/home';
  };

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Profile
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            background: '#6f4a8e',
            color: '#fff',
          },
        }}
      >
        <MenuItem component={Link} to='/profile' onClick={handleClose}>
          Mi cuenta
        </MenuItem>
        <MenuItem onClick={handleClose}>Cerrar Sesion</MenuItem>
      </Menu>
    </div>
  );
}
