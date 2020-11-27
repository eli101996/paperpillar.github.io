import React from 'react';
import styled from 'styled-components'
//componentes
import Loading from './Loading'
import GridIcon from './GridIcon'
import ListHorizontalCard from './ListHorizontalCard'
import Footer from './Footer'

const HomeStyled = styled.div`
  ${'' /* background:blue; */}
`

function Home() {
  return (
    <HomeStyled>
      <div>
        <div className='mb-5'>
          <Loading />
        </div>
        <div className='mb-5 mx-auto'>
          <GridIcon />
        </div>
        <div className='mx-auto'>
          <ListHorizontalCard />
        </div>
        <div className='mx-auto'>
          <Footer />
        </div>
      </div>
    </HomeStyled>
  );
}


export default Home;