import React from 'react';
import styled from 'styled-components'
import { MDBRow, MDBCol, MDBCard } from 'mdbreact'

const CardStyled = styled.div`
  text-align: center;
  .efecto{
    position: relative;
    overflow: hidden;
  }
  .detalles{
    padding-top:5px;
    position: absolute;
    bottom: -18%;
    transition: 0.5s;
    width:100%
  }
  .img{
    position: relative;
    width:100%;
    height: 400px;
    transition: 3s;
  }
  .img:hover{
    transform: scale(1.5);
  }
  .img:hover ~ .detalles{
    bottom: 0px;
  }
  :hover.detalles{
    bottom: 0px;
}
`
function Card({ title, img, texto }) {
    return (
        <CardStyled>
            <div className='m-2'>
                <MDBRow>
                    <MDBCol md="12" lg="12">
                        <MDBCard news className="my-3 efecto">
                                <img className='img'
                                    src={img}
                                    alt="Publicacion"
                                />
                                <MDBCard className='detalles'>
                                    <div className="social-meta">
                                        <p>{title}</p>
                                        <p>{texto}</p>
                                    </div>
                                </MDBCard>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

            </div>
        </CardStyled>
    );
}


export default Card;