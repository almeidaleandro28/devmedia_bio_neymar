import styled from "styled-components";
import Link from "./Link";

const Nav = styled.nav`
  background-color: #808080;
  display: flex;
  flex-direction: column;
  
`


function Menu() {
  return (
    <Nav>
      <Link text="
        follow the channel on youtube" 
        url="https://www.youtube.com/" />
      <Link text="
        follow the channel on instagram" 
        url="https://www.instagram.com/" />
      <Link text="
        follow the channel on twitter" 
        url="https://twitter.com/" />
      <Link text="
        follow the channel on facebook" 
        url="https://pt-br.facebook.com/" />
      <Link text="
        follow the channel on twitch" 
        url="https://www.twitch.tv/" />
    </Nav>
  );
}

export default Menu;