import React from 'react';
import PetPage from './PetPage'

function Home({ user }) {
    if (user) {
      
        return (
          <>
          <div className= "content">
            <h4>Karibu, { user.username }!</h4>
            <PetPage />
            </div>      
          </>
        )
        
      } else {
        return <h2>Please log in to continue...</h2>;
      }
    }

export default Home;