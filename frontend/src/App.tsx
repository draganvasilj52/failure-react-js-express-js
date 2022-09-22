import Routes from './routes/index'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/Global'
import Header from './containers/Header'
import { useState } from 'react'

const theme = {
  colors: {
    header: 'blue',
  },
  mobile: '700px',
}

const App: React.FC = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header openBurger={openBurger} setOpenBurger={setOpenBurger} />
      {!openBurger && <Routes />}
    </ThemeProvider>
  )
}

export default App
