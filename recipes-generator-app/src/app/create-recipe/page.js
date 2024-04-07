'use client'
import { useState } from 'react';
import Link from "next/link";

import RecipesList from './components/RecipesList';
import AddRecipe from './components/AddRecipe';
import Hdr from './components/Hdr';

const Home = () => {

  const DUMMY_RECIPES = [
    {
      id: 'r1',
      title: 'Beef Ragu',
      img: 'https://LINK',
    },
    {
      id: 'r2',
      title: 'Creme Brulee',
      img: 'https://LINK',
    },
    {
      id: 'r3',
      title: 'Butter Chicken',
      img: 'https://LINK',
    },
    {
      id: 'r4',
      title: 'Tofu Fried Rice',
      img: 'https://LINK',
    },
    {
      id: 'r5',
      title: 'Kung Pao Chicken',
      img: 'https://LINK',
    },
    {
      id: 'r6',
      title: 'Chicken Biryani',
      img: 'https://LINK',
    }
  ];

  const [showAddUser, setShowAddUser] = useState(false);

  const toggleAddUserVisibility = () => {
    setShowAddUser((prevShowAddUser) => !prevShowAddUser);
  };

  const [users, setUsers] = useState(DUMMY_RECIPES);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <Hdr onAddUserClicked={toggleAddUserVisibility}/>
      {showAddUser && <AddUser onAddUser={addUserHandler}/>}
      <UsersList items={users}/>
    </div>
  );
}

export default Home;