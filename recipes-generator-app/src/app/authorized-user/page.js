'use client'
import { useRouter } from 'next/router';

import RecipesList from '../components/RecipesList';
import Hdr from '../components/Hdr';

const Home = () => {

  const DUMMY_RECIPES = [
    {
      id: 'r1',
      title: 'Beef Ragu',
      img: '/resources/beef-ragu.jpg',
    },
    {
      id: 'r2',
      title: 'Creme Brulee',
      img: '/resources/creme-brulee.jpg',
    },
    {
      id: 'r3',
      title: 'Butter Chicken',
      img: '/resources/butter-chicken.jpg',
    },
    {
      id: 'r4',
      title: 'Tofu Fried Rice',
      img: '/resources/tofu-fried-rice.jpg',
    },
    {
      id: 'r5',
      title: 'Kung Pao Chicken',
      img: '/resources/kung-pao-chicken.jpg',
    },
    {
      id: 'r6',
      title: 'Chicken Biryani',
      img: '/resources/chicken-biryani.jpg',
    }
  ];

  const recipes = DUMMY_RECIPES;
  
  const router = useRouter();
  const logoutHandler = () => {
    // Programmatically navigate to homepage
    router.push('/');
  };
  const createHandler = () => {
    // Programmatically navigate to homepage
    router.push('/create-recipe');
  };

  return (
    <div>
      <Hdr>
        <button onClick={logoutHandler}>logout</button>
      </Hdr>
      <div className='greeting'>
        <h2>Hello Authorized User!</h2>
        <p>
          Input your ingredients, prep time, servings needed, 
          and let us do the rest! With the power of generative AI, 
          we promise to minimize food waste and feed your family.
        </p>
      </div>
      <RecipesList items={recipes}/>
      <button className='footer-button' onClick={createHandler}>Create something new</button>
    </div>
  );
}

export default Home;