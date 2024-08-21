import ServerBar from '../components/ServerBar'
import ServerInfoBar from '../components/ServerInfoBar'
import '../styles/MainPage.css'

function MainPage() {
  return (
    <div className='MainPageWrapper'>
        <ServerBar/>
        <ServerInfoBar/>
    </div>
  )
}

export default MainPage
