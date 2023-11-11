import styled from "styled-components";
import { Container } from "./Container_styled";
import Table from "../Datadisplay/Table";
import bgImg from "../../assets/imagem-de-fundo.jpg";

const FooterStyled = styled.footer`
  background-image: url(${bgImg});
`
const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
`


function Footer() {
  return (
    <FooterStyled>
      <Container>
        <ContainerFooter>
          <Table />
        </ContainerFooter>
      </Container>
    </FooterStyled>
  );
}

export default Footer;