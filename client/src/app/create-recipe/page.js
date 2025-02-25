'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

import AddRecipe from '../components/AddRecipe';
import '../css/App.css';

const Home = () => {

    const router = useRouter();
    const cancelHandler = () => {
        // Programmatically navigate to authorized view
        router.push('/authorized-user');
    };
    
    return (
        <div>
        <AddRecipe>
            <button id='cancel' onClick={cancelHandler}>Cancel</button>
        </AddRecipe>
        </div>
    );
}

export default Home;