import { FunctionComponent } from "react";
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { MainLayout } from "./components/Layouts/MainLayout";
import theme from "./utils/theme";

interface Props {}

const App: FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>          
            <Route path="/" element={<MainLayout />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  height: 100vh;
`

export default App 
