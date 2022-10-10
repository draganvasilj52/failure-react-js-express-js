import Routes from './routes/index'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/Global'
import Header from './containers/Header'

const theme = {
  colors: {
    header: '#2cb1bc',
  },
  mobile: '700px',
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Routes />
    </ThemeProvider>
  )
}

export default App
