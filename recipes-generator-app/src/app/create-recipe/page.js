'use client'
import { useRouter } from 'next/router';

import AddRecipe from './components/AddRecipe';

const Home = () => {

    const router = useRouter();
    const cancelHandler = () => {
        // Programmatically navigate to authorized view
        router.push('/authorized-user');
    };
    
    return (
        <div>
        <AddRecipe>
            <button onClick={cancelHandler}>Cancel</button>
        </AddRecipe>
        </div>
    );
}

export default Home;