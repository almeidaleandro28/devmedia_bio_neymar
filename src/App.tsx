import { ThemeProvider } from "styled-components"
import Header from "./Components/Layout/Header"
import { GlobalStyled } from "./GlobalStyled"

const Theme = {
  colors: {
    body: "#0000ff"
  }
}

function App() {
  

  return (
    <ThemeProvider theme={ Theme }>
      <GlobalStyled />
        <Header />
    </ThemeProvider>
  )
}

export default App
