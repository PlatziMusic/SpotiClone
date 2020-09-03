import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import '../../assets/styles/components/Song.scss';

import AddToPlaylist from '../Modals/AddToPlaylist';

const options = [
  'Añadir a playlist',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [modal, setModal] = useState({
    isOpen: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        aria-controls='long-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreHorizIcon className='MoreHorizIcon-styles' style={{ fontSize: 30 }} />
      </IconButton>
      <Menu
        id='long-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '200px',
            background: 'rgba(5, 5, 5, 0.95)',
            color: '#fff',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Añadir a playlist'} onClick={() => setModal({ isOpen: true })}>
            {option}
            {modal.isOpen && <AddToPlaylist onClose={() => setModal({ isOpen: false })} />}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};