import React from 'react';
import { MDBBtn, MDBIcon } from 'mdbreact'
import styled from 'styled-components'

const IconStyled = styled.div`
  text-align: center;
.cardd{
    width:200px;
}
.boton{
    width:50px;
    height:50px;
    border-radius: 100%;
    font-size:24px;
}
`


function Icon({title, icon, texto, color}) {
    return (
        <IconStyled>
            <div className='cardd mx-auto'>
                <MDBBtn tag='a' gradient={color} className='boton  mx-auto'>
                    <MDBIcon icon={icon} />
                </MDBBtn>
                <h3>{title}</h3>
                <p>{texto}</p>
            </div>
        </IconStyled>
    );
}


export default Icon;