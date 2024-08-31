import ServerBar from '../components/ServerBar'
import ServerInfoBar from '../components/ServerInfoBar'
import '../styles/MainPage.css'
import ContentRoutes from '../components/ContentRoutes'

function MainPage() {
  return (
    <div className='MainPageWrapper'>
        <ServerBar/>
        <ServerInfoBar/>
        <ContentRoutes/>
    </div>
  )
}

export default MainPage
