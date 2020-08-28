import React from 'react';
import UserHead from './UserHead';
// import Card from '../Cards/Card';

import '../../assets/styles/components/ViewUser.scss';

const ViewUser = () => {
  return (
    <section>
      <UserHead
        caratula='https://junglamoderna.com/wp-content/uploads/2019/02/esta-persona-no-exist-297x300.jpg'
        type='Usuario'
        nameUser='Pedro Ramirez'
        numberPlaylist='16 playlist'
      />
    </section>
  );
};

export default ViewUser;