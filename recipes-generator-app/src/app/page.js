'use client'
import { useRouter } from 'next/router';

import RecipesList from './components/RecipesList';
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

  const recipes = DUMMY_RECIPES;
  
  const router = useRouter();
  const loginHandler = () => {
    // Programmatically navigate to authorized view
    router.push('/create-recipe');
  };

  return (
    <div>
      <Hdr>
        <button onClick={loginHandler}>login/signup</button>
      </Hdr>
      <RecipesList items={recipes}/>
    </div>
  );
}

export default Home;