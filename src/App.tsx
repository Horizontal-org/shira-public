import { FunctionComponent, useEffect } from "react";
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { MainLayout } from "./components/Layouts/MainLayout";
import { ToastProvider } from "./hooks/useToast";
import theme from "./utils/theme";
import './language/i18n'
import { CleanInsights } from "clean-insights-sdk";
import { useStore } from "./store";

interface Props {}

const conf = {
  "server": "https://analytics.wearehorizontal.org/ci/cleaninsights.php",
  "siteId": 5,
  "timeout": 5,
  "persistEveryNTimes": 1, // Always persist. Local storage should be fast enough to do that.
  "debug": true,
  "campaigns": {
      "test": {
          "start": "2023-01-01T00:00:00-00:00",
          "end": "2023-12-31T23:59:59-00:00",
          "aggregationPeriodLength": 1,
          "numberOfPeriods": 90,
          "onlyRecordOnce": false,
          "eventAggregationRule": "avg",
          "strengthenAnonymity": false
      }
  }
}

const App: FunctionComponent<Props> = () => {
  const setCi = useStore((state) => state.setCi)

  useEffect(() => {
    const ci = new CleanInsights(conf)
    setCi(ci)
  }, [])

  return (
    <Wrapper>
      <ToastProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>          
              <Route path="/" element={<MainLayout />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ToastProvider>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  height: 100vh;
`

export default App 
