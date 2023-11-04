import { ThemeProvider } from "styled-components"
import Header from "./Components/Layout/Header"
import { GlobalStyled } from "./GlobalStyled"
import Footer from "./Components/Layout/Footer"
import { Container } from "./Components/Layout/Container_styled"

const Theme = {
  colors: {
    body: "#ffffff",
    text: "#ffffff"
  }
}

function App() {
  

  return (
    <ThemeProvider theme={ Theme }>
      <GlobalStyled />
          <Header />
        <Footer />
    </ThemeProvider>
  )
}

export default App
