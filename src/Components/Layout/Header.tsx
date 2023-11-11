import styled from "styled-components";
import neymar from "../../assets/neymar.jpg";
import Menu from "./Menu";
import { Container } from "./Container_styled";


const Hero = styled.header`
  background-color: ${ ( { theme } ) => theme.colors.header};
`

const Title = styled.h1`
  font-size: large;
  color: ${ ( { theme } ) => theme.colors.text };
  font-weight: 700;
  padding: 15px 0px;
`
const ContainerHero = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`

const ImgPhoto = styled.img`
  height: 100%;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`


function Header() {
  return (
    <>
      <Hero>
        <Container>
          <ContainerHero>
            <ImgPhoto src={neymar}></ImgPhoto>
            <Title>neymar.jr</Title>
            <Menu />
          </ContainerHero>
        </Container>
      </Hero>
   </>
  );
}

export default Header;