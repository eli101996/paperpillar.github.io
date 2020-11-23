import React from 'react';
import styled from 'styled-components'
import { MDBRow, MDBCol } from 'mdbreact'

//componentes
import Card from './Card'

const ListHorizontalCardStyled = styled.div`
  text-align: center;
`

function ListHorizontalCard() {
    return (
        <ListHorizontalCardStyled>
            <MDBRow>
                <MDBCol md="1" lg="1">
                </MDBCol>
                <MDBCol md="10" lg="10">
                    <MDBRow className='mb-3'>
                        <MDBCol md="3" lg="3">
                            <Card 
                                title={'Patricia'}
                                img={'1.jpeg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <Card 
                                title={'Laura'}
                                img={'2.jpeg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <Card 
                                title={'Angela'}
                                img={'3.jpg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <Card 
                                title={'Karen'}
                                img={'4.jpeg'}
                                texto={'Lorem ipsum addsf sahsajjd xsHjsakdkcka'}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol md="1" lg="1">
                </MDBCol>
            </MDBRow>
        </ListHorizontalCardStyled>
    );
}


export default ListHorizontalCard;