import styled from "styled-components";
import { Container } from "./Container_styled";
import Table from "../Datadisplay/Table";

const FooterStyled = styled.footer`
  
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