import React, { FC } from 'react';
import UserList from '../../entities/user/ui/UserList';

interface IUserPageProps {

};

const UsersPage:FC<IUserPageProps> = ({}) => {
  return (
    <UserList />
  )
};

export default UsersPage;