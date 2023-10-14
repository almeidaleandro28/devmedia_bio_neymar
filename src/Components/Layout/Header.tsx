import styled from "styled-components";
import neymar from "../../assets/neymar.jpg";

const Title = styled.h1`
  color: red;
`

const ContainerPhoto = styled.div`
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  border: 1px solid #000000;
  border-radius: 50%;
`

const ImgPhoto = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`

function Header() {
  return (
    <>
      <ContainerPhoto>
        <ImgPhoto src={neymar} alt="brazilian national team football player neymar"/>
      </ContainerPhoto>
      <Title>Neymar Jr</Title>
   </>
  );
}

export default Header;