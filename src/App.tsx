import MainPage from './pages/MainPage'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {

  return (
    <> 
       <Router basename={process.env.NODE_ENV === 'production' ? '/devsoc_application_site/' : '/'}>
        <MainPage/>
      </Router>
    </>
  )
}

export default App
