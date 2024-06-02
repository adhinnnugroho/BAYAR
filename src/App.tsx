
import './App.css'
import MobileNavigations from './Layouts/_mobile_navigation';
import NavigationBar from './Layouts/_navigation'
import { Helmet } from 'react-helmet-async';

interface AppProps {
  pageTitle?: string;
}

function App({ pageTitle = "Home" }: AppProps) {

  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <NavigationBar />
      <MobileNavigations />
    </>
  )
}

export default App
