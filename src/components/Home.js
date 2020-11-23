import React from 'react';

//componentes
import Loading from './Loading'
import GridIcon from './GridIcon'
import ListHorizontalCard from './ListHorizontalCard'
import Footer from './Footer'


function Home() {
    return (
        <div>
          <div className='mb-5'>
            <Loading/>
          </div>
          <div className='mb-5 mx-auto'>
            <GridIcon/>
          </div>
          <div className='mx-auto'>
            <ListHorizontalCard/>
          </div>
          <div className='mx-auto'>
            <Footer/>
          </div>
        </div>
    );
  }


  export default Home;