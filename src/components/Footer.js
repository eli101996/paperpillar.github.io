import React from 'react';
import styled from 'styled-components'

const FooterStyled = styled.div`
text-align: center;
.contenedor{
    position:absolute;
    width: 100%;
    height: 80%;
    margin-top:-7%;
}
img{
    position: absolute;
    text-align: center;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  .circle{
      width:100%;
      ${'' /* height:300px; */}
    ${'' /* border-radius:0 40px 0 0; */}
    ${'' /* background-color: #0000FF; */}
    position: absolute;
    bottom:45%;
    color:#FFF;
    z-index: -1;
  }
  .circle:before{
      width:100%;
      height:700px !important;
      ${'' /* border-radius:0 0 50% 50%; */}
      border-bottom-left-radius: 80%;
      border-bottom-right-radius: 80%;
      background-color:white;
      display:inline-block;
      vertical-align: middle;
      ${'' /* margin:10px; */}
      content:'';
  }
  h1{
      ${'' /* position: absolute; */}
      margin-top:22% !important;
      ${'' /* bottom:200px; */}
      text-align: center;
      font-size:20px !important;
      color:white;
  }
  .outline{
      color:white;
      background:rgb(236, 56, 191);
      border:none;
      -webkit-border-radius:28;
      -moz-border-radius:28;
      border-radius:28px;
      padding: 10px 32px;
      text-align: center;
      display:inline-block;
      font-size:24px;
      ${'' /* position: absolute; */}
      ${'' /* bottom:125px; */}
      margin-top:3vw;
  }
  .outline:hover{
      background: white;
      color: rgb(236, 56, 191);
  }
  @media screen and (max-width:1700px){
    h1{
      margin-top:24%;
      font-size:45px;
  }
}
  @media screen and (max-width:1600px){
    h1{
      margin-top:25%;
      font-size:45px;
  }
}
  @media screen and (max-width:1500px){
    h1{
      margin-top:28%;
      font-size:45px;
  }
}
  @media screen and (max-width:1400px){
    h1{
      margin-top:30%;
      font-size:45px;
  }
}
  @media screen and (max-width:1300px){
    h1{
      margin-top:34%;
      font-size:45px;
  }
}
  @media screen and (max-width:1200px){
    h1{
      margin-top:37%;
      font-size:45px;
  }
}
  @media screen and (max-width:1100px){
    h1{
      margin-top:40%;
      font-size:45px;
  }
}
  @media screen and (max-width:1000px){
    h1{
      margin-top:45%;
      font-size:45px;
  }
}
  @media screen and (max-width:900px){
    h1{
      margin-top:50%;
      font-size:45px;
  }
}
  @media screen and (max-width:800px){
    h1{
      margin-top:60%;
      font-size:40px;
  }
}
@media screen and (max-width:700px){
    h1{
      margin-top:65%;
      font-size:35px;
  }
}
@media screen and (max-width:600px){
    h1{
      margin-top:68%;
      font-size:30px;
  }
}
@media screen and (max-width:500px){
    h1{
      margin-top:78%;
      font-size:25px;
  }
}
`

function Footer() {
    return (
        <FooterStyled>
            <div className='contenedor'>
            <div className='circle'></div>
            <img src="fondo3.jpg" alt='img' />
            <h1>Interested to work with us?</h1>
            <button color="info" className='outline'>Contactanos</button>
            </div>
        </FooterStyled>
    );
}


export default Footer;