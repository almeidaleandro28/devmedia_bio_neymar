import styled from "styled-components";

interface options {
  text: string,
  url: string,
}

const LinkMenu = styled.a`
  color: #ffffff;
`

function Link( op: options ) {
  return (
    <LinkMenu href={op.url}>{op.text}</LinkMenu>
  );
}

export default Link;