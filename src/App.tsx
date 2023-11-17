import { ThemeProvider } from "styled-components"
import Header from "./Components/Layout/Header"
import { GlobalStyled } from "./GlobalStyled"
import Footer from "./Components/Layout/Footer"


const theme = {
  colors: {
    body: "#ffffff",
    text: "#ffffff",
    header: "#0eb91c",
    black: "#000"
  }
}

function App() {
  

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyled />
        <Header />
        <Footer />
    </ThemeProvider>
  )
}

export default App
