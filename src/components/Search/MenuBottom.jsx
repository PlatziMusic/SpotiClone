import React from 'react';
import {Link} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import '../../assets/styles/components/MenuBottom.scss';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label='Inicio'
        icon={<HomeIcon />}
        component={Link}
        to='/'
      />
      <BottomNavigationAction
        label='Buscar'
        icon={<SearchIcon />}
        component={Link}
        to='/search'
      />
      <BottomNavigationAction
        label='Tu biblioteca'
        icon={<QueueMusicIcon />}
        component={Link}
        to='/user'
      />
    </BottomNavigation>
  );
}
